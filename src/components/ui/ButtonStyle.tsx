'use client'
import { cn } from '@/utils/cn'
import React, { ReactNode } from 'react'
import { Button } from './button'

interface buttonProps {
  className?: string
  children: ReactNode
  icon?: JSX.Element
}

const ButtonStyle = ({ className, children, icon }: buttonProps) => {
  return (
    <Button
      className={cn(
        'w-fit flex items-center gap-2 button-style rounded-full bg-color-1',
        className
      )}
    >
      <div className='svg-wrapper'>{icon && icon}</div>
      {children}
    </Button>
  )
}

export default ButtonStyle
