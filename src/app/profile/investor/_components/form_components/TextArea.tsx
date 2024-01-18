import { cn } from '@/lib/utils'
import { Input } from 'antd'
import React, { ForwardRefRenderFunction } from 'react'
import { TextAreaRef } from 'antd/lib/input/TextArea'
import { TextAreaForwardRefProps } from '@/types/profile'

const { TextArea } = Input

const TextAreaInput: ForwardRefRenderFunction<
  TextAreaRef,
  TextAreaForwardRefProps
> = (
  { wrapperClassName, label, name, className, labelClassName, ...props },
  ref,
) => {
  // console.log("🚀 ~ file: TextArea.tsx:20 ~ props:", props)
  return (
    <div
      className={cn(
        ((name === 'address' || name === 'short-description') &&
          'col-span-2 ') +
          ' relative w-full ' +
          wrapperClassName,
      )}>
      <TextArea
        autoSize={{ minRows: 4, maxRows: 6 }}
        id={name}
        name={name}
        {...props}
        rows={5}
        ref={ref}
        className={cn(
          'peer block min-h-[auto] w-full rounded-sm border-0 !bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none !outline-gray-300 transition-all duration-200 ease-linear focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-400 dark:placeholder:font-normal dark:placeholder:text-neutral-300 dark:peer-focus:text-primary ' +
            className,
        )}
      />

      <label
        htmlFor={name}
        className={cn(
          'pointer-events-none absolute left-3 top-[0.5rem] mb-0 max-w-[90%] origin-[0_0] -translate-y-[1.1rem] scale-[0.8] truncate bg-white p-0 px-[0.022rem] font-medium !text-gray-900 text-black transition-all duration-200 ease-out' +
            (labelClassName && labelClassName),
        )}>
        {label}
      </label>
    </div>
  )
}

export default React.forwardRef(TextAreaInput)
