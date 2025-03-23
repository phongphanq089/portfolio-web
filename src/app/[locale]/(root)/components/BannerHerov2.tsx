import { banner9 } from '@/assets'
import NextImageResize from '@/components/ui/NextImageResize'
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/Terminal'
import { useTranslations } from 'next-intl'

import React from 'react'

const BannerHerov2 = () => {
  const t = useTranslations('bannerHero.terminal')
  return (
    <div className='container-3xl relative z-10 max-md:mb-[50px] max-lg:mb-[100px] mt-[120px] xl:min-h-screen'>
      <div className='flex flex-col mb-10'>
        <div className='flex items-center gap-[2px] relative z-30 text-[16vw] lg:text-[9vw] font-black text-white h-fit leading-none translate-y-[20px] 2xl:translate-y-[60px]'>
          <div className='relative z-30'>FRONT</div>
          <div className='bg-primary-color relative z-10 px-3 rounded-md'>
            E
          </div>
          <div className='relative z-30'>ND</div>
        </div>

        <div className='max-sm:w-full w-[500px] relative z-20 2xl:ml-[200px] animate-jump-in animate-once animate-duration-500 animate-ease-linear'>
          <NextImageResize src={banner9.src} classResize='imgSpecial1' />
        </div>
        <div className='flex items-center gap-[2px] text-[15vw] lg:text-[12vw] font-black text-white h-fit leading-none xl:translate-y-[-60px]'>
          <div className='relative z-30'>DEVE</div>
          <div className='bg-primary-color relative z-10 px-3 rounded-md'>
            L
          </div>
          <div className='relative z-30'>OPER</div>
        </div>
      </div>

      <div className='xl:absolute top-0 right-[30px] z-40'>
        <Terminal className='max-h-[700px]'>
          <TypingAnimation>
            &gt; Booting up Phong's Dev Space...
          </TypingAnimation>

          <AnimatedSpan delay={1500} className='text-green-500'>
            <span>✔ Initializing creative mindset...</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className='text-green-500'>
            <span>✔ Loading passion for web development...</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className='text-green-500'>
            <span>✔ Integrating latest technologies...</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className='text-green-500'>
            <span>✔ Optimizing for innovation & exploration...</span>
          </AnimatedSpan>

          <TypingAnimation delay={3500}>{t('hello')}</TypingAnimation>

          <AnimatedSpan delay={4000} className='text-green-500'>
            <span>{t('text1')}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4500} className='text-green-500'>
            <span>{t('text2')}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5000} className='text-green-500'>
            <span>{t('text3')}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5500} className='text-green-500'>
            <span>{t('text4')}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6000} className='text-green-500'>
            <span>{t('text5')}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6500} className='text-blue-500'>
            <span>{t('text6')}</span>
          </AnimatedSpan>

          <TypingAnimation delay={7000} className='text-muted-foreground'>
            {t('text7')}
          </TypingAnimation>
        </Terminal>
      </div>
    </div>
  )
}

export default BannerHerov2
