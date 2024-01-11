'use client'
import { FAQ } from '@/types/invest'
import Input from '@/components/form/Input'
import React from 'react'
import { apiUri } from '@/lib/utils'
import Trash from '@/components/icons/Trash'

export default function FaqSingleItem({
  faq,
  index,
  changeHandler,
  removeHandler,
}: {
  faq: FAQ
  index: number
  changeHandler: any
  removeHandler: any
}) {
  const api = apiUri().v1
  return (
    <div className="w-full">
      <div key={faq._id} className="flex items-center gap-4 py-4 lg:gap-2">
        <div className="grid w-full grid-cols-1 gap-2  px-4 py-4 md:grid-cols-1 lg:gap-1">
          <div className="px-4 py-4">
            <Input
              key={faq._id}
              // disabled={!faq.question}
              defaultValue={faq.question}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                changeHandler(index, 'question', event.target.value)
              }
              name={'question'}
              label="Question"
              placeholder={`Enter your question`}
            />
          </div>
          <div className="px-4 py-4">
            <Input
              key={faq._id}
              // disabled={!faq.answer}
              defaultValue={faq.answer}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                changeHandler(index, 'answer', event.target.value)
              }
              name={'answer'}
              label="Answer"
              placeholder={`Ente'answer'nswer`}
            />
          </div>
        </div>
      </div>
      <div
        className="flex cursor-pointer items-center justify-end space-x-2"
        onClick={() => removeHandler(index)}>
        <Trash />
        <span className="font-medium text-primary">Remove</span>
      </div>
    </div>
  )
}