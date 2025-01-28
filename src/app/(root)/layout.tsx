import LayoutWrapper from '@/components/layout/LayoutWrapper'
import LoadingLayout from '@/components/layout/LoadingLayout'
import Footer from '@/components/shared/Footer/Index'
import Header from '@/components/shared/header/Header'
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
    <LayoutWrapper>
      <Header />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'> {children}</main>
      </div>
      <Footer footer={footeNav as SanityDocument} />
    </LayoutWrapper>
  )
}

export default LayoutRoot
