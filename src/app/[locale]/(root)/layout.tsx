import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import React from 'react'

const LayoutRoot = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'> {children}</main>

        <Footer />
      </div>
    </>
  )
}

export default LayoutRoot
