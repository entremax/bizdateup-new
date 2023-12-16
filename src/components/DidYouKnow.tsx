'use client'

import { Button, Slider } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DidYouKnow() {

    const [price, setPrice] = useState<number>(2.50)
    const [unacademy, setUnacademy] = useState<number>(3.2)
    const [Razor, setRazor] = useState<number>(2.8)
    const [ola, setOla] = useState<number>(1.24)
    const [Byjus, setByjus] = useState<number>(1.8)

    const Companies = [] = [
        {
            id: 9,
            photo: '/Unacademy.png',
            name: 'Unacademy',
            values: unacademy
        },
        {
            id: 10,
            photo: '/Razor.png',
            name: 'Razor Pay',
            values: Razor
        },
        {
            id: 11,
            photo: '/ola.png',
            name: 'Ola',
            values: ola
        },
        {
            id: 12,
            photo: '/Byjus.png',
            name: 'Byjus',
            values: Byjus
        },
    ]

    const onPriceChange = (newValue: number) => {
        setPrice(newValue);
    };

    useEffect(() => {
        setUnacademy((parseFloat((price * 1.28).toFixed(1))))
        setRazor((parseFloat((price * 1.12).toFixed(1))))
        setOla((parseFloat((price * 0.496).toFixed(1))))
        setByjus((parseFloat((price * 0.72).toFixed(1))))
    }, [price])

    return (
        <div className="mt-16 bg-[#242552] flex flex-col md:flex-row items-center justify-between gap-x-20 md:px-16 xl:px-32 px-6 py-12">
            <div className="text-white text-center md:text-left mb-8 md:w-[419px]">
                <h5 className="text-3xl md:text-5xl">Did you Know?</h5>
                <p className="text-sm -mt-10">If you would have Invested just ₹50,000 in these startups what would have been your net worth today?</p>
                <Button type="primary" className="px-8 bg-[#8686F5] mt-4 w-[100%] md:w-min">Explore Stratups</Button>
            </div>
            <div className="bg-white text-black-lighter rounded-xl flex flex-col items-center w-full md:w-[522px] xl:py-8 md:py-0">
                <h5 className="text-zinc-700/70 text-xl">If you had invested*</h5>
                <p className="text-xl font-bold -mt-4">&#x20B9;{price}L</p>
                <Slider defaultValue={price} min={1} max={5} step={0.5} onChange={onPriceChange} className="w-[80%]" />
                <div>
                    {Companies.map((company) => (
                        <div key={company.id} className="flex gap-x-24 md:gap-x-20 lg:gap-x-48 justify-between items-center">
                            <div className="flex items-center gap-x-4 mt-2">
                                <div>
                                    <Image
                                        src={company.photo}
                                        width={40}
                                        height={40}
                                        alt="companies"
                                    />
                                </div>
                                <p>{company.name}</p>
                            </div>
                            <p className="text-xl font-bold">&#x20B9;{company.values} Cr</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}