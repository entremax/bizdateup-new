"use client"
import { FAQ } from '@/types/invest'
import Input from '@/components/form/Input'
import React from 'react'
import { apiUri } from '@/lib/utils'
import  Trash  from '@/components/icons/Trash'

export default function FaqSingleItem({ faq, 
  index,
  changeHandler,
  removeHandler
}: { faq: FAQ;
  index: number;
  changeHandler: any;
  removeHandler: any; }) {
    const api = apiUri().v1;
    return (
      <div className="w-full">
        <div key={faq._id} className="flex items-center gap-4 py-4 lg:gap-2">
          <div className="grid w-full py-4 px-4  grid-cols-1 md:grid-cols-1 gap-2 lg:gap-1">
            <div className="py-4 px-4">
              <Input
                key={faq._id}
                // disabled={!faq.question}
                defaultValue={faq.question}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeHandler(index, 'question', event.target.value)}
             
                name={"question"}
                label="Question"
                placeholder={`Enter your question`}
              />
            </div>
            <div className="py-4 px-4">
              <Input
                key={faq._id}
                // disabled={!faq.answer}
                defaultValue={faq.answer}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeHandler(index, 'answer', event.target.value)}
                name={"answer"}
                label="Answer"
                placeholder={`Enter your answer`}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-end cursor-pointer" onClick={()=>removeHandler(index)}>
  <Trash />
  <span className="font-medium text-primary">Remove</span>
</div>
      </div>
    );
  }