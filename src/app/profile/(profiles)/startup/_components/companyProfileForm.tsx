'use client'
import React, { useRef, useState } from 'react'
import { InputRef } from 'antd/lib/input'
import { FieldNames, Fields, Refs } from '@/types/profile'
import Input from '@/components/form/Input'
import Select from '@/components/form/Select'
import TextArea from '@/components/form/TextArea'
import RadioGroup from '@/components/form/RadioGroup'
import ImageUploader from '@/components/form/ImageUploader'
import { Button } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { DataStartup } from '@/types'
import { useUpdateContext } from '@/components/profile/context'
import { useRouter } from 'next/navigation'

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

export default function GeneralForm({ user }: { user: DataStartup }) {
  const router = useRouter()
  const refs: Refs = {
    'company-name': useRef<InputRef | null>(null),
    'registered-name': useRef<InputRef | null>(null),
    'short-description': useRef<InputRef | null>(null),
    'raised': useRef<InputRef | null>(null),
    sector: useRef<InputRef | null>(null),
    stage: useRef<InputRef | null>(null),
    highlight: useRef<InputRef | null>(null),
    'key_highlight1': useRef<InputRef | null>(null),
    'key_highlight2': useRef<InputRef | null>(null),
    'key_highlight3': useRef<InputRef | null>(null),
    'key_highlight4': useRef<InputRef | null>(null),
    'first_name': useRef<InputRef | null>(null),
    'last_name': useRef<InputRef | null>(null),
    'email': useRef<InputRef | null>(null),
    'phone': useRef<InputRef | null>(null),
    'company_based': useRef<InputRef | null>(null),
    'video_url': useRef<InputRef | null>(null),
    'banner': useRef<InputRef | null>(null),
  }

  const { handleUpdate, loading } = useUpdateContext()
  const [selected, setSelected] = useState({
    raised: user.raisedFund,
  })
  const inputFields: Fields[] = [
    {
      name: 'company-name',
      label: 'Company Name',
      defaultValue: user?.companyName,
    },
    {
      name: 'registered-name',
      label: 'Registered Name',
      defaultValue: user?.registeredCompanyName,
    },
    {
      name: 'short-description',
      label: 'Short Description',
      defaultValue: user?.shortDescription,
      disabled: !!user?.shortDescription,
      fieldType: 'textarea',
    },
    {
      name: 'raised',
      label: 'Have you raised fund before',
      defaultValue: user?.raisedFund,
      disabled: !!user?.raisedFund,
      fieldType: 'radiogroup',
      options: [
        {
          value: 'yes',
          label: 'Yes',
        },
        {
          value: 'no',
          label: 'No',
        },
      ],
    },
    {
      name: 'sector',
      defaultValue: user?.sector,
      label: 'Preferred Sector',
      disabled: !!user?.sector,
      fieldType: 'select',
      options: [
        {
          value: 'ecommerce',
          label: 'E-Commerce',
        },
        {
          value: 'fintech',
          label: 'Fintech',
        },
      ],
    },
    {
      name: 'stage',
      defaultValue: user?.stage,
      label: 'Stage of start-up',
      fieldType: 'textarea',
    },
    {
      name: 'key_highlight1',
      label: 'Key Highlight 1',
      defaultValue: user?.keyHighlights?.keyHighlight1,
    },
    {
      name: 'key_highlight2',
      label: 'Key Highlight 2',
      defaultValue: user?.keyHighlights?.keyHighlight2,
    },
    {
      name: 'key_highlight3',
      label: 'Key Highlight 3',
      defaultValue: user?.keyHighlights?.keyHighlight3,
    },
    {
      name: 'key_highlight4',
      label: 'Key Highlight 4',
      defaultValue: user?.keyHighlights?.keyHighlight4,
    },
    {
      name: 'first_name',
      label: 'First Name',
      defaultValue: user?.founderFirstName,
    },
    {
      name: 'last_name',
      label: 'Last Name',
      defaultValue: user?.founderLastName,
    },
    {
      name: 'email',
      label: 'EmailId',
      defaultValue: user?.email,
    },
    {
      name: 'phone',
      label: 'Phone number',
      defaultValue: user?.phone,
    },
    {
      name: 'company_based',
      label: 'Company based in city',
      defaultValue: user?.companyBased,
    },
    {
      name: 'video_url',
      label: 'Video',
      defaultValue: user?.youtubeVideoUrl,
    },
    {
      name: 'banner',
      label: 'Upload Banner (Suggested Size : 500*300 px)',
      defaultValue: user?.banner,
      fieldType:'fileUploader'
    },
  ];
  
  const handleChange = (
    fieldName: any,
    value: DefaultOptionType | DefaultOptionType[],
  ) => {
    setSelected((prevState: any) => ({
      ...prevState,
      [fieldName]: value,
    }))
  }
  console.log(user)
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
      lastName: values['registered-name'],
      phone: values['raised'],
      email: values['short-description'],
      address: values.address,
      
    } as unknown as DataStartup
    console.log(formData, values)
    await handleUpdate(formData, 'general')
    return router.refresh()
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-2">
        {inputFields.slice(0, 3).map((field , index) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              disabled={field.disabled}
              options={field.options.map((option, index) => ({
                key: index,
                value: option.value,
                label: option.label,
              }))}
              placeholder={field.placeholder}
              defaultValue={field.defaultValue}
              name={field.name}
              onChange={(value: DefaultOptionType | DefaultOptionType[]) =>
                handleChange(field.name, value)
              }
              // placeholder={field.placeholder}
            />
           ) : field.fieldType === 'textarea' ?(
            <TextArea
              key={field.name}
              defaultValue={field.defaultValue}
              disabled={field.disabled}
              // ref={field.fieldType !== 'select' && refs[field.name]}
              name={field.name}
              type={field.type}
              label={field.label}
              className={index === 2 ? 'lg:col-span-2' : ''}
              placeholder={`Enter your ${field.name}`}
            />
          ): (
            <Input
              key={field.name}
              defaultValue={field.defaultValue}
              disabled={field.disabled}
              ref={field.fieldType !== 'select' && refs[field.name]}
              name={field.name}
              type={field.type}
              label={field.label}
              className={index === 2 ? 'lg:col-span-2' : ''}
              placeholder={`Enter your ${field.name}`}
            />
          ),
        )}
      </div>
      <div className="h-2 w-full bg-light-shadow"></div>
      <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-1">
        {inputFields.slice(3, 6).map((field) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              disabled={field.disabled}
              defaultValue={field.defaultValue}
              placeholder={field.placeholder}
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
          ) 
          :field.fieldType==='radiogroup'?
           (
            <RadioGroup
              key={field.name}
              disabled={field.disabled}
              defaultValue={field.defaultValue}
              //@ts-ignore
              options={field.options}
              // ref={field.fieldType !== 'select' && refs[field.name]}
              name={field.name}
              type={field.type}
              label={field.label}
              placeholder={`Enter your ${field.name}`}
            />
          )
          :
           (
            <Input
              key={field.name}
              disabled={field.disabled}
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
      <div className="pt-6 ml-8 text-md font-extrabold  items-center ">
              Highlights
            </div>
      <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-1">
        {inputFields.slice(6, 10).map((field) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              disabled={field.disabled}
              defaultValue={field.defaultValue}
              placeholder={field.placeholder}
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
              disabled={field.disabled}
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
      <div className="pt-6 ml-8 text-md font-extrabold  items-center ">
              Additional information
            </div>
      <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-2">
        {inputFields.slice(10, 17).map((field) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              disabled={field.disabled}
              defaultValue={field.defaultValue}
              placeholder={field.placeholder}
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
          ):field.fieldType=='fileUploader'?
          (
              <ImageUploader
                key={field.name}
                disabled={field.disabled}
                defaultValue={field.defaultValue}
                //@ts-ignore
                ref={field.fieldType !== 'select' && refs[field.name]}
                name={field.name}
                type={field.type}
                label={field.label}
                placeholder={`Enter your ${field.name}`}
              />
          ) : (
            <Input
              key={field.name}
              disabled={field.disabled}
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
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleProfileUpdate}
          className={
            'col-span-2 !h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block'
          }
          block>
          Save
        </Button>
      </div>
    </div>
  )
}
