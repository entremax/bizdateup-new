'use client'
import React, { useState } from 'react'
import { useAppDispatch } from '@/store/hooks'
import ImageUpload from '@/components/ImageUpload'
import { useUpdateProfileImageMutation } from '@/services/apiSlice'
import { notifyUser } from '@/components/notification'
import { apiUri, cn } from '@/lib/utils'
import { useUser } from '@/hooks/useUser'

type IBorderColors = 'premium' | 'error' | 'normal' | 'uploading'
const ImageUploader: React.FC = () => {
  const borderColors = {
    premium: 'drop-shadow-lg !border-[#F3B518]',
    normal: 'drop-shadow-lg !border-[#8686F5]',
    uploading: 'drop-shadow-lg  !border-[#22c55e]',
    error: 'drop-shadow-lg  !border-[#FF5630]',
  }
  const dispatch = useAppDispatch()
  const user = useUser()
  const [file, setFile] = useState<File | null>(null)
  const [borderColor, setBorderColor] = useState<IBorderColors>(
    user?.premiumMember ? 'premium' : 'normal',
  )
  const [uploadImage] = useUpdateProfileImageMutation()

  const handleFileChange = (file: File | null) => {
    // if (file) {
    //   // Assuming you want to display a preview of the image
    //   setPreviewImage(URL.createObjectURL(file))
    //   setPreviewTitle(file.name)
    //   setPreviewOpen(true)
    // } else {
    //   setPreviewOpen(false)
    // }
    file && setFile(file)
    if (file) {
      const body = new FormData()
      setBorderColor('uploading')
      body.append('file', file)
      body.append('refId', user?.refId ?? '')
      uploadImage(body)
        .unwrap()
        .then((res) => {
          setBorderColor('normal')
          notifyUser('success', res?.data?.message ?? 'Submitted Successfully')
        })
        .catch((e) => {
          setBorderColor('error')
          notifyUser('error', e?.data?.message ?? 'Please retry!!')
        })
    }
  }
  console.log(user)
  return (
    <div className={'max-h-[6rem] max-w-[6rem]'}>
      <ImageUpload
        previewImageUrl={
          user?.userData?.profilePic === ''
            ? undefined
            : apiUri().v0 + '/investor/profile_pic/' + user?.refId
        }
        onFileSet={handleFileChange}
        className={cn(`!border-4 border-solid ` + borderColors[borderColor])}
      />
      {/*<Modal*/}
      {/*  visible={true}*/}
      {/*  title={previewTitle}*/}
      {/*  footer={null}*/}
      {/*  onCancel={handleCancel}>*/}
      {/*  <img*/}
      {/*    alt="example"*/}
      {/*    style={{ width: '100%' }}*/}
      {/*    src={apiUri().v0 + '/investor/profile_pic/' + refId}*/}
      {/*  />*/}
      {/*</Modal>*/}
    </div>
  )
}

export default ImageUploader
