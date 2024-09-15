/* eslint-disable @next/next/no-img-element */
import BlogBannerMain from '@/components/blog/BlogBannerMain'
import LayoutWrapperDetail from '@/components/layout/LayoutWrapDetail'
import { TracingBeam } from '@/components/ui/TracingBeam'
import { postQueryDetail, footerQuery } from '@/lib/queries-data'
import { sanityFetch } from '@/sanity/sanityFetch'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'
import { cookies } from 'next/headers'
import React from 'react'
import { PortableText } from '@portabletext/react'
import articePortableText from '@/components/blog/PortTableComponent'
import { urlFor } from '@/sanity/config'

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
    publisher: post?.title,
    openGraph: {
      title: post?.title,
      description: post?.meta_description,
      siteName: post?.title,
      images: [
        {
          url: urlFor(post?.mainImage?.asset._ref).url(),
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

const PageDetail = async ({ params }: Props) => {
  const postDetail = await sanityFetch<SanityDocument>({
    query: postQueryDetail,
    params,
  })

  const footeNav = await sanityFetch<SanityDocument>({
    query: footerQuery,
  })

  return (
    <LayoutWrapperDetail footer={footeNav as SanityDocument}>
      <div className='container-2xl overflow-hidden py-10'>
        <TracingBeam className='sm:pl-6 lg:px-6'>
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
