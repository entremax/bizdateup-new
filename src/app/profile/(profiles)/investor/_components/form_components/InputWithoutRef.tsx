import { cn } from '@/lib/utils'
import { Input as AntDInput } from 'antd'
import React, { ForwardRefRenderFunction } from 'react'
import { InputRef } from 'antd/lib/input'
import { ForwardRefProps } from '@/types/profile'

const Input: ForwardRefRenderFunction<InputRef, ForwardRefProps> = (
  {
    type = 'text',
    wrapperClassName,
    label,
    name,
    index,
    className,
    onChange,
    changeHandler,
    labelClassName,
    defaultValue,
    ...props
  },
  ref,
) => {
  const change = (value: any) => {
    console.log('🚀 ~ file: InputWithoutRef.tsx:23 ~ change ~ value:', value)
    changeHandler(index, 'fullName', value)
  }

  return (
    <div
      className={cn(
        (name === 'address' && 'col-span-2 ') +
          ' relative w-full ' +
          wrapperClassName,
      )}>
      <AntDInput
        size="large"
        type={type}
        id={name}
        name={name}
        // value={defaultValue}
        // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        //   console.log("🚀 ~ file: InputWithoutRef.tsx:37 ~ event:", event.target.value)
        //   change(event.target.value);
        // }
        // }
        onChange={onChange}
        className={cn(
          'peer block min-h-[auto] w-full rounded-sm border-0 !bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none !outline-gray-300 transition-all duration-200 ease-linear focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-400 dark:placeholder:font-normal dark:placeholder:text-neutral-300 dark:peer-focus:text-primary ' +
            className,
        )}
        value={defaultValue}
        ref={ref}
        {...props}
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
export default React.forwardRef(Input)
