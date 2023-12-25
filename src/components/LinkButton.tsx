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
      <Link {...props}
            className={cn('justify-self-start my-8 !text-[#fff] bg-[#8686F5] hover:bg-[#7d7df5] w-full text-center md:w-[215px] !rounded-[7.563px] !border-[#8686F5] !border-none py-5 px-12 outline-[#8686F5] cursor-pointer font-medium ' + className)}>
        {props.children ?? title}
      </Link>
    </>
  )
}

export default Button
