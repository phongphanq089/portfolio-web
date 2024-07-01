'use client'
import React from 'react'
import Header from '../shared/header'
import Footer from '../shared/footer'

const LayoutWrapperDetail = ({ children }: { children: React.ReactNode }) => {
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
