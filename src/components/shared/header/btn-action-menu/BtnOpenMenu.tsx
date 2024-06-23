import React from 'react'
const BtnOpenMenu = ({
  openMenu,
  isActive,
  menuIsOpen,
}: {
  openMenu: () => void
  isActive: boolean
  menuIsOpen: boolean
}) => {
  return (
    <div
      onClick={() => {
        openMenu()
      }}
      className={`btn-open-menu cursor-pointer fixed top-4 right-4 rounded-full w-[80px] h-[80px] bg-rbg-2 z-[990] flex items-center justify-center flex-col ${
        isActive ? 'flex active-btn opacity-1' : 'opacity-0'
      }`}
    >
      <svg
        width='56'
        height='8'
        viewBox='0 0 56 7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          x1='56'
          y1='0.5'
          x2='4.37114e-08'
          y2='0.500005'
          stroke='white'
          strokeWidth='2'
        />
        <line
          x1='56'
          y1='6.5'
          x2='28'
          y2='6.5'
          stroke='white'
          strokeWidth='2'
        />
      </svg>
      <span className='text-[#fff] font-medium'>
        {menuIsOpen ? 'CLOSE' : 'MENU'}
      </span>
    </div>
  )
}

export default BtnOpenMenu
