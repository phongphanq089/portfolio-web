'use client'
import React from 'react'
import { motion } from 'framer-motion'
import NavLinkAnimated from './NavLinkAnimated'
import { opacity } from '@/settings/motion'
import Image from 'next/image'
import { navbarItems } from '@/components/contants/menu-navbar'

const LinkNavBar = () => {
  return (
    <div className='p-4'>
      <motion.div className='w-full relative' variants={opacity}>
        {navbarItems?.map((item, index) => {
          return (
            <NavLinkAnimated
              heading={item.title}
              subTitle={`${index + 1}`}
              imgSrc={item.imgSrc}
              href={item.link}
              isNotfound={item.isNotfound}
              key={index}
            />
          )
        })}
      </motion.div>
    </div>
  )
}

export default LinkNavBar
