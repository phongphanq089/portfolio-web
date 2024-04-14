'use client'
import React, { useEffect } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer_v2'
import AOS from 'aos'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Header />
      <main className=' flex flex-col min-h-screen relative'>
        <div className='flex-grow flex-1 mt-[20px]'>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
