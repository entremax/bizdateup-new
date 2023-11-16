'use client'
import React, { useState, useEffect } from 'react'
import { StartupData } from '@/types/_type'
import Image from 'next/image'
import { apiUri, capitalizeFirstLetter } from '@/lib/util'
import { Button } from 'antd'

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
    'top-[4.56rem] left-0 right-0  grid grid-cols-12  gap-2 z-[999] bg-white shadow-lg'

  return (
    // <Affix offsetTop={200}>
    <div className={isFixed ? 'sticky ' + staticClass : 'hidden'}>
      <div className="flex justify-between items-center col-span-full xl:col-start-2 xl:col-end-12">
        <div className="flex items-center gap-4 col-start-2">
          <div className="h-11 w-11 border border-gray-400 rounded-xl overflow-clip">
            <Image
              src={apiUri().v1 + '/logo/' + startup.logo}
              height={45}
              width={45}
              alt={startup.companyName}
            />
          </div>
          <h3 className="text-2xl font-bold leading-normal lg:leading-[4rem] text-primary-dark reset">
            {capitalizeFirstLetter(
              startup.registeredCompanyName.trim().split(' '),
            )}
          </h3>
        </div>
        <div className="md:pl-8 xl:px-12 max-w-[17rem]">
          <Button
            type={'default'}
            className={'!bg-primary !text-white '}
            size={'large'}
            block
          >
            I am ready to Invest
          </Button>
        </div>
      </div>
    </div>
    // </Affix>
  )
}

export default StickyCompanyIntro
