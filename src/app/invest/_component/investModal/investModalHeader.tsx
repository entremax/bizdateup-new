'use client'
import {useSearchParams} from "next/navigation";

const InvestModalHeader=()=>{
  const searchParams=useSearchParams()
  const transactionType=searchParams.get('transaction-type')
  return(
    <>
    
    </>
  )
}
export default InvestModalHeader