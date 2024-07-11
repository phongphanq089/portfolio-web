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
      className={`btn-open-menu cursor-pointer fixed top-4 right-4 rounded-full w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] bg-color-4 z-[999] flex items-center justify-center flex-col ${
        isActive ? 'flex active-btn opacity-1' : 'opacity-0'
      }`}
    >
      <span className={`menu-icon ${menuIsOpen ? 'active-menu' : ''}`}></span>
    </div>
  )
}

export default BtnOpenMenu
