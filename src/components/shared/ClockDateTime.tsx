'use client'

import React, { useEffect, useState } from 'react'

const ClockDateTime = () => {
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

  return <div className='relative z-10 dark:text-color-4'>{time}</div>
}

export default ClockDateTime
