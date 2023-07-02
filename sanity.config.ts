import { defineConfig } from 'sanity'

import { deskTool } from 'sanity/desk'
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
