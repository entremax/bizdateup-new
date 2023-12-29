'use client'
import React, { useRef, useState } from 'react'
import { InputRef } from 'antd/lib/input'
import { FieldNames, Fields, Refs } from '@/types/profile'
import { StartupData, TeamMember } from '@/types/invest'
import Input from '@/components/form/Input'
import Select from '@/components/form/Select'
import TextArea from '@/components/form/TextArea'
import RadioGroup from '@/components/form/RadioGroup'
import ImageUploader from '@/components/form/ImageUploader'
import FaqFormSingleItem from './FaqFormSingleItem'
import { Button } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { DataStartup } from '@/types'
import { useUpdateContext } from '@/components/profile/context'
import { useRouter } from 'next/navigation'

export default function FaqForm({ initialUsers }: { initialUsers: StartupData }) {
  const router = useRouter()
  const [user, setUser] = useState(initialUsers);
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
  
//   const inputFields: Fields[] = [
//     {
//       name: 'full-name',
//       label: 'Full Name',
//       defaultValue: user?.companyName,
//     },
//     {
//       name: 'designation',
//       label: 'Designation',
//       defaultValue: user?.registeredCompanyName,
//     },
//     {
//       name: 'linkedin_url',
//       label: 'Linkedin Url',
//       defaultValue: user?.shortDescription,
//       disabled: !!user?.shortDescription,
//       fieldType: 'textarea',
//     }
//   ];
  
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
  const addNew = () => {
    const temp = {
     question: "",
      answer: "",
      _id: "",
    };

    const updatedFaq = [...user.faq, temp];

    setUser((prevUser) => ({
      ...prevUser,
      faq: updatedFaq,
    }));
    
    console.log("🚀 ~ file: MentorForm.tsx:105 ~ addNew ~ user:", updatedFaq);
  };

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-1">
        {user.faq.map((faq , index) =>
        <>
          <FaqFormSingleItem key={user._id} faq={faq}/>
          {index+1<user.mentors?.length?
          <div key={user._id} className="h-2 w-full bg-light-shadow"></div>:null
        }
          </>
        )}
      </div>
      
      <div className="flex items-center justify-between px-8 pb-8">
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={addNew}  
          className={
            '!h-auto !border-none !bg-none !px-6 !py-2 font-medium !text-primary !outline-none w-1/4 md:w-1/4'
          }
          >
          + Add another question
        </Button>
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleProfileUpdate}
          className={
            '!bg-light-shadow !px-6 !py-2 font-medium  !outline-none  !h-auto !border-none !bg-primary !px-6 !py-2 !text-white !outline-none w-1/4 md:w-1/4'
          }
          >
          Save
        </Button>
      </div>
    </div>
  )
}
