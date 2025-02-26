import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '../env'
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

// async function getContent() {
//   const query = `*[_type == "video"]{
// _id,
//   title,
//    "thumbnail": thumbnail.asset->url,
//    "videoFileUrl": videoFile.asset->url,
//     videoURL
// }`
//   return client.fetch(query)
// }
