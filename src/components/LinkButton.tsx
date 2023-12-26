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
    <>
      <Link
        {...props}
        className={cn(
          'my-8 flex w-full cursor-pointer items-center justify-center justify-self-start !rounded-[7.563px] !border-none !border-[#8686F5] bg-[#8686F5] px-6 py-5 text-center font-medium text-[#fff] outline-[#8686F5] hover:bg-[#7d7df5] lg:px-12 ' +
            className,
        )}>
        {props.children ?? title}
      </Link>
    </>
  )
}

export default Button
