import React, { useState } from 'react'
import { notifyUser } from '@/components/notification'
import Image from 'next/image'
import Camera from '@/icons/Camera'
import { cn } from '@/lib/utils'

type Props = {
  previewImageUrl?: string
  className?: string
  onFileSet: (file: File | null) => void
  label?: string
  acceptedFileTypes?: string[] // Allow the parent to specify accepted file types
  maxFileSize?: number // Allow the parent to specify max file size
}

type FileDetails = {
  name: string
  size: number
  type: string
}

const ImageUpload: React.FC<Props> = ({
  previewImageUrl = undefined,
  label = 'Upload Image',
  className = '',
  onFileSet,
  acceptedFileTypes = ['image/jpeg', 'image/png', 'image/gif'],
  maxFileSize = 10000000,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

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
    if (!acceptedFileTypes.includes(file.type)) {
      notifyUser('error', 'File must be a valid image (JPEG, PNG, GIF)')
    } else if (file.size > maxFileSize) {
      notifyUser('error', 'File size should be less than 10MB')
    } else {
      onFileSet(file)
      // Assuming you want to display a preview of the image
      setPreviewImage(URL.createObjectURL(file))
      setPreviewTitle(file.name)
      setPreviewOpen(true)
      notifyUser('success', 'Image uploaded successfully')
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
      <label htmlFor={label}>
        <div
          style={style}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            'relative flex h-24 w-24  flex-col items-center  justify-center overflow-clip rounded-full border-2   border-gray-300 bg-gray-100 object-contain p-0 text-gray-400 outline-none transition duration-300 ease-in-out hover:cursor-pointer hover:border-yellow-500 ' +
              className,
          )}
          onDragOver={(e) => e.preventDefault()} // Necessary to prevent browser default behavior
        >
          {previewImageUrl || (previewImage && fileDetails) ? (
            <>
              {previewImage && fileDetails ? (
                <Image src={previewImage} alt={fileDetails.name} fill />
              ) : (
                <Image
                  src={previewImageUrl ?? ''}
                  alt={'user profile imaeg'}
                  fill
                />
              )}
            </>
          ) : (
            <Camera
              style={{ fontSize: '2rem', fill: 'rgba(140, 140, 140, 1)' }}
              // className={'m-2'}
            />
          )}
          <input
            className={'hidden'}
            name={'image'}
            type="file"
            id={label}
            onChange={handleFileChange}
            accept={acceptedFileTypes.join(', ')}
          />
        </div>
      </label>
    </>
  )
}

export default ImageUpload
