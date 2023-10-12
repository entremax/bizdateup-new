'use client'
import React from 'react'
import {Icons} from "@/icons";
import {Button} from "antd";
import Image from 'next/image'
import {cn} from "@/lib/utils";
import {useAppSelector} from "@/store/hooks";

const Plans = () => {
  const {user}=useAppSelector(({authUser})=>authUser)
  const tableData = {
    headers: ["Features", "Free", "Membership"],
    features: [
      {
        name: "Molestie lobortis massa.",
        isFree: true,
        needMembership: true
      },
      {
        name: "Molestie lobortis massa.",
        isFree: false,
        needMembership: true
      },
      {
        name: "Molestie lobortis massa.",
        isFree: false,
        needMembership: true
      },
      {
        name: "Molestie lobortis massa.",
        isFree: false,
        needMembership: "Up to 20 Users"
      },
    ]
  }
  return (
    <div className={cn( user?.membership?.isMember==="no"?'hidden md:grid border_gray pt-0 rounded-2xl bg-white shadow-md':'hidden')}>
      <div className="flex justify-center items-center py-4 pb-3 px-4 shadow">
        <div className={"flex justify-center"}>
          <Image
            src={Icons.Logo}
            alt={"logo"}
            height={38}
            width={80}
          />
        </div>
        <h4 className={"text-primary-dark font-bold text-xl md:text-2xl !m-0 !p-0"}>10x benefits with membership
          plan</h4>
        <div className="grow"/>
        <Button type={"default"}
                className={"bg-primary !text-white rounded-lg font-bold text-sm !hover:bg-primary outline-none !px-8"}>
          Upgrade Now
        </Button>
      </div>
      
      <table className={"!table-fixed divide-y !divide-solid !divide-x-0 !divide-gray-300"}>
        <thead>
        <tr className={'text-left'}>
          {tableData.headers.map((head) => <th
            className={"py-3 px-4 !text-gray-900 text-sm !font-medium "}>{head}</th>)}
        </tr>
        </thead>
        <tbody className={'!divide-y !divide-solid !divide-x-0 !divide-gray-300'}>
        {tableData.features.map((rowData) => (
          <tr className={'text-left'}>
            <td className={"px-6 py-5 font-medium text-sm text-gray-500"}>{rowData.name}</td>
            <td className={"px-6 py-5 font-medium text-sm text-gray-500"}>{rowData.isFree ?
              <Icons.Checked/> :
              <Icons.Minus/>}</td>
            <td className={"px-6 py-5 font-['Montserrat'] font-medium text-sm text-gray-700"}>
              {typeof (rowData.needMembership) === "boolean" &&
              rowData.needMembership ? <Icons.Checked/> : null}
              {typeof (rowData.needMembership) === "string" &&
                rowData.needMembership}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
export default Plans