'use client'
import React, { Fragment, useRef, useState } from 'react'
import { InputRef } from 'antd/lib/input'
import { TextAreaRef } from 'antd/lib/input/TextArea'
import { Refs, StartupInputFieldNames } from '@/types/profile'
import Input from '@/components/form/Input'
import Select from '@/components/form/Select'
import TextArea from '@/components/form/TextArea'
import RadioGroup from '@/components/form/RadioGroup'
import ImageUploader from '@/components/form/ImageUploader'
import type { RadioChangeEvent } from 'antd'
import { Button } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { useStartupUpdateContext } from '@/components/profile/startup/context'
import { useRouter } from 'next/navigation'
import { StartupData } from '@/types/invest'

export default function GeneralForm({ user }: { user: StartupData }) {
  const router = useRouter()
  //@ts-ignore
  const refs: Refs = {
    'company-name': useRef<InputRef | null>(null),
    'registered-name': useRef<InputRef | null>(null),
    // 'raised': useRef<InputRef | null>(null),
    // sector: useRef<InputRef | null>(null),
    key_highlight1: useRef<InputRef | null>(null),
    key_highlight2: useRef<InputRef | null>(null),
    key_highlight3: useRef<InputRef | null>(null),
    key_highlight4: useRef<InputRef | null>(null),
    company_based: useRef<InputRef | null>(null),
    // 'raised': useRef<InputRef | null>(null),
    video_url: useRef<InputRef | null>(null),
    first_name: useRef<InputRef | null>(null),
    last_name: useRef<InputRef | null>(null),
    phone: useRef<InputRef | null>(null),
    email: useRef<InputRef | null>(null),
    // 'banner': useRef<InputRef | null>(null),
  }

  //@ts-ignore
  const refs2 = {
    stage: useRef<TextAreaRef | null>(null),
    'short-description': useRef<TextAreaRef | null>(null),
  }
  const { handleUpdate, loading } = useStartupUpdateContext()

  const [selected, setSelected] = useState({
    raised: user.raisedFund,
    sector: user.sector.split(',').map((item) => item.trim()),
    banner: user.banner,
  })

  const inputFields = [
    {
      name: 'company-name',
      label: 'Company Name',
      defaultValue: user?.companyName,
    },
    {
      name: 'registered-name',
      label: 'Registered Name',
      defaultValue: user?.registeredCompanyName,
    },
    {
      name: 'short-description',
      label: 'Short Description',
      defaultValue: user?.shortDescription,
      // disabled: !!user?.shortDescription,
      fieldType: 'textarea',
    },
    {
      name: 'raised',
      label: 'Have you raised fund before',
      defaultValue: user?.raisedFund,
      // disabled: !!user?.raisedFund,
      fieldType: 'radiogroup',
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
      name: 'sector',
      defaultValue: user?.sector,
      label: 'Preferred Sector',
      // disabled: !!user?.sector,
      fieldType: 'select',
      options: [
        {
          value: 'ecommerce',
          label: 'E-Commerce',
        },
        {
          value: 'fintech',
          label: 'Fintech',
        },
      ],
    },
    {
      name: 'stage',
      defaultValue: user?.stage,
      label: 'Stage of start-up',
      fieldType: 'textarea',
    },
    {
      name: 'key_highlight1',
      label: 'Key Highlight 1',
      defaultValue: user?.keyHighlights?.keyHighlight1,
    },
    {
      name: 'key_highlight2',
      label: 'Key Highlight 2',
      defaultValue: user?.keyHighlights?.keyHighlight2,
    },
    {
      name: 'key_highlight3',
      label: 'Key Highlight 3',
      defaultValue: user?.keyHighlights?.keyHighlight3,
    },
    {
      name: 'key_highlight4',
      label: 'Key Highlight 4',
      defaultValue: user?.keyHighlights?.keyHighlight4,
    },
    {
      name: 'first_name',
      label: 'First Name',
      defaultValue: user?.founderFirstName,
    },
    {
      name: 'last_name',
      label: 'Last Name',
      defaultValue: user?.founderLastName,
    },
    {
      name: 'email',
      label: 'EmailId',
      defaultValue: user?.email,
    },
    {
      name: 'phone',
      label: 'Phone number',
      defaultValue: user?.phone,
    },
    {
      name: 'company_based',
      label: 'Company based in city',
      defaultValue: user?.companyBased,
    },
    {
      name: 'video_url',
      label: 'Video',
      defaultValue: user?.youtubeVideoUrl,
    },
    {
      name: 'banner',
      label: 'Upload Banner (Suggested Size : 500*300 px)',
      defaultValue: user.banner
        ? `${process.env.NEXT_PUBLIC_APP_TEST_URL}${process.env.API_VERSION}/banner/${user.banner}`
        : undefined,
      fieldType: 'fileUploader',
    },
  ]
  // const handleChange = (
  //   fieldName: any,
  //   value: DefaultOptionType | DefaultOptionType[],
  // ) => {
  //   setSelected((prevState: any) => ({
  //     ...prevState,
  //     [fieldName]: value,
  //   }))
  // }

  const handleChange = (
    fieldName: string,
    value: DefaultOptionType | DefaultOptionType[],
  ) => {
    setSelected((prevState: any) => {
      if (fieldName === 'sector') {
        if (Array.isArray(value)) {
          const updatedSector = prevState.sector.filter(
            (item: DefaultOptionType) => !value.includes(item),
          )

          return {
            ...prevState,
            sector: [...updatedSector, ...value],
          }
        } else {
          const isAlreadySelected = prevState.sector.includes(value)
          const updatedSector = isAlreadySelected
            ? prevState.sector.filter(
                (item: DefaultOptionType) => item !== value,
              )
            : [...prevState.sector, value]

          return {
            ...prevState,
            sector: updatedSector,
          }
        }
      } else {
        return {
          ...prevState,
          [fieldName]: value,
        }
      }
    })
  }

  const handleRadioChange = (fieldName: string, event: RadioChangeEvent) => {
    setSelected((prevState) => ({
      ...prevState,
      [fieldName]: event.target.value,
    }))
  }

  const handleFileChange = (fieldName: string, event: any) => {
    setSelected((prevState: any) => ({
      ...prevState,
      [fieldName]: event,
    }))
  }

  const handleProfileUpdate = async () => {
    let values1: {
      [key in StartupInputFieldNames]: string
    } = {} as {
      [key in StartupInputFieldNames]: string
    }
    // let values2:{
    //   stage: string;
    //   'short-description':string
    // } = {} as {
    //   stage: string;
    //   'short-description':string
    // }
    for (let key in refs) {
      if (refs.hasOwnProperty(key)) {
        //@ts-ignore
        values1[key] = refs[key]?.current?.input?.value || ''
      }
    }

    const short_description =
      refs2['short-description']?.current?.resizableTextArea?.textArea.value ??
      ''
    const stage = refs2.stage?.current?.resizableTextArea?.textArea.value ?? ''
    const values2 = { short_description, stage }
    console.log(values1)
    const values = { ...values1, ...values2 }

    const formData = new FormData()

    // Append values only if they are not null or undefined
    if (selected.banner) {
      formData.append('file', selected.banner)
    }
    if (user._id) {
      formData.append('refId', user._id)
    }

    //@ts-ignore
    if (values['first_name']) {
      formData.append('founderFirstName', values['first_name'])
    }
    if (values['last_name']) {
      formData.append('founderLastName', values['last_name'])
    }

    formData.append('phone', values['phone'] || '') // Example: Handle null or undefined with default value
    formData.append('email', values['email'] || '')
    formData.append('companyBased', values['company_based'] || '')

    formData.append(
      'keyHighlights[keyHighlight1]',
      values['key_highlight1'] || '',
    )
    formData.append(
      'keyHighlights[keyHighlight2]',
      values['key_highlight2'] || '',
    )
    formData.append(
      'keyHighlights[keyHighlight3]',
      values['key_highlight3'] || '',
    )
    formData.append(
      'keyHighlights[keyHighlight4]',
      values['key_highlight4'] || '',
    )
    formData.append('sector', String(selected.sector) || '')
    formData.append('shortDescription', values['short_description'] || '')
    formData.append('stage', values['stage'] || '')
    formData.append('companyName', values['company-name'] || '')
    formData.append('companyDetails', values['company-name'] || '')
    formData.append('registeredCompanyName', values['registered-name'] || '')
    formData.append('youtubeVideoUrl', values.video_url || '')

    if (selected.raised !== null && selected.raised !== undefined) {
      formData.append('raisedFund', selected.raised)
    }
    console.log(formData, values)
    await handleUpdate(formData, 'company_details')
    return router.refresh()
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 py-4 lg:grid-cols-2">
        {inputFields.slice(0, 3).map((field, index) => (
          <Fragment key={field.label}>
            {field.fieldType === 'select' && 'options' in field && (
              <Select
                key={field.label}
                className={'selector-profile'}
                label={field.label}
                title={field.name}
                //@ts-ignore
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
            )}
            {field.fieldType === 'textarea' &&
            field?.name === 'short-description' ? (
              <TextArea
                key={field.name}
                defaultValue={field.defaultValue}
                //@ts-ignore
                ref={refs2[field.name]}
                name={field.name}
                label={field.label}
                className={index === 2 ? 'lg:col-span-2' : ''}
                placeholder={`Enter your ${field.name}`}
              />
            ) : (
              <Input
                key={field.name}
                defaultValue={field.defaultValue}
                //@ts-ignore
                ref={refs[field.name]}
                name={field.name}
                label={field.label}
                className={index === 2 ? 'lg:col-span-2' : ''}
                placeholder={`Enter your ${field.name}`}
              />
            )}
          </Fragment>
        ))}
      </div>
      <div className="h-2 w-full bg-light-shadow"></div>
      <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-1">
        {inputFields.slice(3, 6).map((field, index) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              defaultValue={field.defaultValue}
              //@ts-ignore
              options={field.options.map((option, index) => ({
                key: index,
                value: option.value,
                label: option.label,
              }))}
              onChange={(value: DefaultOptionType | DefaultOptionType[]) =>
                handleChange(field.name, value)
              }
              name={field.name}
            />
          ) : field.fieldType === 'radiogroup' ? (
            <RadioGroup
              key={field.name}
              labelClassName={'!font-semibold text-xl'}
              defaultValue={field.defaultValue}
              //@ts-ignore
              options={field.options}
              // ref={refs[field.name]}
              name={field.name}
              onChange={(value: RadioChangeEvent) =>
                handleRadioChange(field.name, value)
              }
              label={field.label}
              placeholder={`Enter your ${field.name}`}
            />
          ) : field.fieldType === 'textarea' ? (
            <TextArea
              key={field.name}
              defaultValue={field.defaultValue}
              //@ts-ignore
              ref={refs2[field.name]}
              name={field.name}
              label={field.label}
              className={index === 2 ? 'lg:col-span-2' : ''}
              placeholder={`Enter your ${field.name}`}
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
      <div className="h-2 w-full bg-light-shadow"></div>
      <div className="text-md ml-8 items-center pt-6  font-extrabold ">
        Highlights
      </div>
      <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-1">
        {inputFields.slice(6, 10).map((field) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              defaultValue={field.defaultValue}
              //@ts-ignore
              options={field.options.map((option, index) => ({
                key: index,
                value: option.value,
                label: option.label,
              }))}
              onChange={(value: DefaultOptionType | DefaultOptionType[]) =>
                handleChange(field.name, value)
              }
              name={field.name}
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
      <div className="h-2 w-full bg-light-shadow"></div>
      <div className="text-md ml-8 items-center pt-6  font-extrabold ">
        Additional information
      </div>
      <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-2">
        {inputFields.slice(10, 17).map((field) =>
          field.fieldType === 'select' && 'options' in field ? (
            <Select
              key={field.label}
              className={'selector-profile'}
              label={field.label}
              title={field.name}
              defaultValue={field.defaultValue}
              //@ts-ignore
              options={field.options.map((option, index) => ({
                key: index,
                value: option.value,
                label: option.label,
              }))}
              onChange={(value: DefaultOptionType | DefaultOptionType[]) =>
                handleChange(field.name, value)
              }
              name={field.name}
            />
          ) : field.fieldType == 'fileUploader' ? (
            <ImageUploader
              key={field.name}
              onChange={(value) => handleFileChange(field.name, value)}
              defaultValue={field.defaultValue}
              //@ts-ignore
              ref={field.fieldType !== 'select' && refs[field.name]}
              name={field.name}
              label={field.label}
              placeholder={`Enter your ${field.name}`}
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
      <div className=" my-6 flex items-center  px-8 pb-8 md:w-1/6  md:justify-self-end">
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleProfileUpdate}
          className={
            '!h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block md:!bg-primary md:!text-white'
          }
          block>
          Save
        </Button>
      </div>
    </div>
  )
}
