import React from 'react'

const BtnCloseMenu = ({ openMenu }: { openMenu: () => void }) => {
  return (
    <div
      onClick={() => {
        openMenu()
      }}
      className='cursor-pointer absolute top-4 right-4 rounded-full w-[80px] h-[80px] bg-color-4 z-[9999] flex items-center justify-center flex-col'
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
      <span className='text-[#fff] font-medium'>CLOSE</span>
    </div>
  )
}

export default BtnCloseMenu
