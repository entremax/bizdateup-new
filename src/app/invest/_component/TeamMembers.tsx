import { StartupData, TeamMember } from '@/app/invest/_type'
import { Avatar } from 'antd'
import Link from 'next/link'
import { Icons } from '@/icon'
import React from 'react'
import { apiUri } from '@/lib/utils'

export default function TeamMembers({ startup }: { startup: StartupData }) {
  const api = apiUri().v1
  return (
    <div className="border_gray rounded-xl px-4 py-4 shadow lg:px-7 lg:py-5">
      <h4 className="reset flex-grow text-xl font-bold lg:text-2xl">
        Meet the Team
      </h4>
      <div className="grid md:grid-cols-2">
        {startup.teamMembers.map((member: TeamMember) => (
          <div
            key={member.fullName}
            className={'flex items-center gap-4 py-4 lg:gap-2'}>
            <div className="min-w-[32px]">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={api + '/teammember/' + member.profileImage}
              />
            </div>
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <h5 className="reset text-gray-40 text-sm lg:text-lg ">
                {member.fullName}
              </h5>
              <p className={'reset text-gray-40 text-sm lg:text-base '}>
                {member.designation}
              </p>
              <Link
                href={member.linkedinUrl}
                className="reset flex items-center gap-1  text-sm font-medium leading-normal text-primary">
                <Icons.LinkedIn className={'h-4 w-4'} />{' '}
                <span className={'text-[#0066C8]'}>linkedin</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
