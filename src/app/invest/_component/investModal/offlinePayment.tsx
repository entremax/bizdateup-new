'use client'
import React from 'react'
import CopyToClipboard from "react-copy-to-clipboard";
import {Icons} from "@/icons"
import {Divider, Input, Tooltip} from "antd";


const OfflinePayment=({amountToPay=0}:{amountToPay:number})=>{
  const BankDetails={
    name:"BIZDATEUP TECHNOLOGIES PRIVATE LIMITED",
    accountNumber:50000700057404,
    ifsc:"YESB0CMSNOC",
  }
  
  return(
    <div className={"flex flex-col gap-4"}>
      <div className="grid gap-4 p-8 pb-4">
        <p className="reset text-sm xl:text-md text-gray-700 font-medium">
          Use the below details to transfer money using RTGS, NEFT OR IMPS.
        </p>
        <div className={"grid gap-6"}>
          <BankDetail label={"Name"} title={"A/C Name"} value={BankDetails.name}/>
          <BankDetail label={"Account Number"} title={"A/C No."} value={BankDetails.accountNumber}/>
          <BankDetail label={"IFSC"} title={"IFSC"} value={BankDetails.ifsc}/>
          <BankDetail label={"Amount to be Paid"} title={"Amount to be Paid"} value={`₹ ${amountToPay}`}/>
        </div>
      </div>
      <Divider style={{margin:0}}/>
      <div className="grid p-8 pt-4 gap-4">
        <p className="reset text-sm xl:text-md text-gray-700 font-medium">
          Please enter transaction reference ID
        </p>
        <Input />
      </div>
    </div>
  )
}

const BankDetail = ({label, title, value}: { label: string, title: string, value: string | number }) => {
  const [tooltipTitle, setTooltipTitle] = React.useState("Copy");
  
  const handleTooltipChange = () => {
    setTooltipTitle(`${title} copied`);
    setTimeout(() => {
      setTooltipTitle("Copy");
    }, 1000);
  };
  
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <p className="reset flex sm:text-base xl:text-md items-center text-[#828F99]">{label}</p>
        <h6 className="reset sm:text-base xl:text-md text-[#252525]">
          {value}
        </h6>
      </div>
      {label === "Amount to be Paid" ? null :
        <CopyToClipboard text={value.toString()} onCopy={handleTooltipChange}>
          <Tooltip title={tooltipTitle}>
            <Icons.Copy/>
          </Tooltip>
        </CopyToClipboard>}
    </div>
  );
};

export default OfflinePayment