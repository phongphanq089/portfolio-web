'use Client'
import { cn } from '@/lib/utils'
import React from 'react'

interface props {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  isActive: boolean
  className?: string
}
const CloseMenuNav = (props: props) => {
  const { setIsActive, isActive, className } = props
  return (
    <div
      onClick={() => {
        setIsActive(!isActive)
      }}
      className={cn('button bg-white fixed top-4 right-4 z-50', className)}
    >
      <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
    </div>
  )
}

export default CloseMenuNav
