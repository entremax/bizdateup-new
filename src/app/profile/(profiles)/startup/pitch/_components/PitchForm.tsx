'use client'
import React, { useState } from 'react'
import { StartupData } from '@/types/invest'
import ImageUploader from '@/components/form/ImageUploader'
import { Button } from 'antd'
import { useStartupUpdateContext } from '@/components/profile/startup/context'
import { useRouter } from 'next/navigation'
import { FileIcons } from '@/icons/FileIcon'

export default function FaqForm({
  initialUsers,
}: {
  initialUsers: StartupData
}) {
  const router = useRouter()
  const [user, setUser] = useState(initialUsers.pitch)
  const [file, setFiles] = useState<File>()

  const { handleUpdate, loading } = useStartupUpdateContext()

  const removeUploaded = () => {
    const data = {
      refId: initialUsers._id,
    }
    handleUpdate(data, 'delete_pitch')

    setUser('')
  }

  const removeUnUploaded = () => {
    setFiles(undefined)
  }

  const handleProfileUpdate = async () => {
    try {
      if (file) {
        const data = new FormData()
        data.append('refId', initialUsers._id)

        data.append('files', file)

        await handleUpdate(data, 'pitch')
        return router.refresh()
      }
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  const onChange = (file: any) => {
    console.log('🚀 ~ file: PitchForm.tsx:47 ~ onChange ~ selectedFiles:', file)
    if (file) {
      setFiles(file)
      setUser('')
    }
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-1">
        <ImageUploader
          // key={user._id}
          // disabled={false}
          // defaultValue={event.url}
          //@ts-ignore
          // ref={field.fieldType !== 'select' && refs[field.name]}
          name={'event'}
          type={'docs'}
          onChange={onChange}
          // label={"Image"}
          multiple={false}
          placeholder={`Pitch`}
        />
      </div>

      <div className="grid grid-cols-1 px-8 py-4 pb-8">
        {/* {user.map(( file , index ) => ( */}
        <React.Fragment>
          {user ? (
            <div className="border_gray my-2 flex flex-row items-center gap-2 rounded-2xl p-5">
              <FileIcons.Pdf />{' '}
              <span className="text-md text-gray-400">{user}</span>
              <div onClick={() => removeUploaded()}>X</div>
            </div>
          ) : null}
        </React.Fragment>
        {/* ))} */}
        {file ? (
          <React.Fragment>
            <div className="border_gray my-2 flex flex-row items-center gap-2 rounded-2xl p-5">
              <FileIcons.Pdf />{' '}
              <span className="text-md text-gray-400">{file.name}</span>
              <div onClick={() => removeUnUploaded()}>X</div>
            </div>
          </React.Fragment>
        ) : null}
      </div>
      <div className="flex items-center justify-between px-8 pb-8">
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleProfileUpdate}
          className={
            '!h-auto w-1/4 !border-none !bg-light-shadow  !bg-primary  !px-6 !px-6 !py-2 !py-2 font-medium !text-white !outline-none !outline-none md:w-1/4'
          }>
          Save
        </Button>
      </div>
    </div>
  )
}
