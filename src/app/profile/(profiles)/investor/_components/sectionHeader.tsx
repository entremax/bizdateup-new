'use client'
import { Button } from 'antd'
import Edit from '@/icons/Edit'
import React, { useState } from 'react'
import {
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from 'next/navigation'
import { useAppSelector } from '@/store/hooks'
import { Icons } from '@/icon'

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

export default function SectionHeader() {
  const segment: sectionType | null =
    useSelectedLayoutSegment() as sectionType | null
  const searchParams = useSearchParams()
  const router = useRouter()
  const editState = searchParams.get('edit')
  const { user, kycCompletionPercentage, kycStatus } = useAppSelector(
    ({ authUser }) => authUser,
  )
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
        ? `/profile/investor/${segment ? segment : ''}`
        : `?edit=${editState === null ? 'true' : ''}`,
      { scroll: false },
    )
  }

  return (
    <>
      <h4 className="flex-grow text-2xl text-primary-dark">{section.name}</h4>
      {user && kycStatus && kycCompletionPercentage === 100 && (
        <div
          className={
            'flex items-center justify-center gap-1 rounded-full bg-lemon-lighter p-1 text-lemon shadow'
          }>
          <Icons.FilledCheck />{' '}
          <span className={'reset text-xs font-normal text-lemon'}>
            {' '}
            KYC Verified
          </span>
        </div>
      )}
      {section.editable && (
        <Button
          icon={<Edit />}
          type={'default'}
          onClick={handleEdit}
          className={
            '!flex !items-center !font-semibold !text-primary !outline !outline-[0.022rem] !outline-primary'
          }>
          Edit
        </Button>
      )}
    </>
  )
}
