import { QueryParams } from 'next-sanity'
import { config } from './config'

const DEFAULT_PARAMS = {} as QueryParams

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
}: {
  query: string
  params?: QueryParams
}): Promise<QueryResponse> {
  return config
    .withConfig({ useCdn: true })
    .fetch<QueryResponse>(query, params, {
      next: { revalidate: 0 },
    })
}
