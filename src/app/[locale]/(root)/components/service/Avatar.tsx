import { Globe } from 'lucide-react'
import React from 'react'
import { SkeletonOne } from './Skeleton'
import { useTranslations } from 'next-intl'

const Avatar = () => {
  const t = useTranslations()
  return (
    <div className='flex flex-col justify-center  gap-5 max-lg:pb-[200px] max-lg:p-4'>
      <div className='max-w-[150px] max-h-[150px] sm:max-w-[150px]  sm:max-h-[150px]  overflow-hidden'>
        <img
          src='https://clarissemichard.com/1.e3e58c57.gif'
          alt='phongphan'
          className='object-cover w-full h-auto rounded-md'
        />
      </div>

      <div className='flex items-center gap-2 '>
        <Globe className='text-primary-color ' />
        <h3 className='text-md text-white'>{t('service.heading_two')}</h3>
      </div>
      <div className='max-w-[400px]'>
        <SkeletonOne
          text1={t('service.skeleton-1')}
          text2={t('service.sub1')}
        />
        <SkeletonOne
          text1={t('service.skeleton-2')}
          text2={t('service.sub2')}
        />
      </div>
    </div>
  )
}

export default Avatar
