'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import IconCore from '../ui/IconCore'

interface PropsTabList {
  tabs: string[]
  className_1?: string
  className_2?: string
}
const TabsAnimation = ({ tabs, className_1, className_2 }: PropsTabList) => {
  const [isOpenMenu, setIsOpen] = useState(true)
  const [selected, setSelected] = useState(tabs[0])
  return (
    <div className='relative'>
      {isOpenMenu && (
        <div
          className={`bottom-[70px] xs:bottom-0 border border-color-3 xs:border-none left-1/2 xs:left-0 -translate-x-1/2 xs:translate-x-[unset] w-[95%] xs:w-full bg-light xs:bg-transparent fixed xs:relative z-[900] rounded-2xl py-1 ${className_1}`}
        >
          <div
            className={`px-2 py-4 rounded-2xl items-center gap-2 flex flex-wrap justify-center ${className_2}`}
          >
            {tabs.map((tab) => (
              <TabMotion
                text={tab}
                selected={selected === tab}
                setSelected={setSelected}
                key={tab}
                className='xs:w-fit py-1'
              />
            ))}
          </div>
        </div>
      )}

      <div
        onClick={() => setIsOpen(!isOpenMenu)}
        className='flex items-center justify-between px-3 xs:hidden border border-color-3 rounded-2xl fixed bottom-2 left-1/2 -translate-x-1/2 w-[95%] z-[900] bg-color-3 py-1'
      >
        <div>
          <IconCore icon='list-plus' className='fill-light' />
        </div>
        <span className='text-xs font-semibold text-light'>List option</span>
      </div>
    </div>
  )
}
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
            : 'text-light hover:bg-color-1 bg-color-3 transition-0-3s  border border-color-3'
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

export default TabsAnimation
