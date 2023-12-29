"use client"
import { StartupData, TeamMember } from '@/types/invest'
import { Avatar , Badge } from 'antd'
import Link from 'next/link'
import { Icons } from '@/components/icons/icon'
import Input from '@/components/form/Input'
import React from 'react'
import { apiUri } from '@/lib/utils'
import  Trash  from '@/components/icons/Trash'
import  CameraIcon  from '@/components/icons/CameraIcon'

export default function TeamFormSingleItem({ member }: { member: TeamMember }) {
    const api = apiUri().v1;
    return (
      <div className="w-full">
        <div key={member.fullName} className="flex items-center gap-4 py-4 lg:gap-2">
          <div className="min-w-[32px]">
            <CameraIcon/>
          {/* <Badge count={<Camera style={{ color: '#f5222d' }} />}> */}
          <Badge count={6}>
        
            <Avatar
              size={{ xs: 24, sm: 32, md: 80, lg: 80, xl: 80, xxl: 100 }}
              src={api + '/teammember/' + member.profileImage}
            />
            </Badge>
          </div>
          <div className="grid w-full py-4 px-4  grid-cols-2 md:grid-cols-2 gap-2 lg:gap-1">
            <div className="py-4 px-4">
              <Input
                key={member._id}
                disabled={!member.fullName}
                defaultValue={member.fullName}
                name={"full-name"}
                label="Full Name"
                placeholder={`Enter your ${member.fullName}`}
              />
            </div>
            <div className="py-4 px-4">
              <Input
                key={member._id}
                disabled={!member.designation}
                defaultValue={member.designation}
                name={"full-name"}
                label="Designation"
                placeholder={`Enter your ${member.designation}`}
              />
            </div>
            <div className="col-span-2 py-4 px-4">
              <Input
                key={member._id}
                disabled={!member.linkedinUrl}
                defaultValue={member.linkedinUrl}
                name={"linkedin-url"}
                label="Linkedin URL"
                placeholder={`Enter your ${member.linkedinUrl}`}
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