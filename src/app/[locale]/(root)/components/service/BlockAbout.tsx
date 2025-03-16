import { InteractiveHoverButton } from '@/components/ui/button/InteractiveHoverButton'

import { Cover } from '@/components/ui/typography-motion/Cover'
import TrueFocus from '@/components/ui/typography-motion/TrueFocus'
import { useTranslations } from 'next-intl'
import React from 'react'

const BlockAbout = () => {
  const t = useTranslations()
  return (
    <div className='px-3 mb-10'>
      <h3 className='max-lg:text-[30px] text-[50px] font-bold text-white mb-5'>
        Xin chào mình là <Cover>Phong Phan</Cover>{' '}
      </h3>
      <span className='text-gray-300'>[ WEB DEVLOPER ]</span>

      <div className='flex items-center gap-4 mt-10 mb-5 flex-wrap'>
        <InteractiveHoverButton>Linkedin</InteractiveHoverButton>
        <InteractiveHoverButton>X (TWITTER)</InteractiveHoverButton>
        <InteractiveHoverButton>Github</InteractiveHoverButton>
      </div>

      <div className='mt-10 mb-10  text-[24px]'>
        <TrueFocus
          sentence={t('service.about.title')}
          manualMode={false}
          blurAmount={5}
          borderColor='#ff3c00'
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      <div className='text-xs 2xl:text-[18px] my-5 text-white'>
        <p className='mb-2'>{t('service.about.text-1')}</p>
        <p className='mb-2'>{t('service.about.text-2')}</p>
        <p className='mb-2'>{t('service.about.text-3')}</p>
        <p className='mb-2'>{t('service.about.text-4')}</p>
      </div>
    </div>
  )
}

export default BlockAbout
