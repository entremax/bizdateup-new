'use client'

import { Carousel } from 'antd'
import { useEffect, useState } from 'react'
import SlideCard from '@/app/_components/slider/SlideCard'

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

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 668,
      settings: {
        slidesToShow: 1,
      },
    },
  ]
  return (
    <div className="my-[97px] px-[19px]">
      <h6 className="mb-0 mt-0 text-center text-[30px] leading-[36px] lg:px-[150px] lg:text-[48px] lg:leading-[64px] xl:px-[300px]">
        Here&apos;s what our{' '}
        <span className="text-[#8686F5]">Community of 4000+</span> investors
        have to say about us!
      </h6>

      <div className="my-12 justify-center md:my-32 xl:mx-32">
        <Carousel
          className={'review-slider'}
          autoplay={false}
          dotPosition={'bottom'}
          dots={true}
          pauseOnDotsHover={true}
          draggable={true}
          swipeToSlide={true}
          slidesToShow={slides}
          responsive={responsiveSettings}>
          {Review.map((review) => (
            <SlideCard
              review={review}
              style={{
                margin: '0 1rem',
              }}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}
