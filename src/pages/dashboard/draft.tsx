import React from 'react';
import Greet from './components/_greet';
import {Campaign, QueryParams} from "@/types";
import Plans from "@/dashboard/_plans";
import LiveCampaigns from "@/dashboard/_liveCampaigns";
import Startups from "@/dashboard/_startups";
import KycIndicator from "@/dashboard/_kycIndicator";
import Link from "next/link";
import Image from "next/image"
import {Icons} from "@/icons";
import FrequentlyAsked from "@/components/faq";

const baseUrl = process.env.NEXT_PUBLIC_APP_TEST_URL || ""


const Dashboard = ({campaign}: { campaign: Campaign[] }) => {
  const menu = [
    {
      name: "Tutorials",
      link: '/tutorials'
    }, {
      name: "Frequently asked questions",
      link: '/faq'
    }, {
      name: "About us",
      link: '/about_us'
    }, {
      name: "Terms & Conditions",
      link: '/terms'
    }, {
      name: "Privacy Policy",
      link: '/policy'
    },
  ]
  return (
    <div className='pt-20 pb-3 ml-2 grid grid-cols-12'>
      <div className='mt-5 col-start-1 col-end-12 md:col-start-2 md:col-end-11'>
        <Greet/>
      </div>
      <div className='col-start-1 col-end-12 md:col-start-2 md:col-end-9 gap-7 grid'>
        <LiveCampaigns data={campaign}/>
        <Plans/>
        <Startups data={campaign}/>
      </div>
      <div className={'col-start-2 md:col-start-9 col-end-12 pl-12'}>
        <KycIndicator/>
        <div
          className={"grid md:text-left text-center  md:items-left items-center justify-center md:justify-left border_gray p-3 gap-2  rounded-xl my-4 shadow"}>
          <Image
            src={'/person_with_money.png'}
            width={250}
            height={200}
            alt={"Person Viewing  a paper"}
            className={"w-full rounded"}
          />
          <div className="px-4 grid gap-2">
            <h5 className="text-lg font-bold !p-0 !m-0">Master Startup Investments</h5>
            <p className={'text-typography-gray-400 text-md !p-0 !m-0'}>
              Learn more about our platform offering
            </p>
            <Link href={'/learn-more'} className={"text-primary font-bold text-sm py-4"}>
              Learn more {'>'}
            </Link>
          </div>
        </div>
        <div
          className="grid md:text-left text-center justify-center items-center border_gray gap-2  rounded-xl my-4 shadow">
          <div className={"flex"}>
            <div className="grow"></div>
            <Image
              src={"https://s3-alpha-sig.figma.com/img/66d5/70b3/9c6441c0a05bd78920817a27b7be7b9a?Expires=1697414400&Signature=MvGmZvjITHtgGcD4TDlGKg2t8XRtDUO~M4I5oUw-aeXWrGQZgW5zfuoZXTWDyFisr3fiSREALs~dMSOQJXPBovZAIGYle~klbeybWxsM~k1ya0AgSZfYE24dSZRi7UU4h6LtSooaQgKir6KLBXNNfcXald8r72spJWdtlyPuANnhTxmgTRvZL0aXAP--ktPh-OOmbSbG4giOdCpp8p-AIK-dTjhq8PrvOEK353QRasfDowi282D6zWqoJUSSY1xIiYq2lPeitSYrYgHklLOp0ga9SEtbdErAel~H3FnxpegsBqS5F0XIm71brrArQCs7ncVitlgeUIV14-pN1Fg1Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
              alt={"Person in a rocket"}
              height={140}
              width={130}
              className={"py-5"}
            />
            <div className="grow"></div>
          </div>
          <div className={"grid justify-center divide-y divide-solid divide-x-0 divide-gray-300"}>
            <div className="text-center">
              <h5 className="text-lg font-bold !p-0 !m-0">Become an Accelerator</h5>
              <p className={'text-typography-gray-400 text-md p-0 !m-0  py-2 pb-4'}>
                Join our accelerator program and fuel your entrepreneurial journey
              </p>
            </div>
            <Link href={'/learn-more'} className={"text-primary text-center  text-base py-4"}>
              Join now
            </Link>
          </div>
        </div>
        <div
          className="grid md:text-left text-center justify-center items-center border_gray gap-2  rounded-xl my-4 shadow">
          <div className={"flex"}>
            <div className="grow"></div>
            <Image
              src={"https://s3-alpha-sig.figma.com/img/f943/214a/ec369e780b01be6be2acede7a288dfbe?Expires=1697414400&Signature=j-h12vBLij7tbTPNF2cFx5tRrSMUGY0DIpHZHMiGc99-WIZTps6X3r9r5h5QzJ4bL0to7g3qnZ6bB0HSIx8hJrvn8QP6jRfCXRNF9vHQcfemAHL73X1DHX8-VpIOgJ6z8NS8OpBTnvgQNYp0Ps0kBi54pRUrw1v7HHFy3y0dxjGincQUvxMVddFw5NyZg8NjhXquKHjxKP8WV784K1Psb-XbM-VxLKTLlgi6hPPXJ9YIInawqTkZ-G9I7w3qVBLfE~dgZvPAQoDkcp5JVQEEGn4UFW75qEExwQRKY0JfZ409Mo5fGJlc8PF079SBtSH228bY3XtzXODnZb542GnZwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
              alt={"Person building money tower"}
              height={140}
              width={180}
              className={"py-5"}
            />
            <div className="grow"></div>
          </div>
          <div className={"grid justify-center py-2 px-3"}>
            <div className="text-center">
              <h5 className="text-lg font-bold !p-0 !m-0">Calculators</h5>
              <p className={'text-typography-gray-400 text-md p-0 !m-0  py-2 pb-4'}>
                Calculate your return on investments(ROI) with Bizdateup
              </p>
            </div>
            <Link href={'/learn-more'}
                  className={"text-primary bg-light-shadow text-center  text-base py-4 w-full rounded-xl"}>
              Get now
            </Link>
          </div>
        </div>
        <div
          className=" py-4 px-4">
          {menu.map((item, index) => (
            <Link href={item.link}
                  key={index}
                  className={"text-black-lighter hover:text-primary font-medium text-center flex  text-base py-2"}>
              {item.name}
              <div className="grow"></div>
              <Icons.ArrowRight height={14} width={14} className={"text-primary-dark"}/>
            </Link>
          ))}
        </div>
      
      </div>
      <div className="col-span-12 mt-4">
        <div className="bg-gray-smoke grid grid-cols-12">
          <div className="grid col-start-3 col-end-11 my-32">
            <h4 className="text-4xl font-bold text-center">Frequently Asked Questions</h4>
            <FrequentlyAsked/>
          </div>
        </div>
      </div>
      
      <div className="col-span-12 my-4">
        <div className="grid grid-cols-12">
          <div className={"grid grid-cols-10 col-start-2 col-end-12 bg-light-shadow px-14 py-8 rounded-xl"}>
            <div className="grid md:col-span-7 gap-4 pr-4">
              <h5 className="text-4xl font-bold">
                Startup Investments at your fingertips
              </h5>
              <p className="!p-0 !m-0 text-xl">
                With Bizdateup you get a Strong Community of Top 1% Investors who live & Breathe Angel Investing! To
                top it up Signing up takes hardly 5 mins of your time. So, Join the Community Now!
              </p>
            </div>
            <div className="col-span-3">
              <Image
                src={"/iphone.png"}
                height={200}
                width={250}
                alt={"IOS"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  // Define your API endpoint URL and query parameters
  const queryParams: QueryParams = {limit: 4}; // Define your query parameters here
  
  try {
    const url = new URL(`${baseUrl}/startupsInvestorView`);
    Object.keys(queryParams).forEach((key) =>
      url.searchParams.append(
        key,
        queryParams[key as keyof QueryParams].toString()
      )
    );
    const response = await fetch(url.toString(), {
      method: 'GET',
    });
    if (response.ok) {
      // If the response is successful, parse the JSON data
      const {data} = await response.json();
      console.log(data);
      return {
        props: {campaign: data?.data}, // Pass the data as a prop to the component
      };
    } else {
      // Handle error cases here
      console.error('Failed to fetch data');
      return {
        props: {campaign: null},
      };
    }
  } catch (error) {
    // Handle any network or other errors here
    console.error('An error occurred:', error);
    return {
      props: {campaign: null},
    };
  }
}
