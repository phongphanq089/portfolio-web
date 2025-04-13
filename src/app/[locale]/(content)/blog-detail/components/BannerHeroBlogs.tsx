'use client'
import { useGoBack } from '@/hooks/navigation'
import { formatDate } from '@/lib/utils'
import { urlFor } from '@/sanity/config'

import Link from 'next/link'
import React from 'react'

interface PropsType {
  _createdAt: string
  _id: string
  title: string
  meta_description: string
  urlImage: string
}

const BannerHeroBlogs = (props: PropsType) => {
  const { _createdAt, _id, title, meta_description, urlImage } = props
  const goBack = useGoBack()
  return (
    <div className='relative px-3 md:px-10 py-8 md:py-16 rounded-xl overflow-hidden text-white'>
      <div className='xl:grid grid-cols-12'>
        <div className='col-span-7'>
          <div className='flex items-center flex-wrap gap-3 mb-3'>
            <div className='button-style-2 cursor-pointer' onClick={goBack}>
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
            </div>
            <div className='flex items-center gap-1 text-xs sm:text-[16px]'>
              <div className='font-bold'>PHONG PHAN</div>
              <div className='h-[3px] w-4 bg-white relative top-1 left-[2px]'></div>
              <div className='font-bold'>{formatDate(_createdAt)}</div>
            </div>
          </div>
          <div className='sm:max-w-[90%]'>
            <h1
              className='text-sm lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold leading-[1.4] lg:leading-none mb-3'
              id={_id}
            >
              {title}
            </h1>
            <p className='mb-2 text-xs 3xl:text-[18px]'>{meta_description}</p>
          </div>
        </div>

        <div className='col-span-5'>
          <div className='wrapImgResize img16And9 mb-3 rounded-xl overflow-hidden'>
            <img src={urlFor(urlImage).url()} alt={title} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerHeroBlogs
