import { cn } from '@/lib/utils';
import { Upload, Image, message } from 'antd';
import React, { ForwardRefRenderFunction, useState } from 'react';
import { ForwardRefProps } from '@/types/profile';
import { UploadChangeParam } from 'antd/lib/upload/interface';

interface ImageUploaderProps extends ForwardRefProps {
  defaultValue?: string | undefined;
}

const ImageUploader: ForwardRefRenderFunction<any, ImageUploaderProps> = (
  {
    wrapperClassName,
    label,
    name,
    className,
    labelClassName,
    defaultValue,
    ...props
  },
  ref,
) => {
  const [previewImage, setPreviewImage] = useState<string | undefined>(defaultValue);

  const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === 'done') {
      setPreviewImage(info.file.response.url);
    }
  };

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage;
  };

  return (
    <div
      className={cn(
        'relative grid w-full col-span-2 ' + wrapperClassName,
      )}
      style={{
        gridTemplateRows: '1fr auto',
        gap: '1rem', // Adjust the gap as needed
      }}
    >
      <Upload
        name={name}
        ref={ref}
        showUploadList={true}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        style={{minHeight:'200px', height: '100%' , width:'100%' }} // Set height to 100%
        {...props}
      >
        {previewImage ? (
          <Image
            src={`https://www.bizdateup.com/v1/banner/${previewImage}`}
            alt="Preview"
            preview={false}
            className={cn(
              'w-full rounded-sm !bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none transition-all duration-200 ease-linear focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary ' +
                className,
            )}
          />
        ) : (
          <div className={cn(
            'border-dashed h-28 border-2 border-gray-400 flex items-center justify-center rounded-sm !bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none transition-all duration-200 ease-linear focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary ' +
              className,
          )}>
            <span>Upload PDF max. size 10MB</span>
          </div>
        )}
      </Upload>

      <label
        htmlFor={name}
        className={cn(
          'pointer-events-none absolute left-3 top-[0.5rem] mb-0 max-w-[90%] origin-[0_0] -translate-y-[1.1rem] scale-[0.8] truncate bg-white p-0 px-[0.022rem] font-medium !text-gray-900 text-black transition-all duration-200 ease-out' +
            (labelClassName && labelClassName),
        )}
      >
        {label}   
      </label>
    </div>
  );
};

export default React.forwardRef(ImageUploader);
