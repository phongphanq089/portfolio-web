import React from 'react'
import StackingCardsDemo from './components/ListQuote'
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import { QuotesQuery } from '@/sanity/lib/query'
import ZoomParallax from './components/ZoomParallax'
import { MoveDown } from 'lucide-react'

const PageQuote = async () => {
  let listQuotes
  try {
    listQuotes = await sanityClientFetch.fetch(QuotesQuery)
  } catch (error) {
    console.error('Error fetching categories:', error)
  }

  return (
    <div className='relative z-10'>
      <div className='relative font-calendas h-[20vh] mt-[200px] w-full z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center text-primary-color whitespace-pre'>
        Scroll down <MoveDown size={60} />
      </div>
      <ZoomParallax />
      <div className='container-3xl py-20 '>
        <StackingCardsDemo listQuotes={listQuotes} />
      </div>
    </div>
  )
}

export default PageQuote
