'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useState } from 'react'
import TableOfContent from './TableOfContent'
import { ArrowRightToLine, X } from 'lucide-react'
import { motion } from 'framer-motion'

const ExtractHeadings = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='xl:hidden p-3  fixed z-[99998] top-0 left-0 rounded-full bg-color-3 dark:bg-color-5'
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowRightToLine size={24} className='text-white dark:text-black' />
      </button>
      <motion.div
        className='max-xs:max-w-[350px] fixed h-full xl:h-fit xl:sticky left-0 top-0 xl:top-10 z-[99999] xl:!translate-x-0'
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        // transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      >
        <button
          className='xl:hidden p-3 absolute top-2 right-2 rounded-full bg-color-3 dark:bg-color-5 z-50'
          onClick={() => setIsOpen(!isOpen)}
        >
          <X size={24} className='text-white dark:text-black' />
        </button>
        {/* <ScrollArea className='h-full w-full pr-3 bg-white dark:bg-neutral-900 rounded-md border'></ScrollArea> */}
        <TableOfContent
          className='w-full h-full rounded-lg py-3'
          idOfParentContainer='parent-content'
        />
      </motion.div>
    </>
  )
}

export default ExtractHeadings
