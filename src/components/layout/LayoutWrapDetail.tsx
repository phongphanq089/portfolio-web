'use client'
import React, { useEffect } from 'react'
import Header from '../shared/header'
import Footer from '../shared/footer'
import Lenis from 'lenis'

const LayoutWrapperDetail = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <div className='container-2xl'>
        <Header />
      </div>
      <main className=' flex flex-col min-h-screen relative'>
        <div className='flex-grow flex-1'>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default LayoutWrapperDetail
