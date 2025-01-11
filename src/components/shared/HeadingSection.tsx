import { cn } from '@/lib/utils'
import React from 'react'

interface PropTypes {
  className?: string
  text1: string
  text2?: string
}

const HeadingSection = ({ className, text1, text2 }: PropTypes) => {
  return (
    <h2
      className={cn(
        'text-[7vw] font-[900]  text-[#f3d8ba] whitespace-nowrap mb-8 xl:mb-0 px-5 xl:px-0',
        className
      )}
    >
      <span className='text-stroke'>{text1}</span> {text2}
    </h2>
  )
}

export default HeadingSection
