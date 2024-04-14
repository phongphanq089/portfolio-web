import CardBlog from '@/components/ui/CardBlog'
import React from 'react'

const ListBlog = () => {
  return (
    <div className='container-xxl'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <CardBlog />
      </div>
    </div>
  )
}

export default ListBlog
