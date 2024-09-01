import React from 'react'
import { Card } from '../../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/config'
import { formatDate } from '@/lib/utils'
import ButtonStyle from '@/components/shared/ButtonStyle'
import { IconShapes_3 } from '@/components/ui/RenderIcon'
import { NextImageResize } from '@/components/shared/ImageResize'

interface CardBlogType {
  title: string
  description?: string
  mainImage?: string
  slug?: string
  author?: string
  createdAt: string
}

const CardBlog = (props: CardBlogType) => {
  const { title, mainImage, description, slug, author, createdAt } = props
  return (
    <Card className='card-blog__style grid grid-cols-1 lg:grid-cols-12 gap-2 border-none rounded-none transition-0-3s hover:translate-x-1 bg-transparent shadow-none pb-10'>
      <div className='col-span-4'>
        <div className='relative h-full flex lg:block items-center justify-between gap-3  mb-0 lg:mb-5'>
          <h2 className='text-[18px] md:text-sm leading-[1.4] font-bold dark:text-white line-clamp-2 max-w-[400px]'>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <div className='lg:absolute bottom-0 left-0 h-fit'>
            <IconShapes_3 className='w-[35px] h-[35px] md:w-[70px] md:h-[70px]' />
          </div>
        </div>
      </div>
      <div className='lg:px-4 col-span-5'>
        <div className='flex flex-col h-full max-w-[500px]'>
          <div className='flex items-center gap-1 mb-3'>
            <div className='flex items-center gap-1 text-xs sm:text-[18px]'>
              <div className='font-bold'>PHONG PHAN</div>
              <div className='h-[3px] w-4 bg-color-3 relative top-1 left-[2px]'></div>
              <div className='font-bold'>{formatDate(createdAt)}</div>
            </div>
          </div>
          <p className='text-neutral-700 text-[18px]  line-clamp-2 2xl:line-clamp-3 mb-2'>
            {description}
          </p>

          <Link
            href={`/blog/${slug}`}
            className='bg-black flex w-fit mt-2 lg:mt-auto'
          >
            <ButtonStyle text='READ MORE' />
          </Link>
        </div>
      </div>
      <div className='p-1 sm:p-3 col-span-3'>
        <NextImageResize
          src={urlFor(mainImage).url()}
          alt={title}
          className='pt-[56.25%]'
        />
      </div>
    </Card>
  )
}

export default CardBlog
