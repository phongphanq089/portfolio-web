import LayoutWrapper from '@/components/layout/LayoutWrapper'
import Footer from '@/components/shared/Footer/Index'
import Header from '@/components/shared/header/Header'
import { footerQuery } from '@/lib/queries-data'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import React from 'react'

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const footeNav = await sanityFetch<SanityDocument>({
    query: footerQuery,
  })
  return (
    <>
      <Header />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'> {children}</main>
      </div>
      <Footer footer={footeNav as SanityDocument} />
    </>
  )
}

export default Layout
