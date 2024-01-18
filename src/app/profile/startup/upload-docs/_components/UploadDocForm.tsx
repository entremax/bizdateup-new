'use client'
import React, { useState } from 'react'
import { StartupData } from '@/types/invest'
import ImageUploader from '@/components/form/ImageUploader'
import { Button } from 'antd'
import { useStartupUpdateContext } from '@/components/profile/startup/context'
import { useRouter } from 'next/navigation'
import { FileIcons } from '@/icons/FileIcon'
import FilePreview from '../../_components/FileDetailsPreview'
import {
  CloseCircleFilled,
  CloseCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import SubmitComponent from '../../_components/SubmitComponent'

export default function FaqForm({
  initialUsers,
}: {
  initialUsers: StartupData
}) {
  const router = useRouter()
  const [user, setUser] = useState(initialUsers.dueDiligenceFiles)
  const [files, setFiles] = useState<File[]>([])

  const { handleUpdate, loading } = useStartupUpdateContext()

  const removeUploaded = (index: number) => {
    setUser((prevFaq) => {
      if (index >= 0 && index < prevFaq.length) {
        const deletedFile = prevFaq[index]

        if (deletedFile._id) {
          const data = {
            refId: initialUsers._id,
            delId: deletedFile._id,
          }
          console.log(
            '🚀 ~ file: TeamForm.tsx:87 ~ setTeamMembers ~ data:',
            data,
          )
          handleUpdate(data, 'delete_dealfile')
        }

        return [...prevFaq.slice(0, index), ...prevFaq.slice(index + 1)]
      } else {
        console.error('Invalid index:', index)
        return prevFaq
      }
    })
  }
  const removeUnUploaded = (index: number) => {
    setFiles((prevFaq) => {
      if (index >= 0 && index < prevFaq.length) {
        const deletedFile = prevFaq[index]

        // if (deletedFaq._id) {
        //     const data = {
        //       refId:initialUsers._id,
        //       delId:deletedFaq._id
        //     }
        //     console.log("🚀 ~ file: TeamForm.tsx:87 ~ setTeamMembers ~ data:", data)
        //     handleUpdate(data , 'delete_faq')
        // }

        const updatedFile = [
          ...prevFaq.slice(0, index),
          ...prevFaq.slice(index + 1),
        ]

        return updatedFile
      } else {
        console.error('Invalid index:', index)
        return prevFaq
      }
    })
  }
  const handleProfileUpdate = async () => {
    try {
      if (files.length > 0) {
        const data = new FormData()
        data.append('refId', initialUsers._id)

        files?.forEach((item, index) => {
          data.append('files', item)
        })

        await handleUpdate(data, 'duefile')
        return router.refresh()
      }
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  const onChange = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      console.log(
        '🚀 ~ file: UploadDocForm.tsx:77 ~ onChange ~ selectedFiles:',
        selectedFiles,
      )

      // const newFiles = Array.isArray(selectedFiles) ? Array.from(selectedFiles) : [selectedFiles];
      const newFiles = Array.from(selectedFiles)

      console.log(
        '🚀 ~ file: UploadDocForm.tsx:78 ~ onChange ~ newFiles:',
        newFiles,
      )

      newFiles.forEach((newFile) => {
        const existingFileIndex = files.findIndex(
          (file) => file.name === newFile.name,
        )

        if (existingFileIndex !== -1) {
          const updatedFiles = [...files]
          updatedFiles[existingFileIndex] = newFile
          setFiles(updatedFiles)
        } else {
          setFiles((prevFiles) => [...prevFiles, newFile])
        }
      })
    }
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-1">
        <ImageUploader
          name={'event'}
          type={'docs'}
          //@ts-ignore
          onChange={(file) => onChange(file)}
          multiple={true}
          placeholder={`Upload Image`}
        />
      </div>

      <div className="grid grid-cols-1 gap-2 px-8 py-4 pb-8">
        {user.map((file, index) => (
          <React.Fragment key={file._id}>
            <FilePreview
              fileName={file.name}
              remove={
                <>
                  <div className="grow" />
                  <Button
                    icon={<CloseOutlined height={46} width={46} />}
                    shape="circle"
                    className="!border-none !bg-transparent !outline-none"
                    onClick={() => removeUploaded(index)}
                  />
                </>
              }
            />
          </React.Fragment>
        ))}
        {files.map((file, index) => (
          <FilePreview
            key={index}
            fileName={file.name}
            remove={
              <>
                <div className="grow" />
                <Button
                  icon={<CloseOutlined height={46} width={46} />}
                  shape="circle"
                  className="!border-none !bg-transparent !outline-none"
                  onClick={() => removeUnUploaded(index)}
                />
              </>
            }
          />
        ))}
      </div>
      <SubmitComponent
        loading={loading}
        disabled={loading}
        type={'default'}
        onClick={handleProfileUpdate}
      />
    </div>
  )
}
