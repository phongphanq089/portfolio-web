/* eslint-disable @next/next/no-img-element */
import { heroAbout1 } from '@/assets'
import ListSocialLink from '@/components/shared/ListSocialLink'
import React from 'react'
import { SkeletonOne } from './Skeleton'

const BlockAbout = () => {
  return (
    <div>
      <div className='max-w-[150px] sm:max-w-[250px] max-h-[150px] sm:max-h-[250px]  overflow-hidden'>
        {/* <img
          src={heroAbout1.src}
          alt='phong Phan'
          className='w-full object-cover h-auto'
        /> */}
        <img
          src='https://clarissemichard.com/1.e3e58c57.gif'
          alt='phongphan'
          className='object-cover w-full h-auto rounded-md'
        />
      </div>
      <div className='text-white text-md 3xl:text-xl font-bold leading-none mt-10'>
        <h2>Hello !</h2>
        <h2>{`I'm Phong Phan`}</h2>
      </div>
      <p className='text-xs 3xl:text-sm mt-5 3xl:mt-10 text-white'>
        Web Developer with over 2+ years of experience in crafting dynamic and
        responsive websites.
      </p>
      <ListSocialLink />

      <SkeletonOne />
    </div>
  )
}

export default BlockAbout
