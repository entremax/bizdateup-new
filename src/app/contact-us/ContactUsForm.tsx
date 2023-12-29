'use client'
import { useRef } from 'react'
import { InputRef } from 'antd/lib/input'
import TextArea from '@/components/form/TextArea'
import { Button } from 'antd'
import dynamic from 'next/dynamic'

const Input = dynamic(() => import('@/components/form/Input'), {
  ssr: false,
})
export default function ContactUsForm() {
  const refs = {
    name: useRef<InputRef | null>(null),
    email: useRef<InputRef | null>(null),
    phone: useRef<InputRef | null>(null),
    message: useRef<InputRef | null>(null),
  }
  const inputFields = [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'e-mail',
      label: 'Email',
    },
    {
      name: 'phone',
      label: 'Mobile Number',
    },
    {
      name: 'message',
      inputType: 'textarea',
      label: 'Message',
      autoSize: { minRows: 4, maxRows: 6 },
    },
  ]
  const handleSubmit = () => {}
  return (
    <div className={'border_gray flex flex-col gap-2 rounded-xl  p-6'}>
      <h4 className="text-2xl text-primary-dark">Connect With Bizdateup</h4>
      <p className="text-base font-light text-[#828F99]">
        We will get back to you within 24 hours
      </p>
      <div className="flex flex-col gap-8 py-4">
        {inputFields.map((field) =>
          field.inputType ? (
            <TextArea key={field.name} {...field} />
          ) : (
            <Input key={field.name} {...field} />
          ),
        )}
        <Button size={'large'} className={'!primary_button hover:!text-white'}>
          Submit
        </Button>
      </div>
    </div>
  )
}
