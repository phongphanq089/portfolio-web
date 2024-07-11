/* eslint-disable @next/next/no-img-element */
import { heroAbout1 } from '@/assets'
import React from 'react'

const ImageCard = () => {
  return (
    <div className='max-w-xl mx-auto lg:mt-[-100px] bg-image-about '>
      <div className=' max-w-[600px] mx-auto rounded-2xl overflow-hidden'>
        <img
          src={heroAbout1.src}
          alt='nextgendev'
          className='w-full object-cover h-full'
        />
      </div>
    </div>
  )
}

export default ImageCard
