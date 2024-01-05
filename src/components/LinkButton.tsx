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
        'flex w-full items-center justify-center rounded-md bg-primary py-3 !text-white ' +
          className,
      )}>
      {props.children ?? title}
    </Link>
  )
}

export default Button
