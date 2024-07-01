'use client'
import { listBlogs } from '@/components/contants/data-poduct-portfolio'
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import TabsAnimation from '@/components/shared/TabsAnimation'
import { IconHeading } from '@/components/ui/RenderIcon'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const tabs = ['All', 'React', 'Vue', 'Javascript', 'Backend', 'TypeScript']
const PageBlog = () => {
  return (
    <LayoutWrapper>
      <div className='container-xl'>
        <div className='max-w-xl mx-auto mb-4 sm:mb-0 mt-4'>
          <div className='flex items-center justify-center gap-2'>
            <IconHeading className='w-[30px] md:w-[50px] h-auto' />
            <h1 className='text-sm md:text-xl font-bold text-color-3 uppercase whitespace-nowrap'>
              NEWS AND ARTICLES
            </h1>
          </div>
        </div>
        <TabsAnimation tabs={tabs} />

        <div className='grid grid-cols-1 gap-4'>
          {listBlogs?.map((blog, index) => {
            return (
              <Card
                key={`${blog.title}-${index}-${index + 1}`}
                className='grid grid-cols-1 sm:grid-cols-2 gap-2 border border-color-3 box-shadow-v1 rounded-2xl transition-0-3s hover:translate-x-1'
              >
                <div className='p-1 sm:p-3'>
                  <Image
                    src='/image/blog-image.jpg'
                    height='1000'
                    width='1000'
                    className='h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl'
                    alt='thumbnail'
                  />
                </div>
                <div className=' px-2  py-1 lg:py-4 lg:px-3'>
                  <h2 className='text-[18px] lg:text-sm leading-none font-bold text-neutral-600 dark:text-white line-clamp-2'>
                    <Link href={`/blog/${blog?.title}`}>{blog?.title}</Link>
                  </h2>
                  <p className='text-neutral-500 text-[18px] mt-2 dark:text-neutral-300 line-clamp-2 2xl:line-clamp-3'>
                    {blog?.description}
                  </p>
                  <Link
                    href={`/blog/${blog?.title}`}
                    className='btn-read__more mt-2 lg:mt-5'
                  >
                    READ MORE
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default PageBlog
