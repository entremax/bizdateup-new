'use client'

import { Carousel } from 'antd'
import { useEffect, useState } from 'react'

const Review = [
  {
    id: 13,
    photo: '/hanna.png',
    name: 'Hannah Schmitt',
    designation: 'Lead designer @ Clinic Trac  ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nib se sed magna eget nibh in ',
  },
  {
    id: 14,
    photo: '/hanna.png',
    name: 'Kianna Septimus',
    designation: 'Lead designer @ Clinic Trac  ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nib se sed magna eget nibh in ',
  },
  {
    id: 15,
    photo: '/hanna.png',
    name: 'Cooper Schleifer',
    designation: 'Lead designer @ Clinic Trac  ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nib se sed magna eget nibh in ',
  },
  {
    id: 16,
    photo: '/hanna.png',
    name: 'Hannah Schmitt',
    designation: 'Lead designer @ Clinic Trac  ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nib se sed magna eget nibh in ',
  },
]

export default function Reviews() {
  const [slides, setSlides] = useState<number>(3)

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 1024) {
        setSlides(1)
      } else {
        setSlides(3)
      }
    }

    updateSlides()

    window.addEventListener('resize', updateSlides)

    return () => {
      window.removeEventListener('resize', updateSlides)
    }
  }, [])

  return (
    <div className="my-[97px] px-[19px]">
      <h6 className="mb-0 mt-0 text-center text-[30px] leading-[36px] lg:px-[150px] lg:text-[48px] lg:leading-[64px] xl:px-[300px]">
        Here&apos;s what our{' '}
        <span className="text-[#8686F5]">Community of 4000+</span> investors
        have to say about us!
      </h6>
      <div className="mt-[32px]">
        <Carousel autoplay slidesToShow={slides}>
          {Review.map((review, index) => (
            <div
              key={review.id}
              className={`mx-2 rounded-[18px] ring-1 ring-inset ring-[#ECECEC] ${
                index !== Review.length - 1 ? 'mr-4' : ''
              }`}>
              <div className="flex flex-col items-center justify-center p-[15px]">
                <picture>
                  <img
                    src={review.photo}
                    width="100%"
                    height="auto"
                    alt="reviewer"
                    className="rounded-[13.486px]"
                  />
                </picture>
                <p className="mb-0 text-[22px] font-bold">{review.name}</p>
                <p className="m-0 text-[18px] font-semibold">
                  {review.designation}
                </p>
                <p className="text-center text-[14px]">{review.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
