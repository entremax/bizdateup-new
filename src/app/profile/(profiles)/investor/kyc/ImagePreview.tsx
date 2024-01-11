'use client'
import { Button, Image, Modal, Space } from 'antd'
import { apiUri } from '@/lib/utils'
import { useState } from 'react'
import capitalize from 'antd/lib/_util/capitalize'
import { notifyUser } from '@/components/notification'

type Props={
  docType:'aadhar'|'pan'|'bank'
  fileName:string
  token:string
}
export default function ImagePreview({fileName,docType,token}:Props){
  const [preview, setPreview] = useState(false)
  const [previewImage, setPreviewImage] = useState<  string |undefined>()
  
  const handleFetchImage = async () => {
    try {
      const res = await fetch(apiUri().v0 + `/doc/${docType}/` + fileName, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
      if (!res || !res.ok) {
        return notifyUser('error', 'Something went wrong');
      }
      
      const buffer = await res.blob(); // Use blob() to get the response body as a Blob
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setPreviewImage(imageData);
      };
      
      reader.readAsDataURL(buffer);
      return
    } catch (e) {
      return notifyUser('error', 'Something went wrong');
    }
  };
  
  
  return (
    <>
      <span
        tabIndex={-1}
        aria-label={'View Image Button'}
        onClick={async () => {
          await handleFetchImage()
          setPreview(!preview)
        }}
        className="cursor-pointer text-md !bg-transparent !outline-0 !border-0 font-semibold !text-primary underline">
        Document
      </span>
      {previewImage && (
        <Modal
          open={preview}
          title={capitalize(docType)}
          footer={null}
          onCancel={() => setPreview(false)}>
          <Image alt="example" style={{ width: '100%' }} preview={false} src={previewImage} />
        </Modal>
      )}
    </>
  )
}