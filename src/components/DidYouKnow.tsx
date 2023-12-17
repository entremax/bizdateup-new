'use client'

import { Slider } from "antd";
import { useEffect, useState } from "react";
import Button from "./Button";

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

    const background_1 = (
        <svg
            width={868}
            height={734}
            viewBox="0 0 868 734"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M444.062 454.776h20.672v-20.672h-20.672v20.672Zm0-124.03h20.672v-20.672h-20.672v20.672Zm0 62.015h20.672v-20.672h-20.672v20.672Zm0 124.03h20.672v-20.672h-20.672v20.672Zm0-155.037h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M264.02 82.688h20.671V62.016H264.02v20.672Z" fill="#242552" />
            <path
                d="M264.02 20.672h20.671V0H264.02v20.672Zm-.004 31.007h20.671V31.007h-20.671v20.672Zm366.089 403.097h20.672v-20.672h-20.672v20.672Zm0-248.059h20.672v-20.672h-20.672v20.672Zm0-124.029h20.672V62.016h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M630.105 392.761h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M630.105 144.701h20.672v-20.672h-20.672v20.672Zm0 124.03h20.672v-20.672h-20.672v20.672Zm0 248.06h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M630.105 20.672h20.672V0h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M630.105 423.769h20.672v-20.672h-20.672v20.672Zm0-248.06h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M630.105 51.679h20.672V31.007h-20.672v20.672Z" fill="#242552" />
            <path
                d="M630.105 361.754h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M630.105 113.694h20.672V93.022h-20.672v20.672Z" fill="#242552" />
            <path
                d="M630.105 237.724h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M630.105 485.783h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M599.102 485.783h20.671v-20.672h-20.671v20.672Zm-62.016-279.066h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Zm0 62.015h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M537.086 144.701h20.672v-20.672h-20.672v20.672Z" fill="#242552" />
            <path
                d="M537.086 268.731h20.672v-20.672h-20.672v20.672Zm0 248.06h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M537.086 423.769h20.672v-20.672h-20.672v20.672Zm0-248.06h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Zm0 62.016h20.672v-20.672h-20.672v20.672Zm0-248.06h20.672V93.022h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M537.086 237.724h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M537.086 485.783h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M357.039 82.688h20.672V62.016h-20.672v20.672Z" fill="#242552" />
            <path
                d="M357.039 20.672h20.672V0h-20.672v20.672Zm0 31.007h20.672V31.007h-20.672v20.672Zm366.094 279.067h20.672v-20.672h-20.672v20.672Zm0-248.058h20.672V62.016h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M723.133 392.761h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M723.133 144.701h20.672v-20.672h-20.672v20.672Zm0 124.03h20.672v-20.672l-20.672.001v20.671Zm0 248.06h20.672V496.12h-20.672v20.671Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M723.133 20.672h20.672V0h-20.672v20.672Zm0 403.097h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M723.133 175.709h20.672v-20.671h-20.672v20.671Zm0 124.029h20.672v-20.672h-20.672v20.672Zm0-248.059h20.672V31.007h-20.672V51.68Zm0 310.075h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M723.133 113.694h20.672V93.022h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M754.137 113.694h20.671V93.022h-20.671v20.672Zm-31.004 124.03h20.672v-20.672h-20.672v20.672ZM568 206.717h20.672v-20.672H568v20.672Zm-92.934 248.059h20.672v-20.672h-20.672v20.672Zm0-124.03h20.672v-20.672h-20.672v20.672Zm0 62.015h20.672v-20.672h-20.672v20.672Zm0 31.008h20.672v-20.672h-20.672v20.672Zm0-62.015h20.672v-20.672h-20.672v20.672ZM295.023 82.688h20.672V62.016h-20.672v20.672Zm0-62.016h20.672V0h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M295.023 51.679h20.672V31.007h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path d="M661.113 454.776h20.672v-20.672h-20.672v20.672Z" fill="#242552" />
            <path
                d="M661.113 206.717h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M661.113 82.688h20.672V62.016h-20.672v20.672Z" fill="#242552" />
            <path
                d="M661.113 144.701h20.672v-20.672h-20.672v20.672Zm0 124.03h20.672v-20.672h-20.672v20.672Zm0 248.06h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M661.113 20.672h20.672V0h-20.672v20.672Zm0 403.097h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
            />
            <path
                d="M661.113 175.709h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Zm0-248.059h20.672V31.007h-20.672v20.672Zm0 310.075h20.672v-20.672h-20.672v20.672Zm0-248.06h20.672V93.022h-20.672v20.672Zm0 124.03h20.672v-20.672h-20.672v20.672Zm0 248.059h20.672v-20.672h-20.672v20.672ZM568.09 206.717h20.672v-20.672H568.09v20.672Zm0 186.044h20.672v-20.672H568.09v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M568.09 144.701h20.672v-20.672H568.09v20.672Zm0 124.03h20.672v-20.672H568.09v20.672Z"
                fill="#242552"
            />
            <path
                d="M568.09 516.791h20.672v-20.672H568.09v20.672Zm0-341.082h20.672v-20.672H568.09v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M568.09 299.738h20.672v-20.671H568.09v20.671Z" fill="#242552" />
            <path
                d="M568.09 113.694h20.672V93.022H568.09v20.672Zm0 372.089h20.672v-20.671H568.09v20.671Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M388.047 82.688h20.672V62.016h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M388.047 20.672h20.672V0h-20.672v20.672Zm0 31.007h20.672V31.007h-20.672v20.672Zm366.09 155.038h20.671v-20.672h-20.671v20.672Zm0 124.029h20.671v-20.672h-20.671v20.672Zm0-248.058h20.671V62.016h-20.671v20.672Zm0 62.013h20.671v-20.672h-20.671v20.672Zm0 124.03h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M754.137 20.672h20.671V0h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M754.137 175.709h20.671v-20.672h-20.671v20.672Zm0 124.029h20.671v-20.672h-20.671v20.672Zm0-248.059h20.671V31.007h-20.671v20.672Zm0 186.045h20.671v-20.672h-20.671v20.672ZM506.074 454.776h20.672v-20.672h-20.672v20.672Zm0-62.015h20.672v-20.672h-20.672v20.672Zm0-248.06h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M506.074 268.731h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M506.074 516.791h20.672v-20.672h-20.672v20.672Zm0-93.022h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M506.074 175.709h20.672v-20.672h-20.672v20.672Z" fill="#242552" />
            <path
                d="M506.074 299.738h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M506.074 113.694h20.672V93.022h-20.672v20.672Zm0 124.03h20.672v-20.672h-20.672v20.672ZM326.031 82.688h20.672V62.016h-20.672v20.672Zm0-62.016h20.672V0h-20.672v20.672Zm0 31.007h20.672V31.007h-20.672v20.672Zm366.09 155.038h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Zm0-248.058h20.672V62.016h-20.672v20.672Zm0 310.073h20.672v-20.672h-20.672v20.672Zm0-248.06h20.672v-20.672h-20.672v20.672Zm0 124.03h20.672v-20.672h-20.672v20.672Zm0 248.06h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M692.121 20.672h20.672V0h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M692.121 423.769h20.672v-20.672h-20.672v20.672Zm0-248.06h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Zm0-248.059h20.672V31.007h-20.672v20.672Zm0 310.075h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M692.121 113.694h20.672V93.022h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M692.121 237.724h20.672v-20.672h-20.672v20.672Zm-93.023 217.052h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M599.098 206.717h20.671v-20.672h-20.671v20.672Z" fill="#242552" />
            <path
                d="M599.098 330.746h20.671v-20.672h-20.671v20.672Zm0-248.058h20.671V62.016h-20.671v20.672Zm0 310.073h20.671v-20.672h-20.671v20.672Zm0-248.06h20.671v-20.672h-20.671v20.672Zm0 124.03h20.671v-20.672h-20.671v20.672Zm0 248.06h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M599.098 20.672h20.671V0h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M599.098 423.769h20.671v-20.672h-20.671v20.672Zm0-248.06h20.671v-20.672h-20.671v20.672Zm0-124.03h20.671V31.007h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M599.098 113.694h20.671V93.022h-20.671v20.672Z" fill="#242552" />
            <path
                d="M599.098 237.724h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M419.055 82.688h20.671V62.016h-20.671v20.672Zm0 434.103h20.671V496.12h-20.671v20.671Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M419.055 20.672h20.671V0h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M419.055 51.679h20.671V31.007h-20.671V51.68Zm366.086 155.038h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M785.145 330.746h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M785.141 82.688h20.671V62.016h-20.671v20.672Zm0 62.013h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
            />
            <path
                d="M785.145 268.731h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M785.141 20.672h20.671V0h-20.671v20.672Zm0 155.037h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M785.141 51.679h20.671V31.007h-20.671v20.672Zm.004 310.075h20.671v-20.672h-20.671v20.672Zm-.004-248.06h20.671V93.022h-20.671v20.672Zm.004 124.03h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M816.152 330.746h20.672v-20.672h-20.672v20.672Z" fill="#242552" />
            <path
                d="M816.152 82.688h20.672V62.016h-20.672v20.672Zm0 62.013h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M816.152 20.672h20.672V0h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path d="M816.152 175.709h20.672v-20.672h-20.672v20.672Z" fill="#242552" />
            <path
                d="M816.152 51.679h20.672V31.007h-20.672v20.672Zm0 62.015h20.672V93.022h-20.672v20.672Zm0 124.03h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M847.156 454.776h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M847.156 330.746h20.672v-20.672h-20.672v20.672Zm0-248.058h20.672V62.016h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M847.156 392.761h20.672v-20.672h-20.672v20.672Zm0-124.03h20.672v-20.672h-20.672v20.672Zm0 155.038h20.672v-20.672h-20.672v20.672Zm0-248.06h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M847.156 51.679h20.672V31.007h-20.672v20.672Zm0 310.075h20.672v-20.672h-20.672v20.672ZM558.133 671.799h20.672v-20.672h-20.672v20.672Zm0 31.009h20.672v-20.672h-20.672v20.672Zm-186.047 31.006h20.672v-20.672h-20.672v20.672Zm0-496.12h20.672v-20.672h-20.672v20.672Zm0 248.061h20.672v-20.672h-20.672v20.672Zm0 186.044h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M372.086 175.68h20.672v-20.672h-20.672v20.672Z" fill="#242552" />
            <path
                d="M372.086 423.74h20.672v-20.671h-20.672v20.671Zm0-124.03h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M372.086 702.808h20.672v-20.672h-20.672v20.672Z" fill="#242552" />
            <path
                d="M372.086 206.687h20.672v-20.672h-20.672v20.672Zm0 124.031h20.672v-20.672h-20.672v20.672Zm0 62.014h20.672V372.06h-20.672v20.672Zm0 124.031h20.672v-20.672h-20.672v20.672Zm0-248.062h20.672v-20.672h-20.672v20.672Zm372.09 403.098h20.671v-20.672h-20.671v20.672Zm0 31.009h20.671v-20.672h-20.671v20.672Zm-465.114 31.006h20.672v-20.672h-20.672v20.672Zm0-248.059h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M279.062 609.785h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M279.062 671.799h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M279.062 175.68h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M279.062 423.74h20.672v-20.671h-20.672v20.671Zm0 124.03h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M279.062 702.808h20.672v-20.672h-20.672v20.672Z" fill="#242552" />
            <path
                d="M279.062 206.687h20.672v-20.672h-20.672v20.672Zm0 248.06h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Zm0 62.016h20.672V620.12h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M279.062 144.672h20.672V124h-20.672v20.672Z" fill="#242552" />
            <path
                d="M279.062 392.732h20.672V372.06h-20.672v20.672Zm0 124.031h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M651.152 733.814h20.672v-20.671h-20.672v20.671Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path d="M651.152 702.808h20.672v-20.672h-20.672v20.672Z" fill="#242552" />
            <path
                d="M465.109 733.814h20.672v-20.671h-20.672v20.671Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M465.109 671.799h20.672v-20.672h-20.672v20.672Zm0-496.119h20.672v-20.672h-20.672v20.672Zm0 527.128h20.672v-20.672h-20.672v20.672Zm124.028-31.009h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M589.137 702.808h20.671v-20.672h-20.671v20.672Z" fill="#242552" />
            <path
                d="M403.094 237.694h20.671v-20.672h-20.671v20.672Zm0-62.014h20.671v-20.672h-20.671v20.672Zm0 124.03h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M403.094 206.687h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M403.094 330.718h20.671v-20.672h-20.671v20.672Zm0-62.017h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M775.184 733.814h20.671v-20.671h-20.671v20.671Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M775.184 702.808h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M310.07 733.814h20.672v-20.671H310.07v20.671Z" fill="#242552" />
            <path
                d="M310.07 485.755h20.672v-20.672H310.07v20.672Zm0 124.03h20.672v-20.672H310.07v20.672Zm0-248.06h20.672v-20.672H310.07v20.672Zm0 310.074h20.672v-20.672H310.07v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M310.07 175.68h20.672v-20.672H310.07v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M310.07 547.77h20.672v-20.672H310.07v20.672Zm0-248.06h20.672v-20.672H310.07v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M310.07 702.808h20.672v-20.672H310.07v20.672Z" fill="#242552" />
            <path
                d="M310.07 206.687h20.672v-20.672H310.07v20.672Zm0 248.06h20.672v-20.672H310.07v20.672Zm0 124.029h20.672v-20.672H310.07v20.672Zm0-248.058h20.672v-20.672H310.07v20.672Zm0 310.074h20.672V620.12H310.07v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path d="M310.07 144.672h20.672V124H310.07v20.672Z" fill="#242552" />
            <path
                d="M310.07 392.732h20.672V372.06H310.07v20.672Zm0 124.031h20.672v-20.672H310.07v20.672Zm0-248.062h20.672v-20.672H310.07v20.672Zm372.09 403.098h20.672v-20.672H682.16v20.672Zm0 31.009h20.672v-20.672H682.16v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M496.117 733.814h20.672v-20.671h-20.672v20.671Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M496.117 671.799h20.672v-20.672h-20.672v20.672Zm0 31.009h20.672v-20.672h-20.672v20.672Zm124.028-31.009h20.671v-20.672h-20.671v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M620.145 702.808h20.671v-20.672h-20.671v20.672Zm-186.043 31.006h20.671v-20.671h-20.671v20.671Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M434.102 175.68h20.671v-20.672h-20.671v20.672Zm0 527.128h20.671v-20.672h-20.671v20.672Zm-93.024 31.006h20.672v-20.671h-20.672v20.671Zm0-248.059h20.672v-20.672h-20.672v20.672Zm0 186.044h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M341.078 175.68h20.672v-20.672h-20.672v20.672Zm0 248.06h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
            />
            <path
                d="M341.078 547.77h20.672v-20.672h-20.672v20.672Zm0-248.06h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M341.078 702.808h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M341.078 206.687h20.672v-20.672h-20.672v20.672Zm0 248.06h20.672v-20.672h-20.672v20.672Zm0 124.029h20.672v-20.672h-20.672v20.672Zm0-248.058h20.672v-20.672h-20.672v20.672Zm0 310.074h20.672V620.12h-20.672v20.672Zm0-124.029h20.672v-20.672h-20.672v20.672Zm0-248.062h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
            <path
                d="M527.125 733.814h20.672v-20.671h-20.672v20.671Zm0-62.015h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.66}
            />
            <path
                d="M527.125 702.808h20.672v-20.672h-20.672v20.672Z"
                fill="#242552"
                fillOpacity={0.33}
            />
        </svg>
    );

    return (
        <>
            <div className="pb-[80px] pt-[68px] relative overflow-hidden lg:hidden">
                <div aria-hidden="true" className="pointer-events-none bg-[#2b2c57] w-screen h-[920px] -z-[1000] absolute top-0">
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[10rem] lg:start-[39rem] top-10">
                    {background_1}
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[30rem] lg:start-[39rem] top-[42rem]">
                    {background_1}
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[15rem] -top-[6rem]">
                    {background_1}
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[34rem] top-30">
                    {background_1}
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[34rem] top-30">
                    {background_1}
                </div>
                <div className="text-white text-center relative z-10">
                    <h5 className="text-[30px] font-bold mb-[17.39px] leading-[20.407px] px-[32px] mt-0">Did you Know?</h5>
                    <p className="text-[15px] mx-[11.72px] font-normal relative">If you would have Invested just ₹50,000 in these startups what would have been your net worth today?</p>
                    <div className="relative">
                        <Button className="mx-[20px]" title="Explore Startups"></Button>
                    </div>
                </div>
                <div className="bg-white mt-[45px] py-[30px] rounded-[13.488px] border-[#EAE9E8] mx-[20px] relative -z-[999]">
                    <h5 className="text-zinc-700/70 text-[20px] mb-0 mt-0 text-center">If you had invested*</h5>
                    <p className="text-[30px] font-bold text-center mt-[10.79px] mb-0">&#x20B9;{price}L</p>
                    <div className="flex items-center justify-center">
                        <Slider defaultValue={price} min={1} max={5} step={0.5} onChange={onPriceChange} className="w-[85%] mt-[23px]" />
                    </div>
                    <div className="px-[24px]">
                        {Companies.map((company) => (
                            <div key={company.id} className="flex justify-between items-center mt-[42.85px]">
                                <div className="flex items-center gap-x-[14px]">
                                    <div>
                                        <picture>
                                            <img src={company.photo} alt="company_photos" width='40px' height='auto' className="rounded-[7.606px] ring-[0.761px] ring-[#E6E6E6]" />
                                        </picture>
                                    </div>
                                    <div>
                                        <p className="text-[15px] font-medium">{company.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[18px] font-bold">&#x20B9;{company.values} Cr</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:px-[80px] xl:px-[150px] relative overflow-hidden hidden lg:flex items-center justify-between h-[769px]">
                <div aria-hidden="true" className="pointer-events-none bg-[#2b2c57] w-screen h-[769px] -z-[1000] absolute top-0 start-0">
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[10rem] lg:start-[39rem] -top-[0.5rem]">
                    {background_1}
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[30rem] lg:start-[39rem] top-[2rem]">
                    {background_1}
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[15rem] -top-[6rem]">
                    {background_1}
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[34rem] top-30">
                    {background_1}
                </div>
                <div aria-hidden="true" className="pointer-events-none h-[795px] absolute -z-[999] -start-[34rem] top-30">
                    {background_1}
                </div>
                <div className="text-white relative z-10 w-[420px]">
                    <h5 className="text-[46px] font-bold mb-[23px]">Did you Know?</h5>
                    <p className="text-[22px] font-normal leading-[28px] relative mt-[23px]">If you would have Invested just ₹50,000 in these startups what would have been your net worth today?</p>
                    <div className="mt-[16px]">
                        <Button className="" title="Explore Startups"></Button>
                    </div>
                </div>
                <div className="bg-white my-[112px] py-[39px] rounded-[13.488px] border-[#EAE9E8] mx-[20px] relative -z-[999] w-[522px] h-[543px]">
                    <h5 className="text-zinc-700/70 text-[32px] mb-0 mt-0 text-center">If you had invested*</h5>
                    <p className="text-[40px] font-bold text-center mt-[10.79px] mb-0">&#x20B9;{price}L</p>
                    <div className="flex items-center justify-center">
                        <Slider defaultValue={price} min={1} max={5} step={0.5} onChange={onPriceChange} className="w-[85%] mt-[23px]" />
                    </div>
                    <div className="px-[24px]">
                        {Companies.map((company) => (
                            <div key={company.id} className="flex justify-between items-center mt-[35px]">
                                <div className="flex items-center gap-x-[14px]">
                                    <div>
                                        <picture>
                                            <img src={company.photo} alt="company_photos" width='53px' height='auto' className="rounded-[7.606px] ring-[0.761px] ring-[#E6E6E6]" />
                                        </picture>
                                    </div>
                                    <div>
                                        <p className="text-[20px] font-medium">{company.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[24px] font-bold">&#x20B9;{company.values} Cr</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}