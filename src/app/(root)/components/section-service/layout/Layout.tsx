'use client'
import React from 'react'
import BlockAbout from './BlockAbout'
import InfomationMe from './InfomationMe'
import DailyTech from './DailyTech'
import { GlobeDemo } from './GlobalBlock'
import { SkeletonTwo } from './Skeleton'

const Layout = () => {
  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-12 gap-2 py-10 text-white'>
        <div className='col-span-3 xl:pb-[200px] px-4'>
          <BlockAbout />
        </div>
        <div className='col-span-5 border-r border-l border-neutral-700 xl:pb-[200px] px-4'>
          <div className='w-full h-full'>
            <InfomationMe />
            <DailyTech />
          </div>
        </div>
        <div className='col-span-4 xl:pb-[200px]'>
          <SkeletonTwo />
          <GlobeDemo />
        </div>
      </div>

      {/* BG GRADIENT */}
      <div className='relative z-30 block w-full h-32 bg-gradient-to-t from-dark to-transparent -mt-36'></div>
      <div className='relative z-30 block w-full h-32 bg-gradient-to-t from-dark to-transparent -mt-36'></div>
      <div className='relative z-30 block w-full h-32 bg-gradient-to-t from-dark to-transparent -mt-36'></div>
      <div className='relative z-30 block w-full h-32 bg-gradient-to-t from-dark to-transparent -mt-36'></div>
    </>
  )
}

export default Layout
