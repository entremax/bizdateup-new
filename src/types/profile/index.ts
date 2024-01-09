import React, { HTMLInputTypeAttribute } from 'react'
import {
  InputProps,
  RadioChangeEvent,
  RadioGroupProps,
  SelectProps,
} from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { TextAreaProps } from 'antd/lib/input'

export type FieldType = 'select'

export interface BaseField {
  name: FieldNames
  label: string
  fieldType?: undefined | 'select' | 'textarea' | 'radiogroup' | 'fileUploader'
  defaultValue?: string | number | undefined | readonly string[]
  disabled?: boolean
  placeholder?: string
}

export interface InputField extends BaseField {
  type?: HTMLInputTypeAttribute
}

export interface SelectField extends InputField {
  fieldType: 'select'
  options: DefaultOptionType[]
}

export interface TextAreaField extends InputField {
  fieldType: 'textarea'
  options: DefaultOptionType[]
}

export interface RadioGroup extends InputField {
  fieldType: 'radiogroup'
  options: DefaultOptionType[]
}

export interface FileUploader extends InputField {
  fieldType: 'fileUploader'
  options: DefaultOptionType[]
}

export type Fields =
  | InputField
  | SelectField
  | TextAreaField
  | RadioGroup
  | FileUploader

export type InputFieldNames =
  | 'first-name'
  | 'last-name'
  | 'p-ml'
  | 'phone-number'
  | 'referral'
  | 'address'
  | 'city'
  | 'pin-code'

export type StartupInputFieldNames =
  | 'company-name'
  | 'registered-name'
  | 'short-description'
  | 'raised'
  | 'sector'
  | 'stage'
  | 'highlight'
  | 'key_highlight1'
  | 'key_highlight2'
  | 'key_highlight3'
  | 'key_highlight4'
  | 'typesOfSecurity'
  | 'valuation'
  | 'discount'
  | 'minimumInvestment'
  | 'targetAmount'
  | 'first_name'
  | 'last_name'
  | 'email'
  | 'phone'
  | 'company_based'
  | 'video_url'
  | 'banner'
  
export type SelectFieldNames = 'state' | 'country' | 'gender'
export type FieldNames =
  | InputFieldNames
  | SelectFieldNames
  | StartupInputFieldNames

export type Refs =
  | {
      [key in InputFieldNames]: React.MutableRefObject<any> | undefined
    }
  | {
      [key in StartupInputFieldNames]: React.MutableRefObject<any> | undefined
    }
export type Refs2 = {
  [key in InputFieldNames]: React.MutableRefObject<any>
} & {
  [key in StartupInputFieldNames]: React.MutableRefObject<any>
}

export interface ForwardRefProps extends InputProps {
  type?: HTMLInputTypeAttribute
  name: string
  className?: string
  label: string
  index?: number
  labelClassName?: string
  wrapperClassName?: string
  changeHandler?: any
}

export interface TextAreaForwardRefProps extends TextAreaProps {
  type?: string
  name: string
  className?: string
  label: string
  labelClassName?: string
  wrapperClassName?: string
}

export interface TextAreaForwardRefProps extends TextAreaProps {
  type?: string
  name: string
  className?: string
  label: string
  labelClassName?: string
  wrapperClassName?: string
}

export interface TextAreaForwardRefProps extends TextAreaProps {
  type?: string
  name: string
  className?: string
  label: string
  labelClassName?: string
  wrapperClassName?: string
}

export interface CustomSelectProps extends SelectProps {
  name: string
  label: string
  options: DefaultOptionType[]
  wrapperClassName?: string
}

export interface RadioInputProps extends RadioGroupProps {
  options: Array<{ label: string; value: string | number }>
  defaultValue?: string | number | any
  onChange?: (e: RadioChangeEvent) => void
  name: string
  className?: string
  label: string
  labelClassName?: string
  wrapperClassName?: string
}
