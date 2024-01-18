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
  | 'deal-terms'
  | 'upload-docs'
  | 'events'
  | 'faqs'

type sectionDetails = {
  name: string
  editable?: boolean
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
  const editState = Boolean(searchParams?.get('edit'))
  const segment: sectionType | null = useSelectedLayoutSegment(
    'startup',
  ) as sectionType | null
  const sm = Boolean(searchParams?.get('sm'))
  const sections: sectionsInterface = {
    'company-profile': {
      name: 'Company Profile',
    },
    pitch: {
      name: 'Pitch',
    },
    team: {
      name: 'Team',
    },
    mentor: {
      name: 'Mentor',
    },
    'deal-terms': {
      name: 'Deal Term',
    },
    'upload-docs': {
      name: 'Upload Docs',
    },
    events: {
      name: 'Events',
    },
    faqs: {
      name: 'FAQs',
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
      editState
        ? `/profile/startup/${segment ? segment : ''}${sm ? '?sm=y' : ''}`
        : `?edit=${!editState ? 'true' : ''}${sm ? '&sm=y' : ''}`,
      { scroll: false },
    )
  }
  if (!sm) return null
  return (
    <div className={'flex flex-col lg:hidden'}>
      <div className={'flex items-center gap-4 px-2 py-3'}>
        <GoBack />
        <h4 className="flex-grow text-xl text-primary-dark">{section.name}</h4>
      </div>
      {children}
      {editState ? null : (
        <div className="border_gray fixed inset-0 bottom-0 top-auto border-0 border-t border-solid bg-white  p-4  shadow-2xl">
          <Button
            type={'default'}
            onClick={handleEdit}
            size={'large'}
            className={
              '!flex !items-center justify-center gap-2 !border-0 !bg-light-shadow !text-primary !outline-none'
            }
            block>
            <Edit /> Edit
          </Button>
        </div>
      )}
    </div>
  )
}
