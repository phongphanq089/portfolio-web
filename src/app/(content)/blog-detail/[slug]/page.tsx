import { postQueryDetail } from '@/sanity/query'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import React from 'react'
import ArticePortableText from '../components/ArticePortableText'
import BlogBannerMain from '../components/BlogBannerMain'
import ExtractHeadings from '../components/ExtractHeadings'

import MaybeLikeBlock from '../components/MaybeLikeBlock'
import { generateSeoMetadata } from '@/lib/seo'
import { urlFor } from '@/sanity/config'

interface PropsType {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PropsType) {
  const postDetail = await sanityFetch<SanityDocument>({
    query: postQueryDetail,
    param: { ...(await params) },
  })

  if (!postDetail) {
    return generateSeoMetadata({
      title: '404 - Post Not Found',
      robots: { index: false, follow: false },
    })
  }

  return generateSeoMetadata({
    title: `${postDetail?.title} - My Blog`,
    description: postDetail?.meta_description || 'Read this amazing blog post',
    openGraph: {
      title: `${postDetail?.title} - My Blog`,
      description:
        postDetail?.meta_description || 'Read this amazing blog post',
      images: postDetail?.mainImage?.asset._ref
        ? [
            {
              url: urlFor(postDetail?.mainImage?.asset._ref).url(),
              width: 1200,
              height: 630,
            },
          ]
        : undefined,
      url: `https://phongphan.xyz/${postDetail?.slug?.current}`,
    },
    twitter: {
      title: `${postDetail?.title} - My Blog`,
      description:
        postDetail?.meta_description || 'Read this amazing blog post',
      images: postDetail?.mainImage?.asset._ref
        ? [urlFor(postDetail?.mainImage?.asset._ref).url()]
        : undefined,
    },
  })
}

const PageBlogDetail = async ({ params }: PropsType) => {
  const postDetail = await sanityFetch<SanityDocument>({
    query: postQueryDetail,
    param: { ...(await params) },
  })

  // console.log(postDetail.relatedPosts)
  return (
    <div className='container-3xl py-10'>
      <BlogBannerMain postDetail={postDetail} />
      <div className='xl:grid grid-cols-12 gap-12'>
        <div className='col-span-3'>
          <ExtractHeadings />
        </div>
        <div className='col-span-6' id='parent-content'>
          <PortableText
            value={postDetail.body}
            components={ArticePortableText as {}}
          />
        </div>
        <div className='col-span-3'>
          <MaybeLikeBlock postDetail={postDetail} />
        </div>
      </div>
    </div>
  )
}

export default PageBlogDetail
