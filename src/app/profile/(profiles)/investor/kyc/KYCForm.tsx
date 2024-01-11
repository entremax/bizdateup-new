'use client'
import { Button } from 'antd'
import React, { useRef, useState } from 'react'
import { InputRef } from 'antd/lib/input'
import Input from '@/components/form/Input'
import UploadCheck from '@/components/profile/dropCheck'
import { DataInner } from '@/types'
import { useUpdateContext } from '@/components/profile/context'
import { useRouter } from 'next/navigation'
import { notifyUser } from '@/components/notification'
import OfflineKyc from '@/app/profile/(profiles)/investor/kyc/OfflineKyc'
import ImageCropper from '@/components/ImageCropper'
import Image from 'next/image'

export default function AadharForm({ user }: { user: DataInner }) {
  
  const [cropData, setImageData] = useState<{
    front: string | null
    back: string | null
  }>({ front: null, back: null })
  const [cropDataFront, setImageDataFront] = useState<Blob>()
  const [cropDataBack, setImageDataBack] = useState<Blob>()
  const [modalVisible, setModalVisible] = useState(false)

  const [fileList, setFileList] = useState<any[]>([])
  const [type, setType] = useState<string | null>()

  const { handleUpdate, loading } = useUpdateContext()
  const router = useRouter()
  const refs = {
    aadharNo: useRef<InputRef | null>(null),
  }
  conso'🚀 ~ AadharForm ~ refs:' ", refs)
  
  const handleCrop = (croppedImageData: string, croppedImage: any) => {
    conso'🚀 ~ handleCrop ~ type:' ", type)
    conso'🚀 ~ handleCrop ~ croppedImageData:'", croppedImageData)
    if (type && ty'front'"front") {
      setImageDataFront(croppeImage);
      setImageData({ ...cropData, front: croppedImageata });
    } else {
      setImageDataBack(croppeImage);
      setImageData({ ...cropData, back: croppedImageata });
    }
    setModalVisiblefals)
  };
  
  const handleImageChange = (info: any, type: string) => {
    conso'🚀 ~ handleImageChange ~ info:' ", info)
    setType(type)
    if (info.file.status === 'uploading') {
      // Image has been successfully uploaded
      setModalVisibl(true);
    }
    setFileList([infofile);
  };

  const handleAadhar = async () => {
    const aadharNo = refs.aadharNo?.current?.input?.value ?? ''
    console.log('🚀 ~ handleAadhar ~ aadharNo:', aadharNo)
    const aadharRegExp = /\b\d{12}\b/

    if (!aadharRegExp.test(aadharNo)) {
      return notifyUser('error', 'Invalid Aadhar Number')
    }
    
    if (!cropDataFront || !cropDataBack) {
      return notifyUser('error', 'Scanned image required')
    }
    // const formData = {
    //   aadharNo: aadharNo ? aadharNo : user.aadhar.aadharNo,
    // }
    const formData = new FormData()
    
    if (cropDataFront) {
      formData.append('front', cropDataFront, 'cropped-image-front.png')
    }
    
    if (cropDataBack) {
      formData.append('back', cropDataBack, 'cropped-image-back.png')
    }
    formData.append('refId', user._id)
    formData.append('aadharNo', aadharNo ? aadharNo : user.aadhar.aadharNo)
    
    await handleUpdate(formData, 'aadhar')
    return router.refresh()
  }

  return (
    <>
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-1 gap-8 p-8">
          <Input
            defaultValue={
              user.aadhar.aadharNo === '' ? undefined : user.aadhar.aadharNo
            }
            ref={refs.aadharNo}
            name={'aadharNo'}
            label={'Aadhar Number'}
            placeholder={`Enter your Aadhar Number`}
          />
        </div>
        <div className="mt-3 grid  items-center gap-8 p-8 py-0 xl:grid-cols-2">
          <div className="grid gap-2">
            <p className="font-medium leading-[1.6] !text-gray-900">
              Upload Font Side
            </p>
            {cropData.front ?
              <Image width={250} height={100} src={cropData.front} alt="cropped" /> :
              <div className="g">
                <UploadCheck onChange={handleImageChange} type={'front'} />
            </div>
            }
            
          </div>
          <div className="grid gap-2">
            
            <p className="font-medium leading-[1.6] !text-gray-900">
           
              Upload Back Side
            </p>
            {/* </Upload> */}
            {cropData.back ?
              <Image width={250} height={100} src={cropData.back} alt="cropped" /> : <div className="g">
                
                <UploadCheck onChange={handleImageChange} type={'back'} />
              
              </div>
            }
            
          </div>
        </div>
        <ImageCropper
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onCrop={handleCrop}
          imageFile={fileList[0]?.originFileObj}
        />
        <div className="grow"></div>
        <div className=" my-6 flex items-center justify-self-end px-8 md:w-1/6">
          <Button
            loading={loading}
            disabled={loading}
            type={'default'}
            onClick={handleAadhar}
            className={
              '!h-auto !border-none !bg-light-shadow !px-6 !py-2 font-medium !text-primary !outline-none md:inline-block md:!bg-primary md:!text-white'
            }
            block>
            Verify
          </Button>
        </div>
      </div>
      <OfflineKyc />
    </>
  )
}
