import React from 'react'
import {Campaign} from "@/types";
import Image from 'next/image'
import {capitalizeFirstLetter} from "@/lib/utils";
import {StartupTag} from "@/components/tag";
import JoinWhatsApp from "@/dashboard/_join_whatsapp";
import {Button} from 'antd'

const Startups = ({data}: { data: Campaign[] }) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_APP_TEST_URL}/`
  
  function getData(data: any[]) {
    let startupData = data.length > 4 ? data.slice(0, 4) : data;
    
    if (startupData.length % 2 !== 0) {
      startupData = data.slice(0, 2);
    }
    
    return startupData;
  }
  
  return (
    <div className={"grid"}>
      <h3 className={"text-primary-dark text-2xl md:text-4xl font-bold !m-0 !p-0"}>Invest with Confidence</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 justify-center py-6 ">
        {getData(data).map((startup) => (
          <div
            key={startup._id}
            className={"relative rounded-2xl border_gray overflow-clip shadow-lg"}
          >
            <Image
              src={baseUrl + "banner/" + startup.banner}
              alt={startup.registeredCompanyName}
              height={250}
              width={340}
              className={"w-full"}
            />
            <Image
              src={baseUrl + "logo/" + startup.logo}
              height={40}
              width={40}
              alt={startup.registeredCompanyName}
              className={"absolute top-52 rounded-xl left-5 w-16 h-16 border_gray"}
            />
            <div className={"p-5 pt-8 grid gap-3"}>
              <h5 className='text-2xl font-bold text-black-lighter m-0 p-0'>
                {capitalizeFirstLetter(
                  startup.registeredCompanyName.split(' ')
                )}
              </h5>
              <p
                className={"text-base text-[#828F99] text-ellipsis leading-normal"}>{startup.shortDescription}</p>
              <StartupTag startup={startup}/>
            </div>
          </div>
        ))}
      </div>
      <JoinWhatsApp hidden/>
      {data.length % 2 === 0 && data.length > 4 ?
        <Button
          type={"default"}
          size={"large"}
          className={"p-[0.625rem_1.25rem] my-9 text-lg font-semibold  cursor-pointer bg-light-shadow outline-none border-0  text-primary rounded-lg"}
          block
        >
          View All Startups
        </Button>
        : null}
    </div>
  )
}
export default Startups