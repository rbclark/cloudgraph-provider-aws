import CloudGraph from '@cloudgraph/sdk'

import RDSDBInstance from '../src/services/rdsDBInstance'
import { initTestConfig } from '../src/utils'
import { credentials, region } from '../src/properties/test'
import { RawAwsRDSDBInstance } from '../src/services/rdsDBInstance/data'

describe('RDS DB Cluster Service Test: ', () => {

  initTestConfig()

  describe('getData', () => {
    test.todo('should return a truthy value ')

    test.todo('should return data from a region in the correct format')
  })

  describe('format', () => {
    test.todo('should return data in the correct format matching the schema type')
  })

})
