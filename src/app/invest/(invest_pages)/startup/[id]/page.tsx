import {
  apiUri,
  capitalizeFirstLetter,
  formatIndianValuation,
} from '@/lib/utils'
import {
  IInterestCheckResponse,
  securityType,
  StartupDataResponse,
} from '@/types/_type'
import { Button, Input } from 'antd'
import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import React from 'react'
import CompanyIntro from '@/components/companyIntro'
import DownloadFiles from '@/components/downloadFiles'
import DealTerms from '@/components/dealTerms'
import Highlights from '@/components/highlights'
import PitchDeck from '@/components/pitchDeck'
import TeamMembers from '@/components/TeamMembers'
import CompanyInfo from '@/components/companyInfo'
import StartAd from '@/components/StartAd'
import StartupFeedback from '@/components/Feedback'
import StartupToInvest from '@/components/Startups'
import FrequentlyAsked from '@/components/faq'
import AfterCampaign from '@/components/afterCampaign'
import FeedbackDialog from '@/components/feedbackDialog'
import StickyCompanyIntro from '@/components/stickyCompanyIntro'
import { isInterested } from '@/lib/endpoints/apiEndpoint'
import { cookies } from 'next/headers'
import ReduxProvider from '@/store/Provider'
import PaymentStatusModal from '@/components/paymentStatusModal'

const { v1: apiV1 } = apiUri()

export const revalidate = 0

export async function generateMetadata(
  {
    params,
  }: {
    params: { id: string }
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const { data }: { data: StartupDataResponse } = await fetch(
    apiV1 + `/startup/fetchStartupById?refId=${id}`,
    { next: { revalidate: 3600 } },
  )
    .then((res) => {
      return res.json()
    })
    .catch((e) => {
      console.log(e)
      throw new Error('Something went wrong check server log')
    })

  const companyName = capitalizeFirstLetter(
    data.data.registeredCompanyName.trim().split(' '),
  )
  return {
    title: companyName.join(' ') + ' | Bizdateup',
    description: data.data.shortDescription,
  }
}

const getStartupDetails = async (id: string) => {
  const res = await fetch(apiV1 + `/startup/fetchStartupById?refId=${id}`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok || !res) {
    throw new Error('Something Went Wrong')
  }

  const { data }: { data: StartupDataResponse } = await res.json()
  return { details: data }
}
const checkInterest = async (id: string) => {
  const cookie = cookies()
  const tokenKey = cookie.get('token')?.value
  const userId = cookie.get('user_id')?.value

  const url = isInterested({
    params: {
      startupId: id,
      investorId: userId ? userId : '',
    },
  })

  const response = await fetch(url, {
    headers: {
      Authorization: tokenKey ? 'Bearer ' + tokenKey : '',
    },
  })
    .then((res) => {
      return res.json()
    })
    .catch((e) => {
      return e
    })
  if (response.code === 200) {
    if (response.data.data !== null) {
      return response.data.data
    } else {
      return { interested: null }
    }
  } else {
    throw Error(response.message)
  }
}
const Startup: React.FC<{ params: { id: string } }> = async ({
  params: { id },
}) => {
  const {
    details: { data: startupData },
  } = await getStartupDetails(id)

  const { interested } = (await checkInterest(id)) as IInterestCheckResponse
  const isClosed = startupData.activeStatus.status === 'closed'

  return (
    <main className={'w-screen'}>
      {!isClosed && <StickyCompanyIntro startup={startupData} />}
      <div className="grid grid-cols-12 gap-2 px-3 pb-3 pt-12 md:pt-20 xl:ml-2 xl:px-5 xl:py-20">
        <CompanyIntro startup={startupData} />

        <div className="col-span-full flex flex-col gap-7 md:col-start-1 md:col-end-8 xl:col-start-2 xl:col-end-8">
          <Highlights startup={startupData} />
          <DealTerms className={'md:hidden'} startup={startupData} />
          <PitchDeck />
          <TeamMembers startup={startupData} />
          <DownloadFiles className={'md:hidden'} startup={startupData} />
          <div className="hidden rounded-xl !bg-light-shadow px-4 py-4 shadow lg:inline lg:px-7 lg:py-5">
            <h4 className="reset flex-grow text-2xl font-bold">
              Made up your mind?
            </h4>
            <div className="grid w-full grid-cols-2 gap-4 py-2">
              <Input
                size={'large'}
                type={'text'}
                placeholder={`₹ ${formatIndianValuation(
                  startupData.dealTerms.minimumInvestment,
                )} min`}
                className={' !py-2 text-lg font-medium placeholder-gray-300'}
              />
              <Link
                href={'/link'}
                type={'default'}
                className={
                  'flex items-center justify-center rounded-lg bg-primary  px-2 py-2 text-center text-sm font-medium leading-[1.57563rem] text-white outline-none lg:text-base'
                }>
                Invest in{' '}
                {capitalizeFirstLetter(
                  startupData.registeredCompanyName.trim().split(' '),
                )}
              </Link>
            </div>
          </div>
          <CompanyInfo startup={startupData} />
          <StartupFeedback startup={startupData} />
        </div>
        <div
          className={
            'md:col-end col-span-full hidden flex-col gap-4 md:col-start-8 md:flex md:pl-8 xl:col-start-8 xl:col-end-12 xl:px-12'
          }>
          <DealTerms startup={startupData} />
          <Button
            className={
              'text-whit flex items-center justify-center rounded-lg  !border-0 !bg-light-shadow !px-2   !py-2  text-sm !font-medium leading-[1.57563rem] !text-primary !outline-none lg:text-base'
            }
            size={'large'}
            block
            type={'default'}>
            How it works
          </Button>
          <DownloadFiles startup={startupData} />
          {/*<DownloadVideo startup={startupData}/>*/}
          <StartAd className={'hidden'} />
        </div>
        {isClosed && <AfterCampaign startup={startupData} />}
      </div>
      {!isClosed && (
        <>
          <div className="grid grid-cols-12 py-20 lg:bg-gray-smoke">
            <StartupToInvest
              header={'Recommended'}
              type={startupData.dealTerms.typeOfSecurity as securityType}
            />
          </div>
          <div className=" grid grid-cols-12">
            <div className="col-span-full my-16 grid md:col-start-2 md:col-end-11 md:my-32 xl:col-start-3 xl:col-end-11">
              <h4 className="reset text-center text-3xl font-bold md:text-4xl">
                Frequently Asked Questions
              </h4>
              <FrequentlyAsked custom={true} faqData={startupData.faq} />
            </div>
          </div>
        </>
      )}
      {interested === null && (
        <ReduxProvider>
          <FeedbackDialog />
        </ReduxProvider>
      )}
      <ReduxProvider>
        <PaymentStatusModal startup={startupData} />
      </ReduxProvider>
    </main>
  )
}

export default Startup
