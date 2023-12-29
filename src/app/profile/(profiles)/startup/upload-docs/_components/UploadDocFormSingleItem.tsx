"use client"
import { StartupData, Mentors, FAQ , Events } from '@/types/invest'
import { Avatar } from 'antd'
import Link from 'next/link'
import { Icons } from '@/components/icons/icon'
import Input from '@/components/form/Input'
import ImageUploader from '@/components/form/ImageUploader'
import React from 'react'
import { apiUri } from '@/lib/utils'
import  Trash  from '@/components/icons/Trash'

export default function FaqSingleItem({ event }: { event: Events }) {
    const api = apiUri().v1;
    return (
      <div className="w-full">
        <div key={event._id} className="flex items-center gap-4 py-4 lg:gap-2">
          <div className="grid w-full py-4 px-4  grid-cols-1 md:grid-cols-2 gap-2 lg:gap-1">
            <div className="py-4 px-4">
              <Input
                key={event._id}
                disabled={!event.date}      
                defaultValue={event.date}
                name={"date"}
                label="Date"
                placeholder={`Select Date`}
              />
            </div>
            <div className="py-4 px-4">
              <Input
                key={event._id}
                disabled={!event.time}
                defaultValue={event.time}
                name={"time"}
                label="Time"
                placeholder={`Select Time`}
              />
            </div>
            <div className="py-4 px-4 col-span-2">
              <Input
                key={event._id}
                disabled={!event.url}
                defaultValue={event.url}
                name={"url"}
                label="URL"
                placeholder={`Enter Event URL`}
              />
            </div>
            <div className="py-4 px-4 col-span-2">
            <ImageUploader
              key={event._id}
              disabled={false}
              defaultValue={event.url}
              //@ts-ignore
              // ref={field.fieldType !== 'select' && refs[field.name]}
              name={"banner"}
              type={"image"}
              label={"banner"}
              placeholder={`Upload banner`}
            />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-end cursor-pointer">
  <Trash />
  <span className="font-medium text-primary">Remove</span>
</div>
      </div>
    );
  }