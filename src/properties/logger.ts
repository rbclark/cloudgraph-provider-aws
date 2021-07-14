export const awsLoggerText = {
  platform: 'Platform: AWS',
  requestingAccountData: 'Getting AWS Account Data',
  requestingAccountDataError:
    '❌ ERROR: There was an error getting the AWS account data using these credentials ❌ ',
  foundRoleArn: 'Found AWS Role ARN and external ID - authenticating via STS',
  foundSecurityViolation: (name, type) =>
    `💀 Found a security violation for ${type}: ${name} 💀`,
  startGeneration: 'Generating VSD data for AWS account...',
  regionNotFound: (name: string): string =>
    `❌ The region ${name} was not found in the list of supported AWS regions ❌`,
  globalAwsRegion: 'Found Global AWS region, adding global resources',
  /**
   * IAM
   */
  fetchingIamData: 'Fetching IAM data for this AWS account via the AWS SDK...',
  doneFetchingIamData: '✅ Done fetching IAM Data ✅',
  fetchedIamUsers: (num: number) => `Fetched ${num} IAM users`,
  lookingForIam: 'Looking for IAM resources to add',
  addingIam: 'Adding IAM resources',
  lookingForIamUsers: 'Looking for IAM Users to add',
  foundUsers: (num: number): string => `Found ${num} Users to add`,
  lookingForIamRoles: 'Looking for IAM Roles to add',
  foundRoles: (num: number): string => `Found ${num} Roles to add`,
  lookingForIamGroups: 'Looking for IAM Groups to add',
  foundGroups: (num: number): string => `Found ${num} Groups to add`,
  lookingForIamPolicies: 'Looking for IAM Policies to add',
  foundPolicies: (num: number): string => `Found ${num} Policies to add`,
  /**
   * CloudFormation
   */
  fetchingCloudFormationData:
    'Fetching CloudFormation data for this AWS account via the AWS SDK...',
  doneFetchingCloudFormationData: '✅ Done fetching CloudFormation Data ✅',
  lookingForCfStacks: 'Looking for Cloudformation Stacks to add to Region...',
  fetchedCfStacks: (num: number) => `Fetched ${num} CF Stacks`,
  addingCfStacks: (num: number) =>
    `Created and added ${num} CloudFomation stacks to this region`,
  /**
   * CloudFront
   */
  lookingForCloudFront: 'Looking for CloudFront Distros to add to account...',
  addingCloudFront: (num: number) =>
    `Created and added ${num} CloudFront Distros to this account`,
  /**
   * Route53
   */
  fetchedRoute53Zones: (num: number) => `Fetched ${num} Route53 Hosted Zones`,
  fetchedRoute53ZonesRecords: (num: number, zoneId: string) =>
    `Fetched ${num} Route53 Hosted Zone records for ${zoneId}`,
  lookingForRoute53: 'Looking for Route53 Hosted Zones to add to account...',
  addingRoute53: (num: number) =>
    `Created and added ${num} Route53 Hosted Zones to this account`,
  doneFetchingRoute53Data: '✅ Done fetching Route53 Data ✅',
  /**
   * CloudWatch
   */
  lookingForCloudwatch: 'Looking for CloudWatch Alarms to add to Region...',
  addingCloudwatch: (num: number) =>
    `Created and added ${num} CloudWatch Alarms to this region`,
  addingCloudwatchMetricsToElement: (num: number, namespace: string) =>
    `Found ${num} Cloudwatch Metric Alarms to add for ${namespace}`,
  /**
   * Kinesis Data Streams
   */
  lookingForKinesisDataStreams:
    'Looking for Kinesis Data Streams to add to Region...',
  addingKinesisDataStreams: (num: number) =>
    `Created and added ${num} Kinesis Data Streams to this region`,
  /**
   * Kinesis Data Firehose
   */
  lookingForKinesisDataFirehose:
    'Looking for Kinesis Data Firehose to add to Region...',
  addingKinesisDataFirehose: (num: number) =>
    `Created and added ${num} Kinesis Data Firehose to this region`,
  /**
   * Iot Thing
   */
  lookingForIotThing: 'Looking for IoT Things to add to Region...',
  addingIotThing: (num: number) =>
    `Created and added ${num} IoT Things to this region`,
  /**
   * Api Gateway
   */
  lookingForApiGateway: 'Looking for Api Gateways to add to Region...',
  addingApiGateway: (num: number) =>
    `Created and added ${num} Api Gateways to this region`,
  fetchedApiGwDomainNames: (num: number) =>
    `Fetched ${num} API Gateway Domain Names`,
  fetchingApiGatewayData:
    'Fetching API Gateway data for this AWS account via the AWS SDK...',
  doneFetchingApiGatewayData: '✅ Done fetching API Gateway Data ✅',
  /**
   * Vpc
   */
  fetchingVpcData: 'Fetching VPC data for this AWS account via the AWS SDK...',
  doneFetchingVpcData: '✅ Done fetching VPC Data ✅',
  fetchedVpcs: (num: number) => `Fetched ${num} Vpcs`,
  lookingForVpc: 'Looking for VPC data to add',
  foundVpcs: (num: number) => `Found ${num} VPCs to add to this region's data`,
  beginVpc: '✅ Begin Vpc Formatting ✅',
  foundAdditionalVpcData: (found: Boolean) =>
    found
      ? 'Found supplemental VPC data to add'
      : '❌ ERROR - Missing supplemental VPC data ❌',
  foundRouteTables: (num: number) => `Found ${num} Route Tables to add to VPC`,
  foundNacls: (num: number) => `Found ${num} NACLs to add to VPC`,
  foundSecurityGroups: (num: number) =>
    `Found ${num} Security Groups to add to VPC`,
  foundIgw: (num: number) => `Found ${num} Internet Gateway to add to VPC`,
  foundVpcLambdas: (num: number) => `Found ${num} Lambdas to add to VPC`,
  gatheringRouteTableAssociations: 'Gathering route table associations',
  gatheringSubnets: 'Gathering subnets to add to VPC',
  creatingVpc: 'Creating VPC Element',
  addingVpc: 'Adding VPC Element to the region',
  lookingforSubnets: 'Looking for Subnets to add to VPC',
  foundSubnets: (num: number) => `Found ${num} Subnets to add to this Vpc`,
  foundAdditionalSubnetData: (found: Boolean) =>
    found
      ? 'Found supplemental Subnet data to add'
      : '❌ ERROR - Missing supplemental Subnet data ❌',
  creatingSubnet: 'Creating Subnet',
  addingSubnet: 'Adding Subnet -> NACL -> AZ',
  addingRouteTablesToSubnet: (num, name) =>
    `Adding ${num} Route Tables to subnet ${name}`,
  /**
   * Lambda
   */
  lookingForVpcLambdas:
    'Looking for Lambdas with VPC networking to add to the VPC',
  lookingForLambda: 'Looking for non-vpc Lambdas to add to region',
  lambdasCreated: (num: number) =>
    `Found and created ${num} Lambdas for this region`,
  addingLambdas: 'Adding lambdas to region',
  /**
   * ALBs
   */
  fetchedAlbs: (num: number) => `Fetched ${num} Application Load Balancers`,
  lookingForAlbs: 'Looking ALBs to add to VPC...',
  lookingForAlb: 'Looking for Albs...',
  doneFetchingAlbData: '✅ Done fetching ALB Data ✅',
  albsCreated: (num: number) => `Found and created ${num} ALBs`,
  fetchedAlbTags: (num: number, albArn: string) =>
    `Fetched ${num} Tags for ${albArn}`,
  fetchedAlbAttributes: (num: number, albArn: string) =>
    `Fetched ${num} Attributes for ${albArn}`,
  fetchedAlbListeners: (num: number, albArn: string) =>
    `Fetched ${num} ALB Listeners for ${albArn}`,
  fetchedAlbTargetGroups: (num: number, albArn: string) =>
    `Fetched ${num} ALB Target Groups for ${albArn}`,
  fetchedAlbTargetIds: (num: number, albArn: string) =>
    `Fetched ${num} ALB Target Ids for ${albArn}`,
  /**
   * EIPs (not attached to instances)
   */
  lookingForEips: 'Looking EIPs that are not attached to instances',
  fetchedEips: (num: number) => `Fetched ${num} EIPs`,
  eipsCreated: (num: number) => `Found and created ${num} EIPs`,
  fetchingEip: 'Fetching EIP data for this AWS account via the AWS SDK...',
  doneFetchingEipData: '✅ Done fetching EIP Data ✅',
  /**
   * Organization
   */
  orgFound: '✅ Terraformer org data found, adding data org ✅',
  noOrgFound:
    '❎ No org found or multiple orgs found which we currently do not support. Adding data to bare bones org ❎',
  /**
   * ASG
   */
  fetchingAsgData: 'Fetching ASG data for this AWS account via the AWS SDK...',
  doneFetchingAsgData: '✅ Done fetching ASG Data ✅',
  fetchedAsgs: (num: number) => `Fetched ${num} AutoScaling Groups`,
  addingAsgs: (num: number) =>
    `Found ${num} AutoScaling Groups, adding them to the VPC`,
  lookingForAsgs: 'Looking for AutoScaling Groups to add...',
  /**
   * EBS
   */
  fetchingEbsData: 'Fetching EBS data for this AWS account via the AWS SDK...',
  doneFetchingEbsData: '✅ Done fetching EBS Data ✅',
  fetchedEbsVolumes: (num: number) => `Fetched ${num} EBS Volumes`,
  lookingForEbs: 'Looking for EBS volumes for EC2 instances...',
  /**
   * EC2
   */
  lookingforEc2: 'Looking for EC2 instances to add...',
  fetchedEc2Instances: (num: number) => `Fetched ${num} EC2 Instances`,
  fetchedEc2InstanceTags: (num: number) =>
    `Fetched ${num} Tags for EC2 Instances`,
  creatingEc2Instance: (num: number) => `Creating EC2 Instance #${num}`,
  addingEc2Instances: (num: number) =>
    `Found ${num} EC2 Instances, adding them to the Subnet`,
  lookingForNetworkInterfaces:
    'Gathering Network Interfaces to add to EC2 Instance...',
  fetchedKeyPairs: (num: number) => `Fetched ${num} Key Pairs for instances`,
  doneFetchingEc2Data: '✅ Done fetching EC2 Instance Data ✅',
  /**
   * RDS
   */
  fetchingRdsData: 'Fetching RDS data for this AWS account via the AWS SDK...',
  doneFetchingRdsData: '✅ Done fetching RDS Data ✅',
  lookingforRdsInstances: 'Looking for RDS Instances...',
  lookingforRdsClusters: 'Looking for RDS Clusters...',
  creatingRdsInstance: (num: number) => `Creating RDS Instance #${num}`,
  fetchedRdsClusters: (num: number) => `Fetched ${num} Rds Clusters`,
  fetchedRdsInstances: (num: number) => `Fetched ${num} Rds Db Instances`,
  noClusterFound: '❎ DB Instance is not part of a cluster ❎ ',
  foundCluster: 'Found the cluster the instance belongs to',
  addingRdsInstances: (num: number) =>
    `Found ${num} RDS Instances, adding them to the Subnet`,
  addingRdsClusters: (num: number) =>
    `Found ${num} RDS Clusters, adding them to the Vpc`,
  noClusterFoundForDbInstance: ({ name }) =>
    `No cluster found for db_instance: ${name}`,
  /**
   * EMR
   */
  fetchingEmrData:
    'Fetching EMR cluster data for this AWS account via the AWS SDK...',
  lookingForEmr: 'Looking for EMR Clusters to add...',
  addingEmr: (num: number) =>
    `Found ${num} EMR Clusters, adding them to the Region`,
  doneFetchingEmrData: '✅ Done fetching EMR Data ✅',
  fetchedEmrClusters: (num: number) => `Fetched ${num} EMR Clusters`,
  fetchedEmrClusterInstances: (num: number) =>
    `Fetched ${num} EMR Clusters Instances`,
  addingEmrEc2Connection: (clusterName: string, ec2InstanceName: string) =>
    `Found ec2 instance ${ec2InstanceName} to add to emr cluster ${clusterName}`,
  noEmrClusterParentFoundForEc2Instance: ({ name }) =>
    `❌ WARNING: No EMR Cluster found for EC2 Instance ${name} ❌ `,
  /**
   * EFS
   */
  fetchingEfsData: 'Fetching EFS data for this AWS account via the AWS SDK...',
  lookingForEfs: 'Looking for EFS data to add...',
  lookingForEfsMountTargets:
    'Looking for EFS Mount Targets to add to subnet...',
  addingEfs: (num: number) => `Found ${num} EFS, adding them to the VPC`,
  addingEfsMountTargets: (num: number) =>
    `Found ${num} EFS Mount Targets, adding them to the subnet`,
  doneFetchingEfsData: '✅ Done fetching EFS Data ✅',
  fetchedEfs: (num: number) => `Fetched ${num} EFS`,
  fetchedEfsMountTargets: (num: number) => `Fetched ${num} EFS Mount Targets`,
  fetchedEfsMountTargetSecurityGroups: (num: number) =>
    `Fetched ${num} EFS Mount Target Security Groups`,
  noFileSystemFoundForEfsMountPoint: ({ name }) =>
    `❌ WARNING: No EFS found for mount point ${name} ❌ `,
  /**
   * S3
   */
  lookingForS3: 'Looking for S3 Buckets to add',
  lookingForS3SecurityData:
    'Looking for S3 buckets with security violations...',
  foundAnotherThousand: 'Found another thousand objects in the s3 bucket...',
  fetchingS3Data: 'Fetching S3 data for this AWS account via the AWS SDK...',
  doneFetchingS3Data: '✅ Done fetching S3 Data ✅',
  fetchedS3Buckets: (num: number) => `Fetched ${num} S3 Buckets`,
  creatingS3Bucket: (num: number) => `Creating S3 Bucket #${num}`,
  addingS3Buckets: (num: number) =>
    `Found ${num} S3 Buckets, adding them to the Region`,
  /**
   * DynamoDb
   */
  lookingForDynamoDb: 'Looking for DynamoDb Tables to add...',
  addingDynamoDbTables: (num: number) =>
    `Found ${num} Dynamo DB tables, adding them to the Region`,
  /**
   * SNS
   */
  lookingForSns: 'Looking for SNS topics and subscriptions to add...',
  addingSns: (num: number) =>
    `Found ${num} SNS topics, adding them to the Region`,
  /**
   * Secrets Manager
   */
  fetchingSecretsManager:
    'Fetching Secrets Manager data for this AWS account via the AWS SDK...',
  doneFetchingSecretsManager: '✅ Done fetching Secrets Manager data ✅',
  lookingForSecretsManager: 'Looking for Secrets Manager Secrets to add...',
  addingSecretsManager: (num: number) =>
    `Found ${num} Secrets Manager Secrets, adding them to the Region`,
  fetchedSecretsManager: (num: number) =>
    `Fetched ${num} Secrets Manager Secrets`,
  /**
   * SQS
   */
  lookingForSqs: 'Looking for SQS queues to add...',
  addingSqs: (num: number) =>
    `Found ${num} SQS Queues, adding them to the Region`,
  /**
   * SES
   */
  fetchingSesData: 'Fetching SES data for this AWS account via the AWS SDK...',
  doneFetchingSesData: '✅ Done fetching SES Data ✅',
  fetchedSesIdentities: (num: number) => `Fetched ${num} SES Identities`,
  lookingForSes: 'Looking for SES to add...',
  addingSes: (num: number) => `Found ${num} SES, adding them to the Region`,
  /**
   * KMS
   */

  lookingForKms: 'Looking for KMS Keys to add...',
  addingKms: (num: number) =>
    `Found ${num} KMS Keys, adding them to the Region`,
  fetchedKmsKeys: (num: number) => `Fetched ${num} KMS Keys`,
  doneFetchingKmsData: '✅ Done fetching Kms Data ✅',
  hasMoreKmsTags: 'KMS Key has more than 50 tags, some where not fetched...',
  gettingKeyDetails: 'Fetching details for each key...',
  gettingRotationStatus: 'Checking rotation status for each key...',
  gettingPolicies: 'Fetching default Policy for each key...',
  gettingTags: 'Fetching Tags for each key...',

  /**
   * EKS
   */
  lookingForEks: 'Looking for EKS Clusters to add...',
  addingEks: (num: number) =>
    `Found ${num} EKS Clusters, adding them to the VPC`,
  canNotFindClusterForAsg:
    'ERROR: Can not find ECS/EKS cluster for ASG - it should have been added already',
  /**
   * Elastic Beanstalk
   */
  lookingForEb: 'Looking for Elastic Beanstalk Applications to add...',
  envWithNoVpcFound:
    '⚠️  Found an Elastic Beanstalk Environment with no networking configuration but with EC2 Instances that live in this VPC ⚠️',
  addingEb: (num: number) =>
    `Found ${num} Elastic Beanstalk Applications, adding them to the VPC`,
  /**
   * ElastiCache
   */
  lookingForElastiCache: 'Looking for ElastiCache Clusters to add...',
  addingElastiCache: (num: number) =>
    `Found ${num} ElastiCache Clusters, adding them to the VPC`,
  missingReplicationGroup: (is: string) =>
    `Missing replication group for ${is} ElastiCache Cluster! Not adding ElastiCache Data`,
  /**
   * ECR
   */
  lookingForEcr: 'Looking for ECR Repositories to add...',
  addingEcr: (num: number) =>
    `Found ${num} ECR Repositories, adding them to the VPC`,
  /**
   * Transit Gateway
   */
  lookingForTransitGateway: 'Looking for Transit Gateways to add...',
  addingTransitGateways: (num: number) =>
    `Found ${num} Transit Gateways, adding them to the VPC`,
  addingTransitGatewayToVpc: ({ name }) =>
    `Adding Transit Gateway ${name} to the VPC`,
  addingTransitGatewayToRegion: ({ name }) =>
    `Transit Gateway not attached to a VPC, adding Transit Gateway ${name} to the region level`,
  /**
   * VPN Gateway
   */
  lookingForVpnGateway: 'Looking for Vpn Gateways to add...',
  addingVpnGatewayToVpc: (num: number) =>
    `Adding ${num} Vpn Gateways to the VPC`,
  /**
   * Customer Gateway
   */
  lookingForCustomerGateways: 'Looking for Customer Gateways to add...',
  addingCustomerGatewaysToVpc: ({ name }) =>
    `Adding the ${name} Customer Gateways to the VPC`,
  addingCustomerGatewayToRegion: ({ name }) =>
    `Customer Gateway not attached to a VPC, adding Customer Gateway ${name} to the region level`,
  /**
   * Redshift
   */
  lookingForRedshift: 'Looking for Redshift Clusters to add...',
  addingRedshift: (num: number) =>
    `Found ${num} Redshift Clusters, adding them to the Region`,
  doneFetchingRedshiftData: '✅ Done fetching Redshift Cluster Data ✅',
  fetchedRedshiftClusters: (num: number) => `Found ${num} Redshift Clusters`,
  /**
   * ECS
   */
  lookingForEcs: 'Looking for Ecs Clusters to add...',
  addingEcs: (num: number) =>
    `Found ${num} Ecs Clusters, adding them to the Region`,
  doneFetchingEcsData: '✅ Done fetching Ecs Cluster Data ✅',
  fetchedEcsClusters: (num: number) => `Found ${num} Ecs Clusters`,
  fetchedEcsServices: (num: number) => `Found ${num} Ecs Services`,
  fetchedEcsTaskDefinitions: (num: number) =>
    `Found ${num} Ecs Task Definitions`,
  fetchedEcsTasks: (num: number) => `Found ${num} Ecs Tasks`,
  ecsVpcNotFound: 'ERROR: Vpc for ECS Cluster was not found',
  addingEcsClusters: (num: number) =>
    `Found ${num} ECS Clusters, adding them to the the VPC`,
  addingEcsTasksToSubnet: (num: number, subnetId) =>
    `Found ${num} ECS Tasks, adding them to the the ${subnetId} Subnet`,
  /**
   * Cognito
   */
  lookingForCognito: 'Looking for Cognito to add...',
  addingIdentityPools: (num: number) =>
    `Found ${num} Cognito Identity Pools, adding them to the Region`,
  addingUserPools: (num: number) =>
    `Found ${num} Cognito User Pools, adding them to the Region`,
  doneFetchingCognitoData: '✅ Done fetching Cognito Data ✅',
  fetchedCognito: (num: number) => `Found ${num} Cognito User Pools`,
  fetchedCognitoIdentityPools: (num: number) =>
    `Found ${num} Cognito Identity Pools`,
  fetchedCognitoPool: (id: string) =>
    `Fetched Cognito User Pool data for ${id}`,
  fetchedCognitoIdentityPool: (id: string) =>
    `Fetched Cognito Identity Pool data for ${id}`,
  lookingForIdentityPools:
    'Looking for Cognito Identity Pools to add to region',
  lookingForUserPools: 'Looking for Cognito User Pools to add to region',
  /**
   * Client Vpn Endpoints
   */
  fetchingClientVpnEndpointsData:
    'Fetching Client Vpn Endpoints data for this AWS account via the AWS SDK...',
  doneFetchingClientVpnEndpointsData:
    '✅ Done fetching Client Vpn Endpoints Data ✅',
  fetchedClientVpnEndpoints: (num: number) =>
    `Fetched ${num} Client Vpn Endpoints`,
  addingClientVpnEndpoints: (num: number) =>
    `Found ${num} Client Vpc Endpoints adding them to the vpc`,
  /**
   * Vpn Connection
   */
  fetchingVpnConnectionsData:
    'Fetching Vpn Connections data for this AWS account via the AWS SDK...',
  doneFetchingVpnConnectionsData: '✅ Done fetching Vpn Connections Data ✅',
  fetchedVpnConnections: (num: number) => `Fetched ${num} Vpn Connections`,
  addingVpnConnections: (num: number) =>
    `Found ${num} Client Vpn Endpoints adding them to the region`,
  lookingForVpnConnections: 'Looking for VPN Connections to add...',
  /**
   * Classic ELB
   */
  fetchingElbData:
    'Fetching Classic ELB data for this AWS account via the AWS SDK...',
  doneFetchingElbData: '✅ Done fetching Classic ELB Data ✅',
  lookingForElbs: 'Looking for Classic Elbs to add...',
  addingElbs: (num: number) =>
    `Found ${num} Classic Elbs, adding them to the vpc`,

  fetchedElbs: (num: number) => `Found ${num} Classic Elbs`,
  /**
   * 2D UI Creation
   */
  beginHostingFromVpc:
    'Looking for resources to hoist from VPCs and Subnets to the top level...',
  foundItemsToHoist: (num, type) =>
    `Found ${num} items to hoist up to the top level for ${type}`,
  removingOldChildren: `Removing old children from this subnet...`,
  combiningAndAddingNacls: name =>
    `Deduping NACLS and adding them and their children directly to VPC: ${name}`,
  /**
   * Kubernetes
   */
  fetchingKubernetesData:
    'Kubernetes Data for AWS requested - fetching all clusters... This will take a while...',
  doneFetchingKubernetesData: '✅ Done fetching Kubernetes Data ✅',
  /**
   * Cloud9
   */
  lookingForCloud9: 'Looking for Cloud9 to add to Region...',
  addingCloud9: (num: number) =>
    `Created and added ${num} Cloud9 to this region`,
}
