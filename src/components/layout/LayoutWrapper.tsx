'use client'
import React, { useEffect, useState } from 'react'
import Footer from '../shared/Footer'
import AOS from 'aos'
import Header from '../shared/header'
import { AnimatePresence } from 'framer-motion'
import LoadingPage from '../shared/loading-page'
import LocomotiveScroll from 'locomotive-scroll'

declare module 'locomotive-scroll' {
  interface LocomotiveScroll {}
}

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    AOS.init()
    const locomotiveScroll = new LocomotiveScroll()
    if (isLoading) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
    }, 2000)

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <LoadingPage />}
      </AnimatePresence>
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

export default LayoutWrapper
