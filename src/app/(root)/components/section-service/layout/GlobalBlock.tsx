'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { developer1 } from '@/assets'
import { useTranslations } from 'next-intl'

const AnimationLottie = dynamic(
  () => import('../../../../../components/ui/AnimationLottie'),
  {
    ssr: false,
  }
)

export function GlobeDemo() {
  const t = useTranslations()
  return (
    <div className='flex flex-row items-center justify-center pt-10 h-auto bg-dark relative w-full'>
      <div className='max-w-7xl mx-auto w-full relative overflow-hidden h-[30rem]  px-4'>
        <Link
          href={'mailto:phongphanq089@gmail.com'}
          className='border rounded-xl border-primary-color flex items-center justify-center gap-4 p-4 fill-white'
        >
          <svg
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
          >
            <path d='M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z' />
          </svg>
          Open for work : Full time / Remote
        </Link>
        <div className='absolute left-[51.15%] top-[10%] w-px h-[20%] overflow-hidden z-50'>
          <span className='absolute inset-0 w-full h-full bg-gradient-to-t from-current to-transparent delay-1200 animate-slide-in'></span>
        </div>

        <div
          className='absolute origin-center w-[15px] h-[15px] flex items-center justify-center opacity-1 transition-opacity animate-fade-in delay-75 z-50 rounded-full bg-white'
          style={{ left: '49.7%', top: '30%' }}
        ></div>

        <div className='absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-dark z-40' />
        <div className='absolute w-full bottom-0 3xl:-bottom-20 h-[400px] 3xl:h-full z-10'>
          <div className='max-w-[300px] 2xl:max-w-[400px] h-full'>
            <AnimationLottie animationPath={developer1} />
          </div>
        </div>

        <div className='absolute bottom-0 left-0 z-50 p-5 w-full'>
          {t('service.global')}
        </div>
      </div>
    </div>
  )
}
