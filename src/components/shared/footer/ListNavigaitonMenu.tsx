import { footerMenu } from '@/components/contants/menu-list'
import { LinkPreview } from '@/components/ui/LinkPreview'
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
            <h3 className='w-full border-b border-[#9ca3af] mb-2 pb-1 font-bold text-[18px] xl:text-sm whitespace-nowrap'>
              {navigate.heading}
            </h3>
            <ul>
              {navigate.children?.map((menu, index) => {
                return (
                  <li key={`${index}-${menu.name}`}>
                    {menu.target ? (
                      <LinkPreview
                        url={menu.link}
                        imageSrc={menu.image}
                        isStatic
                        className='text-color-3 font-normal text-[18px]  md:text-xs xl:text-sm'
                      >
                        {menu.name}
                      </LinkPreview>
                    ) : (
                      <Link
                        href={menu.link}
                        className='text-color-3 font-normal text-[18px] md:text-xs xl:text-sm'
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