import React, { useState } from 'react';
import { Campaign } from '@/types';
import Image from 'next/image';
import { capitalizeFirstLetter, cn } from '@/lib/utils';
import { StartupTag } from '@/components/tag';
import JoinWhatsApp from '@/dashboard/_join_whatsapp';
import '../dashboard.css';
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
    'card_article grid relative border_gray rounded-xl overflow-hidden col-span-2 xl:col-span-1'; // placeholder value for itemGri
  const campaignData = data;
  function formatIndianValuation(value: number) {
    if (value >= 10000000) {
      // Convert to crores (Cr)
      return `${value / 10000000}Cr`;
    } else if (value >= 100000) {
      // Convert to lakhs (L)
      return `${value / 100000}L`;
    }
    // else if (value >= 1000) {
    //   // Convert to thousands (k)
    //   return `${value / 1000}k`;
    // }
    else {
      return value.toString(); // Convert to a string and return as is
    }
  }
  function truncateText(input: string, limit = 16) {
    const words = input.split(' ');

    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return input;
    }
  }
  return (
    <>
      <div className={'grid relative gap-4 grid-cols-2'}>
        <h3 className='!m-0  !p-0 sm:hidden text-primary-dark col-span-full text-2xl font-bold'>
          Live Campaigns
        </h3>
        {campaignData.map((startup, index) => (
          <div
            key={startup._id}
            className={cn(
              campaignData.length % 2 !== 0 && index === campaignData.length - 1
                ? itemGrid + ' xl:col-span-2'
                : itemGrid
            )}
          >
            <div className='flex gap-2 shrink p-3'>
              <div className='flex justify-start items-start rounded-md bg-clip-content'>
                <Image
                  src={'/logo.svg'}
                  height={56}
                  width={56}
                  className={'h-14 w-14 rounded-md !static'}
                  alt={startup.registeredCompanyName}
                />
              </div>
              <div className='flex flex-col justify-center'>
                <h5 className='text-base md:text-xl font-bold text-black-lighter reset'>
                  {capitalizeFirstLetter(
                    startup.registeredCompanyName.split(' ')
                  )}
                </h5>
                <StartupTag startup={startup} />
              </div>
            </div>
            <div className='grid grid-cols-1 max-h-min p-3 pt-0'>
              <div className='text-xs border-0 outline-0 justify-center shrink md:text-base text-[#828F99] text-ellipsis leading-normal justify-self-end'>
                <p className={'card_data_hidden reset'}>
                  {truncateText(startup.shortDescription)}
                </p>
              </div>
              <div className='card_data w-full border_gray pt-3'>
                <div
                  className={cn(
                    campaignData.length % 2 !== 0 &&
                      index === campaignData.length - 1
                      ? 'pl-4 flex gap-6'
                      : 'grid grid-cols-3 justify-around items-center gap-2'
                  )}
                >
                  <div className='grid justify-center gap-0'>
                    <p className={'xl:text-lg !m-0 !p-0 font-semibold'}>
                      ₹ {formatIndianValuation(startup.totalRaised)}
                    </p>
                    <span className={'text-gray-400 text-[0.94063rem]'}>
                      raised
                    </span>
                  </div>

                  <div className='grid justify-center align-top gap-0'>
                    <p className={'xl:text-lg !m-0 !p-0 font-semibold'}>
                      ₹ {formatIndianValuation(startup.dealTerms.valuation)}
                    </p>
                    <span className={'text-gray-400 text-[0.94063rem]'}>
                      valuation
                    </span>
                  </div>
                  <div className='grid justify-center gap-0'>
                    <p className={'xl:text-lg !m-0 !p-0 font-semibold'}>
                      ₹{' '}
                      {formatIndianValuation(
                        startup.dealTerms.minimumInvestment
                      )}
                    </p>
                    <span className={'text-gray-400 text-[0.94063rem]'}>
                      min. investment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <JoinWhatsApp
        className={'md:hidden'}
        hidden={false}
      />
    </>
  );
};
export default LiveCampaigns;
