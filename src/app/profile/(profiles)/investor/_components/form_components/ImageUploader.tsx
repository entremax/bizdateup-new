import React, { useState } from 'react'
import Image from 'next/image'

interface ImageUploaderProps {
  wrapperClassName?: string
  label?: string
  type?: string
  index?: number
  fieldName?: string
  multiple?: boolean
  name: string
  className?: string
  labelClassName?: string
  placeholder?: string
  defaultValue?: string
  onChange?: (
    file: FileList | File | null,
    index?: number,
    field?: string,
  ) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  wrapperClassName,
  label,
  name,
  className,
  labelClassName,
  type,
  multiple,
  defaultValue,
  onChange,
  index,
  fieldName,
}) => {
  console.log('🚀 ~ file: ImageUploader.tsx:32 ~ index:', index)
  // console.log("🚀 ~ file: ImageUploader.tsx:32 ~ multiple:", multiple)
  // console.log("🚀 ~ file: ImageUploader.tsx:32 ~ fieldName:", fieldName)
  // console.log("🚀 ~ file: ImageUploader.tsx:32 ~ index:", index)
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    defaultValue,
  )
  // console.log("🚀 ~ file: ImageUploader.tsx:24 ~ defaultValue:", defaultValue)
  // console.log("🚀 ~ file: ImageUploader.tsx:24 ~ previewImage:", previewImage)
  // console.log("🚀 ~ file: ImageUploader.tsx:24 ~ previewImage:", index && fieldName)

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number,
  ) => {
    console.log(
      '🚀 ~ file: ImageUploader.tsx:42 ~ handleFileChange ~ index:',
      index,
    )
    const file = e.target.files && e.target.files[0]
    if (multiple) {
      console.log('This')
      onChange && onChange(e.target.files)
    } else if (index !== undefined && fieldName && file) {
      console.log(
        '🚀 ~ file: ImageUploader.tsx:47 ~ handleFileChange ~ index:',
        index,
      )
      console.log('That')
      setPreviewImage(URL.createObjectURL(file))
      onChange && onChange(file, index, fieldName)
    } else {
      console.log('other')

      if (file) {
        setPreviewImage(URL.createObjectURL(file))
        onChange && onChange(file)
      }
    }
  }

  return (
    <div
      className={`relative col-span-2 grid w-full ${wrapperClassName || ''}`}
      key={index}>
      <input
        type="file"
        name={name}
        id={name}
        className="hidden"
        onChange={(e) => {
          console.log('🚀 ~ file: ImageUploader.tsx:72 ~ e:', e)
          return handleFileChange(e, index)
        }}
        multiple={multiple}
      />

      <label
        htmlFor={name}
        className={`relative flex h-28 w-full cursor-pointer items-center justify-center rounded-sm border-2 border-dashed border-gray-400 !bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none transition-all duration-200 ease-linear focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary ${
          className || ''
        }`}>
        {(previewImage || defaultValue) && type != 'docs' ? (
          <Image
            src={previewImage || defaultValue || ''}
            alt="Preview"
            fill
            className="w-full rounded-sm"
          />
        ) : (
          <span>Upload PDF max. size 10MB</span>
        )}
      </label>

      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-3 top-[0.5rem] mb-0 max-w-[90%] origin-[0_0] -translate-y-[1.1rem] scale-[0.8] truncate bg-white p-0 px-[0.022rem] font-medium !text-gray-900 text-black transition-all duration-200 ease-out ${
          labelClassName || ''
        }`}>
        {label}
      </label>
    </div>
  )
}

export default ImageUploader
