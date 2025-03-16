import TrueFocus from '@/components/ui/typography-motion/TrueFocus'
import { useTranslations } from 'next-intl'
import React from 'react'

const Experience = () => {
  const t = useTranslations()
  return (
    <div className='px-3 mb-10'>
      <div className='mt-10 mb-10 text-[24px]'>
        <TrueFocus
          sentence={t('service.experience.title')}
          manualMode={false}
          blurAmount={5}
          borderColor='#ff3c00'
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      <p className='mb-2 text-white'>{t('service.experience.description')}</p>
    </div>
  )
}

export default Experience
