import { postQueryDetail } from '@/sanity/query'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import React from 'react'

interface PropsType {
  params: {
    slug: string
  }
}

const PageBlogDetail = async ({ params }: PropsType) => {
  const postDetail = await sanityFetch<SanityDocument>({
    query: postQueryDetail,
    param: { ...params },
  })

  console.log(postDetail.body, 'post detail')
  return <div>PageBlogDetail</div>
}

export default PageBlogDetail
