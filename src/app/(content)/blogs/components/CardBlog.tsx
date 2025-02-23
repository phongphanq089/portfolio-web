/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { InteractiveHoverButton } from '@/components/ui/InteractiveHoverButton'
import { BLogList } from '@/types'
import { urlFor } from '@/sanity/config'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function CardBlog(props: BLogList) {
  const { title, mainImage, meta_description, slug, category } = props

  const router = useRouter()

  return (
    <>
      <div className='w-full h-auto group mx-auto dark:bg-[#252525] p-2 bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black '>
        <Link
          href={`/blog-detail/${slug.current}`}
          title={title}
          className='w-full h-80 block  transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden'
        >
          <div
            style={{
              background:
                'linear-gradient(123.9deg, #f59e0b 1.52%, rgba(0, 0, 0, 0) 68.91%)',
            }}
            className='absolute top-0 left-0 w-full h-full  group-hover:opacity-100 opacity-0  transition-all duration-300'
          ></div>

          <img
            src={urlFor(mainImage.asset._ref).url()}
            alt={title}
            className='absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300'
          />
        </Link>
        <article className='p-4 space-y-2'>
          <div className='flex items-center flex-wrap gap-2'>
            {category.map((category, index) => {
              return (
                <React.Fragment key={`${category.title}-${index}`}>
                  <div className='bg-color-3 text-white border border-color-3 rounded-md px-3 py-1 text-xs'>
                    {category.title}
                  </div>
                </React.Fragment>
              )
            })}
          </div>
          <h3 className='text-md font-semibold capitalize leading-none'>
            <Link href={`/blog-detail/${slug.current}`} title={title}>
              {title}
            </Link>
          </h3>
          <p className='text-base leading-[120%] line-clamp-3'>
            {meta_description}
          </p>

          <InteractiveHoverButton
            className='group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2'
            onClick={() => router.push(`/blog-detail/${slug.current}`)}
          >
            Read more
          </InteractiveHoverButton>
        </article>
      </div>
    </>
  )
}

export default CardBlog
