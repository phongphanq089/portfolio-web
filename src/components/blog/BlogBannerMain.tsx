/* eslint-disable @next/next/no-img-element */
import { beanhead } from '@/assets'
import { formatDate } from '@/lib/utils'
import { urlFor } from '@/sanity/config'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

const Avatar = () => {
  return (
    <div className='w-[85px] h-auto'>
      <img
        src={beanhead.src}
        alt='phong phan'
        className='w-full h-auto object-cover'
      />
    </div>
  )
}

const BlogBannerMain = ({ postDetail }: { postDetail: SanityDocument }) => {
  return (
    <div className='pb-2 border-b-2 border-color-3'>
      <h1 className='text-sm lg:text-lg font-semibold mb-3'>
        {postDetail?.title}
      </h1>
      <div className='flex items-center gap-3 mb-5'>
        <div className='flex items-center gap-1 '>
          <div className='bg-white w-6 h-6 rounded-full flex items-center justify-center'>
            <Avatar />
          </div>
          <div className='flex flex-col'>
            <div className='text-[18px] font-semibold'>
              {postDetail?.author?.name}
            </div>
            <div className='text-[18px] font-semibold'>
              {formatDate(postDetail?._createdAt)}
            </div>
          </div>
        </div>
        <Link href='/blog' className='flex items-center gap-1 text-sm'>
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
          </svg>{' '}
          Previous
        </Link>
      </div>
      <img
        src={urlFor(postDetail?.mainImage?.asset._ref).url()}
        alt='Setup React Typescript with Vite & ESLint'
        className='w-full object-cover h-auto mb-2'
      />
      <p className='mb-2 text-[18px]'>{postDetail?.meta_description}</p>
    </div>
  )
}

export default BlogBannerMain
