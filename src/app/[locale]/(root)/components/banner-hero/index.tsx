'use client'
import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { banner10 } from '@/assets'
import ClockDateTime from '@/components/shared/ClockDateTime'
import Blocks from '@/components/ui/Blocks'

const BannerHero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()
  return (
    <div className='h-[100vh] overflow-hidden relative   z-50'>
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
      <div className='max-w-5xl mx-auto h-full relative px-2'>
        <div className='absolute top-0 left-4 md:left-0 w-[1px] h-full bg-color-4 dark:bg-gray-600'></div>
        <div className='absolute top-0 right-4 md:right-0 w-[0.5px] h-full bg-color-4 dark:bg-gray-600'></div>
        <div className={cn('py-24 md:py-32 h-full relative ')}>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col text-[70px] md:text-[8vw] !leading-none font-extrabold text-primary-color '>
              <div className=''>LET'S</div>
              <div className=''>WORK</div>
            </div>
            <div>
              <p className='max-w-[160px] md:max-w-[350px] md:text-end text-[12px] sm:text-sm max-md:absolute max-sm:top-[50%] max-md:top-[60%] left-3'>
                {t('bannerHero.subtitle')}
              </p>
            </div>
          </div>
          <div className='flex justify-between w-full'>
            <div></div>
            <div className='flex flex-col text-[70px] md:text-[8vw] leading-none text-end font-extrabold text-primary-color'>
              <div className=''>WITH</div>
              <div className=''>ME</div>
            </div>
          </div>
          <div className='w-[230px] md:w-[500px]  h-fit absolute right-0 md:left-1/2 md:-translate-x-1/2 bottom-0 z-20'>
            <div className='wrapImgResiz pt-[116.333%]'>
              <img src={banner10.src} alt='phong phan' />
            </div>
            <span className='dark:text-color-4 whitespace-nowrap text-sm block sm:hidden text-end'>
              [ {t('bannerHero.sub')} ]
            </span>
          </div>
        </div>
        <span className='dark:text-color-4 hidden sm:block absolute bottom-[50px] lg:bottom-0 left-2 lg:right-2 text-sm'>
          [ {t('bannerHero.sub')} ]
        </span>
      </div>
      <div className='max-w-[200px] absolute left-3 bottom-8 sm:bottom-1 z-20'>
        <ClockDateTime className='font-medium sm:font-bold leading-none' />
      </div>
    </div>
  )
}

export default BannerHero
