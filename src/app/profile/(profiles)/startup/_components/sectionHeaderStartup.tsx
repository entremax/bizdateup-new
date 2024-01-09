'use client'
import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import {
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import Edit from '@/icons/Edit'
import { cn } from '@/lib/utils'

type SectionType =
  | 'company-profile'
  | 'pitch'
  | 'team'
  | 'mentor'
  | 'deal-terms'
  | 'upload-docs'
  | 'events'
  | 'faqs'

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
  const { user } = useUser()

  const sections: SectionsInterface = {
    'company-profile': { id: 1, name: 'Company Profile', editable: true },
    pitch: { id: 2, name: 'Pitch', editable: true },
    team: { id: 3, name: 'Team', editable: true },
    mentor: { id: 4, name: 'Mentors', editable: true },
    'deal-terms': { id: 5, name: 'Deal Terms', editable: true },
    'upload-docs': { id: 6, name: 'Upload Docs', editable: true },
    events: { id: 7, name: 'Event', editable: true },
    faqs: { id: 8, name: 'FAQs', editable: true },
  }

  const [section, setSection] = useState<SectionDetails>(
    sections['company-profile'],
  )

  useEffect(() => {
    setSection(segment ? sections[segment] : sections['company-profile'])
  }, [segment])

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

  return (
    <>
      <h4 className="flex-grow text-2xl text-primary-dark">{section.name}</h4>
      {section.editable && (
        <Button
          loading={loading}
          icon={<Edit />}
          type="default"
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
