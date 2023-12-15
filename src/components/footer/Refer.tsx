import Link from 'next/link'
import Image from 'next/image'
const ReferFooter=()=>{
  return(
    <div className="bg-[#272855] py-4 md:py-0 px-2 justify-center items-center  flex-col md:flex-row flex gap-2 md:gap-4">
      <div className="flex  items-center">
      <div className="relative max-w-[6rem] w-20 h-16 flex gap-2">
        <Image src={'/speaker.png'} alt="Speaker"  fill/>
      </div>
      <p className="text-white text-lg font-semibold">Refer a start up and get ₹500</p>
      </div>
      
      <Link href='/referral' className='!primary_link w-fit px-16 md:px-8 py-4 md:py-2 !text-white'>
        Know more
      </Link>
    </div>
  )
}
export default ReferFooter