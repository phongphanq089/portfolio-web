/* eslint-disable @next/next/no-img-element */
import { bgBanner, bgHello, bgLetWord, bgSmile, thurnder } from '@/assets'
import React from 'react'

const HeroImageDev = () => {
  return (
    <div>
      <div className='mx-auto max-w-[300px] md:max-w-[400px] xl:max-w-full relative'>
        <img
          src={bgBanner.src}
          alt='Nexgendev'
          className='image-cover_auto relative z-10'
        />
        <img
          src={bgLetWord.src}
          alt='Nexgendev'
          className='image-cover_auto absolute bottom-0 left-1/2 -translate-x-1/2 z-1'
        />
        <img
          src={thurnder.src}
          alt='Nexgendev'
          className='max-w-[100px] absolute bottom-0 xl:bottom-[-50px] left-1/2 -translate-x-1/2 z-20'
        />
        <div className='max-w-[100px] 2xl:max-w-[200px] absolute top-[40%] left-[-30px] z-20'>
          <img
            src={bgHello.src}
            alt='Nexgendev'
            className='image-cover_auto '
          />
        </div>
        <div className='max-w-[100px] 2xl:max-w-[150px] absolute bottom-0 xl:bottom-[-50px] right-0 z-20'>
          <img src={bgSmile.src} alt='Nexgendev' className='image-cover_auto' />
        </div>
      </div>
    </div>
  )
}

export default HeroImageDev
