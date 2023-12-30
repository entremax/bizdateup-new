import Link from 'next/link'
import Image from 'next/image'

const ReferFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-[#272855]  px-2 py-4 md:flex-row md:gap-4 md:py-0">
      <div className="flex  items-center">
        <div className="relative flex h-16 w-20 max-w-[6rem] gap-2">
          <Image src={'/speaker.webp'} alt="Speaker" fill />
        </div>
        <p className="text-lg font-semibold text-white">
          Refer a start up and get ₹500
        </p>
      </div>

      <Link
        href="/referral"
        className="!primary_link w-fit px-16 py-4 !text-white md:px-8 md:py-2">
        Know more
      </Link>
    </div>
  )
}
export default ReferFooter
