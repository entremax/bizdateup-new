// components/UploadCheck.tsx
import React from 'react'
import { CloudUploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Upload } from 'antd'
import { notifyUser } from '@/components/notification'
import { UploadChangeParam } from 'antd/es/upload'

const { Dragger } = Upload;

interface UploadCheckProps {
  onChange: (e: UploadChangeParam, type: 'front' | 'back' | any) => void;
  type: string;
}

const UploadCheck: React.FC<UploadCheckProps> = ({ onChange, type }) => {
  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    const isSizeValid = file.size / 1024 / 1024 < 10; // Check if file size is less than 10MB
    
    if (!isImage) {
      notifyUser('error','You can only upload image files!');
      return false;
    }
    
    if (!isSizeValid) {
      notifyUser('error','Image must be smaller than 10MB!');
      return false;
    }
    
    return true;
  };
  
  const draggerProps: UploadProps = {
    showUploadList: false,
    beforeUpload,
    onChange: (e) => onChange(e, type),
  };
  
  return (
    <Dragger {...draggerProps}>
      <p className="ant-upload-text flex items-center justify-center gap-2 text-[#64748B]">
        <CloudUploadOutlined width={'76'} />
        <span className={'text-medium text-sm'}>Upload Image max. size 10MB</span>
      </p>
    </Dragger>
  );
};

export default UploadCheck;
