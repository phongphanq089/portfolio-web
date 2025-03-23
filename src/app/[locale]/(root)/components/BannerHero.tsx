import { banner10 } from '@/assets'
import VerticalCutReveal from '@/components/ui/typography-motion/VerticalCutReveal'
import { useTranslations } from 'next-intl'
import React from 'react'
import { SkeletonTwo } from './service/Skeleton'
import { Keyboard } from '@/components/ui/Keyboard'

const BannerHero = () => {
  const t = useTranslations('bannerHero')
  return (
    <div className='relative z-10 w-full lg:h-dvh max-sm:mb-0 max-lg:mb-20 mt-[150px] lg:mt-[200px]'>
      <div className='container-3xl '>
        <div className=' flex flex-col-reverse lg:grid grid-cols-2'>
          <div className=''>
            <div className='text-lg sm:text-xl md:text-3xl xl:text-5xl flex flex-col items-start justify-center font-overused-grotesk  text-white tracking-wide uppercase max-md:leading-none'>
              <VerticalCutReveal
                splitBy='characters'
                staggerDuration={0.025}
                staggerFrom='first'
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 21,
                }}
              >
                {t('heading1')}
              </VerticalCutReveal>
              <VerticalCutReveal
                splitBy='characters'
                staggerDuration={0.025}
                staggerFrom='last'
                reverse={true}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 21,
                  delay: 0.5,
                }}
              >
                {t('heading2')}
              </VerticalCutReveal>
              <VerticalCutReveal
                splitBy='characters'
                staggerDuration={0.025}
                staggerFrom='center'
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 21,
                  delay: 1.1,
                }}
              >
                {t('heading3')}
              </VerticalCutReveal>
            </div>

            <div className='max-w-[500px] my-5'>
              <VerticalCutReveal
                splitBy='characters'
                staggerDuration={0.002}
                staggerFrom='random'
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 35,
                  delay: 0.1,
                }}
                containerClassName='text-white leading-snug'
              >
                {t('description')}
              </VerticalCutReveal>
            </div>
            <div className='max-w-[600px]'>
              <Keyboard highlighted={['LeftCommand', 'C', 'S']} />
            </div>
          </div>

          <div className='relative animate-jump-in animate-once animate-duration-500 animate-ease-linear max-lg:mb-10'>
            <div className='relative max-w-[600px]  mx-auto'>
              <img
                src='https://cdn.prod.website-files.com/66d86296e14364bff90fdcba/66e1d600425db4e280e84c50_line%20art.png'
                className='max-lg:hidden w-[100px] h-auto object-cover top-[50%] left-0 absolute z-20'
              />
              <img
                src='https://cdn.prod.website-files.com/66d86296e14364bff90fdcba/66e1d471c428dd118647fb6c_Images%20(1).png'
                className='w-full h-auto object-cover'
              />
              <img
                src={banner10.src}
                alt='phong phan'
                className='w-[80%] h-auto object-cover absolute left-1/2 bottom-0 -translate-x-1/2 z-10 '
              />
              <img
                src='https://cdn.prod.website-files.com/66d86296e14364bff90fdcba/66df3fe1aabf6507f406330f_elements.png'
                className='w-[70%] h-auto object-cover absolute left-[20%] bottom-0  z-0 animate-spin animate-infinite animate-duration-[5000ms] animate-ease-linear'
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mt-9'>
        <ScrollVelocity
          texts={['FRONT-END DEVELOPMENT ']}
          className='custom-scroll-text text-white'
        />
      </div> */}
    </div>
  )
}

export default BannerHero
