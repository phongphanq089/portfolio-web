'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import Logo from './components/Logo'
import ListMenuNavDesktop from './components/ListMenuNavDesktop'
import LanguageSwitch from './components/LanguageSwitch'
import { motion } from 'motion/react'
import ListMenuNavMobile from './components/ListMenuNavMobile'
import { useWindowScroll } from '@uidotdev/usehooks'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const [size] = useState(15)

  const gap = 5

  const [{ y }] = useWindowScroll()

  const gridVariants = {
    closed: (i: number) => ({
      x: (i % 2) * (size + gap) - (size + gap) / 2,
      y: Math.floor(i / 2) * (size + gap) - (size + gap) / 2,
      borderRadius: '10%',
      width: size,
      height: size,
    }),
    open: {
      x: 0,
      y: 0,
      borderRadius: '50%',
      width: size * 2,
      height: size * 2,
    },
  }

  return (
    <div className='fixed top-2 flex justify-between items-center w-full z-100 w-ful px-5'>
      <div
        className={cn(
          ' flex items-center',
          y && y > 200 ? 'max-xl:opacity-0' : ''
        )}
      >
        <Logo />
      </div>

      <div className=''>
        <ListMenuNavDesktop />
        <ListMenuNavMobile isOpen={isOpen} />
      </div>
      <div className='flex items-center gap-4'>
        <LanguageSwitch />
        <div
          className='relative z-100 w-[50px] h-[50px] flex justify-center items-center xl:hidden'
          onClick={toggleMenu}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              custom={i}
              initial='closed'
              animate={isOpen ? 'open' : 'closed'}
              variants={gridVariants}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className={cn(
                'absolute w-[20px] h-[20px] ',
                isOpen ? 'bg-white' : 'bg-primary-color'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
