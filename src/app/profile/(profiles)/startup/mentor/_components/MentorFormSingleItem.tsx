"use client"
import { StartupData, Mentors } from '@/types/invest'
import { Avatar , Badge } from 'antd'
import Link from 'next/link'
import { Icons } from '@/components/icons/icon'
import Input from '@/components/form/Input'
import React from 'react'
import { apiUri } from '@/lib/utils'
import  Trash  from '@/components/icons/Trash'
import  Camera  from '@/components/icons/CameraIcon'

export default function MentorSingleItem({ mentor }: { mentor: Mentors }) {
    const api = apiUri().v1;
    return (
      <div className="w-full">
        <div key={mentor.fullName} className="flex items-center gap-4 py-4 lg:gap-2">
          <div className="min-w-[32px]">
          <Badge color='blue' style={{backgroundColor:"#7474F4"}} count={<Camera style={{background:"#7474F4", color: '#f5222d' }} />}>
            <Avatar
              size={{ xs: 24, sm: 32, md: 80, lg: 80, xl: 80, xxl: 100 }}
              src={api + '/teammember/' + mentor.profileImage}
            />
            </Badge>
          </div>
          <div className="grid w-full py-4 px-4  grid-cols-2 md:grid-cols-2 gap-2 lg:gap-1">
            <div className="py-4 px-4">
              <Input
                key={mentor._id}
                disabled={!mentor.fullName}
                defaultValue={mentor.fullName}
                name={"full-name"}
                label="Full Name"
                placeholder={`Enter your ${mentor.fullName}`}
              />
            </div>
            <div className="py-4 px-4">
              <Input
                key={mentor._id}
                disabled={!mentor.description}
                defaultValue={mentor.description}
                name={"full-name"}
                label="Designation"
                placeholder={`Enter your ${mentor.description}`}
              />
            </div>
            <div className="col-span-2 py-4 px-4">
              <Input
                key={mentor._id}
                disabled={!mentor.linkedinUrl}
                defaultValue={mentor.linkedinUrl}
                name={"linkedin-url"}
                label="Linkedin URL"
                placeholder={`Enter your ${mentor.linkedinUrl}`}
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