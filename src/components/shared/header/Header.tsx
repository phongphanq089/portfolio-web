'use client'
import React from 'react'
import ClockDateTime from '../ClockDateTime'
import ListMenuNav from './ListMenuNav'
import Logo from '../Logo'
import { useWindowScroll } from '@uidotdev/usehooks'
import { cn } from '@/lib/utils'

const Header = () => {
  const [{ y }] = useWindowScroll()
  return (
    <header className='container-4xl py-2 max-sm:mt-[40px] fixed top-0 left-0 z-[9999] w-full px-5'>
      <div
        className={cn(
          'flex flex-col sm:flex-row sm:gap-20 sm:items-center',
          y && y > 200 ? 'hidden' : ''
        )}
      >
        <h1 className='text-[0px] font-[900] mb-0'>
          Phong Phan
          <Logo />
        </h1>
        <span className='text-[18px] font-medium'>
          {' '}
          <ClockDateTime />
        </span>
      </div>
      <ListMenuNav />
    </header>
  )
}

export default Header
