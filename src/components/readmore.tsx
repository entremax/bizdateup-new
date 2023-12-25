'use client'
import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from 'antd'

export default function Description({ text }: { text: string }) {
  const [showMore, setShowMore] = useState(false)
  const [overflowing, setOverflowing] = useState(false)
  const contentRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const isOverflowing =
          contentRef.current.scrollHeight > contentRef.current.clientHeight
        setOverflowing(isOverflowing)
      }
    }

    checkOverflow() // Initial check

    const handleResize = () => {
      checkOverflow() // Check for overflow on window resize
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleToggle = () => {
    setShowMore(!showMore)
  }

  return (
    <div className="relative">
      <p
        ref={contentRef}
        className={cn(
          'reset pb-2 text-sm font-normal text-gray-400 md:text-base',
        )}
        // style={{ WebkitLineClamp: overflowing ? "unset" : 2 }}
      >
        {text}
      </p>
      {overflowing && (
        <Button onClick={handleToggle} type="link">
          {showMore ? 'less' : 'more'}
        </Button>
      )}
    </div>
  )
}
