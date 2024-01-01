'use client'
import { cn } from '@/lib/utils';
import { DownOutlined } from '@ant-design/icons';
import { Collapse, CollapseProps, theme } from "antd";
import type { CSSProperties } from 'react';

const spanstytle = 'text-[16px] lg:text-[21px] font-medium tracking-[0.15px] lg:tracking-[0.216px] leading-[19.486px] lg:leading-[28px] lg:font-bold'

const pstyle = 'mt-0 lg:text-[18px] text-[13px] font-medium'

const items: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: '16',
        label: <span className={cn(spanstytle)}>Who can be an investor on Bizdateup?</span>,
        children: <p className={cn(pstyle)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius recusandae tenetur, sunt, veniam quo dolor quasi error qui ex obcaecati dolore dicta aliquam vero ipsa quam, laborum ducimus non!</p>,
    },
    {
        key: '17',
        label: <span className={cn(spanstytle)}>What&apos;s the minimum amount of investment one can start with on Bizdateup?</span>,
        children: <p className={cn(pstyle)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius recusandae tenetur, sunt, veniam quo dolor quasi error qui ex obcaecati dolore dicta aliquam vero ipsa quam, laborum ducimus non!</p>,
    },
    {
        key: '18',
        label: <span className={cn(spanstytle)}>How does the entire process of Startup investing work on Bizdateup?</span>,
        children: <p className={cn(pstyle)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius recusandae tenetur, sunt, veniam quo dolor quasi error qui ex obcaecati dolore dicta aliquam vero ipsa quam, laborum ducimus non!</p>,
    },
    {
        key: '19',
        label: <span className={cn(spanstytle)}>How much does Bizdateup charge for each investment you make through the platform?</span>,
        children: <p className={cn(pstyle)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius recusandae tenetur, sunt, veniam quo dolor quasi error qui ex obcaecati dolore dicta aliquam vero ipsa quam, laborum ducimus non!</p>,
    },
];

export default function FAQs() {

    const { token } = theme.useToken();

    const onFAQChange = (key: string | string[]) => {
        console.log(key);
    };

    const panelStyle: React.CSSProperties = {
        borderBottom: '1px solid black',
        backgroundColor: 'red'
    };

    return (
        <>
            <div className="md:mx-16 lg:mx-[150px] xl:mx-[230px] px-[18px] mt-[78px] lg:mt-[139px]">
                <h6 className="text-[30px] lg:text-[46px] font-bold leading-[36px] lg:leading-[64px] text-center mb-[39px] lg:mb-[50px]">Frequently Asked Questions</h6>
                <Collapse items={items(panelStyle)} ghost onChange={onFAQChange} expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} style={{ background: token.colorBgContainer }} />} expandIconPosition="end" accordion />
            </div>
        </>
    )
}