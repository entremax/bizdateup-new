'use client'
import React, { useEffect, useState } from 'react'
import ImageUpload from '@/components/ImageUpload'
import { useUpdateProfileImageMutation } from '@/services/apiSlice'
import { notifyUser } from '@/components/notification'
import { apiUri, cn } from '@/lib/utils'
import { DataInner } from '@/types'
import { StartupData } from '@/types/invest'
import { revalidate } from '@/action/revalidate'

type IBorderColors = 'premium' | 'error' | 'normal' | 'uploading'
type Props =
  | { user: DataInner; role: 'investor'; refId: string }
  | { user: StartupData; role: 'startup'; refId: string }

const ImageUploader: React.FC<Props> = ({ user, role, refId }) => {
  const borderColors = {
    premium: 'drop-shadow-lg !border-[#F3B518]',
    normal: 'drop-shadow-lg !border-[#8686F5]',
    uploading: 'drop-shadow-lg  !border-[#22c55e]',
    error: 'drop-shadow-lg  !border-[#FF5630]',
  }
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
      body.append('refId', role === 'investor' ? user?._id : refId)

      uploadImage({ body, profileType: role })
        .unwrap()
        .then((res) => {
          setState((prevState) => ({
            ...prevState,
            borderColor: determineBorderColor(),
          }))
          notifyUser('success', res?.data?.message ?? 'Submitted Successfully')
          revalidate('/profile/investor', 'layout')
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
            ? apiUri().v0 + '/logo/' + user?.logo
            : user?.profilePic === ''
              ? undefined
              : apiUri().v0 +
                '/investor/profile_pic_by_name/' +
                user?.profilePic
        }
        onFileSet={handleFileChange}
        className={cn(
          `${
            user && role === 'investor' && user?.profilePic !== ''
              ? borderColors[state.borderColor]
              : '!border-0 '
          } object-fit relative !border-[6px] border-solid `,
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
