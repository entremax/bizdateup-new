'use client'
import { Events } from '@/types/invest'
import Input from '@/components/form/Input'
import ImageUploader from '@/components/form/ImageUploader'
import React from 'react'
import { apiUri } from '@/lib/utils'
import Trash from '@/components/icons/Trash'

export default function FaqSingleItem({ event }: { event: Events }) {
  const api = apiUri().v1
  return (
    <div className="w-full">
      <div key={event._id} className="flex items-center gap-4 py-4 lg:gap-2">
        <div className="grid w-full grid-cols-1 gap-2  px-4 py-4 md:grid-cols-2 lg:gap-1">
          <div className="px-4 py-4">
            <Input
              key={event._id}
              disabled={!event.date}
              defaultValue={event.date}
              name={'date'}
              label="Date"
              placeholder={`Select Date`}
            />
          </div>
          <div className="px-4 py-4">
            <Input
              key={event._id}
              disabled={!event.time}
              defaultValue={event.time}
              name={'time'}
              label="Time"
              placeholder={`Select Time`}
            />
          </div>
          <div className="col-span-2 px-4 py-4">
            <Input
              key={event._id}
              disabled={!event.url}
              defaultValue={event.url}
              name={'url'}
              label="URL"
              placeholder={`Enter Event URL`}
            />
          </div>
          <div className="col-span-2 px-4 py-4">
            <ImageUploader
              key={event._id}
              defaultValue={event.url}
              name={'banner'}
              type={'image'}
              label={'banner'}
              placeholder={`Upload banner`}
            />
          </div>
        </div>
      </div>
      <div className="flex cursor-pointer items-center justify-end space-x-2">
        <Trash />
        <span className="font-medium text-primary">Remove</span>
      </div>
    </div>
  )
}