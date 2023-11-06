import Image from "next/image";
import {StartupTag} from "@/components/tag";
import React from "react";
import {apiUri, calculatePercentage, capitalizeFirstLetter, formatIndianValuation} from "@/lib/utils";
import {Button, Divider, Progress} from "antd";
import {StartupData} from "@/app/invest/_type";
import Description from "@/components/Readmore";
import {Icons} from "@/icons";
import InvestTransactionModal from "@/components/investModal"
export default function CompanyIntro({startup}:{startup:StartupData}){
  const {v1:apiV1}=apiUri()
  const isClosed=(startup.activeStatus.status==="closed")
  return (
    <>
      <div className="flex flex-col col-span-full xl:col-start-2 xl:col-end-12 py-4">
        {isClosed &&
          <Divider>
          <div
            className="bg-[#F5F5F5] px-6 text-[#858585] flex py-1 text-base justify-center items-center gap-2 rounded-lg">
            <Icons.Locked/> Campaign ended
          </div>
        </Divider>}
        <div className="flex items-center gap-4 py-4">
          <div className="h-11 w-11 border border-gray-400 rounded-xl overflow-clip">
            <Image
              src={apiV1 + '/logo/' + startup.logo}
              height={45}
              width={45}
              alt={startup.companyName}
            />
          </div>
          <h3
            className="text-2xl md:text-4xl font-bold leading-normal lg:leading-[4rem] text-primary-dark reset py-2 lg:py-4">
            {capitalizeFirstLetter(startup.registeredCompanyName.trim().split(" "))}
          </h3>
        </div>
        <Description text={startup.shortDescription}/>
        <StartupTag tags={startup.tags}/>
      </div>
      <div
        className="flex justify-center aspect-video col-span-full md:col-end-8 xl:col-start-2 xl:col-end-8 justify-self-center w-full md:pb-8">
        {startup?.youtubeVideoUrl?.includes("embed") ? (
          <iframe
            src={startup?.youtubeVideoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full rounded-xl"
          ></iframe>
        ) : (
          ""
        )}
      </div>
      <div
        className="flex flex-col col-span-full md:col-start-8 xl:col-end-12 md:pl-8 xl:px-12 gap-4 justify-center md:pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-1 lg:gap-2 xl:gap-4">
          <div className="grid justify-self-start">
            <p className="font-bold text-2xl lg:text-4xl reset tracking-wide">13</p>
            <p className="text-sm text-gray-400 font-medium reset">investors</p>
          </div>
          <div className="grid justify-self-end md:justify-self-start">
            <p className="font-bold text-2xl lg:text-4xl reset tracking-wide">28 days</p>
            <p className="text-sm text-gray-400 reset font-medium">Left to invest</p>
          </div>
        </div>
        <div className="grid justify-self-start">
          <p className="font-bold text-2xl lg:text-4xl reset tracking-wide">
            ₹ {formatIndianValuation(startup.totalRaised)}
          </p>
          <p className="text-sm text-gray-400 font-medium reset">
            {calculatePercentage(startup.totalRaised, startup.dealTerms.targetAmount)}%
            of minimum goal raised
          </p>
        </div>
        <div className="grid gap-0">
          <Progress success={{percent: calculatePercentage(startup.totalRaised, startup.dealTerms.targetAmount)}}/>
        </div>
        {isClosed?
          <Button className={"!bg-[#F5F5F5] px-6 !text-[#858585] flex items-center gap-2 justify-center"} disabled size="large" block>
            <Icons.Locked/> Campaign ended
          </Button>
          :
          <InvestTransactionModal startup={startup}/>
        }
        <span className="text-sm md:text-lg text-center">
          Minimum investment ₹ {formatIndianValuation(startup.dealTerms.minimumInvestment)}
        </span>
      </div>
    </>
  )
}