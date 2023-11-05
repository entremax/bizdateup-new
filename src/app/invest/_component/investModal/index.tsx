"use client"
import {Button} from "antd";
import { StartupData } from "@/types/_type";
import React, { useState} from "react";
import {apiUri, capitalizeFirstLetter} from "@/lib/utils";
import {Icons} from "@/icons";
import Image from "next/image";
import CustomModal from "@/ui/customModal";
import InvestForm from "@/components/investModal/investForm";
import ReduxProvider from "@/store/Provider";
import OfflinePayment from "@/components/investModal/offlinePayment";

type TransactionTypes="online"|"offline"|null
/**
 * Renders a form to invest a specified amount.
 *
 *
 */
const InvestTransactionModal: React.FC<{ startup: StartupData }> = ({ startup }) => {
  const [amount, setAmount] = useState<number>(0);
  const [transactionType,setTransactionType]=useState<TransactionTypes>(null)
  const [amountToPay,setAmountToPay]=useState(0)
  
  
  
  return (
    <CustomModal
      title={
        <div className="flex items-center gap-4 p-4 shadow">
          {transactionType === "offline" ?
            <Button className={"!outline-none !border-none !shadow-none "}
                    icon={<Icons.ArrowLeft height={13} width={13}/>}
                    onClick={() => setTransactionType(null)}
                    ghost
            />:
            <div className="h-11 w-11 border border-gray-400 rounded-xl flex justify-center items-center">
              <Image
                src={apiUri().v1 + '/logo/' + startup.logo}
                height={45}
                width={45}
                alt={startup.companyName}
              />
            </div>}
          <h5
            className="text-xl font-bold leading-normaltext-primary-dark reset">
            {transactionType === "offline" ? "Offline Payment":capitalizeFirstLetter(startup.registeredCompanyName.trim().split(" ")) }
          </h5>
        </div>}
      location={"investLeft"}
      openWithButton
    >
      {transactionType==="offline"?
        <>
          <OfflinePayment amountToPay={amountToPay}/>
        </>:
        <ReduxProvider>
          <InvestForm startup={startup} setTransactionType={setTransactionType} setAmount={setAmount} amount={amount} setAmountToPay={setAmountToPay}/>
        </ReduxProvider>}
    </CustomModal>
  );
};

export default InvestTransactionModal;
