/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import ScrollBaseAnimation from '@/components/ui/text-marquee'
import React, { useRef } from 'react'
import HeadingBlock from './HeadingBlock'
import Link from 'next/link'
import SwipeCards from '@/components/ui/CardRotate'
import ScratchToReveal from '@/components/ui/ScratchToReveal'
import Blocks from '@/components/ui/Blocks'

const BannerHero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <div className=' sm:h-[100vh] overflow-hidden relative  max-sm:pt-[150px] z-50'>
      <div
        className='w-full h-full absolute top-0 left-0 overflow-hidden dark:bg-black bg-white before:absolute before:w-full before:h-full before:bg-gradient-to-t  dark:before:from-[#070707] before:from-[#dbdbdb] before:z-[1] z-0 '
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

        {/* <div className='z-0 pointer-events-none w-[74vw]  max-w-[80rem] mt-[-4vw] absolute'>
          <img src={bgBanner2.src} className='w-full object-cover h-auto' />
        </div>
        <div className='z-0 pointer-events-none w-[50vw]  max-w-[50rem] mt-[-4vw] absolute'>
          <img src={bgBanner1.src} className='w-full object-cover h-auto' />
        </div> */}

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
            clasname='font-[900] tracking-[-0.07em] leading-[90%] z-10'
          >
            FRONTEND DEVELOPER
          </ScrollBaseAnimation>
        </div>
      </div>
    </div>
  )
}

export default BannerHero
