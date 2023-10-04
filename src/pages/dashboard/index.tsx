import React from 'react';
import {Campaign, QueryParams} from "@/types";
import Greet from "@/dashboard/_greet";
import LiveCampaigns from "@/dashboard/_liveCampaigns";
import Plans from "@/dashboard/_plans";
import Startups from "@/dashboard/_startups";

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
    <div className='pt-20 pb-3 ml-2 grid grid-cols-12 px-5'>
      <div className='md:mt-5 col-start-1 col-end-12 md:col-start-2 md:col-end-11'>
        <Greet/>
      </div>
      <div className='col-span-full md:col-start-2 md:col-end-9 gap-7 grid'>
        <LiveCampaigns data={campaign}/>
        <Plans/>
        <Startups data={campaign}/>
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
