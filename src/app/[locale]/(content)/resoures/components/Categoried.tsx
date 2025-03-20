'use client'
import ShiftTabs from '@/components/ui/ShiftTabs'
import { categoryResource } from '@/types'
import React from 'react'

interface CategoriedProps {
  initialData: categoryResource[]
}

const Categoried = ({ initialData }: CategoriedProps) => {
  const categoried = initialData || []
  return (
    <div>
      {categoried.length > 0 ? (
        <ShiftTabs items={categoried} />
      ) : (
        <div>No categories available</div>
      )}
    </div>
  )
}

export default Categoried
