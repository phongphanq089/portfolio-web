'use client'

import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams: ReadonlyURLSearchParams | null = useSearchParams()

  const updateQueryParams = (newPage: number) => {
    if (searchParams) {
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', newPage.toString())
      replace(`${pathname}?${params.toString()}`)
    }
  }

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      updateQueryParams(newPage)
    }
  }

  const activeTabRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [pathname])

  return (
    <ScrollArea className='w-full pl-3'>
      <div className='pagination flex items-center justify-center gap-3 w-full'>
        {totalPages > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className='w-[50px] h-[50px] flex items-center justify-center bg-color-3 text-white rounded-lg'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-move-left'
            >
              <path d='M6 8L2 12L6 16' />
              <path d='M2 12H22' />
            </svg>
          </button>
        )}

        {totalPages > 1 && (
          <ul className='pagination-list flex items-center cursor-pointer gap-6 py-5'>
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1
              const isActive = currentPage === page

              return (
                <li
                  key={page}
                  ref={isActive ? activeTabRef : null}
                  className={`h-[50px] w-[50px] flex items-center justify-center rounded-lg ${
                    isActive ? 'bg-color-3 text-white' : 'bg-color-4'
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </li>
              )
            })}
          </ul>
        )}

        {totalPages > 1 && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className='w-[50px] h-[50px] flex items-center justify-center bg-color-3 text-white rounded-lg'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-move-right'
            >
              <path d='M18 8L22 12L18 16' />
              <path d='M2 12H22' />
            </svg>
          </button>
        )}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  )
}

export default Pagination
