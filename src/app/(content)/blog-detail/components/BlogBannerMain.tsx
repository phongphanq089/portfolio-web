/* eslint-disable @next/next/no-img-element */
'use client'
import Blocks from '@/components/ui/Blocks'
import { formatDate } from '@/lib/utils'
import { urlFor } from '@/sanity/config'
// import { client } from '@/sanity/lib/sanityClient'

import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const BlogBannerMain = ({ postDetail }: { postDetail: SanityDocument }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') console.log('903457609456870945')
  }, [])

  return (
    <div className='mb-6 md:mb-20 relative px-3 md:px-10 py-8 md:py-16 rounded-xl overflow-hidden'>
      <div
        className='w-full h-full absolute top-0 left-0 overflow-hidden dark:bg-black bg-white before:absolute before:w-full before:h-full before:bg-gradient-to-t  dark:before:from-[#070707] before:from-[#dbdbdb] before:z-[1] z-[-1] '
        ref={containerRef}
      >
        <Blocks
          activeDivsClass='dark:bg-[#131212]  bg-[#9ba1a131]  '
          divClass='dark:border-[#131212] border-[#9ba1a131] '
          classname='w-full h-full'
          containerRef={containerRef}
          activeDivs={{
            0: new Set([2, 4, 6]),
            1: new Set([0, 8]),
            2: new Set([1, 3, 5]),
            4: new Set([0, 5, 8]),
            5: new Set([2, 4]),
            7: new Set([2, 6, 9]),
            8: new Set([0, 4]),
            9: new Set([5]),
            10: new Set([3, 6]),
            11: new Set([1, 5]),
            12: new Set([7]),
            13: new Set([2, 4]),
            14: new Set([5]),
            15: new Set([1, 6]),
          }}
        />
      </div>
      <div className='xl:grid grid-cols-2'>
        <div>
          <div className='flex items-center flex-wrap gap-3 mb-3'>
            <Link href='/blogs/all' className='button-style-2'>
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
              <div className='font-bold'>
                {formatDate(postDetail?._createdAt)}
              </div>
            </div>
          </div>
          <div className='max-w-[500px]'>
            <h1
              className='text-sm lg:text-2xl xl:text-4xl font-semibold leading-[1.4] lg:leading-none mb-3'
              id={postDetail._id}
            >
              {postDetail?.title}
            </h1>
            <p className='mb-2 text-[18px]'>{postDetail?.meta_description}</p>
          </div>
        </div>

        <div>
          <div className='wrapImgResize img16And9 mb-3 rounded-xl overflow-hidden'>
            <img
              src={urlFor(postDetail?.mainImage?.asset._ref).url()}
              alt={postDetail?.title}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogBannerMain
