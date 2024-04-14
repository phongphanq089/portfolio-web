/* eslint-disable @next/next/no-img-element */
import React from 'react'
import CardSocial from './CardSocial'
import { cricleDouble } from '@/assets'
import ScrollTop from './ScrollTop'

const Footer = () => {
  return (
    <div className='container-xxl mt-52 mb-5 relative'>
      <img
        src={cricleDouble.src}
        alt='cricleDouble.svg'
        className='absolute w-auto h-auto top-[-100px] left-1/2 -translate-x-1/2 -translate-y-1/2] opacity-45'
      />
      <div className='flex  flex-col gap-5 lg:flex-row justify-between items-center relative z-10'>
        <div className='flex h-full flex-col justify-between gap-5'>
          <div className='fit-content'>
            <h1 className='text-2xl sm:text-7xl xl:text-8xl 2xl:text-9xl text-color-3  font-bold typography-style mb-4'>
              NEXGENDEV
            </h1>
            <h2 className='maxim-live-title h-fit text-md xl:text-xl md:pl-[100px]'>
              “One day I will leave this world behind and go. So just live a
              memorable life” <span className='text-color-3'>– Avicii</span>
            </h2>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex flex-col items-start gap-1 text-sm sm:text-md md:text-xl font-[900] mb-3 lg:mb-0'>
              <span className='leading-none dark:text-light text-color-3'>
                ©2024
              </span>
              <span className='leading-none dark:text-light text-color-3'>
                .PHONGPHAN
              </span>
            </div>
            <ScrollTop />
          </div>
        </div>

        <CardSocial />
      </div>
    </div>
  )
}

export default Footer
