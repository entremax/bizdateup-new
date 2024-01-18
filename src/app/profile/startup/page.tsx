'use client'
import React from 'react'
import Image from 'next/image'
import CompanyProfileForm from '@/components/profile/startup/companyProfileForm'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'

export default function StartupProfile() {
  const { user, token, role } = useAppSelector(({ authUser }) => authUser)
  const searchParams = useSearchParams()
  const editState = Boolean(searchParams?.get('edit'))

  if (!user || role !== 'startup' || !token) {
    return null
  }
  const data = [
    {
      label: 'Company Name',
      value: user?.companyName,
      hidden: false,
    },
    {
      label: 'Registered Name',
      value: user?.registeredCompanyName,
    },
    {
      label: 'Short Description',
      value: user.shortDescription,
    },
    {
      label: 'Have you raised fund before',
      value: user.raisedFund,
    },
    {
      label: 'Prefered Sectors',
      value: user.sector,
    },
    {
      label: 'Stage of startup',
      value: user.stage,
    },
    // {
    //   label: 'Highlights',
    // value: user?.keyHighlights,
    // hidden:false
    // },
    {
      label: 'keyHighlight1',
      value: user?.keyHighlights?.keyHighlight1,
      hidden: false,
    },
    {
      label: 'keyHighlight2',
      value: user?.keyHighlights?.keyHighlight2,
      hidden: false,
    },
    {
      label: 'keyHighlight3',
      value: user?.keyHighlights?.keyHighlight3,
      hidden: false,
    },
    {
      label: 'keyHighlight4',
      value: user?.keyHighlights?.keyHighlight4,
      hidden: false,
    },
    {
      label: 'First Name',
      value: user?.founderFirstName,
      hidden: false,
    },
    {
      label: 'Last Name',
      value: user?.founderLastName,
      hidden: false,
    },
    {
      label: 'Email',
      value: user?.email,
      hidden: false,
    },
    {
      label: 'Mobile Number',
      value: user?.phone,
      hidden: false,
    },
    {
      label: 'Company based in city',
      value: user?.companyBased,
      hidden: false,
    },
    {
      label: 'Video URL',
      value: user?.youtubeVideoUrl,
      hidden: false,
    },
    {
      label: 'Banner',
      value: user?.banner,
      hidden: false,
    },
  ]

  return (
    <>
      {!(user.companyName === '' && user.registeredCompanyName === '') &&
      !editState ? (
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-8 p-8 xl:grid-cols-2">
            {data.slice(0, 3).map(({ label, value, hidden }) => (
              <React.Fragment key={label}>
                {!hidden && (
                  <div
                    className={
                      label == 'Short Description'
                        ? 'col-span-2 grid gap-2'
                        : 'grid gap-2'
                    }>
                    <p className="text-md text-gray-400">{label}</p>
                    <p className="text-md font-semi">{value}</p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="h-2 w-full bg-light-shadow"></div>
          <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 xl:grid-cols-2">
            {data.slice(3, 6).map(({ label, value, hidden }) => (
              <React.Fragment key={label}>
                {!hidden && (
                  <div className="grid gap-2">
                    <p className="text-md text-gray-400">{label}</p>
                    <p className="text-md font-semibold">{value}</p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="h-2 w-full bg-light-shadow"></div>

          <div>
            <div className="text-md ml-8 items-center pt-6  font-extrabold ">
              Highlights
            </div>
            <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 xl:grid-cols-1">
              {data.slice(6, 10).map(({ label, value, hidden }) => (
                <React.Fragment key={label}>
                  {!hidden && (
                    <div className="grid gap-2">
                      <p className="text-md text-gray-400">{label}</p>
                      <p className="text-md font-semibold">{value}</p>
                    </div>
                  )}
                </React.Fragment>
              ))}

              {/* {data.slice(7, 12).map(({ label, value, hidden } , index) => (
              <React.Fragment key={label}>
                {!hidden && (
                  <div className="grid gap-2">
                    <p className="text-md text-gray-400">Highlight {index+1}</p>
                    <p className="text-md font-bold">{value}</p>
                  </div>
                )}
              </React.Fragment>
            ))} */}
            </div>
          </div>
          <div className="h-2 w-full bg-light-shadow"></div>
          <div>
            <div className="text-md ml-8 items-center pt-6  font-extrabold ">
              Additional information
            </div>
            <div className="mt-3 grid grid-cols-1 items-center gap-8 p-8 xl:grid-cols-3">
              {data.slice(10, 17).map(({ label, value, hidden }) => (
                <React.Fragment key={label}>
                  {!hidden && (
                    <div className="grid gap-2">
                      <p className="text-md text-gray-400">{label}</p>
                      {label === 'Banner' ? (
                        <Image
                          src={'https://www.bizdateup.com/v1/banner/' + value}
                          width={512}
                          height={221}
                          alt="Banner"
                          className="banner-image rounded"
                        />
                      ) : (
                        <p className="text-md font-bold">{value}</p>
                      )}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <CompanyProfileForm user={user} />
      )}
    </>
  )
}
