import { AwsEip } from '../../types/generated'
import t from '../../properties/translations'
import { formatTagsFromMap } from '../../utils/format'
import { RawAwsEip } from './data'

/**
 * EIP
 */

export default ({
  service: rawData,
  account,
  region,
}: {
  service: RawAwsEip
  account: string
  region: string
}): AwsEip => {
  const {
    AllocationId: id,
    AssociationId: ec2InstanceAssociationId,
    CustomerOwnedIp: customerOwnedIp,
    CustomerOwnedIpv4Pool: customerOwnedIpv4Pool,
    Domain: domain,
    InstanceId: instanceId,
    NetworkBorderGroup: networkBorderGroup,
    NetworkInterfaceId: networkInterface,
    NetworkInterfaceOwnerId: networkInterfaceOwnerId,
    PrivateIpAddress: privateIp,
    PublicIp: publicIp,
    PublicIpv4Pool: publicIpv4Pool,
    Tags: tags = {},
  } = rawData

  // Format Tags
  const eipTags = formatTagsFromMap(tags)

  const eip = {
    id,
    arn: `arn:aws:ec2:${region}:${account}:eip-allocation/${id}`,
    vpc: domain === 'vpc' ? t.yes : t.no,
    customerOwnedIp,
    customerOwnedIpv4Pool,
    domain,
    ec2InstanceAssociationId,
    instanceId,
    networkBorderGroup,
    networkInterface,
    networkInterfaceOwnerId,
    privateIp,
    publicIp,
    publicIpv4Pool,
    tags: eipTags,
  }
  return eip
}
