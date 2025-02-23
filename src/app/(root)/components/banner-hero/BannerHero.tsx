/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef } from 'react'

import Blocks from '@/components/ui/Blocks'
import TextPressure from '@/components/ui/text-animation/TextPressure'
import { banner1, banner9 } from '@/assets'
import RotatingText from '@/components/ui/text-animation/RotatingText'
import TiltedCard from './TiltedCard'

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
        <div></div>
        <div className='z-[1] w-[300px] h-[400px] sm:absolute top-[40%] sm:-translate-y-1/2'>
          <TiltedCard
            imageSrc={banner9.src}
            altText='Phong Phan - PH'
            captionText='Phong Phan - PH'
            containerHeight='400px'
            containerWidth='300px'
            imageHeight='430px'
            imageWidth='300px'
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className='tilted-card-demo-text '>Web Developer</p>
            }
          />
        </div>

        <div className='flex flex-col w-full gap-10 sm:gap-0 sm:-translate-y-7 relative z-50'>
          <div className='container-4xl flex flex-col gap-3 sm:flex-row w-full justify-between items-center text-xs sm:text-sm font-medium'>
            <div className='w-full'>
              <div className='flex items-center gap-2 text-lg sm:text-xl mb-2'>
                <div className='text-black dark:text-white'>Creative</div>
                <RotatingText
                  texts={['React', 'Bits', 'Motion', 'Cool!']}
                  mainClassName='px-2 sm:px-2 md:px-5 bg-primary-color text-white overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-lg'
                  staggerFrom={'last'}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
              <span>[ Personal portfolio 2024 ]</span>
            </div>

            <h3 className='dark:text-color-4 md:text-end text-sm md:text-lg 3xl:text-xl font-light dark:font-extralight max-w-[500px] 3xl:max-w-[700px] leading-none'>
              Just an ordinary devleoper. From Vietnamese with love.
            </h3>
          </div>
          <div>
            <TextPressure
              text='PHONG PHAN'
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor='#000'
              strokeColor='#ff0000'
              minFontSize={30}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerHero
