'use client'
import { useRef, useState } from 'react'
import { InputRef } from 'antd/lib/input'
import TextArea from '@/components/form/TextArea'
import { Button } from 'antd'
import dynamic from 'next/dynamic'
import { TextAreaRef } from 'antd/es/input/TextArea'

const Input = dynamic(() => import('@/components/form/Input'), {
  ssr: false,
})
type FieldType = 'name' | 'e-mail' | 'phone' | 'message'
export default function ContactUsForm() {
  const refs = {
    name: useRef<InputRef | null>(null),
    'e-mail': useRef<InputRef | null>(null),
    phone: useRef<InputRef | null>(null),
    message: useRef<TextAreaRef | null>(null),
  }
  const [message, setMessage] = useState('')
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
  const handleSubmit = () => {
    console.log(
      'TextArea Value',
      refs.message.current?.resizableTextArea?.textArea.value,
    )
  }
  return (
    <div className={'border_gray flex flex-col gap-2 rounded-xl  p-6'}>
      <h4 className="text-2xl text-primary-dark">Connect With Bizdateup</h4>
      <p className="text-base font-light text-[#828F99]">
        We will get back to you within 24 hours
      </p>
      <div className="flex flex-col gap-8 py-4">
        {inputFields.map((field) =>
          field.inputType ? (
            <TextArea
              key={field.name}
              //@ts-ignore
              ref={refs[field.name]}
              {...field}
            />
          ) : (
            <Input
              //@ts-ignore
              ref={refs[field.name]}
              key={field.name}
              {...field}
            />
          ),
        )}
        <Button
          size={'large'}
          onClick={handleSubmit}
          className={'!primary_button hover:!text-white'}>
          Submit
        </Button>
      </div>
    </div>
  )
}
