'use client'
import React, { useEffect, useState } from 'react'

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <span
        onClick={scrollToTop}
        className='inline-block text-center md:text-end cursor-pointer text-[18px] 2xl:text-sm font-medium transition-0-3s hover:opacity-75 leading-none'
      >
        Back To Top ↑
      </span>
    </>
  )
}

export default ScrollTop
