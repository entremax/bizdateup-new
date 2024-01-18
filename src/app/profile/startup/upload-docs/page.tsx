'use client'
import React from 'react'
import UploadForm from '@/components/profile/startup/UploadDocForm'

import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'
import FilePreview from '@/components/profile/FileDetailsPreview'
export default function Bank() {
  const { user, token, role } = useAppSelector(({ authUser }) => authUser)
  const searchParams = useSearchParams()
  const editState = Boolean(searchParams?.get('edit'))

  if (!user || role !== 'startup' || !token) {
    return null
  }
  return (
    <div className="flex flex-col">
      {!editState ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-8 p-8 xl:grid-cols-1">
            {user.dueDiligenceFiles.map((file, index) => (
              <React.Fragment key={file._id}>
                <FilePreview fileName={file.name} />
              </React.Fragment>
            ))}
          </div>
          <div className="h-1 w-full bg-light-shadow"></div>
        </div>
      ) : (
        <UploadForm initialUsers={user} />
      )}
    </div>
  )
}
