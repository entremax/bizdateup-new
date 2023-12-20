'use client'
import { Button } from 'antd'
import React, { useRef, useState } from 'react'
import { InputRef } from 'antd/lib/input'
import { bankNames } from '@/app/profile/(profiles)/investor/bank/data'
import Select from '@/components/form/Select'
import Input from '@/components/form/Input'
import UploadCheck from '@/components/profile/dropCheck'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { DataInner } from '@/types'
import { useUpdateContext } from '@/components/profile/context'
import { useRouter } from 'next/navigation'

export default function BankForm({ user }: { user: DataInner }) {
  const { handleUpdate, loading } = useUpdateContext()
  const router = useRouter()
  const refs = {
    ifsc: useRef<InputRef | null>(null),
    'account-number': useRef<InputRef | null>(null),
    'confirm-ac-number': useRef<InputRef | null>(null),
    'account-holder': useRef<InputRef | null>(null),
  }
  const [selected, setSelected] = useState({
    'bank-name': user.bank.bankName,
    'account-type': user.bank.accountType,
  })
  const inputFields = [
    {
      name: 'bank-name',
      label: 'Bank Name',
      defaultValue: user.bank.bankName,
      fieldType: 'select',
      options: bankNames,
    },
    {
      name: 'ifsc',
      defaultValue: user.bank.ifsc,
      label: 'IFSC Code',
    },
    {
      name: 'account-number',
      defaultValue: user.bank.accountNumber,
      label: 'Account number',
    },
    {
      name: 'confirm-ac-number',
      defaultValue: user.bank.accountNumber,
      label: 'Confirm Account Number',
    },
    {
      name: 'account-type',
      label: 'Account type',
      defaultValue: user.bank.accountType,
      fieldType: 'select',
      options: [
        { value: 'Savings', label: 'Savings Account' },
        { value: 'Current', label: 'Current Account' },
      ],
    },
    {
      name: 'account-holder',
      defaultValue: user.bank.registeredName,
      label: 'Account holder name',
    },
  ]
  const handleBankUpdate = async () => {
    let values: { [key: string]: any | null } = {} as {
      [key: string]: any | null
    }
    for (let key in refs) {
      //@ts-ignore
      values[key] = refs[key]?.current?.input?.value ?? ''
    }
    const formData = {
      firstName: user.firstName,
      lastName: user.lastName,
      accountType: selected['account-type'],
      bankName: selected['bank-name'],
      accountNumber: values['account-number'],
      ifsc: values['ifsc'],
    }
    await handleUpdate(formData, 'bank')
    return router.refresh()
  }
  const handleChange = (
    fieldName: any,
    value: DefaultOptionType | DefaultOptionType[],
  ) => {
    setSelected((prevState: any) => ({ ...prevState, [fieldName]: value }))
  }
  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 xl:grid-cols-2">
        {inputFields.slice(0, 6).map((field) =>
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
              label={field.label}
              placeholder={`Enter your ${field.name}`}
            />
          ),
        )}
      </div>
      <div className="mt-3 grid  items-center gap-8 p-8 py-0 xl:grid-cols-2">
        <div className="grid gap-2">
          <p className="font-medium leading-[1.6] !text-gray-900">
            Upload Cancelled Check
          </p>
          <div className="g">
            <UploadCheck />
          </div>
        </div>
      </div>
      <div className="grow"></div>
      <div className=" my-4 flex items-center justify-end px-8 pb-8">
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleBankUpdate}
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
