'use client'
import { Button } from 'antd'
import React, { useRef, useState } from 'react'
import { InputRef } from 'antd/lib/input'
import Select from '@/components/form/Select'
import Input from '@/components/form/Input'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { DataInner } from '@/types'
import { useUpdateContext } from '@/components/profile/context'
import { useRouter } from 'next/navigation'
import data from '@/data'

const OtherDetailsForm: React.FC<{ user: DataInner }> = ({ user }) => {
  const linkedinUrlRef = useRef<InputRef | null>(null)
  const { handleUpdate } = useUpdateContext()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [selected, setSelected] = useState({
    occupation: user.other.occupation,
    invest_amount: user.other.investAmount,
    sectors: user.other.sector,
    'invested-before': user.other.investedFund,
  })
  console.log(loading)
  const inputFields = [
    {
      name: 'occupation',
      label: 'Occupation',
      defaultValue: user.other.occupation,
      fieldType: 'select',
      options: data.occupationValues,
    },
    {
      name: 'invest_amount',
      label: 'Invests',
      fieldType: 'select',
      defaultValue: user.other.investAmount,
      options: [
        { value: '5K', label: 'up to ₹50,000' },
        { value: '5K-1L', label: '₹50,000 to ₹1 Lakh' },
        { value: '1L-10L', label: '₹1 Lakh to ₹10 Lakh' },
        { value: '10L-1CR', label: '₹10 Lakh to ₹1 crore' },
        { value: '1CR+', label: '₹1 crore and above' },
      ],
    },
    {
      name: 'sectors',
      label: 'Select sectors',
      defaultValue: user.other.sector,
      fieldType: 'select',
      mode: 'tags',
      options: data.sectorOptions,
    },
    {
      name: 'invested-before',
      defaultValue: user.other.investedFund,
      label: 'Have you invested in startups before? ',
      fieldType: 'select',
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
      name: 'linkedin-url',
      label: 'Linked URL',
      defaultValue: user.other.linkedlnUrl,
    },
  ]

  const handleOtherUpdate = async () => {
    setLoading(true)
    const linkedinUrl =
      linkedinUrlRef?.current?.input?.value ?? user.other.linkedlnUrl
    const formData = {
      occupation: selected.occupation,
      investAmount: selected.invest_amount,
      sector: selected.sectors,
      linkedlnUrl: linkedinUrl,
      investedFund: selected['invested-before'],
    } as unknown as DataInner

    await handleUpdate(formData, 'other')
    setLoading(false)
    return router.refresh()
  }

  const handleChange = (
    fieldName: any,
    value: DefaultOptionType | DefaultOptionType[],
  ) => {
    setSelected((prevState) => ({ ...prevState, [fieldName]: value }))
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 xl:grid-cols-2">
        {inputFields.map((field) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              mode={
                (field.mode ? field.mode : undefined) as
                  | 'tags'
                  | 'multiple'
                  | undefined
              }
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

              // placeholder={field.placeholder}
            />
          ) : (
            <Input
              key={field.name}
              defaultValue={field.defaultValue}
              //@ts-ignore
              ref={field.fieldType !== 'select' && linkedinUrlRef}
              name={field.name}
              label={field.label}
              placeholder={`Enter your ${field.name}`}
            />
          ),
        )}
      </div>
      <div className=" my-6 flex items-center justify-end px-8 pb-8">
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleOtherUpdate}
          className={
            '!h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block'
          }
          block>
          Save
        </Button>
      </div>
    </div>
  )
}
export default OtherDetailsForm
