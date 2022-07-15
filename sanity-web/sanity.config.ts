import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'sanity-web',

  projectId: '88vxczhn',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
