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
import SubmitComponent from '../../_components/SubmitComponent'

type RefsType = 'valuation' | 'discount' | 'minimumInvestment' | 'targetAmount'

export default function DealTerms({ deal }: { deal: dealTerms }) {
  const router = useRouter()
  const refs: Record<RefsType, MutableRefObject<InputRef | null>> = {
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
      // disabled: !!deal?.discount,
    },
    {
      name: 'minimumInvestment',
      label: 'Minimum Investment',
      defaultValue: deal?.minimumInvestment,
      // disabled: !!deal?.minimumInvestment,
    },
    {
      name: 'targetAmount',
      defaultValue: deal?.targetAmount,
      label: 'Target Amount',
      // disabled: !!deal?.targetAmount,
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
    let values: {
      [key in RefsType]: string | number
    } = {} as {
      [key in RefsType]: string | number
    }
    for (let key in refs) {
      values[key as keyof typeof refs] =
        refs[key as keyof typeof refs]?.current?.input?.value ?? ''
    }
    const formData = {
      typeOfSecurity: selected.typeOfSecurity,
      valuation: values['valuation'],
      discount: values['discount'],
      minimumInvestment: values['minimumInvestment'],
      targetAmount: values['targetAmount'],
    } as unknown as any
    await handleUpdate(formData, 'dealterm')
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
              ref={
                field.fieldType === 'select'
                  ? undefined
                  : refs[field.name as keyof typeof refs]
              }
              name={field.name}
              label={field.label}
              className={index === 2 ? 'lg:col-span-2' : ''}
              placeholder={`Enter your ${field.name}`}
            />
          ),
        )}
      </div>

      <SubmitComponent
        loading={loading}
        disabled={loading}
        type={'default'}
        onClick={handleProfileUpdate}
        block
      />
    </div>
  )
}
