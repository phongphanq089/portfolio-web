import { cn } from '@/lib/utils'
import React, { useRef } from 'react'

export default function Text3d({
  primary,
  secondary,
  className,
}: {
  primary: string
  secondary: string
  className?: string
}) {
  const text1 = useRef(null)
  const text2 = useRef(null)

  return (
    <div className='text-3d-animation'>
      <p className={cn('primary', className)} ref={text1}>
        {primary}
      </p>
      <p className={cn('secondary', className)} ref={text2}>
        {secondary}
      </p>
    </div>
  )
}
