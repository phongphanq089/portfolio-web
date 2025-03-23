import { InteractiveHoverButton } from '@/components/ui/button/InteractiveHoverButton'
import { Cover } from '@/components/ui/typography-motion/Cover'
import { SOCIALINK } from '@/setting'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const BlockAbout = () => {
  const t = useTranslations()
  return (
    <div className='px-3 mb-10'>
      <h3 className='max-lg:text-[30px] text-[50px] font-bold text-white mb-5'>
        {t('service.heading_one')} <Cover>Phong Phan</Cover>{' '}
      </h3>
      <span className='text-gray-300'>[ WEB DEVLOPER ]</span>

      <div className='flex items-center gap-4 mt-10 mb-5 flex-wrap'>
        <Link href={SOCIALINK.linkedin.link}>
          <InteractiveHoverButton>Linkedin</InteractiveHoverButton>
        </Link>
        <Link href={SOCIALINK.github.link}>
          <InteractiveHoverButton>Github</InteractiveHoverButton>
        </Link>
        <Link href={SOCIALINK.twiter.link}>
          <InteractiveHoverButton>X (TWITTER)</InteractiveHoverButton>
        </Link>
      </div>

      <div className='mt-10 mb-10  text-[24px]'>
        <h3 className='button-style_1'>{t('service.about.title')}</h3>
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
