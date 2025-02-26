import { motion } from 'motion/react'
import React, { useState } from 'react'

interface propType {
  text: string
  selected: boolean
  className?: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}
const TabMotion = ({ text, selected, setSelected, className }: propType) => {
  return (
    <>
      <button
        onClick={() => setSelected(text)}
        className={`${
          selected
            ? 'text-black'
            : 'text-black hover:bg-color-1 bg-white transition-0-3s  border border-color-3'
        } text-xs md:text-sm transition-colors px-4 py-0.5 rounded-2xl relative ${className}`}
      >
        <span className='relative z-10'>{text}</span>
        {selected && (
          <motion.span
            layoutId='pill-tab'
            transition={{ type: 'spring', duration: 0.5 }}
            className='absolute inset-0 z-0 bg-gradient-to-r bg-color-1 rounded-2xl border border-color-3 '
          ></motion.span>
        )}
      </button>
    </>
  )
}

export default TabMotion
