import { Campaign } from '@/types'
import React from 'react'
import type { CollapseProps } from 'antd'

const campaignData: Campaign[] = [
  {
    _id: '64e7597f1bfed4f57265sa3a3d',
    registeredCompanyName: 'PASSENGER DRONE RESEARCH PRIVATE LIMITED',
    shortDescription:
      "PDRL's AeroMegh is a SaaS platform that transforms drone data into\n" +
      'actionable insights, providing end-to-end solutions for drone flight,\n' +
      'data processing, and analysis, ultimately saving time and resources.',
    banner: 'https://example.com/banner1.jpg',
    logo: 'https://example.com/logo1.png',
    tags: ['Technology', 'Drones', 'SaaS'],
    dealTerms: {
      typeOfSecurity: 'Equity',
      valuation: 10000000, // Replace with the actual valuation value
      minimumInvestment: 5000, // Replace with the actual minimum investment value
      targetAmount: 1000000, // Replace with the actual target amount value
      // Add other deal terms properties as needed
    },
    totalRaised: 750000, // Replace with the actual total raised value
  },
  {
    _id: '64e7597f1bfeds4f572653a3e',
    registeredCompanyName: 'Tech Innovators Inc.',
    shortDescription:
      'Tech Innovators Inc. specializes in cutting-edge technology solutions\n' +
      'for businesses, offering a wide range of innovative products and services.',
    banner: 'https://example.com/banner2.jpg',
    logo: 'https://example.com/logo2.png',
    tags: ['Technology', 'Innovation', 'Services'],
    dealTerms: {
      typeOfSecurity: 'Equity',
      valuation: 8000000, // Replace with the actual valuation value
      minimumInvestment: 2500, // Replace with the actual minimum investment value
      targetAmount: 500000, // Replace with the actual target amount value
      // Add other deal terms properties as needed
    },
    totalRaised: 400000, // Replace with the actual total raised value
  },
  {
    _id: '64e7597f1bfed4fas57265s3a3f',
    registeredCompanyName: 'Green Energy Solutions Ltd.',
    shortDescription:
      'Green Energy Solutions Ltd. is dedicated to sustainable energy\n' +
      'solutions, offering environmentally friendly products and services for a\n' +
      'cleaner and greener future.',
    banner: 'https://example.com/banner3.jpg',
    logo: 'https://example.com/logo3.png',
    tags: ['Green Energy', 'Sustainability', 'Renewable Energy'],
    dealTerms: {
      typeOfSecurity: 'Equity',
      valuation: 12000000, // Replace with the actual valuation value
      minimumInvestment: 3000, // Replace with the actual minimum investment value
      targetAmount: 800000, // Replace with the actual target amount value
      // Add other deal terms properties as needed
    },
    totalRaised: 600000, // Replace with the actual total raised value
  },
  {
    _id: '64e7597f1bfed4f5as72653a3f',
    registeredCompanyName: 'Green Energy Solutions Ltd.',
    shortDescription:
      'Green Energy Solutions Ltd. is dedicated to sustainable energy\n' +
      'solutions, offering environmentally friendly products and services for a\n' +
      'cleaner and greener future.',
    banner: 'https://example.com/banner3.jpg',
    logo: 'https://example.com/logo3.png',
    tags: ['Green Energy', 'Sustainability', 'Renewable Energy'],
    dealTerms: {
      typeOfSecurity: 'Equity',
      valuation: 12000000, // Replace with the actual valuation value
      minimumInvestment: 3000, // Replace with the actual minimum investment value
      targetAmount: 800000, // Replace with the actual target amount value
      // Add other deal terms properties as needed
    },
    totalRaised: 600000, // Replace with the actual total raised value
  },
  {
    _id: '64e7597f1bfed4fas572653a3f',
    registeredCompanyName: 'Green Energy Solutions Ltd.',
    shortDescription:
      'Green Energy Solutions Ltd. is dedicated to sustainable energy\n' +
      'solutions, offering environmentally friendly products and services for a\n' +
      'cleaner and greener future.',
    banner: 'https://example.com/banner3.jpg',
    logo: 'https://example.com/logo3.png',
    tags: ['Green Energy', 'Sustainability', 'Renewable Energy'],
    dealTerms: {
      typeOfSecurity: 'Equity',
      valuation: 12000000, // Replace with the actual valuation value
      minimumInvestment: 3000, // Replace with the actual minimum investment value
      targetAmount: 800000, // Replace with the actual target amount value
      // Add other deal terms properties as needed
    },
    totalRaised: 600000, // Replace with the actual total raised value
  },
  {
    _id: '64e7597f1bfed4asf572653a3f',
    registeredCompanyName: 'Green Energy Solutions Ltd.',
    shortDescription:
      'Green Energy Solutions Ltd. is dedicated to sustainable energy\n' +
      'solutions, offering environmentally friendly products and services for a\n' +
      'cleaner and greener future.',
    banner: 'https://example.com/banner3.jpg',
    logo: 'https://example.com/logo3.webp',
    tags: ['Green Energy', 'Sustainability', 'Renewable Energy'],
    dealTerms: {
      typeOfSecurity: 'Equity',
      valuation: 12000000, // Replace with the actual valuation value
      minimumInvestment: 3000, // Replace with the actual minimum investment value
      targetAmount: 800000, // Replace with the actual target amount value
      // Add other deal terms properties as needed
    },
    totalRaised: 600000, // Replace with the actual total raised value
  },
  {
    _id: '64e7597f1bfed4f57as2653a3d',
    registeredCompanyName: 'PASSENGER DRONE RESEARCH PRIVATE LIMITED',
    shortDescription:
      "PDRL's AeroMegh is a SaaS platform that transforms drone data into\n" +
      'actionable insights, providing end-to-end solutions for drone flight,\n' +
      'data processing, and analysis, ultimately saving time and resources.',
    banner: 'https://example.com/banner1.jpg',
    logo: 'https://example.com/logo1.webp',
    tags: ['Technology', 'Drones', 'SaaS'],
    dealTerms: {
      typeOfSecurity: 'Equity',
      valuation: 10000000, // Replace with the actual valuation value
      minimumInvestment: 5000, // Replace with the actual minimum investment value
      targetAmount: 1000000, // Replace with the actual target amount value
      // Add other deal terms properties as needed
    },
    totalRaised: 750000, // Replace with the actual total raised value
  },
  // Add more Campaign objects as needed
]
const faqData: CollapseProps['items'] = [
  {
    key: '1',
    label: 'What is Bizdateup?',
    children: (
      <p className="children-text">
        Bizdateup is a platform for early-stage startup investments that
        connects investors with promising startups.
      </p>
    ),
  },
  {
    key: '2',
    label: 'How does Bizdateup work?',
    children: (
      <p className="children-text">
        Bizdateup offers a variety of investment options such as convertible
        notes, equity, and revenue sharing to investors. Investors can browse
        through the listed startups and invest in the one that aligns with their
        investment goals.
      </p>
    ),
  },
  {
    key: '3',
    label: 'How do I invest on Bizdateup?',
    children: (
      <p className="children-text">
        To invest on Bizdateup, you need to create an account, complete the KYC
        process, and select a startup to invest in. You can then choose your
        investment option and the amount you want to invest.
      </p>
    ),
  },
  {
    key: '4',
    label: 'What is KYC?',
    children: (
      <p className="children-text">
        KYC stands for Know Your Customer, a process through which we verify the
        identity of our investors to ensure the security of our platform.
      </p>
    ),
  },
  {
    key: '5',
    label: 'What are the different investment options available on Bizdateup?',
    children: (
      <p className="children-text">
        The different investment options available on Bizdateup include
        convertible notes, equity, and revenue sharing.
      </p>
    ),
  },
  {
    key: '6',
    label: 'What is a convertible note?',
    children: (
      <p className="children-text">
        A convertible note is a debt instrument that converts into equity in the
        future, usually upon the occurrence of a specified event.
      </p>
    ),
  },
  {
    key: '7',
    label: 'What is equity?',
    children: (
      <p className="children-text">
        Equity represents ownership in a company. When you invest in a startup
        through equity, you own a percentage of the company and its assets.
      </p>
    ),
  },
  {
    key: '8',
    label: 'What is revenue sharing?',
    children: (
      <p className="children-text">
        Revenue sharing is a type of investment in which investors receive a
        percentage of the company&apos;s revenue instead of ownership in the
        company.
      </p>
    ),
  },
  {
    key: '9',
    label: 'What is the minimum investment amount on Bizdateup?',
    children: (
      <p className="children-text">
        The minimum investment amount on Bizdateup varies depending on the
        startup and the investment option chosen. However, the minimum amount is
        usually Rs 1,00,000.
      </p>
    ),
  },
  {
    key: '10',
    label: 'How do I track my investments on Bizdateup?',
    children: (
      <p className="children-text">
        You can track your investments on Bizdateup by logging into your account
        and checking your investment portfolio.
      </p>
    ),
  },
  {
    key: '11',
    label: 'When do I receive returns on my investment?',
    children: (
      <p className="children-text">
        The returns on your investment depend on the investment option chosen
        and the startup&apos;s performance. Usually, returns are realized when
        the startup is sold, goes public, or distributes dividends.
      </p>
    ),
  },
  {
    key: '12',
    label: 'Is my investment on Bizdateup guaranteed?',
    children: (
      <p className="children-text">
        No, investing in startups is a high-risk investment. While Bizdateup
        performs due diligence on the listed startups, there is still a chance
        that you may lose your investment.
      </p>
    ),
  },
  {
    key: '13',
    label: 'How does Bizdateup select the startups listed on the platform?',
    children: (
      <p className="children-text">
        Bizdateup selects startups that have a strong team, a clear business
        model, and the potential for growth. Startups go through a thorough
        vetting process before being listed on the platform.
      </p>
    ),
  },
  {
    key: '14',
    label: 'What fees does Bizdateup charge?',
    children: (
      <p className="children-text">
        Bizdateup charges a convenience fee of 2% on successful investments made
        through the platform. The commission is fixed on the investment option
        chosen.
      </p>
    ),
  },
  {
    key: '15',
    label: 'What happens if a startup fails?',
    children: (
      <p className="children-text">
        If a startup fails, the investors may lose their investment. However,
        Bizdateup works with the startups to ensure that they have a plan in
        place in case of failure.
      </p>
    ),
  },
  {
    key: '16',
    label: 'How long do startups stay listed on Bizdateup?',
    children: (
      <p className="children-text">
        Startups stay listed on Bizdateup until they reach their funding goals
        or decide to delist from the platform.
      </p>
    ),
  },
  {
    key: '17',
    label: 'How often are new startups listed on Bizdateup?',
    children: (
      <p className="children-text">
        New startups are listed on Bizdateup on a regular basis, depending on
        the availability of startups that meet our selection criteria.
      </p>
    ),
  },
  {
    key: '18',
    label: 'How can I contact Bizdateup if I have questions or concerns?',
    children: (
      <p className="children-text">
        You can contact Bizdateup through our website&apos;s contact page or
        email us at support@bizdateup.com.
      </p>
    ),
  },
  {
    key: '19',
    label: 'What is the minimum age to invest on Bizdateup?',
    children: (
      <p className="children-text">
        The minimum age to invest on Bizdateup is 18 years old.
      </p>
    ),
  },
  {
    key: '20',
    label: 'Can I invest from any country?',
    children: (
      <p className="children-text">
        Investors from most countries are welcome on Bizdateup, subject to their
        local laws and regulations.
      </p>
    ),
  },
  {
    key: '21',
    label:
      'How long does it take for my investment to reflect in my portfolio?',
    children: (
      <p className="children-text">
        Your investment usually reflects in your portfolio within 24 hours after
        payment has been processed.
      </p>
    ),
  },
  {
    key: '22',
    label: 'Can I cancel my investment?',
    children: (
      <p className="children-text">
        You can only cancel your investment within 24 hours of making the
        investment. After that, your investment is locked in until the startup
        either returns your investment or reaches its funding goal.
      </p>
    ),
  },
  {
    key: '23',
    label: 'How can I withdraw my investment?',
    children: (
      <p className="children-text">
        You can only withdraw your investment if the startup has failed to meet
        its funding goal within the specified time frame. In such cases, your
        investment will be refunded to your account.
      </p>
    ),
  },
  {
    key: '24',
    label: 'How can I get updates on the startups I have invested in?',
    children: (
      <p className="children-text">
        You will receive regular updates on the startups you have invested in
        through your investment portfolio.
      </p>
    ),
  },
  {
    key: '25',
    label: 'What happens if a startup raises more than its funding goal?',
    children: (
      <p className="children-text">
        If a startup raises more than its funding goal, the additional funds
        will be used to further develop the business.
      </p>
    ),
  },
  {
    key: '26',
    label: 'Can I invest in multiple startups?',
    children: (
      <p className="children-text">
        Yes, you can invest in multiple startups on Bizdateup.
      </p>
    ),
  },
  {
    key: '27',
    label:
      'How does Bizdateup ensure the security of my personal and financial information?',
    children: (
      <p className="children-text">
        Bizdateup takes the security of our investor&apos;s personal and
        financial information very seriously. We use industry-standard security
        measures to protect our platform and your information.
      </p>
    ),
  },
  {
    key: '28',
    label: 'Can I sell my investment?',
    children: (
      <p className="children-text">
        Currently, You cannot sell your investment on Bizdateup. However, you
        can transfer your investment to another investor if both parties agree
        and notify Bizdateup.
      </p>
    ),
  },
]

const sectorOptions = [
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Fintech', label: 'Fintech' },
  { value: 'Ecommerce', label: 'Ecommerce' },
  {
    value: 'Artificial intelligence ',
    label: 'Artificial intelligence ',
  },
  { value: 'Educational technology', label: 'Educational technology' },
  { value: 'Logistics', label: 'Logistics' },
  { value: 'Financial services', label: 'Financial services' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Health technology ', label: 'Health technology ' },
  {
    value: 'Education Entertainment ',
    label: 'Education Entertainment ',
  },
  { value: 'Tourism', label: 'Tourism' },
  { value: 'Cloud computing ', label: 'Cloud computing ' },
  { value: 'Big data ', label: 'Big data ' },
  { value: 'Aerospace', label: 'Aerospace' },
  { value: 'Virtual reality', label: 'Virtual reality' },
]

const occupationValues = [
  { value: 'Self-employed', label: 'Self-employed' },
  { value: 'Business', label: 'Business' },
  { value: 'Employee', label: 'Employee' },
  { value: 'Unemployed', label: 'Unemployed' },
  { value: 'Retired', label: 'Retired' },
  { value: 'NRI', label: 'NRI' },
]

const data = { campaignData, faqData, sectorOptions, occupationValues }
export default data
