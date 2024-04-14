/* eslint-disable @next/next/no-img-element */
import React from 'react'
import BlockSocialStyle from '../design-system/BlockSocialStyle'
import { cricleDouble } from '@/assets'

const Footer = () => {
  return (
    <footer className='relative mt-52'>
      <img
        src={cricleDouble.src}
        alt='cricleDouble.svg'
        className='absolute w-auto h-auto top-[-100px] left-1/2 -translate-x-1/2 -translate-y-1/2] opacity-45'
      />
      <div className='container-xxl relative '>
        <div className='flex flex-col lg:flex-row md:justify-between w-full gap-3'>
          <div className='flex items-end'>
            <h1 className='text-xl xl:text-8xl 2xl:text-9xl text-color-3 opacity-[0.25] font-bold '>
              NEXGENDEV
            </h1>
          </div>
          <BlockSocialStyle />
        </div>

        <div className='w-full text-center lg:flex md:items-center md:justify-between py-10'>
          <div className='flex flex-col items-start gap-1 text-xl font-[900] mb-3 lg:mb-0'>
            <span className='leading-none'>©2024</span>
            <span className='leading-none'>.PHONGPHAN</span>
          </div>
          <h2 className='maxim-live-title h-fit text-md xl:text-2xl'>
            “One day I will leave this world behind and go. So just live a
            memorable life” <span className='text-color-3'>– Avicii</span>
          </h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
