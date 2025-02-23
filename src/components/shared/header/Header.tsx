'use client'
import React, { useEffect, useRef, useState } from 'react'
import ClockDateTime from '../ClockDateTime'
import ListMenuNav from './ListMenuNav'
import Logo from '../Logo'
import { useWindowScroll } from '@uidotdev/usehooks'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import ButtonMenu from './action-menu/ButtonMenu'
import DarkModeToogle from '../DarkModeToogle'

const Header = ({ className }: { className?: string }) => {
  const [{ y }] = useWindowScroll()

  const [isActive, setIsActive] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)

  const [menuWidth, setMenuWidth] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 768
      ? '330px'
      : '480px'
  )

  useEffect(() => {
    const handleResize = () => {
      setMenuWidth(window.innerWidth <= 768 ? '330px' : '480px')
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsActive(false)
      }
    }

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isActive])

  const menu = {
    open: {
      width: menuWidth,
      height: '80vh',
      top: '-10px',
      right: '-10px',
      transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: '100px',
      height: '40px',
      top: '0px',
      right: '0px',
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: 'tween',
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <>
      <div className='fixed bottom-2 right-2 z-50'>
        <DarkModeToogle />
      </div>
      <header
        className={cn(
          'container-4xl py-2 max-sm:mt-[40px] fixed top-0 left-0 z-[9999] w-full px-5',
          className
        )}
      >
        <div
          className={cn(
            'flex flex-col sm:flex-row sm:gap-20 sm:items-center',
            y && y > 200 ? 'opacity-0' : ''
          )}
        >
          <h1 className='text-[0px] font-[900] mb-0'>
            Phong Phan
            <Logo />
          </h1>
          <span className='text-[18px] font-medium'>
            {' '}
            <ClockDateTime />
          </span>
        </div>
      </header>
      <div className={'header z-[9999]'} ref={menuRef}>
        <motion.div
          className='menu'
          variants={menu}
          animate={isActive ? 'open' : 'closed'}
          initial='closed'
        >
          <AnimatePresence>{isActive && <ListMenuNav />}</AnimatePresence>
        </motion.div>
        <ButtonMenu
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive)
          }}
        />
      </div>
    </>
  )
}

export default Header
