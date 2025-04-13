'use client'

import { banner9 } from '@/assets'
import { cn } from '@/lib/utils'
import { MENU_SETTINGS } from '@/setting'
import { AnimatePresence, motion, useMotionValue } from 'motion/react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import React, { useRef } from 'react'

interface PropsType {
  isOpen: boolean
  toggleMenu: () => void
}

const sidebarVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: { x: '100%' },
}
const ListMenuNavMobile = ({ isOpen, toggleMenu }: PropsType) => {
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1]

  const basePath = pathname.replace(`/${currentLocale}`, '') || '/'

  const t = useTranslations('Navbar')
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className={cn('fixed top-0 left-0 w-full h-screen bg-[#ff3c00] z-90')}
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
                      toggleMenu={toggleMenu}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default ListMenuNavMobile

interface propsType {
  heading: string
  href: string
  isActive: boolean
  toggleMenu: () => void
}
const NavLinkAnimated = ({
  heading,
  href,
  isActive,
  toggleMenu,
}: propsType) => {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const navigation = useRouter()

  const handleMouseMove = (e: any) => {
    const refCurrent = ref?.current as any
    if (refCurrent) {
      const rect = refCurrent.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5

      x.set(xPct)
      y.set(yPct)
    }
  }
  const handleNavigation = () => {
    navigation.push(href)
    setTimeout(() => {
      toggleMenu()
    }, 500)
  }
  return (
    <div
      onClick={handleNavigation}
      title={heading}
      className='w-full inline-block cursor-pointer'
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        initial='initial'
        whileHover='whileHover'
        className='group relative flex items-center  justify-end gap-6  2xl:py-1 transition-colors duration-500 '
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: 'spring',
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className={`relative z-10 whitespace-nowrap text-end block font-bold  duration-500 text-white  font-sans hover:text-black transition-colors uppercase text-2xl md:text-4xl lg:text-[5vw] leading-none ${
              isActive ? '!text-black' : 'text-white'
            }`}
          >
            {heading.split('').map((l: string, i: number) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: 'spring' }}
                className='inline-block mr-[2px]'
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
        </div>
      </motion.div>
    </div>
  )
}
