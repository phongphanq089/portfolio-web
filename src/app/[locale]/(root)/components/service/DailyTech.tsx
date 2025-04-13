'use client'
import { BorderBeam } from '@/components/ui/BorderBeam'
import MorphingText from '@/components/ui/typography-motion/UseMorphingText'
import { useTranslations } from 'next-intl'
import React from 'react'
import { SkeletonOne } from './Skeleton'

import dynamic from 'next/dynamic'

const TechologyListCusor = dynamic(() => import('./TechologyListCusor'), {
  ssr: false,
})
const DailyTech = () => {
  const t = useTranslations()

  const texts = [
    `${t('service.technology.description1')}`,
    `${t('service.technology.description2')}`,
    `${t('service.technology.description3')}`,
    `${t('service.technology.description4')}`,
    `${t('service.technology.description5')}`,
    `${t('service.technology.description6')}`,
  ]

  return (
    <div className='px-3'>
      <div className='mt-10 mb-10 text-[24px] '>
        <h3 className='button-style_1'>{t('service.technology.title')}</h3>
      </div>
      <div>
        <MorphingText
          texts={texts}
          className='!text-xs 2xl:!text-sm text-white'
          morphTime={2}
          cooldownTime={4}
        />
      </div>
      <div className='relative rounded-lg overflow-hidden'>
        <TechologyListCusor />

        <BorderBeam
          duration={6}
          size={400}
          className='from-transparent via-red-500 to-transparent'
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          className='from-transparent via-blue-500 to-transparent'
        />
      </div>
      <div className='max-w-[400px] ml-auto mb-10 mt-10'>
        <SkeletonOne
          text1={t('service.skeleton-3')}
          text2={t('service.sub3')}
        />
        <SkeletonOne
          text1={t('service.skeleton-4')}
          text2={t('service.sub4')}
        />
      </div>
    </div>
  )
}

export default DailyTech
