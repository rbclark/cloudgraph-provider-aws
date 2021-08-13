import CloudGraph from '@cloudgraph/sdk'
import NetworkInterfaceService from '../src/services/networkInterface'
import { account, credentials, region } from '../src/properties/test'
import { initTestConfig } from '../src/utils'

initTestConfig()

let networkInterfaceGetDataResult
let formatResult

describe('Network Interface Service Test: ', () => {
  beforeAll(async () => {
    networkInterfaceGetDataResult = {}
    formatResult = {}
    try {
      const config = { logger: CloudGraph.logger }

      const classInstance = new NetworkInterfaceService(config)

      networkInterfaceGetDataResult = await classInstance.getData({
        credentials,
        regions: region,
      })

      formatResult = networkInterfaceGetDataResult[region].map(ebsData =>
        classInstance.format({ service: ebsData, region, account })
      )
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
    }
    return Promise.resolve()
  })

  it('should return a truthy value ', () => {
    expect(networkInterfaceGetDataResult).toBeTruthy()
  })

  it('getData: should return data from a region in the correct format', async () => {
    expect(networkInterfaceGetDataResult[region]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          Description: expect.any(String),
          MacAddress: expect.any(String),
          NetworkInterfaceId: expect.any(String),
          OwnerId: expect.any(String),
          PrivateDnsName: expect.any(String),
          PrivateIpAddress: expect.any(String),
          AvailabilityZone: expect.any(String),
          VpcId: expect.any(String),
          SubnetId: expect.any(String),
          Status: expect.any(String),
          Association: {
            IpOwnerId: expect.any(String),
            PublicDnsName: expect.any(String),
            PublicIp: expect.any(String),
          },
          Attachment: expect.objectContaining({
            DeviceIndex: expect.any(Number),
            InstanceOwnerId: expect.any(String),
            InstanceId: expect.any(String),
            Status: expect.any(String),
            AttachmentId: expect.any(String),
            DeleteOnTermination: expect.any(Boolean),
            AttachTime: expect.any(Date),
          }),
          Groups: expect.arrayContaining([
            expect.objectContaining({
              GroupName: expect.any(String),
              GroupId: expect.any(String),
            }),
          ]),
          RequesterManaged: expect.any(Boolean),
          SourceDestCheck: expect.any(Boolean),
          PrivateIpAddresses: expect.arrayContaining([
            expect.objectContaining({
              Primary: expect.any(Boolean),
              PrivateDnsName: expect.any(String),
              PrivateIpAddress: expect.any(String),
            }),
          ]),
          region: expect.any(String),
        }),
      ])
    )
  })

  it('format: should return data in the correct format matching the schema type', () => {
    expect(formatResult).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          arn: expect.any(String),
          subnetId: expect.any(String),
          macAddress: expect.any(String),
          description: expect.any(String),
          availabilityZone: expect.any(String),
          status: expect.any(String),
          vpcId: expect.any(String),
          interfaceType: expect.any(String),
          privateDnsName: expect.any(String),
          attachment: expect.objectContaining({
            id: expect.any(String),
            status: expect.any(String),
            deleteOnTermination: expect.any(Boolean),
          }),
          privateIps: expect.arrayContaining<string>([]),
          securityGroups: expect.arrayContaining<string>([]),
        }),
      ])
    )
  })
})
