import React from "react";
import {StartupData} from "@/app/invest/_type";
import Image from "next/image";
import {apiUri, capitalizeFirstLetter} from "@/lib/utils";
import {Avatar} from "antd";

interface Props {
  startup:StartupData
}

const AfterCampaign: React.FC<Props> = ({ startup }) => {
  return (
    <div
      className={"bg-neutral-300 grid col-span-full md:col-start-2 md:col-end-12 my-16 md:my-32 rounded-xl p-10 justify-center items-center text-center"}>
      <div className="flex items-center gap-4 py-4 justify-center">
        <div className="h-11 w-11 border border-gray-400 rounded-xl overflow-clip">
          <Image
            src={apiUri().v1 + '/logo/' + startup.logo}
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
      <p className="reset text-lemon-dark text-center text-2xl font-bold leading-[3.5rem]">Smooth Sparkling Shake has
        raised 6355366 from 122 investors on 19 Sep 2021</p>
      <div className="flex items-center justify-center py-3">
        {/*<Avatar.Group>*/}
          <div
            className={"relative outline outline-2 outline-primary rounded-full"}>
            <Avatar size={'large'} className={"m-0.5"}>U</Avatar>
          </div>
          <div
            className={"relative outline outline-2 outline-primary rounded-full"}>
            <Avatar size={'large'} className={"m-0.5"}>U</Avatar>
          </div>
          <div
            className={"relative outline outline-2 outline-primary rounded-full"}>
            <Avatar size={'large'} className={"m-0.5"}>U</Avatar>
          </div>
        {/*</Avatar.Group>*/}
      </div>
      <p className={"reset text-gray-500 text-center font-normal"}>
        Gaurav, Dennis, Albert, Michael, Adrienne, and 9754 others invested. <span className="underline decoration-gray-500 decoration-1"></span> 1176 Reviews
      </p>
    </div>
  );
};

export default AfterCampaign;