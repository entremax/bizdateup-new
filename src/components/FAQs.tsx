'use client'

import { Collapse, CollapseProps } from "antd";

const items: CollapseProps['items'] = [
    {
        key: '16',
        label: 'Who can be an investor on Bizdateup?',
        children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius recusandae tenetur, sunt, veniam quo dolor quasi error qui ex obcaecati dolore dicta aliquam vero ipsa quam, laborum ducimus non!</p>,
    },
    {
        key: '17',
        label: "What's the minimum amount of investment one can start with on Bizdateup?",
        children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius recusandae tenetur, sunt, veniam quo dolor quasi error qui ex obcaecati dolore dicta aliquam vero ipsa quam, laborum ducimus non!</p>,
    },
    {
        key: '18',
        label: 'How does the entire process of Startup investing work on Bizdateup?',
        children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius recusandae tenetur, sunt, veniam quo dolor quasi error qui ex obcaecati dolore dicta aliquam vero ipsa quam, laborum ducimus non!</p>,
    },
    {
        key: '19',
        label: 'How much does Bizdateup charge for each investment you make through the platform?',
        children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius recusandae tenetur, sunt, veniam quo dolor quasi error qui ex obcaecati dolore dicta aliquam vero ipsa quam, laborum ducimus non!</p>,
    },
];

export default function FAQs() {

    const onFAQChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <>
            <div className="md:mx-16 xl:mx-52 mx-2 px-6 mt-32">
                <h6 className="text-3xl text-center">Frequently Asked Questions</h6>
                <Collapse items={items} onChange={onFAQChange} />
            </div>
        </>
    )
}