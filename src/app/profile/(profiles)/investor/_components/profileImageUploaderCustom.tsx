'use client'
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '@/store/hooks'
import ImageUpload from '@/components/ImageUpload'
import { useUpdateProfileImageMutation } from '@/services/apiSlice'
import { notifyUser } from '@/components/notification'
import { apiUri, cn } from '@/lib/utils'
import { useUser } from '@/hooks/useUser'
import { DataInner } from '@/types'
import { StartupData } from '@/types/invest'

type IBorderColors = 'premium' | 'error' | 'normal' | 'uploading'
type Props =
  | { user: DataInner; role: 'investor' }
  | { user: StartupData; role: 'startup' }

const ImageUploader: React.FC<Props> = ({ user, role }) => {
  const borderColors = {
    premium: 'drop-shadow-lg !border-[#F3B518]',
    normal: 'drop-shadow-lg !border-[#8686F5]',
    uploading: 'drop-shadow-lg  !border-[#22c55e]',
    error: 'drop-shadow-lg  !border-[#FF5630]',
  }
  const { user: loacl } = useUser()
  const dispatch = useAppDispatch()

  const [uploadImage] = useUpdateProfileImageMutation()
  const [state, setState] = useState({
    file: null as File | null,
    borderColor:
      role === 'investor' && user?.membership?.isMember === 'yes'
        ? 'premium'
        : ('normal' as IBorderColors),
  })

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
    return role === 'investor' && user?.membership?.isMember === 'yes'
      ? 'premium'
      : 'normal'
  }

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      borderColor: determineBorderColor(),
    }))
  }, [])
  return (
    <div className={'max-h-[6rem] max-w-[6rem]'}>
      <ImageUpload
        previewImageUrl={
          role === 'startup'
            ? apiUri().v0 + '/investor/profile_pic/' + user?.logo
            : user?.profilePic === ''
              ? undefined
              : apiUri().v0 + '/investor/profile_pic/' + user?._id
        }
        onFileSet={handleFileChange}
        className={cn(
          `${
            user && role === 'investor' && user?.profilePic !== ''
              ? borderColors[state.borderColor]
              : '!border-0 '
          } relative !border-[6px] border-solid`,
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
