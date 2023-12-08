'use client'
import React, { useEffect, useState } from 'react'
import { StartupData } from '@/types/invest'
import Image from 'next/image'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import InvestButton from '@/components/invest/InvestButton'

const StickyCompanyIntro: React.FC<{ startup: StartupData }> = ({
  startup,
}) => {
  const [isFixed, setIsFixed] = useState(false)
  const scrollThreshold = 500

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(document.body.scrollTop >= scrollThreshold)
    }

    document.body.addEventListener('scroll', handleScroll)

    return () => {
      document.body.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const staticClass =
    'hidden top-[4.56rem] left-0 right-0  md:grid grid-cols-12  gap-2 z-[999] bg-white shadow-lg'

  return (
    <div className={isFixed ? 'sticky ' + staticClass : 'hidden'}>
      <div className="col-span-full flex items-center justify-between xl:col-start-2 xl:col-end-12">
        <div className="col-start-2 flex items-center gap-4">
          <div className="h-11 w-11 overflow-clip rounded-xl border border-gray-400">
            <Image
              src={apiUri().v1 + '/logo/' + startup.logo}
              height={45}
              width={45}
              alt={startup.companyName}
            />
          </div>
          <h3 className="reset text-2xl font-bold leading-normal text-primary-dark lg:leading-[4rem]">
            {capitalizeFirstLetter(
              startup.registeredCompanyName.trim().split(' '),
            )}
          </h3>
        </div>
        <div className="max-w-[17rem] md:pl-8 xl:px-12">
          <InvestButton isClosed={false} startup={startup} intro sticky />
        </div>
      </div>
    </div>
  )
}

export default StickyCompanyIntro
