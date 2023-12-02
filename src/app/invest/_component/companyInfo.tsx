import { StartupData } from '@/types/invest'
import Link from 'next/link'
import { Icons } from '@/components/icons/icon'
import React from 'react'
import { capitalizeFirstLetter } from '@/lib/utils'

export default function CompanyInfo({ startup }: { startup: StartupData }) {
  const companyRegisteredName = capitalizeFirstLetter(
    startup.registeredCompanyName.trim().split(' '),
  )

  return (
    <div className="border_gray rounded-xl px-4 py-4 shadow lg:px-7 lg:py-5">
      <h4 className="reset flex-grow text-xl font-bold lg:text-2xl">
        About Company
      </h4>
      <div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-2">
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">
            Registered Name
          </p>
          <p className="reset text-base font-medium leading-normal lg:text-lg">
            {companyRegisteredName}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">Founded</p>
          <p className="reset text-base font-medium leading-normal lg:text-lg">
            {capitalizeFirstLetter(
              (startup.founderFirstName + ' ' + startup.founderLastName)
                .trim()
                .split(' '),
            )}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">Employees</p>
          <p className="reset text-base font-medium leading-normal lg:text-lg">
            {startup.teamCapacity}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">Website</p>
          <Link
            href={startup.website}
            className="reset underlinetext-base font-medium leading-normal text-primary lg:text-lg">
            {startup.website}
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">
            Company Profile
          </p>
          <Link
            href={startup.companyLinkedinUrl}
            className="reset gap-1text-base flex items-center font-medium leading-normal text-primary lg:text-lg">
            <Icons.LinkedIn className={'h-4 w-4'} />{' '}
            <span className={'whitespace-pre text-[#0066C8]'}> linkedin</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="reset text-gray-40 text-sm lg:text-base ">
            Headquarters
          </p>
          <p className="reset text-base font-medium leading-normal lg:text-lg">
            {startup.companyBased}
          </p>
        </div>
      </div>
    </div>
  )
}
