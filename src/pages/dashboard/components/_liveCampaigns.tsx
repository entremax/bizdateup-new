import React from "react";
import {Campaign} from "@/types";
import Image from "next/image";
import {capitalizeFirstLetter, cn} from "@/lib/utils";
import {StartupTag} from "@/components/tag";
import JoinWhatsApp from "@/dashboard/_join_whatsapp";

const LiveCampaigns = ({data}: { data: Campaign[] }) => {
  const itemGrid = 'border_gray bg-white rounded-2xl py-7 px-6 shadow-lg'
  const campaignData = data
  return (
    <>
      <div
        className={'grid gap-6 grid-cols-2'}>
        <h3 className='!m-0 !p-0 sm:hidden text-primary-dark col-span-full text-2xl font-bold'>Live Campaigns</h3>
        {campaignData.map((startup, index) => (
          <div
            key={startup._id}
            className={cn((campaignData.length % 2 !== 0) && (index === campaignData.length - 1) ? itemGrid + ' col-span-2' : itemGrid)}
          >
            <div className='flex gap-2'>
              <div className='flex justify-start items-start rounded-md bg-clip-content'>
                <Image
                  src={
                    'https://s3-alpha-sig.figma.com/img/fbce/d5ab/e4ba51075495d647f87b82b4cc36dbcb?Expires=1696809600&Signature=jazTJmYmUVackXJbVJbCuTmhLeCKAwlQkgod2CazIB3mjW5RZDK5idHw2djQObbhr22ew3IB4cH8g8iwMjYK~F-uTb~GQlvXsVzgTeEHE8YdzEZnOucnqHf7dG1bMwnZiG7k1aa2cCqCUwzBznHNzUicUj3rn5aIQc2nc5tDywzv8mG-IElpAInklr7Cc-mrndL8txSS4QpvFZHRO5FNUn80MnOrapa7eWBVh1wmMkg9Atcbjq7-1-zRNluZScVnvbW39K9154VPVk0cqO5GINGghFi4bswX3g0mAddAv~wuv6JO2cDMVn1I7smD83duIq7pL4SrON2zuvXvJqChRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                  }
                  height={56}
                  width={56}
                  className={'h-14 w-14 rounded-md !static'}
                  alt={startup.registeredCompanyName}
                />
              </div>
              <div className='grid'>
                <h5 className='text-base md:text-xl font-bold text-black-lighter m-0 p-0'>
                  {capitalizeFirstLetter(
                    startup.registeredCompanyName.split(' ')
                  )}
                </h5>
                <StartupTag startup={startup}/>
              </div>
            </div>
            
            <div className='text-xs  md:text-base text-[#828F99] text-ellipsis mt-4 leading-normal justify-self-end'>
              {startup.shortDescription}
            </div>
            <div className="hidden peer-hover:flex justify-around items-center gap-2">
              <div className="grid gap-0">
                <p className={"text-lg !m-0 !p-0 font-medium"}>
                  {startup.totalRaised}
                </p>
                <span className={"text-gray-400 text-[0.94063rem]"}>raised</span>
              </div>
              
              <div className="grid gap-0">
                <p className={"text-lg !m-0 !p-0 font-medium"}>
                  {startup.dealTerms.valuation}
                </p>
                <span className={"text-gray-400 text-[0.94063rem]"}>valuation</span>
              </div>
              <div className="grid gap-0">
                <p className={"text-lg !m-0 !p-0 font-medium"}>
                  {startup.dealTerms.minimumInvestment}
                </p>
                <span className={"text-gray-400 text-[0.94063rem]"}>min.investment</span>
              </div>
            </div>
          </div>))}
      </div>
      <JoinWhatsApp className={'md:hidden'} hidden={false}/>
    </>
  )
}
export default LiveCampaigns


