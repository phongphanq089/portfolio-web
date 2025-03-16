import { listSKill } from '@/assets'
import { BorderBeam } from '@/components/ui/BorderBeam'
import Gravity, { MatterBody } from '@/components/ui/Gravity'
import TrueFocus from '@/components/ui/typography-motion/TrueFocus'
import MorphingText from '@/components/ui/typography-motion/UseMorphingText'
import { useTranslations } from 'next-intl'
import React from 'react'
import { SkeletonOne } from './Skeleton'

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
    <div className='px-3'>
      <div className='mt-10 mb-10 text-[24px] '>
        <TrueFocus
          sentence={t('service.technology.title')}
          manualMode={false}
          blurAmount={5}
          borderColor='#ff3c00'
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      <div>
        <MorphingText
          texts={texts}
          className='!text-xs 2xl:!text-sm text-white'
          morphTime={2}
          cooldownTime={4}
        />
      </div>
      <div className='max-w-[400px] ml-auto mb-10'>
        <SkeletonOne
          text1={t('service.skeleton-3')}
          text2={t('service.sub3')}
        />
        <SkeletonOne
          text1={t('service.skeleton-4')}
          text2={t('service.sub4')}
        />
      </div>
      <div className=' min-h-[500px] lg:min-h-[400px]  bg-transparent  z-10 relative p-8 rounded-xl overflow-hidden'>
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
        <BorderBeam
          duration={6}
          size={400}
          className='from-transparent via-red-500 to-transparent'
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          className='from-transparent via-blue-500 to-transparent'
        />
      </div>
    </div>
  )
}

export default DailyTech
