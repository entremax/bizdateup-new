'use client'
import React from 'react'
import { CloudUploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Upload } from 'antd'

const { Dragger } = Upload

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://askmateapi.blubuddy.io/v1/caption/image',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
    } else if (status === 'error') {
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}

const UploadCheck: React.FC = () => (
  <Dragger {...props}>
    <p className="ant-upload-text flex items-center justify-center gap-2 text-[#64748B]">
      <CloudUploadOutlined width={'76'} />
      <span className={'text-medium text-sm'}>Upload PDF max. size 10MB</span>
    </p>
  </Dragger>
)

export default UploadCheck
