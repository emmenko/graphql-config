import test from 'ava'
const schema = require('../schema.json')
import { getGraphQLProjectConfig } from '../../'

test('resolves schema from file', async (t) => {
  const config = getGraphQLProjectConfig(__dirname)
  const resolvedSchema = await config.resolveIntrospection()

  t.deepEqual(resolvedSchema, schema)
})
