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
import EventFormSingleItem from './UploadDocFormSingleItem'
import { Button } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { DataStartup } from '@/types'
import { useUpdateContext } from '@/components/profile/context'
import { useRouter } from 'next/navigation'
import  {FileIcons} from '@/icons/FileIcon'

export default function FaqForm({ initialUsers }: { initialUsers: StartupData }) {
  const router = useRouter()
  const [user, setUser] = useState(initialUsers);
  const refs: Refs = {
    'banner': useRef<InputRef | null>(null),
  }

  const { handleUpdate, loading } = useUpdateContext()
  const [selected, setSelected] = useState({
    // raised: user.raisedFund,
  })

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
  
  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-1">
      <ImageUploader
              key={user._id}
              disabled={false}
              // defaultValue={event.url}
              //@ts-ignore
              // ref={field.fieldType !== 'select' && refs[field.name]}
              name={"event"}
              type={"file"}
              // label={"Image"}
              
              placeholder={`Upload Image`}
            />
      </div>
      
      <div className="grid grid-cols-1 px-8 py-4 pb-8">
      {user.dueDiligenceFiles.map(( file , index ) => (
              <React.Fragment key={file._id}>
                <div className="border_gray rounded-2xl my-2 p-5 flex flex-row items-center gap-2">
              <FileIcons.Pdf/>    <span className="text-md text-gray-400">{file.name}</span>
              </div>
              </React.Fragment>
            ))}
      </div>
      <div className="flex items-center justify-between px-8 pb-8">
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
