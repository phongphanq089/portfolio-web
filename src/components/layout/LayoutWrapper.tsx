'use client'
import Lenis from 'lenis'
import React, { useEffect } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

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
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 bg-gray-100 relative'>{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
