/* eslint-disable @next/next/no-img-element */
import { noDataIcon } from '@/assets'
import React from 'react'

const NoData = () => {
  return (
    <div className='max-w-[1000px] mx-auto'>
      <img
        src={noDataIcon.src}
        alt='phong phan'
        className='w-full h-auto object-cover'
      />
    </div>
  )
}

export default NoData
