import React from 'react'
import StackingCardsDemo from './components/ListQuote'
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import { QuotesQuery } from '@/sanity/lib/query'

const PageQuote = async () => {
  let listQuotes
  try {
    listQuotes = await sanityClientFetch.fetch(QuotesQuery)
  } catch (error) {
    console.error('Error fetching categories:', error)
  }

  return (
    <div className='container-3xl py-20 relative z-10'>
      <StackingCardsDemo listQuotes={listQuotes} />
    </div>
  )
}

export default PageQuote
