import { Config } from 'aws-sdk'
import ECS, {
  ContainerInstance,
} from 'aws-sdk/clients/ecs'
import CloudGraph from '@cloudgraph/sdk'
import flatMap from 'lodash/flatMap'
import groupBy from 'lodash/groupBy'
import isEmpty from 'lodash/isEmpty'
import awsLoggerText from '../../properties/logger'
import { AwsTag, TagMap } from '../../types'
import { convertAwsTagsToTagMap } from '../../utils/format'
import { initTestEndpoint, generateAwsErrorLog } from '../../utils'
import EcsClusterClass from '../ecsCluster'
import { RawAwsEcsCluster } from '../ecsCluster/data'

const lt = { ...awsLoggerText }
const { logger } = CloudGraph
const serviceName = 'ECS container'
const endpoint = initTestEndpoint(serviceName)

export interface RawAwsEcsContainer extends ContainerInstance {
  region: string
  Tags?: TagMap
}

export default async ({
  regions,
  config,
}: {
  regions: string
  config: Config
}): Promise<{
  [region: string]: RawAwsEcsContainer[]
}> =>
  new Promise(async resolve => {
    const ecsContainers: RawAwsEcsContainer[] = []
    const ecsClusterClass = new EcsClusterClass({ logger: CloudGraph.logger })
    const clusterResult = await ecsClusterClass.getData({
      ...config,
      regions,
    })
    const ecsClusters: RawAwsEcsCluster[] = flatMap(clusterResult)
    /**
     * Get the instance arns of all the containers in each cluster
     */
    let containerInstanceArns: any = await Promise.all(
      ecsClusters.map(
        async ({ clusterName: cluster, region }) =>
          new Promise(resolveEcsData =>
            new ECS({ ...config, region, endpoint }).listContainerInstances(
              { cluster },
              (err, data) => {
                if (err) {
                  generateAwsErrorLog(serviceName, 'ecs:listContainerInstances', err)
                }

                if (isEmpty(data)) {
                  return resolveEcsData([])
                }

                const { containerInstanceArns: containerInstances = [] } = data

                resolveEcsData({region, containerInstances})
              }
            )
          )
      )
    )
    /**
     * Get all of the containers for each instance arn
     */
    const ecsContainerPromises = containerInstanceArns.map(
      async ({region, containerInstances}) =>
        new Promise<void>(resolveEcsData => {
          new ECS({ ...config, region, endpoint }).describeContainerInstances(
            { containerInstances },
            (err, data) => {
              if (err) {
                generateAwsErrorLog(serviceName, 'ecs:describeContainerInstances', err)
              }

              if (isEmpty(data)) {
                return resolveEcsData()
              }

              const { containerInstances = [] } = data

              logger.debug(lt.fetchedEcsContainers(containerInstances.length))

              ecsContainers.push(...ecsContainers.map(container => ({
                region,
                ...container,
                Tags: convertAwsTagsToTagMap(container.tags as AwsTag[]),
              })))

              resolveEcsData()
            }
          )  
        })
      )

    await Promise.all(ecsContainerPromises)

    resolve(groupBy(ecsContainers, 'region'))
  })
