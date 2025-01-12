/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import ScrollBaseAnimation from '@/components/ui/text-marquee'
import React from 'react'
import HeadingBlock from './HeadingBlock'
import Link from 'next/link'
import SwipeCards from '@/components/ui/CardRotate'
import ScratchToReveal from '@/components/ui/ScratchToReveal'
import { bgBanner1, bgBanner2 } from '@/assets'

const BannerHero = () => {
  return (
    <div className='sm:h-[95vh] 2xl:h-[95vh] overflow-hidden relative max-sm:p-3 z-50'>
      <div className='flex flex-col h-full justify-between items-center max-md:gap-5'>
        <HeadingBlock />
        <div className='z-[1] w-full h-full flex justify-center items-center  sm:absolute sm:-bottom-10'>
          <ScratchToReveal
            minScratchPercentage={70}
            cursorBackgroundColor='#a3e635'
            customCursorText='DRAG'
          >
            <SwipeCards />
          </ScratchToReveal>
        </div>

        <div className='z-0 pointer-events-none w-[74vw]  max-w-[80rem] mt-[-4vw] absolute'>
          <img src={bgBanner2.src} className='w-full object-cover h-auto' />
        </div>
        <div className='z-0 pointer-events-none w-[50vw]  max-w-[50rem] mt-[-4vw] absolute'>
          <img src={bgBanner1.src} className='w-full object-cover h-auto' />
        </div>
        <div className='flex flex-col w-full gap-10 sm:gap-4 sm:-translate-y-7'>
          <div className='container-4xl flex flex-col gap-3 sm:flex-row w-full justify-between items-center text-xs sm:text-sm font-medium'>
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
            clasname='font-[900] tracking-[-0.07em] leading-[90%]'
          >
            FRONTEND DEVELOPER
          </ScrollBaseAnimation>
        </div>
      </div>
    </div>
  )
}

export default BannerHero
