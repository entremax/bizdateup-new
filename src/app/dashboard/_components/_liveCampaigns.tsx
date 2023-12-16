import React from 'react'
import { Campaign } from '@/types'
import Image from 'next/image'
import {
  apiUri,
  capitalizeFirstLetter,
  cn,
  formatIndianValuation,
} from '@/lib/utils'
import JoinWhatsApp from '@/app/dashboard/_components/_join_whatsapp'
import '../dashboard.css'
import Link from 'next/link'
import { StartupTag } from '@/components/tag'

/**
 * Renders a list of live startup campaigns.
 *
 * @param {Object} params - The parameters object.
 * @param {Array} params.data - An array of campaign data.
 *
 * @returns {React.Element} - The rendered component.
 */
const LiveCampaigns = ({ data }: { data: Campaign[] }): React.ReactElement => {
  let itemGrid =
    'card_article grid relative border_gray rounded-xl overflow-hidden col-span-2 xl:col-span-1 !text-black-lighter' // placeholder value for itemGri
  const campaignData = data
  const baseUrl = apiUri().v1

  function truncateText(input: string, limit = 16) {
    const words = input.split(' ')

    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...'
    } else {
      return input
    }
  }

  return (
    <>
      <div className={'relative grid grid-cols-2 gap-4'}>
        <h3 className="col-span-full  !m-0 !p-0 text-2xl font-bold text-primary-dark sm:hidden">
          Live Campaigns
        </h3>
        {campaignData.slice(0, 4).map((startup, index) => (
          <Link
            href={`/invest/startup/${startup._id}?name=${startup.registeredCompanyName}`}
            key={startup._id}
            className={cn(
              campaignData.length % 2 !== 0 && index === campaignData.length - 1
                ? itemGrid + ' xl:col-span-2'
                : itemGrid,
            )}>
            <div className="flex shrink gap-2 p-3">
              <div className="flex items-start justify-start rounded-md bg-clip-content">
                <Image
                  src={apiUri().base + '/v1' + '/logo/' + startup.logo}
                  height={56}
                  width={56}
                  className={'!static h-14 w-14 rounded-md'}
                  alt={startup.registeredCompanyName}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="reset text-base font-bold text-black-lighter md:text-xl">
                  {capitalizeFirstLetter(
                    startup.registeredCompanyName.split(' '),
                  )}
                </h5>
                <StartupTag tags={startup.tags} />
              </div>
            </div>
            <div className="grid max-h-min grid-cols-1 p-3 pt-0">
              <div className="shrink justify-center justify-self-end text-ellipsis border-0 text-xs leading-normal text-[#828F99] outline-0 md:text-base">
                <p className={'card_data_hidden reset'}>
                  {truncateText(startup.shortDescription)}
                </p>
              </div>
              <div className="card_data border_gray w-full pt-3 !text-black-lighter">
                <div
                  className={cn(
                    campaignData.length % 2 !== 0 &&
                      index === campaignData.length - 1
                      ? 'flex gap-6 pl-4'
                      : 'grid grid-cols-3 items-center justify-around gap-2',
                  )}>
                  <div className="grid justify-center gap-0">
                    <p className={'!m-0 !p-0 font-semibold xl:text-lg'}>
                      ₹ {formatIndianValuation(startup.totalRaised)}
                    </p>
                    <span className={'text-[0.94063rem] text-gray-400'}>
                      raised
                    </span>
                  </div>

                  <div className="grid justify-center gap-0 align-top">
                    <p className={'!m-0 !p-0 font-semibold xl:text-lg'}>
                      ₹ {formatIndianValuation(startup.dealTerms.valuation)}
                    </p>
                    <span className={'text-[0.94063rem] text-gray-400'}>
                      valuation
                    </span>
                  </div>
                  <div className="grid justify-center gap-0">
                    <p className={'!m-0 !p-0 font-semibold xl:text-lg'}>
                      ₹{' '}
                      {formatIndianValuation(
                        startup.dealTerms.minimumInvestment,
                      )}
                    </p>
                    <span className={'text-[0.94063rem] text-gray-400'}>
                      min. investment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <JoinWhatsApp className={'md:hidden'} hidden={false} />
    </>
  )
}
export default LiveCampaigns
