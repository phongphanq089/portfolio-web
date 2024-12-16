'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import ListMenuNavItem from './ListMenuNavItem'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import DarkModeToogle from '../DarkModeToogle'

const menuNav = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Resoures',
    link: '/resoures',
  },
  {
    name: 'Project',
    link: '/project',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Life - advice',
    link: '/life-advice',
  },
]

const ListMenuNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  }

  return (
    <nav className='fixed top-3 right-3 z-[900]'>
      <div className='flex flex-col items-end gap-3'>
        <div className='flex items-center gap-4'>
          <DarkModeToogle />
          <button
            className='size-14 relative p-2 center gap-[4px] cursor-pointer bg-color-3 dark:bg-color-4 text-white flex rounded-full flex-col items-center justify-center'
            onClick={toggleMenu}
          >
            {Array.from({ length: 2 }).map((_, index) => {
              const rotateAngle = index % 2 === 0 ? 45 : -45
              const changeY = index % 2 === 0 ? 3 : -3

              return (
                <motion.span
                  key={index}
                  animate={{
                    rotate: isOpen ? rotateAngle : 0,
                    y: isOpen ? changeY : 0,
                  }}
                  className='w-8 !h-[2px] bg-color-4 dark:bg-color-3 block'
                />
              )
            })}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className='text-xs text-color-4 dark:text-black font-semibold  flex flex-col gap-3'
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ staggerChildren: 0.1 }}
            >
              {menuNav.map((item, index) => {
                return (
                  <ListMenuNavItem
                    navItem={item}
                    index={index}
                    key={index}
                    itemVariants={itemVariants}
                  />
                )
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default ListMenuNav
