import {baseUrl} from "@/lib/utils";
import {StartupData} from "@/app/invest/startup/_type";
import Image from 'next/image'
const getStartupDetails=async(id:string)=>{
  const res=await fetch(baseUrl()+`/startup/fetchStartupById?refId=${id}`)
  if(!res.ok || !res){
    throw new Error("Something Went Wrong")
  }
  
  const data=await res.json()
  return {details:data.data}
}

// TODO- Startup
export default async function Startup({params}:{params: { id:string }}){
  const {id}=params
  const {details}:{details:StartupData}=await getStartupDetails(id)
 
  return(
    <div>
      {details &&(
        <div className="flex flex-col gap-4">
          <div className="flex">
            <div className={"h-8 w-8 rounded-xl overflow-clip"}>
              <Image
                src={baseUrl()+'/logo'+details.data.logo}
                height={32}
                width={32}
                alt={details.data.companyName}
              />
            </div>
          
          </div>
        </div>
      )
      }
    </div>
  )
}