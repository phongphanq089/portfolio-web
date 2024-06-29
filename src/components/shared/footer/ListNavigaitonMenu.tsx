import { footerMenu } from '@/components/contants/menu-list'
import { FooterMenuType } from '@/types'
import Link from 'next/link'
import React from 'react'

const ListNavigaitonMenu = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-12 gap-4 pb-3 relative z-10'>
      {(footerMenu as FooterMenuType[])?.map((navigate, index) => {
        return (
          <div
            className={
              navigate.navigation
                ? 'md:col-span-4 xl:col-span-6'
                : 'md:col-span-4 xl:col-span-3'
            }
            key={`${index}-${navigate.heading}`}
          >
            <h3 className='w-full border-b border-color-4 mb-2 pb-1 font-bold text-[18px] 2xl:text-sm whitespace-nowrap'>
              {navigate.heading}
            </h3>
            <ul>
              {navigate.children?.map((menu, index) => {
                return (
                  <li key={`${index}-${menu.name}`}>
                    {menu.target ? (
                      <Link
                        href={menu.link}
                        className='text-rbg-2 font-medium text-xs 2xl:text-sm'
                        target='_blank'
                      >
                        {menu.name}
                      </Link>
                    ) : (
                      <Link
                        href={menu.link}
                        className='text-rbg-2 font-medium text-xs 2xl:text-sm'
                      >
                        {menu.name}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default ListNavigaitonMenu
