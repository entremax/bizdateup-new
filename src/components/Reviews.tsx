'use client'

import { Carousel } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";


const Review = [
    {
        id: 13,
        photo: '/hanna.png',
        name: 'Hannah Schmitt',
        designation: 'Lead designer @ Clinic Trac  ',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nib se sed magna eget nibh in '
    },
    {
        id: 14,
        photo: '/hanna.png',
        name: 'Kianna Septimus',
        designation: 'Lead designer @ Clinic Trac  ',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nib se sed magna eget nibh in '
    },
    {
        id: 15,
        photo: '/hanna.png',
        name: 'Cooper Schleifer',
        designation: 'Lead designer @ Clinic Trac  ',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nib se sed magna eget nibh in '
    },
    {
        id: 16,
        photo: '/hanna.png',
        name: 'Hannah Schmitt',
        designation: 'Lead designer @ Clinic Trac  ',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nib se sed magna eget nibh in '
    },
]


export default function Reviews() {

    const [slides, setSlides] = useState<number>(3)

    useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth < 1024) {
                setSlides(1);
            } else {
                setSlides(3);
            }
        };

        updateSlides();

        window.addEventListener("resize", updateSlides);

        return () => {
            window.removeEventListener("resize", updateSlides);
        };
    }, []);


    return (
        <div className="px-[19px] my-[97px]">
            <h6 className="text-[30px] lg:text-[48px] lg:px-[150px] xl:px-[300px] text-center mt-0 leading-[36px] lg:leading-[64px] mb-0">Here&apos;s what our <span className="text-[#8686F5]">Community of 4000+</span> investors have to say about us!</h6>
            <div className='mt-[32px]'>
                <Carousel autoplay slidesToShow={slides}>
                    {Review.map((review) => (
                        <div key={review.id} className="ring-1 ring-[#ECECEC] rounded-[18px] ring-inset">
                            <div className="flex flex-col p-[15px] items-center justify-center">
                                <picture>
                                    <img src={review.photo} width='100%' height='auto' alt="reviewer" className="rounded-[13.486px]" />
                                </picture>
                                <p className="text-[22px] font-bold mb-0">{review.name}</p>
                                <p className="m-0 text-[18px] font-semibold">{review.designation}</p>
                                <p className="text-[14px] text-center">{review.desc}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            {/* <div className="lg:hidden">
                <Carousel autoplay slidesToShow={1}>
                    {Review.map((review) => (
                        <div key={review.id}>
                            <div className="flex flex-col p-2 items-center justify-center">
                                <Image
                                    src={review.photo}
                                    height={300}
                                    width={300}
                                    alt="reviewer's photo"
                                    className="rounded-md"
                                />
                                <p className="text-xl mb-0 font-semibold">{review.name}</p>
                                <p className="mt-0 text-base">{review.designation}</p>
                                <p className="mt-0 text-center text-sm">{review.desc}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div> */}
        </div>
    )
}