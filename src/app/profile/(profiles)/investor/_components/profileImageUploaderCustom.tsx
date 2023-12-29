'use client'
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '@/store/hooks'
import ImageUpload from '@/components/ImageUpload'
import { notifyUser } from '@/components/notification'
import { apiUri, cn } from '@/lib/utils'
import { useUser } from '@/hooks/useUser'
import { DataInner } from '@/types'

type IBorderColors = 'premium' | 'error' | 'normal' | 'uploading'
type Props = {
  user: DataInner
}

const ImageUploader: React.FC<Props> = () => {
  const borderColors = {
    premium: 'drop-shadow-lg !border-[#F3B518]',
    normal: 'drop-shadow-lg !border-[#8686F5]',
    uploading: 'drop-shadow-lg  !border-[#22c55e]',
    error: 'drop-shadow-lg  !border-[#FF5630]',
  }
  const { user: loacl } = useUser()
  const user = loacl?.userData
  const [state, setState] = useState({
    file: null as File | null,
    borderColor:
      user?.membership?.isMember === 'yes'
        ? 'premium'
        : ('normal' asIBorderColors),
  })

  const dispatch  useAppDispatch()
  const [uploadImage] = useUpdateProfieImageMutation()

  const handleFileChange = (file: File | null) => {
    if (file) {
      setState((prevState) => ({ ...prevState, file }))
      const body = new FormData()
      setState((prevState) => ({ ...prevState, borderColor: 'uploading' }))

      body.append('file', file)
      body.append('refId', user?._id ?? '')

      uploadImage(body)
        .unwrap()
        .then((res) => {
          setState((prevState) => ({
            ...prevState,
            borderColor: determineBorderColor(),
          }))
          notifyUser('success', res?.data?.message ?? 'Submitted Successfully')
        })
        .catch((e) => {
          setState((prevState) => ({ ...prevState, borderColor: 'error' }))
          notifyUser('error', e?.data?.message ?? 'Please retry!!')
        })
    }
  }

  const determineBorderColor = () => {
    return user?.membership?.isMember === 'yes' ? 'premium' : 'normal'
  }

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      borderColor: determineBorderColor(),
    }))
  }, [user?.membership?.isMember])
  return (
    <div className={'max-h-[6rem] max-w-[6rem]'}>
      <ImageUpload
        previewImageUrl={
          user?.profilePic === ''
            ? undefined
            : apiUri().v0 + '/investor/profile_pic/' + user?._id
        }
        onFileSet={handleFileChange}
        className={cn(
          `${
            user && user?.role === 'investor'
              ? borderColors[state.borderColor]
              : ''
          } relative !border-4 border-solid`,
        )}
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
