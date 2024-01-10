'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'antd'
import {
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from 'next/navigation'
import { useAppSelector } from '@/store/hooks'
import { Icons } from '@/components/icons/icon'
import { KYCStatus } from '@/types'
import Edit from '@/icons/Edit'
import { cn } from '@/lib/utils'

type SectionType =
  | 'general-info'
  | 'kyc'
  | 'bank'
  | 'other'
  | 'investment-manager'

type SectionDetails = {
  id: number
  name: string
  editable: boolean
}

type SectionsInterface = {
  [key in SectionType]: SectionDetails
}

export default function SectionHeader() {
  const segment: SectionType | null =
    useSelectedLayoutSegment() as SectionType | null
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const editState = searchParams.get('edit')
  const { user, kycStatus } = useAppSelector(({ authUser }) => authUser)

  const sections: SectionsInterface = useMemo(
    () => ({
      'general-info': { id: 1, name: 'General Information', editable: true },
      kyc: {
        id: 2,
        name: 'KYC',
        editable:
          kycStatus?.includes(KYCStatus.aadhar || KYCStatus.pan) ?? false,
      },
      bank: { id: 3, name: 'Bank Details', editable: true },
      other: { id: 4, name: 'Other Details', editable: true },
      'investment-manager': {
        id: 5,
        name: 'Investment Manager',
        editable: false,
      },
    }),
    [kycStatus],
  )
  const [section, setSection] = useState<SectionDetails>(
    sections['general-info'],
  )

  useEffect(() => {
    setSection(segment ? sections[segment] : sections['general-info'])
  }, [sections, segment])

  const handleEdit = () => {
    setLoading(true)
    router.push(
      editState === 'true'
        ? `/profile/investor/${segment || ''}`
        : `?edit=${editState === null ? 'true' : ''}`,
      { scroll: false },
    )
    setLoading(false)
  }

  const kycStatusDetails = () => {
    switch (section.id) {
      case 2:
        return (
          kycStatus && !kycStatus.includes(KYCStatus.aadhar && KYCStatus.pan)
        )
      case 3:
        return kycStatus && !kycStatus.includes(KYCStatus.bank)
      case 4:
      case 1:
        return kycStatus && !kycStatus.includes(KYCStatus.other)
      default:
        return false
    }
  }

  return (
    <>
      <h4 className="flex-grow text-2xl text-primary-dark">{section.name}</h4>
      {(user && !kycStatus) ||
        (kycStatusDetails() && section.id === (2 || 3) && (
          <div
            className={`mx-4 flex items-center justify-center gap-1 rounded-full bg-lemon-lighter p-1 text-lemon shadow`}>
            <Icons.FilledCheck />{' '}
            <span className={`reset text-xs font-normal text-lemon`}>
              {section.name} Verified
            </span>
          </div>
        ))}
      {section.editable && (
        <Button
          loading={loading}
          icon={<Edit />}
          type={'default'}
          onClick={handleEdit}
          className={cn(
            `flex items-center font-semibold text-primary outline outline-[0.022rem] outline-primary ${
              loading ? ' cursor-loading' : ''
            }`,
          )}>
          Edit
        </Button>
      )}
    </>
  )
}
