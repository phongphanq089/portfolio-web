'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface PropsType {
  className?: string
}
const ClockDateTime = ({ className }: PropsType) => {
  const [time, setTime] = useState('')

  const getFormattedTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Ho_Chi_Minh',
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }
    const formatter = new Intl.DateTimeFormat('en-US', options)
    return `Viet Nam, ${formatter.format(new Date())}`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn('relative z-10 dark:text-color-4', className)}>
      {time}
    </div>
  )
}

export default ClockDateTime
