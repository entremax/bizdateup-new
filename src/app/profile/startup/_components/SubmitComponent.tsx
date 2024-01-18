import { Button } from 'antd'
import React from 'react'
import { ButtonProps } from 'antd/lib'
import { cn } from '@/lib/utils'

export default function SubmitComponent<T extends ButtonProps>({
  ...props
}: T) {
  return (
    <div className=" fixed inset-0 bottom-0 top-auto flex items-center border-0 border-t border-solid border-gray-300 bg-white p-4 shadow-2xl sm:static md:w-1/6 md:justify-self-end md:border-0 md:bg-transparent md:shadow-none">
      <Button
        className={cn(
          `!h-auto !border-none !bg-primary !px-6 !text-lg font-medium !text-white !outline-none md:inline-block md:!bg-primary md:!text-white ${props.className}`,
        )}
        size={'large'}
        block
        {...props}>
        Save
      </Button>
    </div>
  )
}
