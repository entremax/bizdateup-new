"use client"
import {  Events } from '@/types/invest'
import Input from '@/components/form/InputWithoutRef'
import ImageUploader from '@/components/form/ImageUploader'
import DatePicker from '@/components/form/DatePicker'
import React, {useState} from 'react'
import { apiUri } from '@/lib/utils'
import  Trash  from '@/components/icons/Trash'
import { Avatar, Badge, Upload } from 'antd';
import Image from 'next/image';

export default function FaqSingleItem({ event , changeHandler ,indexx, removeHandler }: { event: Events ; 
  changeHandler: any; 
  indexx: number;
  removeHandler: any; }) {
    const api = apiUri().v1;
    console.log("🚀 ~ file: EventFormSingleItem.tsx:17 ~ api:", api)
    const [previewImage, setPreviewImage] = useState<string | undefined>();
  
      const handleFileChange = (file: File , index?:number) => {
      console.log("🚀 ~ file: ImageUploader.tsx:42 ~ handleFileChange ~ index:", index)
      // const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          setPreviewImage(base64String);
          changeHandler && changeHandler(index, "banner", file); 
        };
  
        // Read the file as a data URL (base64)
        reader.readAsDataURL(file);
      }
      if (file) {
        // setPreviewImage(URL.createObjectURL(File));
        changeHandler && changeHandler(  indexx , "banner" , file);
      }
    };

      const DateChange:any = (date: string , field:string) => {
      
    };

    return (
      <div className="w-full">
        <div key={indexx} className="flex items-center gap-4 py-4 lg:gap-2">
          <div className="grid w-full py-4 px-4  grid-cols-1 md:grid-cols-2 gap-2 lg:gap-1">
            <div className="py-4 px-4">
              <DatePicker
                key={event._id}
                // disabled={!event.date}
                defaultTimeValue={event.date}
                name={"date"}
                label="Date"
                onChangeHandler={(event: string) => changeHandler(indexx, 'date', event)}
                placeholder={`Select Date`}
              />
            </div>
            <div className="py-4 px-4">
              <DatePicker
                key={event._id}
                // disabled={!event.time}
                defaultTimeValue={event.time}
                name={"time"}
                label="Time"
                onChangeHandler={(event: string) => changeHandler(indexx, 'time', event)}
                placeholder={`Select Time`}
              />
            </div>
            <div className="py-4 px-4 col-span-2">
              <Input
                key={event._id}
                // disabled={!event.url}
                defaultValue={event.url}
                name={"url"}
                label="URL"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  console.log("🚀 ~ file: EventFormSingleItem.tsx:77 ~ event:", event)
                  changeHandler(indexx, 'url', event.target.value)}
                }
                placeholder={`Enter Event URL`}
              />
            </div>
            <div className="py-4 px-4 col-span-2">
            {/* <div style={{ width: '100%' }}> */}
            <Upload.Dragger
  showUploadList={false}
  // styles={{body:{width:100}}}
  beforeUpload={(file) => {
    console.log(file);
    handleFileChange(file);
    return false;
  }}
  className='w-full'
>
  <label
    htmlFor="banner"
    className={`cursor-pointer block w-full  h-28  flex items-center justify-center rounded-sm !bg-transparent px-3 py-[0.28rem] font-medium leading-[1.6] text-[#000] outline-none transition-all duration-200 ease-linear focus:outline-none peer-focus:text-black-lighter motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary`}
  >
    {(previewImage || event.banner) ? (
      <Image
        src={previewImage || api + '/banner/' + event.banner || ""}
        alt="Preview"
        fill
        className="w-full rounded-sm"
      />
    ) : (
      <span>Upload PDF max. size 10MB</span>
    )}
  </label>
</Upload.Dragger>
{/* </div> */}

        {/* </div> */}

            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-end cursor-pointer" onClick={()=>removeHandler(indexx)}>
  <Trash />
  <span className="font-medium text-primary">Remove</span>
</div>
      </div>
    );
  }