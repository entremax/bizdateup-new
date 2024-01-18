'use client'
import React, { useState } from 'react'
import { StartupData } from '@/types/invest'
import ImageUploader from '@/components/form/ImageUploader'
import { Button } from 'antd'
import { useStartupUpdateContext } from '@/components/profile/startup/context'
import { useRouter } from 'next/navigation'
import { FileIcons } from '@/icons/FileIcon'
import SubmitComponent from '@/components/profile/SubmitComponent'
import FilePreview from '../../_components/FileDetailsPreview'
import { CloseOutlined } from '@ant-design/icons'

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
            <FilePreview
            fileName={user}
            remove={
              <>
                <div className="grow" />
                <Button
                  icon={<CloseOutlined height={46} width={46} />}
                  shape="circle"
                  className="!border-none !bg-transparent !outline-none"
                  onClick={removeUploaded}
                />
              </>
            }
          />
          ) : null}
        </React.Fragment>
        {file ? (
          <FilePreview
            fileName={file.name}
            remove={
              <>
                <div className="grow" />
                <Button
                  icon={<CloseOutlined height={46} width={46} />}
                  shape="circle"
                  className="!border-none !bg-transparent !outline-none"
                  onClick={removeUnUploaded}
                />
              </>
            }
          />
        ) : null}
      </div>
      <SubmitComponent
        onClick={handleProfileUpdate}
        loading={loading}
        disabled={loading}
        block
      />
    </div>
  )
}
