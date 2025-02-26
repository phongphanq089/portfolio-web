import { QueryParams } from 'next-sanity'
import { config } from './config'

const DEFAULT_PARAMS = {} as QueryParams

export async function sanityFetch<QueryResponse>({
  query,
  param = DEFAULT_PARAMS,
}: {
  query: string
  param?: QueryParams
}): Promise<QueryResponse> {
  return config
    .withConfig({ useCdn: true })
    .fetch<QueryResponse>(query, param, {
      next: { revalidate: 0 },
    })
}
