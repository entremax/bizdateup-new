import React, { HTMLInputTypeAttribute } from 'react'
import { InputProps, SelectProps } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'

export type FieldType = 'select'

export interface BaseField {
  name: FieldNames
  label: string
  fieldType?: undefined | 'select'
  defaultValue?: string | number | undefined | readonly string[]
}

export interface InputField extends BaseField {
  type?: HTMLInputTypeAttribute
}

export interface SelectField extends InputField {
  fieldType: 'select'
  options: DefaultOptionType[]
}

export type Fields = InputField | SelectField
export type InputFieldNames =
  | 'first-name'
  | 'last-name'
  | 'email-id'
  | 'phone-number'
  | 'referral'
  | 'address'
  | 'city'
  | 'pin-code'
export type SelectFieldNames = 'state' | 'country' | 'gender'
export type FieldNames = InputFieldNames | SelectFieldNames
export type Refs = {
  [key in InputFieldNames]: React.MutableRefObject<any>
}

export interface ForwardRefProps extends InputProps {
  type?: HTMLInputTypeAttribute
  name: string
  className?: string
  label: string
  labelClassName?: string
}

export interface CustomSelectProps extends SelectProps {
  name: string
  label: string
  options: DefaultOptionType[]
}
