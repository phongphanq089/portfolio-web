import Header from '@/components/layout/header/Header'
import WrapperProvider from '@/providers/WrapperProvider'
import { footerQuery } from '@/sanity/query'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import React from 'react'

const LayoutRoot = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const footeNav = await sanityFetch<SanityDocument>({
    query: footerQuery,
  })
  return (
    <WrapperProvider>
      <Header />
      <div className='min-h-screen flex flex-col '>
        <main className='flex-1'> {children}</main>
      </div>
      {/* <Footer footer={footeNav as SanityDocument} /> */}
    </WrapperProvider>
  )
}

export default LayoutRoot
