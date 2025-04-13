import { postQueryDetail } from '@/sanity/lib/query'
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import { notFound } from 'next/navigation'
import React from 'react'
import BannerHeroBlogs from '../components/BannerHeroBlogs'
import { getLocalizedValue } from '@/lib/utils'
import ExtractHeadings from '../components/ExtractHeadings'
import { PortableText } from 'next-sanity'
import ArticePortableText from '../components/ArticePortableText'
import MaybeLikeBlock from '../components/MaybeLikeBlock'
import { Metadata } from 'next'
import { generateSeoMetadata } from '@/lib/seo'
import { urlFor } from '@/sanity/config'

interface PropsType {
  params: Promise<{ slug: string; locale: 'vi' | 'en' }>
}

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const lang = (await params).locale
  let blogDetail
  try {
    blogDetail = await sanityClientFetch.fetch(postQueryDetail, {
      ...(await params),
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
  }

  return generateSeoMetadata({
    title: `${getLocalizedValue(blogDetail.title, lang)} - Phong Phan`,
    description: `${getLocalizedValue(blogDetail.meta_description, lang)}`,
    openGraph: {
      title: `${getLocalizedValue(blogDetail.title, lang)} - Phong Phan`,
      description: `${getLocalizedValue(blogDetail.meta_description, lang)}`,
      images: blogDetail?.mainImage?.asset._ref
        ? [
            {
              url: urlFor(blogDetail?.mainImage?.asset._ref).url(),
              width: 1200,
              height: 630,
            },
          ]
        : [
            {
              url: 'https://res.cloudinary.com/dyp6oqixq/image/upload/v1717921488/project-dev/banner-hero_scrh3z.png',
              width: 1200,
              height: 630,
              alt: 'Phong Phan - Front-end Developer & Web Architect',
            },
          ],
    },
    twitter: {
      title: `${getLocalizedValue(blogDetail.title, lang)} - My Blog`,
      description:
        getLocalizedValue(blogDetail.meta_description, lang) ||
        'Read this amazing blog post',
      images: blogDetail?.mainImage?.asset._ref
        ? [urlFor(blogDetail?.mainImage?.asset._ref).url()]
        : [
            'https://res.cloudinary.com/dyp6oqixq/image/upload/v1717921488/project-dev/banner-hero_scrh3z.png',
          ],
    },
  })
}

const PageBlogDetails = async ({ params }: PropsType) => {
  const lang = (await params).locale
  let blogDetail
  try {
    blogDetail = await sanityClientFetch.fetch(postQueryDetail, {
      ...(await params),
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
  // console.log(blogDetail)
  if (!blogDetail) {
    return notFound()
  }

  return (
    <div className='min-h-screen mt-[100px] relative z-10'>
      <div className='container-3xl'>
        <BannerHeroBlogs
          _createdAt={blogDetail._createdAt}
          _id={blogDetail._id}
          meta_description={getLocalizedValue(
            blogDetail.meta_description,
            lang
          )}
          urlImage={blogDetail.mainImage?.asset._ref}
          title={getLocalizedValue(blogDetail.title, lang)}
        />
        <div className='xl:grid grid-cols-12 gap-3 3xl:gap-12'>
          <div className='col-span-3'>
            <ExtractHeadings />
          </div>
          <div className='col-span-6 text-white' id='parent-content'>
            {blogDetail.body && (
              <PortableText
                value={getLocalizedValue(blogDetail.body, lang) as any}
                components={ArticePortableText as {}}
              />
            )}
          </div>
          <div className='col-span-3'>
            <MaybeLikeBlock postDetail={blogDetail} lang={lang} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageBlogDetails
