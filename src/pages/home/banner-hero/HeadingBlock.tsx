import GitHubButton from '@/components/shared/GitHubButton'
import React from 'react'

const HeadingBlock = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:translate-y-20 relative z-10  max-sm:p-4'>
      {/* <h2 className='button-style-1 text-xs 2xl:text-sm mb-2'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        PHONG PHAN
      </h2> */}
      <GitHubButton />
      <h3 className='dark:text-color-4 text-sm md:text-lg 3xl:text-xl font-light dark:font-extralight max-w-[500px] 3xl:max-w-[700px] leading-none text-center'>
        Just an ordinary devleoper. From Vietnamese with love.
      </h3>
    </div>
  )
}

export default HeadingBlock
