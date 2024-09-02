import { formatDate } from '@/lib/utils'
import { urlFor } from '@/sanity/config'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import React from 'react'
import { NextImageResize } from '../shared/ImageResize'

const BlogBannerMain = ({ postDetail }: { postDetail: SanityDocument }) => {
  return (
    <div className='pb-2 border-b-2 border-color-3'>
      <div className='flex items-center flex-wrap gap-3 mb-3'>
        <Link href='/blog' className='button-style-2'>
          <span className='text'>Back</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l14 0' />
            <path d='M5 12l4 4' />
            <path d='M5 12l4 -4' />
          </svg>
        </Link>
        <div className='flex items-center gap-1 text-xs sm:text-[18px]'>
          <div className='font-bold'>PHONG PHAN</div>
          <div className='h-[3px] w-4 bg-color-3 relative top-1 left-[2px]'></div>
          <div className='font-bold'>{formatDate(postDetail?._createdAt)}</div>
        </div>
      </div>
      <h1 className='text-sm lg:text-lg font-semibold leading-[1.4] lg:leading-none mb-3'>
        {postDetail?.title}
      </h1>
      <NextImageResize
        src={urlFor(postDetail?.mainImage?.asset._ref).url()}
        alt={postDetail?.title}
        className='pt-[56.25%] mb-5'
      />
      <p className='mb-2 text-[18px]'>{postDetail?.meta_description}</p>
    </div>
  )
}

export default BlogBannerMain
