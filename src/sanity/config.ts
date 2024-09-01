import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = createClient({
  projectId: 'i6rvgdeu',
  dataset: 'production',
  apiVersion: '2024-08-18',
  useCdn: true,
})

const builder = imageUrlBuilder(config)

export function urlFor(source: any) {
  return builder.image(source)
}
