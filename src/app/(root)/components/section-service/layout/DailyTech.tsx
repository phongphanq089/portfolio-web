/* eslint-disable @next/next/no-img-element */
import { listSKill } from '@/assets'
import Gravity, { MatterBody } from '@/components/ui/Gravity'
import MorphingText from '@/components/ui/UseMorphingText'
import { useTranslations } from 'next-intl'
import React from 'react'

const DailyTech = () => {
  const t = useTranslations()

  const texts = [
    `${t('service.technology.description1')}`,
    `${t('service.technology.description2')}`,
    `${t('service.technology.description3')}`,
    `${t('service.technology.description4')}`,
    `${t('service.technology.description5')}`,
    `${t('service.technology.description6')}`,
  ]
  return (
    <div className='text-white p-4 mt-10'>
      <div className='flex items-center gap-4 text-md text-white mb-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          className='fill-white translate-y-[-2px]'
          viewBox='0 0 24 24'
        >
          <path d='M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z' />
        </svg>
        {t('service.technology.title')}
      </div>
      <div>
        <MorphingText
          texts={texts}
          className='!text-xs 3xl:!text-sm'
          morphTime={2}
          cooldownTime={4}
        />
      </div>
      <div className='relative min-h-[400px] lg:min-h-[300px]  bg-dark z-10'>
        <Gravity gravity={{ x: 0, y: 1 }} className='w-full h-full'>
          {listSKill.map((skill, i) => (
            <MatterBody
              key={i}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={`${Math.random() * 60 + 20}%`}
              y={`${Math.random() * 20 + 40}%`}
              angle={Math.random() * 360}
            >
              <div
                className={`flex items-center justify-center text-xl aspect-square w-14 p-1 h-auto border border-white text-white rounded-lg text-center bg-color-3`}
              >
                <img src={skill.src} className='w-full object-cover h-auto' />
              </div>
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </div>
  )
}

export default DailyTech
