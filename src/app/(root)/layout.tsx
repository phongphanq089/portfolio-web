import LayoutWrapper from '@/components/layout/LayoutWrapper'
import LoadingLayout from '@/components/layout/LoadingLayout'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/header/Header'
import React from 'react'

const LayoutRoot = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <LayoutWrapper>
      <Header />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1  relative'> {children}</main>
      </div>
      <Footer />
    </LayoutWrapper>
  )
}

export default LayoutRoot
