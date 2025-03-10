import React from 'react'
import DailyTech from './DailyTech'
import { useTranslations } from 'next-intl'

const InfomationMe = () => {
  const t = useTranslations()
  return (
    <div className='border-b border-neutral-700 '>
      <div className='flex items-center gap-4 text-sm 2xl:text-md text-white mb-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='fill-white translate-y-[-2px] h-4 w-4 2xl:w-6 2xl:h-6'
          viewBox='0 0 24 24'
        >
          <path d='M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z' />
        </svg>

        {t('service.about.title')}
      </div>

      <div className='text-xs 2xl:text-[18px] mb-5'>
        <p className='mb-2'>{t('service.about.text-1')}</p>
        <p className='mb-2'>{t('service.about.text-2')}</p>
        <p className='mb-2'>{t('service.about.text-3')}</p>
        <p className='mb-2'>{t('service.about.text-4')}</p>
      </div>

      <div className='flex items-center gap-3 mb-4 flex-wrap'>
        <button className='btn-style_gradient whitespace-nowrap'>
          {' '}
          25 years
        </button>
        <button className='btn-style_gradient whitespace-nowrap'> Web</button>
        <button className='btn-style_gradient whitespace-nowrap'>
          {' '}
          Front-end
        </button>
        <button className='btn-style_gradient whitespace-nowrap'>
          {' '}
          Back-end
        </button>
      </div>
    </div>
  )
}

export default InfomationMe
