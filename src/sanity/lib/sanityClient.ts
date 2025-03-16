import { createClient } from '@sanity/client'

import { apiVersion, dataset, projectId } from '../env'
export const sanityClientFetch = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
