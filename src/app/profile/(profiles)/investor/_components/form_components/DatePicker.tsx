import { cn } from '@/lib/utils'
import { DatePicker as AntDDatePicker } from 'antd'
import React, { ForwardRefRenderFunction } from 'react'
import PickerRef, { DatePickerProps } from 'antd/lib/date-picker'
import { ForwardRefProps } from '@/types/profile'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

interface PickerProps extends ForwardRefProps {
  defaultTimeValue?: string | number | Dayjs | Date | null | undefined
  onChangeHandler?: any
}

const DatePicker: ForwardRefRenderFunction<typeof PickerRef, PickerProps> = (
  {
    wrapperClassName,
    label,
    name,
    className,
    labelClassName,
    onChange,
    onChangeHandler,
    defaultTimeValue,
    defaultValue,
    ...props
  },
  ref,
) => {
  // const changeHandler = (x :any ,y:any) => {
  //     console.log("🚀 ~ file: DatePicker.tsx:23 ~ changeHandler ~ y:", y)
  //     console.log("🚀 ~ file: DatePicker.tsx:23 ~ changeHandler ~ x:", x)

  // }

  const changeHandler: DatePickerProps['onChange'] = (
    date,
    dateString: string,
  ) => {
    console.log(dateString)
    onChangeHandler(dateString)
  }

  const dateFormat = 'YYYY/MM/DD'
  const timeFormat = 'HH:mm'

  const defaultTime =
    defaultTimeValue && name == 'date'
      ? dayjs(defaultTimeValue).format(dateFormat)
      : defaultTimeValue && name == 'time'
        ? defaultTimeValue
        : undefined

  console.log(
    '🚀 ~ file: DatePicker.tsx:31 ~ defaultTimeValue:',
    defaultTimeValue,
  )
  console.log('🚀 ~ file: DatePicker.tsx:45 ~ defaultTime:', defaultTime)
  return (
    <div className={cn('relative w-full ' + wrapperClassName)}>
      <AntDDatePicker
        // name={name}
        picker={name === 'date' ? 'date' : 'time'}
        className={cn(
          'peer block w-full rounded-sm border-0 !bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none !outline-gray-300 transition-all duration-200 ease-linear focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-400 dark:placeholder:font-normal dark:placeholder:text-neutral-300 dark:peer-focus:text-primary ' +
            className,
        )}
        defaultValue={
          defaultTimeValue && name === 'date'
            ? dayjs(defaultTime, dateFormat)
            : defaultTimeValue && name === 'time'
              ? dayjs(defaultTimeValue, timeFormat)
              : undefined
        }
        format={name === 'date' ? dateFormat : timeFormat}
        onChange={(value, dateString) => {
          console.log(value, dateString)
          changeHandler && changeHandler(value, dateString)
        }}
        // onChange={onChange}
        // locale={locale as PickerLocale}
        // ref={ref}
        // {...props}
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

export default React.forwardRef(DatePicker)
