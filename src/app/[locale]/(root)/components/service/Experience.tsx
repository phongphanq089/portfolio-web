import { useTranslations } from 'next-intl'
import React from 'react'

const Experience = () => {
  const t = useTranslations()
  return (
    <div className='px-3 mb-10'>
      <div className='mt-10 mb-10 text-[24px]'>
        <h3 className='button-style_1'>{t('service.experience.title')}</h3>
      </div>
      <p className='mb-2 text-white'>{t('service.experience.description')}</p>
    </div>
  )
}

export default Experience
