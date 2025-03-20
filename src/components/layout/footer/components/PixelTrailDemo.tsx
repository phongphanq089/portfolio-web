'use client'
import { useTranslations } from 'next-intl'

// import Link from 'next/link'
import PixelTrail from './BackgroundCircles'

const PixelTrailDemo: React.FC = () => {
  const t = useTranslations()
  return (
    <div className='relative w-full h-screen bg-white text-black flex flex-col  z-10 overflow-hidden'>
      <div className='absolute inset-0 z-0 '>
        <PixelTrail
          pixelSize={40}
          fadeDuration={0}
          delay={1200}
          pixelClassName='bg-[#ff3c00] '
        />
      </div>
      <div className='justify-center items-center flex flex-col w-full h-full pointer-events-none  space-y-2 p-3'>
        <h2 className='text-xl cursor-pointer sm:text-5xl md:text-7xl tracking-tight text-center leading-none uppercase'>
          GenMotion ✽ components
        </h2>
        <p className='text-xs md:text-sm max-w-[700px] text-center'>
          {t('genMoiton')}
        </p>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 top-[70%] -translate-y-1/2'>
        {/* <InteractiveHoverButton className='!cursor-pointer z-50'>
          <Link href={'https://www.reactbits.dev/'} target='_blank'>
            Read more
          </Link>
        </InteractiveHoverButton> */}
      </div>
    </div>
  )
}

export default PixelTrailDemo
