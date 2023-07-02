import { defineConfig } from 'sanity'

import { deskTool } from 'sanity/desk'
import project from './sanity/schema/project-schema'
import schemas from './sanity/schema/index'

export default defineConfig({
  name: 'SouravPandit',
  title: 'souravkumarpandit',

  projectId: 'eh7zp83x',
  dataset: 'production',
  apiVersion: '2023-06-01',

  basePath: '/admin',

  plugins: [deskTool()],

  schema: {
    types: schemas
  },
})
