'use client'
import React from 'react';
import { Icons } from '@/icons';
import { Avatar,Badge, Button, Tooltip } from 'antd';
import {useAppSelector} from "@/store/hooks";
import {cn} from "@/lib/utils";
import {redirect} from "next/navigation";

const UserMenu = () => {
  const {user}=useAppSelector(({authUser})=>authUser)
  
  React.useEffect(()=>{
    if (!user) {
      redirect('/login')
    }
  },[user])
  return (
    <>
      <Tooltip title={'Notifications'}>
        <Badge
          count={0}
          // showZero
        >
          <Button
            icon={<Icons.Bell />}
            shape='circle'
            className={'relative !outline-none'}
          />
        </Badge>
      </Tooltip>
      <div className={"flex justify-center items-center gap-2"}>
        <div className={cn(user?.membership?.isMember!=="no"?"relative outline outline-4 outline-yellow-500 rounded-full":"relative rounded-full")}>
          <Avatar size={'large'}>U</Avatar>
          {user?.membership?.isMember!=="no"?(
            <>
            <Icons.Premium
              className={'absolute -top-4 right-0.5 z-[999] rotate-12'}
              height={'1.5rem'}
              width={'1.5rem'}
            />
            <div className={'absolute rounded-full bg-primary text-white font-semibold text-xs -bottom-2 left-[0.2rem] px-2'}>VIP</div></>):null}
        </div>
        <Icons.ArrowDown/>
      </div>
    </>
  );
};

export default UserMenu;
