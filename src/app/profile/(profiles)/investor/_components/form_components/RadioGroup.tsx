'use client'
import { cn } from '@/lib/utils'
import { Radio } from 'antd'
import React from 'react'
import { RadioInputProps } from '@/types/profile'

const RadioInput: React.FC<RadioInputProps> = ({
  wrapperClassName,
  label,
  name,
  className,
  labelClassName,
  options,
  defaultValue,
  onChange,
  ...props
}) => {
  // console.log("🚀 ~ file: RadioGroup.tsx:23 ~ props:", props);
  return (
    <div className={cn('relative w-full ' + wrapperClassName)}>
      <Radio.Group
        id={name}
        name={name}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange} // Add the onChange prop
        className={cn(
          'peer block w-full rounded-sm !bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none  transition-all duration-200 ease-linear focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary ' +
            className,
        )}
        {...props}
      />

      <label
        htmlFor={name}
        className={cn(
          'pointer-events-none absolute -top-[0.5rem] left-0 mb-0 max-w-[90%] origin-[0_0] -translate-y-[1.1rem] scale-[0.8] truncate bg-white p-0 px-[0.022rem] font-medium !text-gray-900 text-black transition-all duration-200 ease-out ' +
            (labelClassName && labelClassName),
        )}>
        {label}
      </label>
    </div>
  )
}

export default RadioInput
