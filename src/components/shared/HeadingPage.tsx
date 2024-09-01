import React from 'react'
import { IconShapes_3 } from '../ui/RenderIcon'

const HeadingPage = ({ text }: { text: string }) => {
  return (
    <div className='flex items-center justify-between gap-3 md:grid grid-cols-3 py-10'>
      <div className='col-span-2'>
        <h1 className='text-md md:text-[7vw] font-bold text-color-3  whitespace-nowrap'>
          {text}
        </h1>
      </div>
      <div>
        <IconShapes_3 className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] ' />
      </div>
    </div>
  )
}

export default HeadingPage
