import { postQueryDetail } from '@/sanity/query'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import React from 'react'
import ArticePortableText from '../components/ArticePortableText'
import { extractHeadings } from '@/lib/utils'
import TableOfContent from '../components/TableOfContent'
import BlogBannerMain from '../components/BlogBannerMain'
import { ScrollArea } from '@/components/ui/scroll-area'
import ExtractHeadings from '../components/ExtractHeadings'

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

  return (
    <div className='container-2xl py-10'>
      <BlogBannerMain postDetail={postDetail} />
      <div className='xl:grid grid-cols-12 gap-12'>
        <div className='col-span-3'>
          <ExtractHeadings />
        </div>
        <div className='col-span-9' id='parent-content'>
          <PortableText
            value={postDetail.body}
            components={ArticePortableText as {}}
          />
        </div>
      </div>
    </div>
  )
}

export default PageBlogDetail
