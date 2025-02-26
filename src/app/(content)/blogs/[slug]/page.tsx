import Pagination from '@/components/shared/Pagination'
import TabsLiquid from '@/components/shared/TabsLiquid'
import { BackgroundGradientAnimation } from '@/components/ui/BackgroundGradientAnimation'
import {
  categoryPostList,
  getCategoryRelatedPostQuery,
  totalBlogList,
} from '@/sanity/query'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import { notFound } from 'next/navigation'
import React from 'react'
import CardBlog from '../components/CardBlog'
import { BLogList } from '@/types'
import { generateSeoMetadata } from '@/lib/seo'

export const metadata = generateSeoMetadata({
  title: 'Blog',
  description: 'Articles about programming, technology, life, ...',
  openGraph: {
    title: 'Blog',
    description: 'Articles about programming, technology, life, ...',
  },
})
interface Props {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
const PageBlog = async ({ params, searchParams }: Props) => {
  const resolvedSearchParams = await searchParams
  const isPageBlog = true
  const listCategoryPost = await sanityFetch<SanityDocument>({
    query: categoryPostList,
  })

  const page = parseInt((resolvedSearchParams?.page as string) || '1', 10)
  const pageSize = 12

  const start = (page - 1) * pageSize

  let listBlog
  let totalBlog
  try {
    listBlog = await sanityFetch<SanityDocument>({
      query: getCategoryRelatedPostQuery,
      param: { ...(await params), start, limit: pageSize },
    })
    totalBlog = await sanityFetch<number>({
      query: totalBlogList,
      param: { ...(await params) },
    })
  } catch (error) {
    return notFound()
  }

  const totalPages = Math.ceil(totalBlog / pageSize)

  return (
    <div className='overflow-hidden'>
      <div className='container-3xl py-20'>
        <div className='mb-[50px]'>
          <TabsLiquid
            category={listCategoryPost as SanityDocument}
            isPageBlog={isPageBlog}
          />
        </div>
        {/* <BackgroundGradientAnimation></BackgroundGradientAnimation> */}

        <div className='flex flex-wrap justify-center gap-6'>
          {listBlog.map((blog: BLogList, index: number) => {
            let widthClass = ''

            switch (index % 4) {
              case 0:
                widthClass = 'w-full md:w-[50%] xl:w-[40%]'
                break
              case 1:
                widthClass = 'w-full md:w-[50%] xl:w-[33%]'
                break
              case 2:
                widthClass = 'w-full md:w-[50%] xl:w-[50%]'
                break
              case 3:
                widthClass = 'w-full md:w-[50%] xl:w-[40%]'
                break
              default:
                widthClass = 'w-full md:w-[60%] xl:w-[60%]'
            }
            return (
              <div key={blog._id} className={widthClass}>
                <CardBlog
                  title={blog.title}
                  meta_description={blog.meta_description}
                  slug={blog.slug}
                  mainImage={blog.mainImage}
                  category={blog.category}
                />
              </div>
            )
          })}
        </div>
        <div className='w-full flex justify-center items-center mt-16'>
          <Pagination totalPages={totalPages} currentPage={page} />
        </div>
      </div>
    </div>
  )
}

export default PageBlog
