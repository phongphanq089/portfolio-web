import React from 'react'
import Avatar from './Avatar'
import BlockAbout from './BlockAbout'
import DailyTech from './DailyTech'
import Experience from './Experience'

const Service = () => {
  return (
    <div className='min-h-screen mb-20'>
      <div className='max-w-6xl mx-auto'>
        <div className='lg:grid grid-cols-12 gap-6'>
          <div className='w-full h-fit max-lg:relative lg:sticky  top-[100px] z-10 col-span-4'>
            <Avatar />
          </div>
          <div className='w-full col-span-8 relative z-10'>
            <BlockAbout />
            <Experience />
            <DailyTech />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
