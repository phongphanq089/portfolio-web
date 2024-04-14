'use client'
import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
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
