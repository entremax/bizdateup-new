import React, { ReactNode, useState } from 'react'
import { notifyUser } from '@/components/notification'
import { CloseOutlined, CloudUploadOutlined } from '@ant-design/icons'
import { Icons } from '@/icons/icon'
import { Button } from 'antd'

type Props = {
  className?: string
  onFileSet: (file: File | null) => void
  label?: string
  children?: ReactNode
}
type FileDetails = {
  name: string
  size: number
  type: string
}
const PDFUpload: React.FC<Props> = ({
  label = 'Upload PDF',
  className = '',
  onFileSet,
  children,
}) => {
  const [dragging, setDragging] = useState(false)
  const [fileDetails, setFileDetails] = useState<FileDetails | null>(null)
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)

    const files = Array.from(e.dataTransfer.files)

    if (files.length === 1) {
      validateAndSetFile(files[0])
    } else {
      notifyUser('error', 'Only one file is supported')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const files = Array.from(e.target.files || [])

    if (files.length === 1) {
      validateAndSetFile(files[0])
    } else {
      notifyUser('error', 'Only one file is supported')
    }
  }

  const validateAndSetFile = (file: File) => {
    if (file.type !== 'application/pdf') {
      notifyUser('error', 'File must be a PDF')
    } else if (file.size > 10000000) {
      notifyUser('error', 'File size should be less than 10MB')
    } else {
      onFileSet(file)
      notifyUser('success', 'File uploaded successfully')
      setFileDetails({
        name: file.name,
        type: file.type,
        size: file.size,
      })
    }
  }
  const resetFile = () => {
    setFileDetails(null)
    onFileSet(null)
  }
  const style = dragging ? { background: 'lightgray' } : {}

  return (
    <>
      <label htmlFor={label} className={className}>
        <div
          style={style}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={
            'ant-upload-drag-container hover:border-yellow relative  flex flex-col items-center justify-center rounded border-2 border-dashed border-gray-300 bg-gray-100 object-contain p-5 text-gray-400 outline-none transition duration-300 ease-in-out hover:cursor-pointer ' +
            className
          }
          onDragOver={(e) => e.preventDefault()} // Necessary to prevent browser default behavior
        >
          <CloudUploadOutlined style={{ fontSize: '6rem' }} className={'m-2'} />
          <input
            className={'hidden'}
            name={'pdf'}
            type="file"
            id={label}
            onChange={handleFileChange}
          />
          <p className={'text-center'}>
            Click or drag file to this area to upload
          </p>
          <p className={'text-center text-sm  text-gray-400'}>
            Support for a single upload of PDF files less than 10MB.
          </p>
        </div>
      </label>
      {children}
      {fileDetails && (
        <div className="flex ">
          <div className="border_gray flex items-center gap-3 rounded-xl p-2">
            <p
              className={
                'flex items-center gap-3 text-xs font-semibold text-gray-600'
              }>
              <Icons.TextFile className={'stroke-gray-600'} />{' '}
              {fileDetails.name}
            </p>
            <Button
              shape="circle"
              onClick={resetFile}
              size={'small'}
              className={'!text-gray-500'}
              icon={<CloseOutlined />}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default PDFUpload
