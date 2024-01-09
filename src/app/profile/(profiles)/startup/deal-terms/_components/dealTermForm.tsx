'use client'
import React, { MutableRefObject, useRef, useState } from 'react'
import { InputRef } from 'antd/lib/input'
import Input from '@/components/form/Input'
import Select from '@/components/form/Select'
import { Button } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { dealTerms } from '@/types'
import { useStartupUpdateContext } from '@/components/profile/startup/context'
import { useRouter } from 'next/navigation'

export default function DealTerms({ deal }: { deal: dealTerms }) {
  const router = useRouter()
  const refs: Record<string, MutableRefObject<null | InputRef>> = {
    valuation: useRef<InputRef | null>(null),
    discount: useRef<InputRef | null>(null),
    minimumInvestment: useRef<InputRef | null>(null),
    targetAmount: useRef<InputRef | null>(null),
  }

  const { handleUpdate, loading } = useStartupUpdateContext()
  const [selected, setSelected] = useState({
    typeOfSecurity: deal.typeOfSecurity,
  })
  const inputFields = [
    {
      name: 'typesOfSecurity',
      label: 'Types of Security',
      defaultValue: deal?.typeOfSecurity,
      fieldType: 'select',
      options: [
        {
          value: 'ccps',
          label: 'CCPS',
        },
        {
          value: 'ccds',
          label: 'CCDS',
        },
        {
          value: 'equity',
          label: 'Equity',
        },
      ],
    },
    {
      name: 'valuation',
      label: 'Valuation',
      defaultValue: deal?.valuation,
    },
    {
      name: 'discount',
      label: 'Discount',
      defaultValue: deal?.discount,
      disabled: !!deal?.discount,
    },
    {
      name: 'minimumInvestment',
      label: 'Minimum Investment',
      defaultValue: deal?.minimumInvestment,
      disabled: !!deal?.minimumInvestment,
    },
    {
      name: 'targetAmount',
      defaultValue: deal?.targetAmount,
      label: 'Target Amount',
      disabled: !!deal?.targetAmount,
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
  console.log(deal)
  const handleProfileUpdate = async () => {
    let values = {} as {
      [key: keyof typeof refs]: unknown | null
    }
    for (let key in refs) {
      //@ts-ignore
      values[key] = refs[key]?.current?.input.value ?? ''
    }
    const formData = {
      typeOfSecurity: selected.typeOfSecurity,
      valuation: values['valuation'],
      discount: values['discount'],
      minimumInvestment: values['minimumInvestment'],
      targetAmount: values['targetAmount'],
    } as unknown as any
    console.log(formData, values)
    await handleUpdate(formData, 'dealterm')
    return router.refresh()
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-2">
        {inputFields.slice(0, 6).map((field, index) =>
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
              disabled={field.disabled}
              ref={field.fieldType !== 'select' ? undefined : refs[field.name]}
              name={field.name}
              label={field.label}
              className={index === 2 ? 'lg:col-span-2' : ''}
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
