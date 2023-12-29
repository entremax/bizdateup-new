'use client'
import React, { useState } from 'react'
import { CameraOutlined } from '@ant-design/icons'
import { Modal, Upload } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import { useAppDispatch } from '@/store/hooks'
import { setNotification } from '@/reducers/others/notificationSlice'
import { apiUri } from '@/lib/utils'

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const ImageUploader: React.FC = () => {
  const dispatch = useAppDispatch()
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [file, setFile] = useState<UploadFile<string | Blob> | null>(null)

  const handleCancel = () => {
    setPreviewOpen(false)
    setFile(null)
  }

  const handlePreview = async (newFile: UploadFile) => {
    if (!newFile.url && !newFile.preview) {
      newFile.preview = await getBase64(newFile.originFileObj as RcFile)
    }

    setPreviewImage(newFile.url || (newFile.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(
      newFile.name || newFile.url!.substring(newFile.url!.lastIndexOf('/') + 1),
    )
  }

  const handleChange: UploadProps['onChange'] = ({ file: newFile }) => {
    console.log()
    setFile(newFile)
    if (file?.status === 'removed') {
      setFile(null)
    }
    if (file?.status === 'done') {
      dispatch(
        setNotification({
          type: 'success',
          message: 'Image Uploaded',
        }),
      )
    }
    // handlePreview(newFile)
  }

  const uploadButton = (
    <div>
      <CameraOutlined width={56} height={56} />
    </div>
  )

  return (
    <div className={'min-h-[6rem] max-w-[6rem]'}>
      <Upload
        action={apiUri().v0 + '/startup/logo'}
        listType="picture-circle"
        //@ts-ignore
        file={file}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple={false}>
        {file ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  )
}

export default ImageUploader
