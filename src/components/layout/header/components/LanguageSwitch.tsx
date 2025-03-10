'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import useMeasure from 'react-use-measure'
import FamilyButton from '@/components/ui/action-form/FamilyButton'
import { usUk, vn } from '@/assets'
import { usePathname, useRouter } from 'next/navigation'

export function LanguageSwitchAction() {
  return (
    <div className=' w-full h-full min-h-[240px]'>
      <div className='absolute bottom-4 right-4 '>
        <FamilyButton>
          <LanguageSwitch />
        </FamilyButton>
      </div>
    </div>
  )
}

let tabs = [
  { id: 0, label: 'VN' },
  { id: 1, label: 'US' },
]

export function LanguageSwitch() {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [ref, bounds] = useMeasure()

  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = pathname.split('/')[1] || 'vi'

  const content = useMemo(() => {
    switch (activeTab) {
      case 0:
        return (
          <div className='flex items-center justify-center -translate-y-4'>
            <img
              src={vn.src}
              alt='phong phan'
              className='w-[100px] h-auto object-cover'
            />
          </div>
        )
      case 1:
        return (
          <div className='flex items-center justify-center'>
            <img
              src={usUk.src}
              alt='phong phan'
              className='w-[100px] h-auto object-cover'
            />
          </div>
        )
      default:
        return null
    }
  }, [activeTab])

  const handleTabClick = (newTabId: number) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newLocale = newTabId === 0 ? 'vi' : 'en'
      const basePath = pathname.replace(`/${currentLocale}`, '') || '/'
      router.push(`/${newLocale}${basePath}`)
      const newDirection = newTabId > activeTab ? 1 : -1
      setDirection(newDirection)
      setActiveTab(newTabId)
    }
  }

  const variants = {
    initial: (direction: number) => ({
      x: 300 * direction,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      x: -300 * direction,
      opacity: 0,
      filter: 'blur(4px)',
    }),
  }

  useEffect(() => {
    setActiveTab(currentLocale === 'vi' ? 0 : 1)
  }, [currentLocale])

  return (
    <div className='flex flex-col items-center pt-4 '>
      <div className='flex space-x-1 border border-none rounded-[8px] cursor-pointer bg-neutral-700  px-[3px] py-[3.2px] shadow-inner-shadow w-full justify-center'>
        {tabs.map((tab, i) => (
          <button
            key={`${tab.id}-i-${i}`}
            onClick={() => handleTabClick(tab.id)}
            className={`w-full ${
              activeTab === tab.id ? 'text-white ' : 'hover:text-neutral-300/60'
            } relative rounded-[5px] px-3 py-1.5 text-xs sm:text-sm font-medium text-neutral-600  transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-blue-light focus-visible:outline-none`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId='family-bubble'
                className='absolute inset-0 z-10 bg-neutral-800  mix-blend-difference shadow-inner-shadow'
                style={{ borderRadius: 5 }}
                transition={{ type: 'spring', bounce: 0.19, duration: 0.4 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <MotionConfig transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}>
        <motion.div
          className='relative mx-auto my-[10px] w-[150px] overflow-hidden'
          initial={false}
          animate={{ height: bounds.height }}
        >
          <div className='md:p-6 p-2' ref={ref}>
            <AnimatePresence
              custom={direction}
              mode='popLayout'
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={activeTab}
                variants={variants}
                initial='initial'
                animate='active'
                exit='exit'
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  )
}
