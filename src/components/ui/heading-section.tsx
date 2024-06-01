/* eslint-disable @next/next/no-img-element */
import { bgLine } from '@/assets'
import React from 'react'

const HeadingSection = ({ text }: { text: string }) => {
  return (
    <div className='relative w-fit mt-4'>
      <h2 className='text-[35px] md:text-[70px] font-[900] leading-none text-color-6'>
        {text}
      </h2>
      <div className='max-w-[300px] md:w-full'>
        <img
          src={bgLine?.src}
          alt='nextgendev'
          className='w-full h-auto object-cover '
        />
      </div>
    </div>
  )
}

export default HeadingSection
