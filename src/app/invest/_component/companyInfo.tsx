import { StartupData } from '@/app/invest/_type'
import Link from 'next/link'
import { Icons } from '@/icons'
import React from 'react'
import { capitalizeFirstLetter } from '@/lib/utils'

export default function CompanyInfo({ startup }: { startup: StartupData }) {
  const companyRegisteredName = capitalizeFirstLetter(
    startup.registeredCompanyName.trim().split(' '),
  )

  return (
    <div className="border_gray shadow rounded-xl px-4 lg:px-7 py-4 lg:py-5">
      <h4 className="text-xl lg:text-2xl font-bold reset flex-grow">
        About Company
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 gap-4">
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">
            Registered Name
          </p>
          <p className="reset text-base lg:text-lg font-medium leading-normal">
            {companyRegisteredName}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">Founded</p>
          <p className="reset text-base lg:text-lg font-medium leading-normal">
            {capitalizeFirstLetter(
              (startup.founderFirstName + ' ' + startup.founderLastName)
                .trim()
                .split(' '),
            )}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">Employees</p>
          <p className="reset text-base lg:text-lg font-medium leading-normal">
            {startup.teamCapacity}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">Website</p>
          <Link
            href={startup.website}
            className="reset text-primary underlinetext-base lg:text-lg font-medium leading-normal"
          >
            {startup.website}
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">
            Company Profile
          </p>
          <Link
            href={startup.companyLinkedinUrl}
            className="reset text-primary flex items-center gap-1text-base lg:text-lg font-medium leading-normal"
          >
            <Icons.LinkedIn className={'w-4 h-4'} />{' '}
            <span className={'text-[#0066C8] whitespace-pre'}> linkedin</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">
            Headquarters
          </p>
          <p className="reset text-base lg:text-lg font-medium leading-normal">
            {startup.companyBased}
          </p>
        </div>
      </div>
    </div>
  )
}
