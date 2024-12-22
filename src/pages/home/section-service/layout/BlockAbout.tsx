/* eslint-disable @next/next/no-img-element */
import { heroAbout1 } from '@/assets'
import ListSocialLink from '@/components/shared/ListSocialLink'
import React from 'react'
import { SkeletonOne } from './Skeleton'

const BlockAbout = () => {
  return (
    <div>
      <div className='max-w-[250px] max-h-[250px] rounded-full overflow-hidden'>
        <img
          src={heroAbout1.src}
          alt='phong Phan'
          className='w-full object-cover h-auto'
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
