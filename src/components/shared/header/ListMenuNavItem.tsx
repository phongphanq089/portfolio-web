'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

interface PropsType {
  navItem: {
    name: string
    link: string
  }
  index: number
  itemVariants: any
}

const ListMenuNavItem = ({ navItem, index, itemVariants }: PropsType) => {
  return (
    <motion.li
      key={index}
      className='min-w-[200px] relative bg-color-3 dark:bg-color-4 px-4 py-2 rounded-sm border'
      variants={itemVariants}
    >
      <motion.div initial='rest' whileHover='hover' animate='rest'>
        <Link href={navItem.link} className='whitespace-nowrap'>
          <span>{navItem.name}</span>
          <div className='absolute top-1/2 -translate-y-1/2 right-2'>
            <div className='realative overflow-hidden'>
              <motion.span
                className='absolute top-[-9px] right-0'
                variants={{
                  rest: { x: 0, opacity: 1 },
                  hover: { x: 20, opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                [ 0{index + 1} ]
              </motion.span>
              <motion.span
                className='absolute top-[-9px] right-0'
                variants={{
                  rest: { x: -20, opacity: 0 },
                  hover: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              >
                ➔
              </motion.span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.li>
  )
}

export default ListMenuNavItem
