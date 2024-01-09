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
  | 'company-profile'
  | 'pitch'
  | 'team'
  | 'mentor'
  | 'deal-term'
  | 'upload-docs'
  | 'event'
  | 'faq'

type sectionDetails = {
  name: string
  editable: boolean
}
type sectionsInterface = {
  [key in sectionType]: sectionDetails
}

export default function DetailsTabStartup({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editState = searchParams.get('edit')
  const segment: sectionType | null =
    useSelectedLayoutSegment() as sectionType | null
  const sm = searchParams.get('sm')
  const sections: sectionsInterface = {
    'company-profile': {
      name: 'Company Profile',
      editable: true,
    },
    pitch: {
      name: 'Pitch',
      editable: false,
    },
    team: {
      name: 'Team',
      editable: true,
    },
    mentor: {
      name: 'Mentor',
      editable: true,
    },
    'deal-term': {
      name: 'Deal Term',
      editable: false,
    },
    'upload-docs': {
      name: 'Upload Docs',
      editable: false,
    },
    event: {
      name: 'Upload Docs',
      editable: false,
    },
    faq: {
      name: 'FAQs',
      editable: false,
    },
  }

  const [section, setSection] = useState<sectionDetails>(
    sections['company-profile'],
  )

  React.useEffect(() => {
    if (segment) {
      setSection(sections[segment])
    } else {
      setSection(sections['company-profile'])
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
