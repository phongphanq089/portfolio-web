/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Lenis from 'lenis'
import React, { useEffect } from 'react'
import useFluidCursor from '../ui/usefluidCursor'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    useFluidCursor()
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <React.Fragment>
      <div className='fixed top-0 left-0 -z-[1]'>
        <canvas id='fluid' className='w-screen h-screen' />
      </div>
      {/* <NeonCursor /> */}
      {children}
    </React.Fragment>
  )
}

export default LayoutWrapper
