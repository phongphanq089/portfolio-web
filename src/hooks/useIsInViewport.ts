'use client'
import { useEffect, useState } from 'react'

const useIsInViewport = (id: string) => {
  const [isInViewport, setIsInViewport] = useState(false)

  useEffect(() => {
    const element = document.getElementById(id)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(element as Element)

    return () => {
      observer.unobserve(element as Element)
      observer.disconnect()
    }
  }, [id])
  return isInViewport
}

export default useIsInViewport
