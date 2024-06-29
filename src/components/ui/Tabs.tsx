import { motion } from 'framer-motion'
import React from 'react'

interface propType {
  text: string
  selected: boolean
  setSelected: React.Dispatch<React.SetStateAction<string>>
}
const TabMotion = ({ text, selected, setSelected }: propType) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? 'text-black'
          : 'text-black hover:bg-color-1 bg-white transition-0-3s  border border-white'
      } text-xs md:text-sm transition-colors px-4 py-0.5 rounded-2xl relative`}
    >
      <span className='relative z-10'>{text}</span>
      {selected && (
        <motion.span
          layoutId='pill-tab'
          transition={{ type: 'spring', duration: 0.5 }}
          className='absolute inset-0 z-0 bg-gradient-to-r bg-color-1 rounded-2xl border border-white'
        ></motion.span>
      )}
    </button>
  )
}

export default TabMotion
