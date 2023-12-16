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
        <div className="lg:px-32 px-8 mt-20 sm:mt-32">
            <h6 className="text-3xl sm:text-5xl text-center mt-0 text-balance">Here&apos;s what our <span className="text-[#8686F5]">Community of 4000+</span> investors have to say about us!</h6>
            <div className=''>
                <Carousel autoplay slidesToShow={slides}>
                    {Review.map((review) => (
                        <div key={review.id} className="ring-1 ring-inset rounded-xl">
                            <div className="flex flex-col p-8 items-center justify-center">
                                <Image
                                    src={review.photo}
                                    height={70}
                                    width={70}
                                    alt="reviewer's photo"
                                    className="rounded-full"
                                />
                                <p className="text-lg mb-0 font-semibold">{review.name}</p>
                                <p className="mt-0 text-base">{review.designation}</p>
                                <p className="mt-0 text-center text-sm">{review.desc}</p>
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