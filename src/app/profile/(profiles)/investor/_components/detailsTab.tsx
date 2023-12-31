'use client'
import React, { ReactNode, useState } from 'react'
import {
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from 'next/navigation'
import GoBack from '@/components/back_btn'
import { Button } from 'antd'
import Edit from '@/icons/Edit'

type sectionType =
  | 'general-info'
  | 'kyc'
  | 'bank'
  | 'other'
  | 'investment-manager'

type sectionDetails = {
  name: string
  editable: boolean
}
type sectionsInterface = {
  [key in sectionType]: sectionDetails
}

export default function DetailsTab({ children }: { children: ReactNode }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editState = searchParams.get('edit')
  const segment: sectionType | null =
    useSelectedLayoutSegment() as sectionType | null
  const sm = searchParams.get('sm')
  const sections: sectionsInterface = {
    'general-info': {
      name: 'General Information',
      editable: true,
    },
    kyc: {
      name: 'KYC',
      editable: false,
    },
    bank: {
      name: 'Bank Details',
      editable: true,
    },
    other: {
      name: 'Other Details',
      editable: true,
    },
    'investment-manager': {
      name: 'Investment Manager',
      editable: false,
    },
  }

  const [section, setSection] = useState<sectionDetails>(
    sections['general-info'],
  )

  React.useEffect(() => {
    if (segment) {
      setSection(sections[segment])
    } else {
      setSection(sections['general-info'])
    }
  }, [segment])
  const handleEdit = () => {
    return router.push(
      editState === 'true'
        ? `/profile/investor/${segment ? segment : ''}${
            sm === 'y' ? '?sm=y' : ''
          }`
        : `?edit=${editState === null ? 'true' : ''}${
            sm === 'y' ? '&sm=y' : ''
          }`,
      { scroll: false },
    )
  }
  if (sm !== 'y') return null
  return (
    <div className={'flex flex-col lg:hidden'}>
      <div className={'flex gap-4 px-2 py-3'}>
        <GoBack />
        <h4 className="flex-grow text-2xl text-primary-dark">{section.name}</h4>
      </div>
      {children}
      <div className="px-8">
        {section.editable && !editState && (
          <Button
            type={'default'}
            onClick={handleEdit}
            size={'large'}
            className={
              '!flex !items-center justify-center !bg-primary !text-white !outline-none'
            }
            block>
            <Edit fill={'#fff'} /> Edit
          </Button>
        )}
      </div>
    </div>
  )
}
