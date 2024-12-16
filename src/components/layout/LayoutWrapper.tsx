'use client'
import Lenis from 'lenis'
import React, { useEffect } from 'react'
import NeonCursor from '../shared/NeonCursor'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <React.Fragment>
      {/* <NeonCursor /> */}
      {children}
    </React.Fragment>
  )
}

export default LayoutWrapper
