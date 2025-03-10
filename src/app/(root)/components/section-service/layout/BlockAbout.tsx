/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { SkeletonOne } from './Skeleton'
import { useTranslations } from 'next-intl'

const BlockAbout = () => {
  const t = useTranslations()
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
        <h2>Hi!</h2>
        <h2>{`I'm Phong Phan`}</h2>
      </div>
      <p className='text-[16px]  mt-5 my-10 text-white'>{t('service.info')}</p>

      <SkeletonOne text1={t('service.skeleton-1')} text2={t('service.sub1')} />
      <SkeletonOne text1={t('service.skeleton-2')} text2={t('service.sub2')} />
    </div>
  )
}

export default BlockAbout
