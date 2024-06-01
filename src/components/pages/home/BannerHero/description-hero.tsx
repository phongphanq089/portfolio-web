/* eslint-disable @next/next/no-img-element */
import { bgBlock, bgPhongphan, creativeplus } from '@/assets'
import React from 'react'

const DescriptionHero = () => {
  return (
    <>
      <div className='w-full block xl:hidden'>
        <img
          src={bgPhongphan.src}
          alt='Nexgendev'
          className='image-cover_auto'
        />
      </div>
      <div className='grid grid-cols-4  2xl:ml-[100px] xl:mt-8'>
        <div className='w-full'>
          <img src={bgBlock.src} alt='Nexgendev' className='image-cover_auto' />
        </div>
        <div className='col-span-3'>
          <p className='text-[14px] md:text-[18px] 2xl:text-[24px] font-semibold text-color-7 mb-3'>
            I am an enthusiastic and passionate frontend developer, always
            looking for opportunities to flex my creativity and professional
            expertise. With a spirit of continuous learning and active critical
            thinking, I am committed to bringing true value to every project I
            am involved with.
          </p>
          <div className='max-w-[400px] 2xl:max-w-[600px]'>
            <img
              src={creativeplus.src}
              alt='Nexgendev'
              className='image-cover_auto'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DescriptionHero
