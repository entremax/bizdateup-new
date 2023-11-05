import {
  apiUri,
  capitalizeFirstLetter,
  formatIndianValuation
} from "@/lib/utils";
import {IInterestCheckResponse, securityType, StartupDataResponse} from "@/types/_type";
import {Button,  Input} from "antd";
import type { Metadata, ResolvingMetadata } from 'next'
import Link from "next/link";
import React from 'react';
import CompanyIntro from "@/components/companyIntro";
import DownloadFiles from "@/components/downloadFiles";
import DealTerms from "@/components/dealTerms";
import Highlights from "@/components/highlights";
import PitchDeck from "@/components/pitchDeck";
import TeamMembers from "@/components/TeamMembers";
import CompanyInfo from "@/components/companyInfo";
import StartAd from "@/components/StartAd";
import StartupFeedback from "@/components/Feedback";
import StartupToInvest from "@/components/Startups";
import FrequentlyAsked from "@/components/faq";
import AfterCampaign from "@/components/afterCampaign";
import FeedbackDialog from "@/components/feedbackDialog";
import StickyCompanyIntro from "@/components/stickyCompanyIntro";
import {isInterested} from "@/lib/endpoints/apiEndpoint";
import {cookies} from "next/headers";
import ReduxProvider from "@/store/Provider";

const { v1: apiV1 } = apiUri();

export const revalidate=0
export async function generateMetadata(
  { params }:  {
    params: { id: string }
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const { data }: { data: StartupDataResponse } = await fetch(apiV1 + `/startup/fetchStartupById?refId=${id}`, { next: { revalidate: 3600 } })
    .then((res) => {
      return res.json()
    })
    .catch(e=> {
      console.log(e)
      throw new Error("Something went wrong check server log")
    })

  const companyName = capitalizeFirstLetter(data.data.registeredCompanyName.trim().split(" "))
  return {
    title: companyName.join(" ") + " | Bizdateup",
    description: data.data.shortDescription
  }
}

const getStartupDetails = async (id: string) => {
  const res = await fetch(apiV1 + `/startup/fetchStartupById?refId=${id}`, { next: { revalidate: 3600 } });
  
  if (!res.ok || !res) {
    throw new Error("Something Went Wrong");
  }
  
  const {data}:{data:StartupDataResponse} = await res.json();
  return { details: data };
};
const checkInterest=async(id:string)=>{
  const cookie=cookies()
  const tokenKey=cookie.get('token')?.value
  const userId=cookie.get('user_id')?.value
  
  const url=isInterested({
    params: {
      startupId: id,
      investorId: userId?userId:'',
    }
  })
  
  const response=await fetch(url, {
    headers: {
      Authorization: tokenKey ? "Bearer " + tokenKey : ""
    },
  })
    .then((res)=> {
      return res.json()
    })
    .catch(e=> {
      return e
    })
    if(response.code===200){
      if(response.data.data!==null){
        return response.data.data
      }else{
        return {interested:null}
      }
    }else{
      throw Error(response.message)
    }
}
const Startup: React.FC<{ params: { id: string } }> = async({ params: { id } }) => {
  const { details: { data: startupData } } = await getStartupDetails(id);
  const {interested}=(await checkInterest(id)) as IInterestCheckResponse
  const isClosed=(startupData.activeStatus.status==="closed")
  return (
    <main className={'w-screen'}>
      <StickyCompanyIntro startup={startupData}/>
      <div className="pb-3 xl:ml-2 grid grid-cols-12 gap-2 px-3 xl:py-20 pt-12 md:pt-20 xl:px-5">
        <CompanyIntro startup={startupData}/>
        
        <div className="col-span-full md:col-start-1 md:col-end-8 xl:col-start-2 xl:col-end-8 gap-7 flex flex-col">
          <Highlights startup={startupData}/>
          <DealTerms className={"md:hidden"} startup={startupData}/>
          <PitchDeck/>
          <TeamMembers startup={startupData}/>
          <DownloadFiles className={"md:hidden"} startup={startupData}/>
          <div className="hidden lg:inline !bg-light-shadow shadow rounded-xl px-4 lg:px-7 py-4 lg:py-5">
            <h4 className="text-2xl font-bold reset flex-grow">Made up your mind?</h4>
            <div className="grid grid-cols-2 w-full gap-4 py-2">
              <Input size={"large"} type={"text"}
                     placeholder={`₹ ${formatIndianValuation(startupData.dealTerms.minimumInvestment)} min`}
                     className={" !py-2 placeholder-gray-300 font-medium text-lg"}/>
              <Link href={"/link"} type={"default"}
                    className={"bg-primary text-white text-center text-sm lg:text-base  font-medium leading-[1.57563rem] outline-none flex items-center justify-center rounded-lg px-2 py-2"}>
                Invest in {capitalizeFirstLetter(startupData.registeredCompanyName.trim().split(" "))}
              </Link>
            </div>
          </div>
          <CompanyInfo startup={startupData}/>
          <StartupFeedback startup={startupData}/>
        </div>
        <div
          className={
            'hidden col-span-full md:col-start-8 md:col-end xl:col-start-8 md:pl-8 xl:px-12 xl:col-end-12 md:flex flex-col gap-4'
          }>
          <DealTerms startup={startupData}/>
          <Button
            className={"!bg-light-shadow !text-primary !font-medium !outline-none !border-0  text-whit text-sm lg:text-base   leading-[1.57563rem]  flex items-center justify-center rounded-lg !px-2 !py-2"}
            size={"large"}
            block type={"default"}
          >How it works</Button>
          <DownloadFiles startup={startupData}/>
          {/*<DownloadVideo startup={startupData}/>*/}
          <StartAd className={"hidden"}/>
        </div>
        {isClosed && <AfterCampaign startup={startupData}/>}
      </div>
      {!isClosed &&
        <>
          <div className='lg:bg-gray-smoke grid grid-cols-12 py-20'>
            <StartupToInvest header={"Recommended"} type={(startupData.dealTerms.typeOfSecurity) as securityType}/>
          </div>
          <div className=' grid grid-cols-12'>
            <div
              className='grid col-span-full md:col-start-2 md:col-end-11 xl:col-start-3 xl:col-end-11 my-16 md:my-32'>
              <h4 className='text-3xl md:text-4xl font-bold text-center reset'>
                Frequently Asked Questions
              </h4>
              <FrequentlyAsked custom={true} faqData={startupData.faq}/>
            </div>
          </div>
        </>}
      {interested===null&&
        <ReduxProvider>
          <FeedbackDialog/>
        </ReduxProvider>
      }
    </main>
  );
}

export default Startup;