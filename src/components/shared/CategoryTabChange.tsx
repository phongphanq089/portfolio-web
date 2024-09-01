'use client'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoryTabChange = ({
  category,
  path,
}: {
  category: SanityDocument
  path: string
}) => {
  const pathname = usePathname()
  return (
    <ul className='flex items-center gap-2 flex-wrap '>
      {category?.map((item: SanityDocument, index: number) => {
        return (
          <li key={`${item.title}- ${index}`}>
            <Link
              href={`${path}/${item.slug.current}`}
              className={` flex items-center justify-center rounded-sm gap-1 w-full h-full  justify-centers  min-w-8 p-1  ${pathname === `${path}/${item.slug.current}` ? 'bg-color-1 text-color-3' : 'bg-color-3 text-white'}`}
            >
              <span className='inline-block relative z-10 '>{item?.title}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CategoryTabChange
