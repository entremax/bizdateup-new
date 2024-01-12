'use client'
import React from 'react'
import UploadForm from '@/components/profile/startup/UploadDocForm'
import { FileIcons } from '@/icons/FileIcon'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'
export default function Bank() {
  const {user,token,role}=useAppSelector(({authUser})=>authUser)
  const searchParams=useSearchParams()
  const editState=Boolean(searchParams.get('edit'))
  
  if (!user||role!=='startup'||!token) {
    return null
  }
  return (
    <div className="flex flex-col">
      {editState? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-8 p-8 xl:grid-cols-1">
            {user.dueDiligenceFiles.map((file, index) => (
              <React.Fragment key={file._id}>
                <div className="border_gray flex flex-row items-center gap-2 rounded-2xl p-5">
                  <FileIcons.Pdf />{' '}
                  <span className="text-md text-gray-400">{file.name}</span>
                </div>
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
