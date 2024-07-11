'use client'
import React, { useEffect, useState } from 'react'
import Header from '../shared/header'
import { AnimatePresence } from 'framer-motion'
import LoadingPage from '../shared/LoadingPage'
import Footer from '../shared/footer'
import Lenis from 'lenis'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

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
      <Header />
      <main className=' flex flex-col min-h-screen relative'>
        <div className='flex-grow flex-1'>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
