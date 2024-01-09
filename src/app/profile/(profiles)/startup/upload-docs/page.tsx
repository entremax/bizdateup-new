import React from 'react'
import getUserDetails from '@/action/user'
import type { Metadata } from 'next'
import UploadForm from '@/components/profile/startup/UploadDocForm'
import { FileIcons } from '@/icons/FileIcon'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: 'Document Upload - Profile | Bizdateup',
  description: 'Document Upload Details Overview',
}

export default async function Bank({ searchParams }: Props) {
  const editState: boolean = !searchParams.edit

  const { role, user } = await getUserDetails()
  if (!user || role !== 'startup') {
    return <>Loading</>
  }

  return (
    <div className="flex flex-col">
      {!searchParams.edit ? (
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
