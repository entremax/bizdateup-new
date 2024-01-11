'use client'
import React, { useState } from 'react'
import { InputRef } from 'antd/lib/input'
import Input from '@/components/form/Input'
import Select from '@/components/form/Select'
import data from '@/data'
import { cn } from '@/lib/utils'
import PDFUpload from '@/components/PdfUpload'
import { Button } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  useFetchFormMutation,
  useOnboardingMutation,
} from '@/services/startupApiSlice'
import { notifyUser } from '@/components/notification'
import { IStartupDetails } from '@/types/startup'
import { useRouter } from 'next/navigation'
import { temp_values } from '@/reducers/user/authSlice'
import TextAreaInput from '@/components/form/TextArea'

export default function OnboardingForm() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [selected, setSelected] = useState({
    tags: '',
  })
  const [pdf, setPdf] = useState<File | null>(null)
  const { user, temp_auth_medium, refId } = useAppSelector(
    ({ authUser }) => authUser,
  )
  const [onboarding, { isLoading }] = useOnboardingMutation()
  const [fetchForm] = useFetchFormMutation()
  const [defaultValues, setDefaultValues] = useState<IStartupDetails | any>({})
  const refs = {
    'first-name': React.useRef<InputRef | null>(null),
    'last-name': React.useRef<InputRef | null>(null),
    email: React.useRef<InputRef | null>(null),
    phone: React.useRef<InputRef | null>(null),
    'founder-linkedin': React.useRef<InputRef | null>(null),
    'company-name': React.useRef<InputRef | null>(null),
    'registered-name': React.useRef<InputRef | null>(null),
    'company-linkedin': React.useRef<InputRef | null>(null),
    website: React.useRef<InputRef | null>(null),
    'previous-round': React.useRef<InputRef | null>(null),
    'describe-product': React.useRef<InputRef | null>(null),
    traction: React.useRef<InputRef | null>(null),
    revenue: React.useRef<InputRef | null>(null),
    'team-capacity': React.useRef<InputRef | null>(null),
    based: React.useRef<InputRef | null>(null),
    referral: React.useRef<InputRef | null>(null),
    sector: React.useRef<InputRef | null>(null),
  }
  const getReferCode = () => {
    // if (user?.refer) {
    //   return user?.refer
    // }
    const refer_code = sessionStorage.getItem('refer_code') ?? undefined
    const email = localStorage.getItem('email') ?? undefined
    return { refer_code, email }
  }
  const inputFields = [
    {
      name: 'first-name',
      label: 'First Name',
    },
    {
      name: 'last-name',
      label: 'Last Name',
    },
    {
      name: 'email',
      label: 'EmailID',
      defaultValue: getReferCode().email ?? undefined,
      disabled: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'number',
    },
    {
      name: 'founder-linkedin',
      label: "Founder's linked URL",
    },
    {
      name: 'registered-name',
      label: 'Registered company name',
    },
    {
      name: 'company-name',
      label: 'Company name',
    },
    {
      name: 'company-linkedin',
      label: 'Company linked URL',
    },
    {
      name: 'website',
      label: 'Website',
    },
    {
      name: 'previous-round',
      label: 'Describe your previous fundraising round ',
      fieldType:'text-area'
    },
    {
      name: 'describe-product',
      label: 'Describe Your Product',
      fieldType:'text-area'
    },
    {
      name: 'traction',
      label: 'Describe Traction',
      fieldType:'text-area'
    },
    {
      name: 'revenue',
      label: 'Revenue',
      type:'number'
    },
    {
      name: 'team-capacity',
      label: 'Team capacity',
      type:'number'
    },
    {
      name: 'based',
      label: 'Company based',
    },
    {
      name: 'tags',
      label: 'Tags',
      fieldType: 'select',
      options: data.sectorOptions,
    },
    {
      name: 'sector',
      label: 'Sector',
    },
    {
      name: 'referral',
      label: 'Refer & Earn',
      defaultValue: getReferCode().refer_code ?? undefined,
      disabled: true,
    },
  ]

  React.useEffect(() => {
    if (!refId) return
    let range = true
    if (!range) return
    // if (method !== "localSignup") {
    fetchForm(refId)
      .unwrap()
      .then((res) => {
        const data = res.data
        const fetchedDefaultValues = {
          _id: data?._id,
          based: data.companyBased,
          'company-linkedin': data.companyLinkedinUrl,
          // Add other fields with their default values here
          'first-name': data.founderFirstName || '',
          'last-name': data.founderLastName || '',
          email: data.email || '',
          phone: data.phone || '',
          'founder-linkedin': data.founderLinkedinUrl || '',
          'registered-name': data.registeredCompanyName || '',
          'company-name': data.companyName || '', // Replace with the actual field name
          website: data.website || '',
          'previous-round': data.previousFundraisingRounds || '',
          'describe-product': data.productDescription || '',
          traction: data.tractionDescription || '',
          revenue: data.revenue || 0,
          'team-capacity': data.teamCapacity || 0,
          sector: data.sector || '',
        }
        setDefaultValues(fetchedDefaultValues)
      })
      .catch((e) => console.log(e))
    // }
    return () => {
      range = false
    }
  }, [refId])

  React.useEffect(() => {
    const email = localStorage.getItem('email')
    dispatch(temp_values(email))
  }, [temp_auth_medium])
  const handleSubmit = () => {
    let values: { [key in keyof typeof refs]: unknown | null } = {} as {
      [key in keyof typeof refs]: unknown | null
    }
    for (let key in refs) {
      //@ts-ignore
      values[key] = refs[key]?.current?.input.value ?? ''
    }
    const startupDetails: IStartupDetails = {
      founderFirstName: values['first-name'],
      founderLastName: values['last-name'],
      emailOrPhone: user?.email ?? values['email'],
      phone: user?.phone ?? values['phone'],
      founderLinkedinUrl: values['founder-linkedin'],
      registeredCompanyName: values['registered-name'],
      companyName: values['company-name'],
      companyLinkedinUrl: values['company-linkedin'],
      website: values.website,
      previousFundraisingRounds: values['previous-round'],
      productDescription: values['describe-product'],
      tractionDescription: values.traction,
      revenue: values.revenue ? parseInt(values.revenue as string) : 0,
      teamCapacity: values['team-capacity']
        ? parseInt(values['team-capacity'] as string)
        : 0,
      companyBased: values.based,
      sector: values.sector,
      pitchUpload: '',
      refer: sessionStorage.getItem('startupReferalLink') ?? '',
    }
    const body = new FormData()
    if (!pdf) {
      return notifyUser('error', 'Please add a pitch pdf.')
    }
    body.append('file', pdf)
    body.append('refId', refId ?? '')
    body.append('tags', selected.tags)
    Object.keys(startupDetails).forEach((key) =>
      body.append(key, startupDetails[key as keyof IStartupDetails]),
    )
    console.log(body)
    onboarding(body)
      .unwrap()
      .then((res) => {
        notifyUser('success', res?.data?.message ?? 'Submitted Successfully')
        return router.push('/startup/register-success')
      })
      .catch((e) => {
        notifyUser('error', e?.data?.message ?? 'Please retry!!')
      })
  }
  const handleFileChange = (file: File | null) => {
    file && setPdf(file)
  }
  const handleSelectChange = (
    fieldName: any,
    value: DefaultOptionType | DefaultOptionType[],
  ) => {
    setSelected((prevState: any) => ({ ...prevState, [fieldName]: value }))
  }

  return (
    <div className="flex flex-col gap-3">
      <h3 className="px-4 text-3xl font-semibold text-primary-dark xl:text-4xl">
        Raise with Bizdateup
      </h3>
      <p className="text-md px-4 text-gray-600 xl:text-xl">
        Tell us a little about your company. This will help us understand your
        business better.
      </p>
      <div className="grid grid-cols-1">
        <div className="grid gap-8 p-8 lg:grid-cols-2">
          {inputFields.map((field, index) =>
            field.fieldType === 'select' && 'options' in field ? (
              <Select
                wrapperClassName={'col-span-2'}
                mode={'tags'}
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
                  handleSelectChange(field.name, value)
                }
                name={field.name}
              />
            ) : field.fieldType==='text-area'?
              <TextAreaInput
                
                wrapperClassName={cn(
                  index < 4 ? 'col-span-2 lg:col-span-1' : 'col-span-2',
                )}
                disabled={field.disabled ?? false}
                //TODO- uncomment this
                // required
                key={field.name}
                defaultValue={defaultValues[field.name] ?? field.defaultValue}
                //@ts-ignore
                ref={field.fieldType !== 'select' && refs[field.name]}
                name={field.name}
                label={field.label}
                placeholder={`Enter your ${field.name}`}
              />
              :(
              <Input
                wrapperClassName={cn(
                  index < 4 ? 'col-span-2 lg:col-span-1' : 'col-span-2',
                )}
                disabled={field.disabled ?? false}
                //TODO- uncomment this
                // required
                key={field.name}
                defaultValue={defaultValues[field.name] ?? field.defaultValue}
                //@ts-ignore
                ref={field.fieldType !== 'select' && refs[field.name]}
                name={field.name}
                label={field.label}
                placeholder={`Enter your ${field.name}`}
              />
            ),
          )}
          <div className="col-span-2 flex flex-col gap-3">
            <p
              className={
                'font-medium !text-gray-900 text-black transition-all duration-200'
              }>
              Upload your company pitch
            </p>
            <PDFUpload className={'col-span-2'} onFileSet={handleFileChange} />
          </div>
          <Button
            onClick={handleSubmit}
            type={'default'}
            className={'col-span-2 !bg-primary !text-white '}
            size={'large'}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}
