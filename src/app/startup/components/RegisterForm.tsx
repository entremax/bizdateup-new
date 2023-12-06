'use client'
import React from 'react'
import { InputRef } from 'antd/lib/input'
import Input from '@/components/form/Input'
import Select from '@/components/form/Select'
import data from '@/data'

export default function OnboardingForm() {
  const refs = {
    'first-name': React.useRef<InputRef | null>(null),
    'last-name': React.useRef<InputRef | null>(null),
    email: React.useRef<InputRef | null>(null),
    phone: React.useRef<InputRef | null>(null),
    'founder-linkedin': React.useRef<InputRef | null>(null),
    'company-name': React.useRef<InputRef | null>(null),
    'company-linkedin': React.useRef<InputRef | null>(null),
    website: React.useRef<InputRef | null>(null),
    'previous-round': React.useRef<InputRef | null>(null),
    'describe-product': React.useRef<InputRef | null>(null),
    revenue: React.useRef<InputRef | null>(null),
    'team-capacity': React.useRef<InputRef | null>(null),
    based: React.useRef<InputRef | null>(null),
    referral: React.useRef<InputRef | null>(null),
  }
  const inputFields = [
    {
      name: 'first-name',
      label: 'First Name',
    },
    {
      name: 'last-name',
      label: 'Last Name',
    },
    {
      name: 'email',
      label: 'EmailID',
      defaultValue: 'kalyanborah456@gmail.com',
    },
    {
      name: 'phone',
      label: 'Phone Number',
    },
    {
      name: 'founder-linkedin',
      label: "Founder's linked URL",
    },
    {
      name: 'company-name',
      label: 'Registered company name',
    },
    {
      name: 'company-linkedin',
      label: 'Company linked URL',
    },
    {
      name: 'website',
      label: 'Website',
    },
    {
      name: 'previous-round',
      label: 'Describe your previous fundraising round ',
    },
    {
      name: 'describe-product',
      label: 'Describe Your Product',
    },
    {
      name: 'describe-traction',
      label: 'Describe Traction',
    },
    {
      name: 'revenue',
      label: 'Revenue',
    },
    {
      name: 'team-capacity',
      label: 'Team capacity',
    },
    {
      name: 'based',
      label: 'Company based',
    },
    {
      name: 'tags',
      label: 'Tags',
      fieldType: 'select',
      options: [
        {
          value: 'Yes',
          label: 'Yes',
        },
        {
          value: 'No',
          label: 'No',
        },
      ],
    },
    {
      name: 'sector',
      label: 'Sector',
      fieldType: 'select',
      options: data.sectorOptions,
    },
    {
      name: 'referral',
      label: 'Refer & Earn',
    },
  ]
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-semibold text-primary-dark">
        Raise with Bizdateup
      </h3>
      <p className="text-xl text-gray-600">
        Tell us a little about your company. This will help us understand your
        business better.
      </p>
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-2 gap-8 p-8">
          {inputFields.slice(0, 4).map((field) =>
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
                // onChange={(value: DefaultOptionType | DefaultOptionType[]) =>
                //   handleChange(field.name, value)
                // }
                name={field.name}
              />
            ) : (
              <Input
                key={field.name}
                defaultValue={field.defaultValue}
                //@ts-ignore
                ref={field.fieldType !== 'select' && refs[field.name]}
                name={field.name}
                label={field.label}
                placeholder={`Enter your ${field.name}`}
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}
