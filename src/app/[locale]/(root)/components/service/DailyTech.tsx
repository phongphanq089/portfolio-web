import { BorderBeam } from '@/components/ui/BorderBeam'
import MorphingText from '@/components/ui/typography-motion/UseMorphingText'
import { useTranslations } from 'next-intl'
import React from 'react'
import { SkeletonOne } from './Skeleton'
import { Marquee } from '@/components/ui/Marquee'
import { LIST_SKILL } from '@/setting'
import Link from 'next/link'

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
      <div className='relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-dark py-8'>
        <Marquee pauseOnHover className='[--duration:50s]'>
          {LIST_SKILL.map((skill, index) => {
            return (
              <Link
                href={skill.url}
                title={skill.title}
                className='p-4 border-gray-50/[.1] bg-gray-50/[.10] overflow-hidden rounded-xl'
                target='_blank'
                key={`_skill${index}`}
              >
                <img
                  src={skill.src.src}
                  alt='phong phan'
                  className='object-cover h-10 w-10'
                />
              </Link>
            )
          })}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:50s]'>
          {LIST_SKILL.map((skill, index) => {
            return (
              <Link
                href={skill.url}
                title={skill.title}
                className='p-4 border-gray-50/[.1] bg-gray-50/[.10] overflow-hidden rounded-xl'
                target='_blank'
                key={`_skill${index}`}
              >
                <img
                  src={skill.src.src}
                  alt='phong phan'
                  className='object-cover h-10 w-10'
                />
              </Link>
            )
          })}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-dark'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-dark'></div>

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
