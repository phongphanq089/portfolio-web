'use client'
import { SanityDocument } from 'next-sanity'
import { useEffect, useState } from 'react'

export const useHookPagination = (items: SanityDocument, perPage: number) => {
  const [currentItems, setCurrentItems] = useState(items.slice(0, perPage))
  const [pageCount, setPageCount] = useState(Math.ceil(items.length / perPage))
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + perPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / perPage))
  }, [itemOffset, perPage, items])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * perPage) % items.length
    setItemOffset(newOffset)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return { currentItems, pageCount, handlePageClick }
}
