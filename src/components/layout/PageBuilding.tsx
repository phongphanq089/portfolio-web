'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
// import PixelTrail from '../ui/PixelTrail'
import { InteractiveHoverButton } from '../ui/button/InteractiveHoverButton'
import dynamic from 'next/dynamic'
import { useGoBack } from '@/hooks/navigation'

const PixelTrail = dynamic(() => import('../../components/ui/PixelTrail'), {
  ssr: false,
})

export default function PageBuilding() {
  const t = useTranslations('oop')

  const goBack = useGoBack()

  return (
    <div className='relative w-full h-screen  text-black flex flex-col  z-10 overflow-hidden'>
      <div className='absolute inset-0 z-0 '>
        <PixelTrail
          pixelSize={40}
          fadeDuration={0}
          delay={1200}
          pixelClassName='bg-[#ff3c00] '
        />
      </div>
      <div className='justify-center items-center flex flex-col w-full h-full pointer-events-none  space-y-2 p-3'>
        <h2 className='text-xl text-white cursor-pointer sm:text-5xl md:text-7xl tracking-tight text-center leading-none uppercase max-w-[900px] mx-auto '>
          {t('title')}
        </h2>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 top-[70%] -translate-y-1/2'>
        <InteractiveHoverButton
          className='!cursor-pointer z-50'
          onClick={goBack}
        >
          {t('button')}
        </InteractiveHoverButton>
      </div>
    </div>
  )
}
