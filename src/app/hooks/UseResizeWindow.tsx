import React, { useState, useEffect } from 'react'

const breakpoint = 900
interface IUseResizeWindowProps {
  breakpoint: number
}

export const UseResizeWindow = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  return { width, breakpoint }
}
