'use client'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { categoryResource } from '@/types'

interface ButtonProps {
  title: string
  index?: number
  activeIndex: number
  onTabClick: (index: number) => void
}

const Button = ({ title, index, activeIndex, onTabClick }: ButtonProps) => {
  return (
    <div
      className={cn('rounded-lg bg-primary-color', {
        'border-b-2 border-primary-color': index === activeIndex,
      })}
      onClick={() => onTabClick(index!)}
    >
      <div
        className={cn(
          'flex text-black h-10 cursor-pointer items-center justify-center rounded-md border-2 bg-white p-3 transition-all',
          {
            'border-2 border-primary-color text-primary-color':
              index === activeIndex,
            'origin-top-right ease-in hover:rotate-6': index !== activeIndex,
          }
        )}
      >
        <p className='p-2 text-center font-mono max-sm:font-semibold max-sm:text-[12px] '>
          {title}
        </p>
      </div>
    </div>
  )
}

export default function ShiftTabs({ items }: { items: categoryResource[] }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const getCategory = searchParams.get('categoried')

  const [activeTab, setActiveTab] = useState(0)

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)
    return params.toString()
  }

  useEffect(() => {
    // const firstItemSlug = items[0]?.slug.current.toLowerCase()
    const firstItemSlug = 'all'

    if (firstItemSlug && !getCategory) {
      router.push(
        `${pathname}?${createQueryString('categoried', firstItemSlug)}`
      )
    } else if (getCategory) {
      const index = items.findIndex(
        (item) => item.slug.current.toLowerCase() === getCategory.toLowerCase()
      )
      if (index !== -1 && index !== activeTab) {
        setActiveTab(index)
      }
    }
  }, [getCategory, items, pathname, router])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    const selectedItem = items[index].slug.current.toLowerCase()

    router.push(`${pathname}?${createQueryString('categoried', selectedItem)}`)
  }
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-2 sm:gap-4'>
      {items.map((item, index) => (
        <Button
          onTabClick={handleTabClick}
          title={item.title}
          activeIndex={activeTab}
          index={index}
          key={item._id}
        />
      ))}
    </div>
  )
}
