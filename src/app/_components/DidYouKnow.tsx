'use client'
import BackgroundSvg from '@/app/_components/BackgroundSvg'
import { useEffect, useState } from 'react'
import Button from '@/components/LinkButton'
import { Slider } from 'antd'

export default function DidYouKnow() {
  const [price, setPrice] = useState(2.5)
  const [unacademy, setUnacademy] = useState(3.2)
  const [Razor, setRazor] = useState(2.8)
  const [ola, setOla] = useState(1.24)
  const [Byjus, setByjus] = useState(1.8)

  const Companies = ([] = [
    {
      id: 9,
      photo: '/Unacademy.png',
      name: 'Unacademy',
      values: unacademy,
    },
    {
      id: 10,
      photo: '/Razor.png',
      name: 'Razor Pay',
      values: Razor,
    },
    {
      id: 11,
      photo: '/ola.png',
      name: 'Ola',
      values: ola,
    },
    {
      id: 12,
      photo: '/Byjus.png',
      name: 'Byjus',
      values: Byjus,
    },
  ])
  const backGroundStyles = {
    first: [
      {
        className:
          'pointer-events-none absolute top-0 -z-[9] h-[920px] w-screen bg-[#2b2c57]',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[10rem] lg:start-[39rem] top-10',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[30rem] lg:start-[39rem] top-[42rem]',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[15rem] -top-[6rem]',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[34rem] top-30',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[34rem] top-30',
      },
    ],
    second: [
      {
        className:
          'pointer-events-none bg-[#2b2c57] w-screen h-[769px] z-[9] absolute top-0 start-0',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[10rem] lg:start-[39rem] -top-[0.5rem]',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[30rem] lg:start-[39rem] top-[2rem]',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[15rem] -top-[6rem]',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[34rem] top-30',
      },
      {
        className:
          'pointer-events-none h-[795px] absolute z-[9] -start-[34rem] top-30',
      },
    ],
  }
  const onPriceChange = (newValue: number) => {
    setPrice(newValue)
  }

  useEffect(() => {
    setUnacademy(parseFloat((price * 1.28).toFixed(1)))
    setRazor(parseFloat((price * 1.12).toFixed(1)))
    setOla(parseFloat((price * 0.496).toFixed(1)))
    setByjus(parseFloat((price * 0.72).toFixed(1)))
  }, [price])
  return (
    <>
      <div className="relative overflow-hidden bg-primary-dark pb-[80px] pt-[68px] lg:hidden">
        {backGroundStyles.first.map(({ className }, index) => (
          <div key={index} aria-hidden="true" className={className}>
            <BackgroundSvg />
          </div>
        ))}
        <div className="relative z-10 text-center text-white">
          <h5 className="mb-[17.39px] mt-0 px-[32px] text-[30px] font-bold leading-[20.407px]">
            Did you Know?
          </h5>
          <p className="relative mx-[11.72px] text-[15px] font-normal">
            If you would have Invested just ₹50,000 in these startups what would
            have been your net worth today?
          </p>
          <div className="relative my-12">
            <Button
              className="mx-5 w-full py-4"
              title="Explore Startups"
              href={'/signup'}></Button>
          </div>
        </div>
        <div className="relative z-[9] mx-[20px] mt-[45px] rounded-[13.488px] border-[#EAE9E8] bg-white py-[30px]">
          <h5 className="mb-0 mt-0 text-center text-[20px] text-zinc-700/70">
            If you had invested*
          </h5>
          <p className="mb-0 mt-[10.79px] text-center text-[30px] font-bold">
            &#x20B9;{price}L
          </p>
          <div className="flex items-center justify-center">
            <Slider
              defaultValue={price}
              min={1}
              max={5}
              step={0.5}
              onChange={onPriceChange}
              className="mt-[23px] w-[85%]"
            />
          </div>
          <div className="px-[24px]">
            {Companies.map((company) => (
              <div
                key={company.id}
                className="mt-[42.85px] flex items-center justify-between">
                <div className="flex items-center gap-x-[14px]">
                  <div>
                    <picture>
                      <img
                        src={company.photo}
                        alt="company_photos"
                        width="40px"
                        height="auto"
                        className="rounded-[7.606px] ring-[0.761px] ring-[#E6E6E6]"
                      />
                    </picture>
                  </div>
                  <div>
                    <p className="text-[15px] font-medium">{company.name}</p>
                  </div>
                </div>
                <div>
                  <span className="text-[18px] font-bold">
                    &#x20B9;{company.values} Cr
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative hidden h-[769px] items-center justify-between overflow-hidden bg-primary-dark lg:flex lg:px-[80px] xl:px-[150px]">
        {backGroundStyles.second.map(({ className }, index) => (
          <div key={index + className} aria-hidden="true" className={className}>
            <BackgroundSvg />
          </div>
        ))}
        <div className="relative z-10 w-[420px] text-white">
          <h5 className="mb-[23px] text-[46px] font-bold">Did you Know?</h5>
          <p className="relative mt-[23px] text-[22px] font-normal leading-[28px]">
            If you would have Invested just ₹50,000 in these startups what would
            have been your net worth today?
          </p>
          <div className="mt-8">
            <Button
              href={'/signup'}
              className="w-fit"
              title="Explore Startups"
            />
          </div>
        </div>
        <div className="relative z-[99] mx-[20px] my-[112px] h-[543px] w-[522px] rounded-[13.488px] border-[#EAE9E8] bg-white py-[39px]">
          <h5 className="mb-0 mt-0 text-center text-[32px] text-zinc-700/70">
            If you had invested*
          </h5>
          <p className="mb-0 mt-[10.79px] text-center text-[40px] font-bold">
            &#x20B9;{price}L
          </p>
          <div className="flex items-center justify-center">
            <Slider
              defaultValue={price}
              min={1}
              max={5}
              step={0.5}
              onChange={onPriceChange}
              className="mt-[23px] w-[85%]"
            />
          </div>
          <div className="px-[24px]">
            {Companies.map((company) => (
              <div
                key={company.id}
                className="mt-[35px] flex items-center justify-between">
                <div className="flex items-center gap-x-[14px]">
                  <div>
                    <picture>
                      <img
                        src={company.photo}
                        alt="company_photos"
                        width="53px"
                        height="auto"
                        className="rounded-[7.606px] ring-[0.761px] ring-[#E6E6E6]"
                      />
                    </picture>
                  </div>
                  <div>
                    <p className="text-[20px] font-medium">{company.name}</p>
                  </div>
                </div>
                <div>
                  <span className="text-[24px] font-bold">
                    &#x20B9;{company.values} Cr
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
