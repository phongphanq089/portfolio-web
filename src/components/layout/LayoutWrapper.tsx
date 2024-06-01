'use client'
import React, { useEffect } from 'react'
import Footer from '../shared/Footer'
import AOS from 'aos'
import Header from '../shared/header'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Header />
      <main className=' flex flex-col min-h-screen relative'>
        <div className='flex-grow flex-1'>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
