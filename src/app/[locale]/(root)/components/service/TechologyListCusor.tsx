'use client'
import Gravity, {
  MatterBody,
} from '@/components/ui/cursor-attractor/GravityContext'
import useScreenSize from '@/hooks/useScreenSize'
import { LIST_SKILL } from '@/setting'
import { useTranslations } from 'next-intl'

export default function TechologyListCusor() {
  const screenSize = useScreenSize()

  const getImageCount = () => {
    if (screenSize.lessThan('sm')) return 50
    if (screenSize.lessThan('md')) return 60
    if (screenSize.lessThan('lg')) return 70
    return 80
  }

  const getMaxSize = () => {
    if (screenSize.lessThan('sm')) return 40
    if (screenSize.lessThan('md')) return 50
    return 60
  }

  const getMinSize = () => {
    if (screenSize.lessThan('sm')) return 40
    if (screenSize.lessThan('md')) return 40
    return 40
  }

  const t = useTranslations('service')

  return (
    <div className='w-full h-[500px] flex flex-col  justify-center items-center md:items-end relative overflow-hidden bg-dark'>
      <div>
        <p className='z-20 text-2xl sm:text-3xl md:text-3xl md:pr-24 text-white px-5 leading-none'>
          {t('technologyTitle')}
        </p>
      </div>
      <Gravity
        attractorPoint={{ x: '33%', y: '50%' }}
        attractorStrength={0.0005}
        cursorStrength={-0.004}
        cursorFieldRadius={screenSize.lessThan('sm') ? 100 : 200}
        className='w-full h-full'
      >
        {LIST_SKILL.map((_, i) => {
          const size = Math.max(getMinSize(), Math.random() * getMaxSize())
          return (
            <MatterBody
              key={i}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 30}%`}
            >
              <div
                className='p-2 border border-gray-100 bg-color-3 overflow-hidden rounded-xl'
                key={`_skill${i}`}
              >
                <img
                  src={_.src.src}
                  alt={`Avatar ${i}`}
                  className='rounded-full object-cover hover:cursor-pointer'
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                />
              </div>
            </MatterBody>
          )
        })}
      </Gravity>
    </div>
  )
}
