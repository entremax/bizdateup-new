// components/UploadCheck.tsx
import React from 'react'
import { CloudUploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Upload } from 'antd'

const { Dragger } = Upload

interface UploadCheckProps {
  onChange: (e: any, type: 'front' | 'back' | any) => void
  type: string
}

const UploadCheck: React.FC<UploadCheckProps> = ({ onChange, type }) => {
  // console.log("🚀 ~ onChange:", onChange)
  // console.log("🚀 ~ onChange:", type)
  const draggerProps: UploadProps = {
    showUploadList: false,
    onDrop: (e) => {
      console.log('🚀 ~ onDrop ~ e:', e)
      // console.log('Dropped files', e.dataTransfer.files);
    },
    onChange: (e) => onChange(e, type),
  }

  return (
    <Dragger {...draggerProps}>
      <p className="ant-upload-text flex items-center justify-center gap-2 text-[#64748B]">
        <CloudUploadOutlined width={'76'} />
        <span className={'text-medium text-sm'}>Upload PDF max. size 10MB</span>
      </p>
    </Dragger>
  )
}

export default UploadCheck
