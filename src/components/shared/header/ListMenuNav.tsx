'use client'
import React from 'react'

import { navbarList } from '@/setting'
import ListMenuNavItem from './ListMenuNavItem'

const ListMenuNav = () => {
  return (
    <div className={'nav'}>
      <div className={'body'}>
        {navbarList.map((item, i) => {
          return <ListMenuNavItem key={`b_${i}`} navItem={item} index={i} />
        })}
      </div>
    </div>
  )
}

export default ListMenuNav
