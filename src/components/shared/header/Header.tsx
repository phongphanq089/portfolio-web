import React from 'react'
import ClockDateTime from '../ClockDateTime'
import ListMenuNav from './ListMenuNav'

const Header = () => {
  return (
    <header className='container-4xl py-2'>
      <div className='flex gap-20 items-center'>
        <h1 className='text-md font-bold mb-0'>BuyPhong©</h1>
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
