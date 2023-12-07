'use client'
import React, { useRef, useState } from 'react'
import { InputRef } from 'antd/lib/input'
import { FieldNames, Fields, Refs } from '@/types/profile'
import Select from '@/components/form/Select'

import { Button } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { DataInner } from '@/types'
import { useUpdateContext } from '@/components/profile/context'
import { useRouter } from 'next/navigation'
import Input from '@/components/form/Input'

const States = [
  { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
  { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
  { value: 'Assam', label: 'Assam' },
  { value: 'Bihar', label: 'Bihar' },
  { value: 'Chhattisgarh', label: 'Chhattisgarh' },
  { value: 'Goa', label: 'Goa' },
  { value: 'Gujarat', label: 'Gujarat' },
  { value: 'Haryana', label: 'Haryana' },
  { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
  { value: 'Jharkhand', label: 'Jharkhand' },
  { value: 'Karnataka', label: 'Karnataka' },
  { value: 'Kerala', label: 'Kerala' },
  { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
  { value: 'Maharashtra', label: 'Maharashtra' },
  { value: 'Manipur', label: 'Manipur' },
  { value: 'Meghalaya', label: 'Meghalaya' },
  { value: 'Mizoram', label: 'Mizoram' },
  { value: 'Nagaland', label: 'Nagaland' },
  { value: 'Odisha', label: 'Odisha' },
  { value: 'Punjab', label: 'Punjab' },
  { value: 'Rajasthan', label: 'Rajasthan' },
  { value: 'Sikkim', label: 'Sikkim' },
  { value: 'Tamil Nadu', label: 'Tamil Nadu' },
  { value: 'Telangana', label: 'Telangana' },
  { value: 'Tripura', label: 'Tripura' },
  { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
  { value: 'Uttarakhand', label: 'Uttarakhand' },
  { value: 'West Bengal', label: 'West Bengal' },
  { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
  { value: 'Lakshadweep', label: 'Lakshadweep' },
  { value: 'Puducherry', label: 'Puducherry' },
  { value: 'Chandigarh', label: 'Chandigarh' },
  {
    value: 'Dadra and Nagar Haveli and Daman and Diu',
    label: 'Dadra and Nagar Haveli and Daman and Diu',
  },
]

export default function GeneralForm({ user }: { user: DataInner }) {
  const router = useRouter()
  const refs: Refs = {
    'first-name': useRef<InputRef | null>(null),
    'last-name': useRef<InputRef | null>(null),
    'email-id': useRef<InputRef | null>(null),
    'phone-number': useRef<InputRef | null>(null),
    referral: useRef<InputRef | null>(null),
    address: useRef<InputRef | null>(null),
    city: useRef<InputRef | null>(null),
    'pin-code': useRef<InputRef | null>(null),
  }
  const { handleUpdate } = useUpdateContext()
  const [selected, setSelected] = useState({
    gender: user.gender,
    country: user.address.country,
    state: user.address.state,
  })
  const inputFields: Fields[] = [
    {
      name: 'first-name',
      label: 'First name',
      defaultValue: user?.firstName,
    },
    {
      name: 'last-name',
      label: 'Last name',
      defaultValue: user?.lastName,
    },
    {
      name: 'email-id',
      type: 'email',
      label: 'EmailID',
      defaultValue: user?.email,
    },
    {
      name: 'phone-number',
      label: 'Phone number',
      defaultValue: user?.phone,
    },
    {
      name: 'gender',
      label: 'Gender',
      fieldType: 'select',
      defaultValue: user?.gender,
      options: [
        {
          value: 'Male',
          label: 'Male',
        },
        {
          value: 'Female',
          label: 'Female',
        },
        {
          value: 'Other',
          label: 'Other',
        },
      ],
    },
    {
      name: 'referral',
      defaultValue: user?.refer as string,
      label: 'Referral Code',
    },
    {
      name: 'address',
      label: 'Address line',
      defaultValue: user?.address?.address,
    },
    {
      name: 'country',
      label: 'Country',
      fieldType: 'select',
      defaultValue: user?.address?.country,
      options: [
        {
          value: 'India',
          label: 'India',
        },
        {
          value: 'NRI',
          label: 'NRI',
        },
      ],
    },
    {
      name: 'city',
      label: 'City',
      defaultValue: user?.address?.city,
    },
    {
      name: 'state',
      label: 'State',
      defaultValue: user.address.state,
      fieldType: 'select',
      options: States,
    },
    {
      name: 'pin-code',
      label: 'PIN Code',
      defaultValue: user.address.pincode,
      // placeholder: user.a
    },
  ]
  
  const handleChange = (
    fieldName: any,
    value: DefaultOptionType | DefaultOptionType[],
  ) => {
    setSelected((prevState: any) => ({
      ...prevState,
      [fieldName]: value,
    }))
  }
  
  const handleProfileUpdate = async () => {
    let values: { [key in FieldNames]: unknown | null } = {} as {
      [key in FieldNames]: unknown | null
    }
    for (let key in refs) {
      //@ts-ignore
      values[key] = refs[key]?.current?.input.value ?? ''
    }
    const formData = {
      firstName: values['first-name'],
      lastName: values['last-name'],
      phone: values['phone-number'],
      email: values['email-id'],
      gender: selected.gender,
      address: values.address,
      city: values.city,
      state: selected.state,
      pincode: values['pin-code'],
      country: selected.country,
    } as unknown as DataInner
    
    await handleUpdate(formData, 'general')
    return router.refresh()
  }
  
  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-2 gap-8 p-8">
        {inputFields.slice(0, 6).map((field) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              options={field.options.map((option, index) => ({
                key: index,
                value: option.value,
                label: option.label,
              }))}
              defaultValue={field.defaultValue}
              name={field.name}
              onChange={(value: DefaultOptionType | DefaultOptionType[]) =>
                handleChange(field.name, value)
              }
              // placeholder={field.placeholder}
            />
          ) : (
            <Input
              key={field.name}
              defaultValue={field.defaultValue}
              //@ts-ignore
              ref={field.fieldType !== 'select' && refs[field.name]}
              name={field.name}
              type={field.type}
              label={field.label}
              placeholder={`Enter your ${field.name}`}
            />
          ),
        )}
      </div>
      <div className="h-2 w-full bg-light-shadow"></div>
      <div className="mt-3 grid grid-cols-2 items-center gap-8 p-8">
        {inputFields.slice(6, 12).map((field) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              defaultValue={field.defaultValue}
              options={field.options.map((option, index) => ({
                key: index,
                value: option.value,
                label: option.label,
              }))}
              onChange={(value: DefaultOptionType | DefaultOptionType[]) =>
                handleChange(field.name, value)
              }
              name={field.name}
            />
          ) : (
            <Input
              key={field.name}
              defaultValue={field.defaultValue}
              //@ts-ignore
              ref={field.fieldType !== 'select' && refs[field.name]}
              name={field.name}
              type={field.type}
              label={field.label}
              placeholder={`Enter your ${field.name}`}
            />
          ),
        )}
      </div>
      <div className=" flex items-center justify-end px-8 pb-8">
        <Button
          type={'default'}
          onClick={handleProfileUpdate}
          className={
            'col-span-2 hidden !h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block'
          }>
          Save
        </Button>
      </div>
    </div>
  )
}
