'use client'
import React from 'react';
import {Icons} from "@/icons";
import {useAppSelector} from "@/store/hooks";
import capitalize from "antd/lib/_util/capitalize";

const Greet = () => {
  const {user,kycCompletionPercentage}=useAppSelector(({authUser})=>authUser)
  return (
    <div className='grid text-primary-dark'>
      <h3 className='text-lg flex items-center gap-4 md:text-2xl font-bold text-[rgba(32,32,84,0.62)] reset'>
        Hello {user.firstName===''?'User':capitalize(user.firstName)},
        {kycCompletionPercentage===100 &&
          <div className={"bg-lemon-lighter p-1 flex justify-center items-center rounded-full shadow text-lemon"}>
            <Icons.FilledCheck/> <span className={"text-xs reset font-normal text-lemon"}> KYC Verified</span>
          </div>
        }
      </h3>
      <h2 className='hidden sm:inline sm:text-3xl md:text-4xl font-bold reset'>Check out Live Campaigns</h2>
    </div>
  );
};

export default Greet;
