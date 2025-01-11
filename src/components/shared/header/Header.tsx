import React from 'react'
import ClockDateTime from '../ClockDateTime'
import ListMenuNav from './ListMenuNav'
import Logo from '../Logo'

const Header = () => {
  return (
    <header className='container-4xl py-2 max-sm:mt-[30px]'>
      <div className='flex flex-col sm:flex-row sm:gap-20 sm:items-center'>
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
