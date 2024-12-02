/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import CardStack from '@/components/pages/home/banner-hero/CardStack'
import ScrollBaseAnimation from '@/components/ui/text-marquee'
import React from 'react'
import HeadingBlock from './HeadingBlock'
import Link from 'next/link'

const BannerHero = () => {
  return (
    <div className='h-[95vh] 2xl:h-[95vh] overflow-hidden relative'>
      <div className='flex flex-col h-full justify-between items-center'>
        <HeadingBlock />
        <div className='z-[1] w-full h-full flex justify-center items-center  absolute -bottom-5'>
          <CardStack />
        </div>
        <div className='z-0 pointer-events-none w-[74vw]  max-w-[80rem] mt-[-4vw] absolute'>
          <img
            src='https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66f5a43e83a41d9f75c52a49_Hero%20Background%20Grid.svg'
            className='w-full object-cover h-auto'
          />
        </div>
        <div className='z-0 pointer-events-none w-[50vw]  max-w-[50rem] mt-[-4vw] absolute'>
          <img
            src='https://cdn.prod.website-files.com/66f516e1e11655428803c9ab/66f516e1e11655428803ca9b_bg-1.svg'
            className='w-full object-cover h-auto'
          />
        </div>
        <div className='flex flex-col w-full gap-4 -translate-y-7'>
          <div className='container-4xl flex  w-full justify-between items-center text-sm font-medium'>
            <span>[ Personal portfolio 2024 ]</span>

            <Link
              href={'mailto:phongphanq089@gmail.com'}
              title='phongphanq089@gmail.com'
              className='link-hover z-50'
            >
              phongphanq089@gmail.com
            </Link>
          </div>
          <ScrollBaseAnimation
            delay={500}
            baseVelocity={0.5}
            scrollDependent={true}
            clasname='font-[400] tracking-[-0.07em] leading-[90%]'
          >
            FRONTEND DEVELOPER
          </ScrollBaseAnimation>
        </div>
      </div>
    </div>
  )
}

export default BannerHero
