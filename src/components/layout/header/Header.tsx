'use client'
import React, { useEffect, useState } from 'react'
import Logo from './components/Logo'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import DarkModeToogle from './components/DarkModeToogle'
import { banner9 } from '@/assets'
import NavLinkAnimated from './components/NavItem'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { LanguageSwitchAction } from './components/LanguageSwitch'
import { useWindowScroll } from '@uidotdev/usehooks'
import useIsInViewport from '@/hooks/useIsInViewport'
import { MENU_SETTINGS } from '@/setting'

const sidebarVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: { x: '100%' },
}
const Header = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [{ y }] = useWindowScroll()

  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1]

  const basePath = pathname.replace(`/${currentLocale}`, '') || '/'

  const t = useTranslations('Navbar')

  const interView = useIsInViewport('footer')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  return (
    <>
      <div
        className={cn(
          'fixed top-2 left-3 flex items-center gap-3 z-100',
          y && y > 200 ? 'opacity-0' : ''
        )}
      >
        <Logo />
      </div>
      <div
        className={cn(
          'fixed bottom-0 right-0 z-120',
          interView ? 'hidden' : ''
        )}
      >
        <LanguageSwitchAction />
      </div>
      <div className='fixed top-1 right-0 sm:right-3 flex items-center gap-4  z-130'>
        <DarkModeToogle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='p-3 bg-transparent text-white rounded-full flex flex-col items-center justify-center'
        >
          <motion.div
            className={cn(
              'w-10 sm:w-14  h-1 bg-color-3 dark:bg-color-5 mb-1',
              isOpen ? 'bg-white' : ''
            )}
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={cn(
              'w-10 sm:w-14 h-1 bg-color-3 dark:bg-color-5 mt-1',
              isOpen ? 'bg-white' : ''
            )}
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={cn(
              'fixed top-0 left-0 w-full h-screen bg-[#ff3c00] z-110',
              className
            )}
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={sidebarVariants}
          >
            <div className='md:grid grid-cols-2 p-6 h-full'>
              <div className='flex flex-col gap-2 mt-8'>
                <h3 className='text-[14px] ms:text-sm md:text-md font-bold'>
                  PORTFOLIO 2024
                </h3>
                <div className='w-[150px] lg:w-[300px]'>
                  <div className='wrapImgResize img3And4'>
                    <img src={banner9.src} alt='phong phan' />
                  </div>
                </div>
              </div>
              <div className='h-full flex items-end justify-end '>
                <div className='h-fit max-md:absolute right-3 top-[50%]'>
                  {MENU_SETTINGS.map((item, index) => {
                    const localizedPath = `/${currentLocale}${item.link === '/' ? '' : item.link}`
                    const isActive = basePath === item.link
                    return (
                      <NavLinkAnimated
                        heading={t(item.name)}
                        href={localizedPath}
                        isActive={isActive}
                        key={index}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
