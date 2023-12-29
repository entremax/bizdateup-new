import React from 'react'
import Link, { LinkProps } from 'next/link'
import { cn } from '@/lib/utils'

interface Props extends LinkProps {
  title?: string
  className?: string
  children?: React.ReactNode
}

const Button = ({ title = '', className, ...props }: Props) => {
  return (
      <Link
        {...props}
        className={cn(
          'w-full py-3 bg-primary !text-white rounded-md flex items-center justify-center ' +
            className,
        )}>
        {props.children ?? title}
      </Link>
  )
}

export default Button
