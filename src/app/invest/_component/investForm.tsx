"use client"
import { Button, Input } from "antd";
import { InputRef } from "antd/lib/input";
import { StartupData } from "@/types/_type";
import React, { useRef, useState } from "react";
import { formatIndianValuation } from "@/lib/utils";

const InvestForm: React.FC<{ startup: StartupData }> = ({ startup }) => {
  const inputRef = useRef<InputRef | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const amountToAdd = [50000, 75000, 100000];
  
  const addAmount = (i: number) => {
    let currentValue:number=0
    if (inputRef.current && inputRef.current.input) {
       currentValue = inputRef?.current?.input.valueAsNumber || 0;
    }
    const newAmount = currentValue + i;
    setAmount(newAmount);
  };
  const handleChange=()=>{
    let currentValue:number=amount
    if (inputRef.current && inputRef.current.input) {
      currentValue = inputRef?.current?.input.valueAsNumber;
    }
    setAmount(currentValue);
  }
  return (
    <div className="flex flex-col gap-4">
      <h6 className="p-0 m-0 text-lg font-bold text-gray-700">Investment amount</h6>
      <Input
        size="large"
        type="number"
        ref={inputRef}
        value={amount<=0?`min ₹ ${formatIndianValuation(startup.dealTerms.minimumInvestment)}`:amount}
        onChange={handleChange}
        placeholder={`min ₹ ${formatIndianValuation(startup.dealTerms.minimumInvestment)}`}
        className="!py-2 placeholder-gray-300 font-light text-sm"
      />
      <div className="flex flex-row gap-3">
        {amountToAdd.map((i) => (
          <Button onClick={() => addAmount(i)} className="!text-primary !outline-gray-300 !border-gray-300 font-normal text-sm" key={i}>
            + ₹{i}
          </Button>
        ))}
      </div>
      <div className="bg-[#FAFAFA] p-6 grid">
        {/* Other content here */}
      </div>
    </div>
  );
};

export default InvestForm;
