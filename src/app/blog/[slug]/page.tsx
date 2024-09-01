/* eslint-disable @next/next/no-img-element */
import BlogBannerMain from '@/components/blog/BlogBannerMain'
import LayoutWrapperDetail from '@/components/layout/LayoutWrapDetail'
import { TracingBeam } from '@/components/ui/TracingBeam'
import { postQueryDetail } from '@/lib/queries-data'
import { sanityFetch } from '@/sanity/sanityFetch'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'
import { cookies } from 'next/headers'
import React from 'react'
import { PortableText } from '@portabletext/react'
import articePortableText from '@/components/blog/PortTableComponent'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: postQueryDetail,
    params,
  })
  if (!post)
    return {
      title: 'Not Found',
      description: 'The page is not found',
    }

  return {
    title: post?.title,
    description: post?.meta_description,
    keywords: post?.meta_tags,
  }
}

const PageDetail = async ({ params }: Props) => {
  const postDetail = await sanityFetch<SanityDocument>({
    query: postQueryDetail,
    params,
  })

  return (
    <LayoutWrapperDetail>
      <div className='container-2xl overflow-hidden'>
        <TracingBeam className='pl-6 lg:px-6'>
          <div className='mx-auto antialiased pt-4 relative'>
            <BlogBannerMain postDetail={postDetail} />

            <div className='mt-2'>
              <PortableText
                value={postDetail.body}
                components={articePortableText as {}}
              />
            </div>
          </div>
        </TracingBeam>
      </div>
    </LayoutWrapperDetail>
  )
}

export default PageDetail
