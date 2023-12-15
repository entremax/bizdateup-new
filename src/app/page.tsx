'use client'

import { Button } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Slider, Switch } from 'antd';
import { Carousel } from 'antd';
import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';
import Link from "next/link";

const Stats = [
  {
    id: 1,
    title: '12+',
    desc: 'Startups Funded'
  },
  {
    id: 2,
    title: '4000+',
    desc: 'Strong Community'
  },
  {
    id: 3,
    title: '500+',
    desc: 'Active Investors'
  },
  {
    id: 4,
    title: '10CR+',
    desc: 'Total Funding'
  },
]

const Reasons = [
  {
    id: 5,
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
      <g clipPath="url(#clip0_301_16439)">
        <path d="M20.2266 11.7768H26.7788L23.5027 7.40869L20.2266 11.7768ZM20.2266 16.145H26.7788L23.5027 20.5131L20.2266 16.145Z" fill="#8686F5" fillOpacity="0.47" />
        <path d="M1.66235 0.856445H8.21455V27.0653H1.66235C1.37272 27.0653 1.09496 26.9502 0.890161 26.7454C0.685365 26.5406 0.570312 26.2629 0.570312 25.9732V1.94848C0.570312 1.65885 0.685365 1.38109 0.890161 1.17629C1.09496 0.971498 1.37272 0.856445 1.66235 0.856445Z" fill="#8686F5" />
        <path d="M10.3984 0.856445H16.9506C17.2403 0.856445 17.518 0.971498 17.7228 1.17629C17.9276 1.38109 18.0427 1.65885 18.0427 1.94848V25.9732C18.0427 26.2629 17.9276 26.5406 17.7228 26.7454C17.518 26.9502 17.2403 27.0653 16.9506 27.0653H10.3984V0.856445Z" fill="#8686F5" />
      </g>
      <defs>
        <clipPath id="clip0_301_16439">
          <rect width="26.2088" height="26.2088" fill="white" transform="translate(0.570312 0.856445)" />
        </clipPath>
      </defs>
    </svg>),
    title: 'Exceptional Return on Investment (ROI)',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 6,
    icon: (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <path id="Vector" d="M4.33203 0.333496H29.6654L25.6654 8.3335H0.332031L4.33203 0.333496Z" fill="#8686F5" />
        <path id="Vector_2" d="M4.33203 11H29.6654L25.6654 19H0.332031L4.33203 11Z" fill="#DBDBFC" />
        <path id="Vector_3" d="M4.33203 21.667H29.6654L25.6654 29.667H0.332031L4.33203 21.667Z" fill="#8686F5" />
      </g>
    </svg>),
    title: 'Portfolio Enhancement and Profitability',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 7,
    icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <path id="Vector" d="M15.2064 0.175931L0.779694 6.91593C0.682133 6.96067 0.599485 7.0325 0.541588 7.12288C0.483691 7.21325 0.452985 7.31836 0.453125 7.42569C0.453266 7.53302 0.484246 7.63805 0.542379 7.72827C0.600513 7.8185 0.683349 7.89011 0.781027 7.9346L15.321 14.6253C15.7504 14.8226 16.2464 14.8226 16.6757 14.6253L31.2157 7.9346C31.3134 7.89024 31.3964 7.81873 31.4546 7.72859C31.5129 7.63844 31.544 7.53345 31.5443 7.42612C31.5445 7.31879 31.514 7.21364 31.4562 7.12319C31.3984 7.03274 31.3159 6.9608 31.2184 6.91593L16.7904 0.175931C16.5424 0.0600563 16.2721 0 15.9984 0C15.7247 0 15.4543 0.0600563 15.2064 0.175931Z" fill="#8686F5" />
        <path id="Vector_2" opacity="0.64" d="M31.219 15.5679L28.239 14.1759C28.0256 14.0761 27.793 14.0241 27.5575 14.0234C27.3219 14.0228 27.089 14.0734 26.875 14.1719L16.6764 18.8652C16.4639 18.9629 16.2329 19.0135 15.999 19.0135C15.7652 19.0135 15.5341 18.9629 15.3217 18.8652L5.1217 14.1719C4.90788 14.0736 4.67524 14.0231 4.43992 14.0237C4.20461 14.0244 3.97227 14.0763 3.75903 14.1759L0.779029 15.5679C0.681526 15.6127 0.598972 15.6847 0.541193 15.7751C0.483414 15.8656 0.452846 15.9707 0.453127 16.0781C0.453408 16.1854 0.484525 16.2904 0.542777 16.3805C0.601029 16.4707 0.683961 16.5422 0.781697 16.5865L15.3217 23.2759C15.534 23.3741 15.7651 23.4249 15.999 23.4249C16.2329 23.4249 16.4641 23.3741 16.6764 23.2759L31.2164 16.5865C31.3141 16.5422 31.397 16.4707 31.4553 16.3805C31.5135 16.2904 31.5447 16.1854 31.5449 16.0781C31.5452 15.9707 31.5146 15.8656 31.4569 15.7751C31.3991 15.6847 31.3165 15.6127 31.219 15.5679Z" fill="#8686F5" fillOpacity="0.47" />
        <path id="Vector_3" d="M31.2176 24.1441L28.2376 22.7521C28.0242 22.6524 27.7916 22.6004 27.556 22.5997C27.3205 22.599 27.0876 22.6496 26.8736 22.7481L16.6749 27.4401C16.4625 27.5378 16.2314 27.5883 15.9976 27.5883C15.7638 27.5883 15.5327 27.5378 15.3202 27.4401L5.12024 22.7468C4.90643 22.6485 4.67378 22.5979 4.43847 22.5986C4.20316 22.5993 3.97081 22.6512 3.75758 22.7507L0.777577 24.1441C0.68045 24.1891 0.598267 24.261 0.540763 24.3513C0.48326 24.4416 0.452846 24.5465 0.453127 24.6536C0.453408 24.7607 0.484371 24.8654 0.542348 24.9554C0.600324 25.0454 0.682883 25.1169 0.780245 25.1614L15.3202 31.8521C15.7496 32.0494 16.2456 32.0494 16.6749 31.8521L31.2149 25.1614C31.3123 25.1169 31.3948 25.0454 31.4528 24.9554C31.5108 24.8654 31.5417 24.7607 31.542 24.6536C31.5423 24.5465 31.5119 24.4416 31.4544 24.3513C31.3969 24.261 31.3147 24.1891 31.2176 24.1441Z" fill="#8686F5" />
      </g>
    </svg>),
    title: 'Early Investment Means More Money',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 8,
    icon: (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <path id="Vector" d="M29.6654 7.00016V1.66683C29.6654 1.31321 29.5249 0.974068 29.2748 0.724019C29.0248 0.473971 28.6857 0.333496 28.332 0.333496H1.66536C1.31174 0.333496 0.972603 0.473971 0.722555 0.724019C0.472506 0.974068 0.332031 1.31321 0.332031 1.66683V7.00016H29.6654Z" fill="#8686F5" />
        <path id="Vector_2" d="M0.332031 9.66699V28.3337C0.332031 28.6873 0.472506 29.0264 0.722555 29.2765C0.972603 29.5265 1.31174 29.667 1.66536 29.667H8.33203V9.66699H0.332031Z" fill="#8686F5" fillOpacity="0.47" />
        <path id="Vector_3" d="M11 29.667H28.3333C28.687 29.667 29.0261 29.5265 29.2761 29.2765C29.5262 29.0264 29.6667 28.6873 29.6667 28.3337V9.66699H11V29.667Z" fill="#8686F5" />
      </g>
    </svg>
    ),
    title: 'Impact Investment - Change World',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
]

const ReasontoInvest = [
  {
    id: 9,
    icon: (<svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <path id="Vector" d="M28.5 36H15C14.6022 36 14.2206 35.842 13.9393 35.5607C13.658 35.2794 13.5 34.8978 13.5 34.5V31.5C13.5 31.1022 13.658 30.7206 13.9393 30.4393C14.2206 30.158 14.6022 30 15 30H28.5C28.8978 30 29.2794 30.158 29.5607 30.4393C29.842 30.7206 30 31.1022 30 31.5V34.5C30 34.8978 29.842 35.2794 29.5607 35.5607C29.2794 35.842 28.8978 36 28.5 36Z" fill="#B3B3F9" />
        <path id="Vector_2" d="M28.5 0H1.5C1.10218 0 0.720643 0.158034 0.439339 0.439339C0.158034 0.720643 0 1.10218 0 1.5V4.5C0 4.89782 0.158034 5.27936 0.439339 5.56066C0.720643 5.84197 1.10218 6 1.5 6H28.5C28.8978 6 29.2794 5.84197 29.5607 5.56066C29.842 5.27936 30 4.89782 30 4.5V1.5C30 1.10218 29.842 0.720643 29.5607 0.439339C29.2794 0.158034 28.8978 0 28.5 0Z" fill="#B3B3F9" />
        <path id="Vector_3" d="M28.5 9H1.5C1.10218 9 0.720643 9.15803 0.439339 9.43934C0.158034 9.72064 0 10.1022 0 10.5V25.5C0 25.8978 0.158034 26.2794 0.439339 26.5607C0.720643 26.842 1.10218 27 1.5 27H28.5C28.8978 27 29.2794 26.842 29.5607 26.5607C29.842 26.2794 30 25.8978 30 25.5V10.5C30 10.1022 29.842 9.72064 29.5607 9.43934C29.2794 9.15803 28.8978 9 28.5 9Z" fill="#8686F5" />
      </g>
    </svg>
    ),
    title: 'Start with just ₹50,000',
    desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
  },
  {
    id: 10,
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M13.5 15H3C2.60218 15 2.22064 14.842 1.93934 14.5607C1.65803 14.2794 1.5 13.8978 1.5 13.5V3C1.5 2.60218 1.65803 2.22064 1.93934 1.93934C2.22064 1.65803 2.60218 1.5 3 1.5H13.5C13.8978 1.5 14.2794 1.65803 14.5607 1.93934C14.842 2.22064 15 2.60218 15 3V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15Z" fill="#8686F5" />
      <path d="M13.5 34.5H3C2.60218 34.5 2.22064 34.342 1.93934 34.0607C1.65803 33.7794 1.5 33.3978 1.5 33V22.5C1.5 22.1022 1.65803 21.7206 1.93934 21.4393C2.22064 21.158 2.60218 21 3 21H13.5C13.8978 21 14.2794 21.158 14.5607 21.4393C14.842 21.7206 15 22.1022 15 22.5V33C15 33.3978 14.842 33.7794 14.5607 34.0607C14.2794 34.342 13.8978 34.5 13.5 34.5Z" fill="#8686F5" />
      <path d="M19.5 3H34.5V6H19.5V3Z" fill="#B3B3F9" />
      <path d="M34.5 22.5H19.5V25.5H34.5V22.5Z" fill="#B3B3F9" />
      <path d="M34.5 30H19.5V33H34.5V30Z" fill="#8686F5" />
      <path d="M34.5 10.5H19.5V13.5H34.5V10.5Z" fill="#8686F5" />
    </svg>),
    title: 'Easy to use',
    desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
  },
  {
    id: 11,
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M7.5 1.5H3C2.60218 1.5 2.22064 1.65803 1.93934 1.93934C1.65803 2.22064 1.5 2.60218 1.5 3V33C1.5 33.3978 1.65803 33.7794 1.93934 34.0607C2.22064 34.342 2.60218 34.5 3 34.5H7.5V1.5Z" fill="#B3B3F9" />
      <path d="M10.5 34.5H25.5V1.5H10.5V34.5ZM18 28.5C17.6022 28.5 17.2206 28.342 16.9393 28.0607C16.658 27.7794 16.5 27.3978 16.5 27C16.5 26.6022 16.658 26.2206 16.9393 25.9393C17.2206 25.658 17.6022 25.5 18 25.5C18.3978 25.5 18.7794 25.658 19.0607 25.9393C19.342 26.2206 19.5 26.6022 19.5 27C19.5 27.3978 19.342 27.7794 19.0607 28.0607C18.7794 28.342 18.3978 28.5 18 28.5ZM18 7.5C18.3978 7.5 18.7794 7.65803 19.0607 7.93934C19.342 8.22064 19.5 8.60218 19.5 9C19.5 9.39782 19.342 9.77936 19.0607 10.0607C18.7794 10.342 18.3978 10.5 18 10.5C17.6022 10.5 17.2206 10.342 16.9393 10.0607C16.658 9.77936 16.5 9.39782 16.5 9C16.5 8.60218 16.658 8.22064 16.9393 7.93934C17.2206 7.65803 17.6022 7.5 18 7.5ZM18 16.5C18.3978 16.5 18.7794 16.658 19.0607 16.9393C19.342 17.2206 19.5 17.6022 19.5 18C19.5 18.3978 19.342 18.7794 19.0607 19.0607C18.7794 19.342 18.3978 19.5 18 19.5C17.6022 19.5 17.2206 19.342 16.9393 19.0607C16.658 18.7794 16.5 18.3978 16.5 18C16.5 17.6022 16.658 17.2206 16.9393 16.9393C17.2206 16.658 17.6022 16.5 18 16.5Z" fill="#8686F5" />
      <rect x="15" y="15" width="7" height="5" fill="#8686F5" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5368 20C17.3817 20 17.225 19.9416 17.1064 19.8239L15.1785 17.9242C14.9405 17.6896 14.9405 17.3102 15.1785 17.0756C15.4164 16.8411 15.8014 16.8411 16.0393 17.0756L17.5368 18.5502L20.9607 15.1759C21.1986 14.9414 21.5836 14.9414 21.8215 15.1759C22.0595 15.4105 22.0595 15.7899 21.8215 16.0245L17.9673 19.8239C17.8487 19.9416 17.6928 20 17.5368 20Z" fill="white" />
      <path d="M33 1.5H28.5V34.5H33C33.3978 34.5 33.7794 34.342 34.0607 34.0607C34.342 33.7794 34.5 33.3978 34.5 33V3C34.5 2.60218 34.342 2.22064 34.0607 1.93934C33.7794 1.65803 33.3978 1.5 33 1.5Z" fill="#B3B3F9" />
    </svg>
    ),
    title: 'Genuine deals',
    desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
  },
  {
    id: 12,
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="38" viewBox="0 0 36 38" fill="none">
      <circle cx="18.7052" cy="9.52941" r="9.52941" fill="#B3B3F9" />
      <path d="M36 20C36 24.7739 34.1036 29.3523 30.7279 32.7279C27.3523 36.1036 22.7739 38 18 38C13.2261 38 8.64773 36.1036 5.27208 32.7279C1.89642 29.3523 7.20839e-07 24.7739 0 20L18 20H36Z" fill="#8686F5" />
    </svg>
    ),
    title: 'Flexibility at its best',
    desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
  },
  {
    id: 13,
    icon: (<svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <path id="Vector" d="M35.4 0.800001C35.1 0.500001 34.5 0.5 34.05 0.5L25.5 3.05V33.2L34.95 30.5C35.55 30.35 36 29.75 36 29V2C36 1.55 35.85 1.1 35.4 0.800001Z" fill="#8686F5" />
        <path id="Vector_2" d="M22.5 3.05005L13.5 0.800049V30.95L22.5 33.2V3.05005Z" fill="#B3B3F9" />
        <path id="Vector_3" d="M10.5 0.800049L1.05 3.50005C0.450001 3.80005 0 4.40005 0 5.00005V32C0 32.45 0.149999 32.9 0.599999 33.2C0.899999 33.35 1.2 33.5 1.5 33.5H1.95L10.5 30.95V0.800049Z" fill="#8686F5" />
      </g>
    </svg>

    ),
    title: 'High growth deals',
    desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
  },
  {
    id: 14,
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="47" height="31" viewBox="0 0 47 31" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M23.1776 0C39.4019 0 46.3551 15.5 46.3551 15.5C46.3551 15.5 39.4019 31 23.1776 31C6.95327 31 0 15.5 0 15.5C0 15.5 6.95327 0 23.1776 0ZM23.1776 8.71875C18.6974 8.71875 15.0654 11.7549 15.0654 15.5C15.0654 19.2451 18.6974 22.2812 23.1776 22.2812C27.6577 22.2812 31.2897 19.2451 31.2897 15.5C31.2897 11.7549 27.6577 8.71875 23.1776 8.71875ZM23.1776 18.4062C21.2606 18.4062 19.7009 17.1025 19.7009 15.5C19.7009 13.8975 21.2606 12.5938 23.1776 12.5938C25.0946 12.5938 26.6542 13.8975 26.6542 15.5C26.6542 17.1025 25.0946 18.4062 23.1776 18.4062Z" fill="#8686F5" />
    </svg>
    ),
    title: 'Transparent & Trustworthy',
    desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
  },
]

const Reviews = [
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

const Links = [
  {
    id: 20,
    title: 'Platform',
    link: {
      a: {
        name: 'Invest',
        href: '/Invest'
      },
      b: {
        name: 'Raise fund',
        href: '/Raisefund'
      },
      c: {
        name: 'Steps to Invest',
        href: '/StepstoInvest'
      },
      d: {
        name: 'How to raise',
        href: '/Howtoraise'
      },
      e: {
        name: 'How to raise',
        href: '/Howtoraise'
      },
      f: {
        name: 'Membership',
        href: '/Membership'
      },
    }
  },
  {
    id: 21,
    title: 'Bizdateup',
    link: {
      a: {
        name: 'About us',
        href: '/Aboutus'
      },
      b: {
        name: 'Contact us',
        href: '/Contactus'
      },
      c: {
        name: 'Learn',
        href: '/Learn'
      },
      d: {
        name: 'FAQs',
        href: '/FAQs'
      },
      e: {
        name: 'Media & Press',
        href: '/MediaPress'
      },
      f: {
        name: 'Careers',
        href: '/Careers'
      },
    }
  },
  {
    id: 22,
    title: 'Quick links',
    link: {
      a: {
        name: 'Calculators',
        href: '/Calculators'
      },
      b: {
        name: 'Blogs',
        href: '/Blogs'
      },
      c: {
        name: 'In News',
        href: '/InNews'
      },
      d: {
        name: 'Upcoming Demos',
        href: '/UpcomingDemos'
      },
      e: {
        name: 'Join Community',
        href: '/JoinCommunity'
      },
      f: {
        name: 'Book One-to-one',
        href: '/BookOne-to-one'
      },
    }
  },
]

export default function Home() {

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

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const onFAQChange = (key: string | string[]) => {
    console.log(key);
  };

  useEffect(() => {
    setUnacademy((parseFloat((price * 1.28).toFixed(1))))
    setRazor((parseFloat((price * 1.12).toFixed(1))))
    setOla((parseFloat((price * 0.496).toFixed(1))))
    setByjus((parseFloat((price * 0.72).toFixed(1))))
  }, [price])

  return (
    <main className='mx-auto'>
      <div className="mt-20 sm:mt-32 md:px-20 flex flex-col-reverse items-center lg:flex-row">
        <div className="px-6">
          <h1 className="text-3xl md:text-5xl text-balance max-w-[786px]">Invest in Top 1% Indian Startups & Become a <span className="text-[#8686F5]">Super Angel!</span>
          </h1>
          <p className="max-w-[554px] text-sm text-balance">We are an Investment platform which enables Investors like you to explore and invest in groundbreaking & Highly-Profitable Indian startup ventures starting at ₹50,000.</p>
          <Button type="primary" className="px-12 mt-4 sm:mt-0 w-[100%] sm:w-min bg-[#8686F5]">Sign up Now</Button>
        </div>
        <div className="hidden sm:block xl:hidden pointer-events-none transform-gpu bg-white">
          <Image
            src='/cheerful_women.png'
            width={500}
            height={400}
            quality={100}
            alt="cheerful-women"
          />
        </div>
        <div className="hidden xl:block pointer-events-none transform-gpu">
          <Image
            src='/cheerful_women.png'
            width={600}
            height={500}
            quality={100}
            alt="cheerful-women"
          />
        </div>
        <div className="sm:hidden pointer-events-none transform-gpu">
          <Image
            src='/cheerful_women.png'
            width={400}
            height={300}
            quality={100}
            alt="cheerful-women"
          />
        </div>
      </div>
      <div className="bg-[#F3F3FA] h-[169px] pb-6 sm:pb-0 mt-8 lg:mt-0 md:px-32 grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-4 text-center md:text-left grid-rows-2">
        {Stats.map((data) => (
          <div key={data.id}>
            <p className="text-[#1D1D1F] text-2xl sm:text-3xl font-bold leading-3 sm:leading-4">{data.title}</p>
            <p className="text-[#9B9BAB] font-semibold">{data.desc}</p>
          </div>
        ))}
      </div>

      <div className="lg:px-32 mt-12 sm:mt-32 flex flex-col lg:flex-row text-center lg:text-left items-center gap-6 lg:gap-16">
        <div className="sm:hidden">
          <Image
            src='/who_are_we.png'
            width={300}
            height={220}
            alt="who_are_we"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src='/who_are_we.png'
            width={600}
            height={400}
            alt="who_are_we"
          />
        </div>
        <div className="px-6">
          <h2 className="text-3xl sm:text-5xl text-balance">Who are we?</h2>
          <p className="text-sm text-balance">Bizdateup is a Startup Investment platform which enables Investors like you to explore and invest in groundbreaking & Highly-Profitable Indian startup ventures starting at ₹50,000.</p>
          <Button type="primary" className="px-12 mt-6 sm:mt-0 w-[100%] sm:w-min bg-[#8686F5]">Get Started</Button>
        </div>
      </div>

      <div className="mt-20 sm:mt-28 md:px-12 px-8 flex flex-col items-center">
        <h3 className="text-3xl sm:text-5xl text-center sm:px-20">Why you should invest in startups now and become an <span className="text-[#8686F5]">Angel Investor.</span> </h3>
        <div className="flex gap-x-2 sm:mt-6 mb-12">
          {Reasons.map((reason) => (
            <div key={reason.id} className="ring-1 ring-slate-400 rounded-xl p-4 m-2 w-[296px] sm:w-fit">
              <div>{reason.icon}</div>
              <p className="text-2xl sm:text-3xl font-bold text-balance">{reason.title}</p>
              <p className="text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
        <Button type="primary" className="px-8 bg-[#8686F5]">Apply now to become an Angel investor</Button>
      </div>

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
              <div key={company.id} className="flex gap-x-16 md:gap-x-20 lg:gap-x-48 justify-between items-center">
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

      <div className="md:px-20 px-8 flex flex-col items-center">
        <h6 className="text-3xl sm:text-5xl text-center lg:px-32">But, Why should you Invest through <span className="text-[#8686F5]">Bizdateup?</span></h6>
        <div className="flex lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-x-2 sm:mt-6 mb-12 overflow-x-auto">
          {ReasontoInvest.map((reason) => (
            <div key={reason.id} className="ring-1 ring-slate-400 rounded-xl p-4 m-2 w-[296px] lg:w-fit">
              <div>{reason.icon}</div>
              <p className="text-xl sm:text-2xl font-bold text-balance">{reason.title}</p>
              <p className="text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
        <Button type="primary" className="px-8 bg-[#8686F5]">Apply now to become an Angel investor</Button>
      </div>

      <div className="flex flex-col items-center lg:px-20 px-8 mt-20 sm:mt-32">
        <div>
          <p className="text-zinc-700/70 text-xl font-semibold text-center">HOW IT WORKS</p>
          <h6 className="text-3xl sm:text-5xl text-center lg:px-32 mt-0 text-balance">Here&apos;s How Your Seamless Investment Journey Looks with us!</h6>
        </div>
        <div className="flex flex-col lg:flex-row lg:justfy-between gap-x-20 items-center justify-center">
          <div className="">
            <Image
              src='/Investment_Process.png'
              height={250}
              width={350}
              alt="Investment Process"
            />
          </div>
          <div className="hidden">
            <Image
              src='/Investment_Process.png'
              height={300}
              width={400}
              alt="Investment Process"
            />
          </div>
          <div className="mt-12 px-2 flex flex-col gap-y-8 max-w-[500px]">
            <div className="flex gap-x-6 items-center">
              <span className="p-4 bg-[#E2E2E2] rounded-md">1</span>
              <span className="text-xl font-semibold">Register with email or social logins</span>
            </div>
            <div className="flex gap-x-6 items-center">
              <span className="p-4 rounded-md bg-[#8686F5] text-white">2</span>
              <div>
                <span className="text-xl font-semibold text-[#8686F5]">Complete KYC & Bank details</span>
                <p className="text-[#6E6E73] text-sm">Get on a Quick 15 mins Zoom Call with our Experts to understand the Process & Terms for Selections & Investment.</p>
              </div>
            </div>
            <div className="flex gap-x-6 items-center">
              <span className="p-4 bg-[#E2E2E2] rounded-md">3</span>
              <span className="text-xl font-semibold">Start investing in start ups</span>
            </div>
            <Button type="primary" className="px-8 bg-[#8686F5] lg:w-min">Fill out the application now</Button>
          </div>
        </div>
      </div>

      <div className="lg:px-32 px-8 mt-20 sm:mt-32">
        <h6 className="text-3xl sm:text-5xl text-center mt-0 text-balance">Here&apos;s what our <span className="text-[#8686F5]">Community of 4000+</span> investors have to say about us!</h6>
        <div className="hidden lg:block">
          <Carousel autoplay slidesToShow={3}>
            {Reviews.map((review) => (
              <div key={review.id} className="">
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
        <div className="lg:hidden">
          <Carousel autoplay slidesToShow={1}>
            {Reviews.map((review) => (
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
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-x-2 lg:items-center px-6 lg:px-32 mt-20 lg:-mt-20">
        <div>
          <p className="text-zinc-700/70 text-xl font-semibold text-center lg:text-left">For Founders</p>
          <h6 className="text-3xl sm:text-5xl -mt-4 text-balance text-center lg:text-left">Raising a round is not easy, but <span className="text-[#8686F5]">Bizdateup</span> has made it easier.</h6>
          <p className="-mt-10 sm:-mt-20 text-center lg:text-left">Whether it&apos;s crowdfunding, raising privately or a discount pool, find out how we can accommodate your fundraising needs.</p>
          <div className="text-center lg:text-left">
            <Button type="primary" className="px-12 bg-[#8686F5] w-full sm:w-[274px] lg:w-min">Register</Button>
          </div>
        </div>
        <div className="sm:hidden mx-auto -mt-20">
          <Image
            src='/Founders.png'
            height={410}
            width={327}
            alt="Founders"
          />
        </div>
        <div className="hidden sm:block lg:hidden mx-auto -mt-20">
          <Image
            src='/Founders.png'
            height={560}
            width={477}
            alt="Founders"
          />
        </div>
        <div className="hidden xl:hidden lg:block">
          <Image
            src='/Founders.png'
            height={585}
            width={427}
            alt="Founders"
          />
        </div>
        <div className="hidden xl:block">
          <Image
            src='/Founders.png'
            height={785}
            width={627}
            alt="Founders"
          />
        </div>
      </div>

      <div className="lg:px-52 px-4">
        <h6 className="text-3xl sm:text-5xl text-center font-bold">Featured in</h6>
        <div className="-mt-10 lg:-mt-20 grid grid-cols-2 gap-8 lg:flex justify-between">
          <div className="">
            <Image
              src='/Zee.png'
              height={50}
              width={100}
              alt="Zee"
            />
          </div>
          <div>
            <Image
              src='/Week.png'
              height={50}
              width={150}
              alt="Week"
            />
          </div>
          <div>
            <Image
              src='/mid_day.png'
              height={50}
              width={150}
              alt="Mid Day"
            />
          </div>
          <div>
            <Image
              src='/outlook.png'
              height={50}
              width={150}
              alt="Outlook"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-16 bg-[#242552] md:px-16 xl:px-32 px-6 py-12">
        <h6 className="text-white text-3xl">Ready to Join the Top <span className="text-[#8686F5]">1% Investor&apos;s</span> Club?</h6>
        <p className="text-white/60 -mt-10 max-w-[739px] mx-auto">With Bizdateup you get a Strong Community of Top 1% Investors who live & Breathe Angel Investing! To top it up Signing up takes hardly 5 mins of your time. So, Join the Community Now!</p>
        <div>
          <Button type="primary" className="px-12 mt-4 sm:mx-8 sm:mt-0 w-[100%] sm:w-min bg-[#8686F5]">Login</Button>
          <Button type="primary" className="px-12 mt-4 sm:mt-0 w-[100%] sm:w-min bg-[#fff] text-[#8686F5]">Register</Button>
        </div>
      </div>

      <div className="md:mx-16 xl:mx-32 mx-2 bg-[#EEF] py-8 px-6 mt-16 flex flex-col items-center lg:flex-row justify-center gap-x-8 rounded-lg">
        <div>
          <h6 className="text-3xl text-center lg:text-left">Startup Investments at your fingertips</h6>
          <p className="text-center lg:text-left -mt-10 max-w-[739px]">With Bizdateup you get a Strong Community of Top 1% Investors who live & Breathe Angel Investing! To top it up Signing up takes hardly 5 mins of your time. So, Join the Community Now!</p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-4">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="180" height="52" viewBox="0 0 180 52" fill="none">
              <path d="M172.615 52H6.63902C2.98922 52 0 49.0815 0 45.518V6.6263C0 3.06285 2.98922 0.14435 6.63902 0.14435H172.615C176.264 0.14435 179.254 3.06285 179.254 6.6263V45.518C179.254 49.0815 176.264 52 172.615 52Z" fill="black" />
              <path d="M172.615 1.18308C175.688 1.18308 178.19 3.62516 178.19 6.6263V45.518C178.19 48.5192 175.688 50.9613 172.615 50.9613H6.63902C3.56515 50.9613 1.0639 48.5192 1.0639 45.518V6.6263C1.0639 3.62516 3.56515 1.18308 6.63902 1.18308H172.615ZM172.615 0.14435H6.63902C2.98922 0.14435 0 3.06285 0 6.6263V45.518C0 49.0815 2.98922 52 6.63902 52H172.615C176.264 52 179.254 49.0815 179.254 45.518V6.6263C179.254 3.06285 176.264 0.14435 172.615 0.14435Z" fill="#A6A6A6" />
              <path d="M62.9594 13.4246C62.9594 14.5071 62.6274 15.3741 61.9735 16.0206C61.2216 16.7871 60.2424 17.1728 59.0424 17.1728C57.8955 17.1728 56.9162 16.7806 56.1129 16.0077C55.3079 15.2234 54.9062 14.2608 54.9062 13.1086C54.9062 11.9565 55.3079 10.9939 56.1129 10.216C56.9162 9.43659 57.8955 9.04443 59.0424 9.04443C59.6133 9.04443 60.1577 9.15949 60.6772 9.37339C61.1951 9.58892 61.6166 9.88061 61.922 10.2404L61.2283 10.9242C60.6955 10.31 59.9702 10.007 59.0424 10.007C58.2058 10.007 57.4805 10.2922 56.8648 10.8675C56.2556 11.4444 55.9502 12.1914 55.9502 13.1086C55.9502 14.0258 56.2556 14.7793 56.8648 15.3562C57.4805 15.925 58.2058 16.2167 59.0424 16.2167C59.9303 16.2167 60.6772 15.925 61.2664 15.3498C61.6548 14.9689 61.8756 14.4439 61.9337 13.773H59.0424V12.8364H62.8996C62.9461 13.0389 62.9594 13.235 62.9594 13.4246Z" fill="white" stroke="white" strokeWidth="0.140625" strokeMiterlimit="10" />
              <path d="M69.0787 10.1768H65.4554V12.6399H68.7218V13.5765H65.4554V16.0397H69.0787V16.9942H64.4297V9.22229H69.0787V10.1768Z" fill="white" stroke="white" strokeWidth="0.140625" strokeMiterlimit="10" />
              <path d="M73.4005 16.9942H72.3748V10.1768H70.1523V9.22229H75.6246V10.1768H73.4005V16.9942Z" fill="white" stroke="white" strokeWidth="0.140625" strokeMiterlimit="10" />
              <path d="M79.582 16.9943V9.22241H80.6061V16.9943H79.582Z" fill="white" stroke="white" strokeWidth="0.140625" strokeMiterlimit="10" />
              <path d="M85.1466 16.9943H84.1291V10.1769H81.8984V9.22241H87.3773V10.1769H85.1466V16.9943Z" fill="white" stroke="white" strokeWidth="0.140625" strokeMiterlimit="10" />
              <path d="M97.7384 15.9945C96.9534 16.7804 95.9808 17.1726 94.8206 17.1726C93.6538 17.1726 92.6812 16.7804 91.8961 15.9945C91.1127 15.2102 90.7227 14.2476 90.7227 13.1084C90.7227 11.9692 91.1127 11.0066 91.8961 10.2223C92.6812 9.43635 93.6538 9.04419 94.8206 9.04419C95.9741 9.04419 96.9467 9.43635 97.7318 10.2288C98.5219 11.0196 98.9119 11.9757 98.9119 13.1084C98.9119 14.2476 98.5219 15.2102 97.7384 15.9945ZM92.6546 15.343C93.2455 15.9248 93.9642 16.2165 94.8206 16.2165C95.6704 16.2165 96.3957 15.9248 96.9799 15.343C97.5692 14.7613 97.8679 14.0142 97.8679 13.1084C97.8679 12.2025 97.5692 11.4555 96.9799 10.8737C96.3957 10.292 95.6704 10.0003 94.8206 10.0003C93.9642 10.0003 93.2455 10.292 92.6546 10.8737C92.0654 11.4555 91.7666 12.2025 91.7666 13.1084C91.7666 14.0142 92.0654 14.7613 92.6546 15.343Z" fill="white" stroke="white" strokeWidth="0.140625" strokeMiterlimit="10" />
              <path d="M100.352 16.9943V9.22241H101.596L105.467 15.2668H105.512L105.467 13.7727V9.22241H106.491V16.9943H105.422L101.369 10.6517H101.324L101.369 12.1523V16.9943H100.352Z" fill="white" stroke="white" strokeWidth="0.140625" strokeMiterlimit="10" />
              <path d="M90.469 28.344C87.3504 28.344 84.8026 30.6613 84.8026 33.8585C84.8026 37.0298 87.3504 39.3714 90.469 39.3714C93.5944 39.3714 96.1421 37.0298 96.1421 33.8585C96.1421 30.6613 93.5944 28.344 90.469 28.344ZM90.469 37.2C88.7578 37.2 87.2856 35.8209 87.2856 33.8585C87.2856 31.8702 88.7578 30.5155 90.469 30.5155C92.1802 30.5155 93.6591 31.8702 93.6591 33.8585C93.6591 35.8209 92.1802 37.2 90.469 37.2ZM78.1055 28.344C74.9802 28.344 72.4391 30.6613 72.4391 33.8585C72.4391 37.0298 74.9802 39.3714 78.1055 39.3714C81.2292 39.3714 83.7719 37.0298 83.7719 33.8585C83.7719 30.6613 81.2292 28.344 78.1055 28.344ZM78.1055 37.2C76.3927 37.2 74.9155 35.8209 74.9155 33.8585C74.9155 31.8702 76.3927 30.5155 78.1055 30.5155C79.8167 30.5155 81.2889 31.8702 81.2889 33.8585C81.2889 35.8209 79.8167 37.2 78.1055 37.2ZM63.3935 30.0342V32.3774H69.1246C68.9569 33.6868 68.5088 34.6493 67.8217 35.3202C66.9852 36.1305 65.6823 37.0298 63.3935 37.0298C59.8665 37.0298 57.1046 34.2507 57.1046 30.8071C57.1046 27.3636 59.8665 24.5845 63.3935 24.5845C65.3005 24.5845 66.6881 25.3121 67.7121 26.2552L69.4034 24.6039C67.9711 23.2686 66.0657 22.2429 63.3935 22.2429C58.5569 22.2429 54.4922 26.085 54.4922 30.8071C54.4922 35.5293 58.5569 39.3714 63.3935 39.3714C66.0076 39.3714 67.9711 38.5353 69.5146 36.9666C71.0964 35.4223 71.5893 33.2508 71.5893 31.4975C71.5893 30.953 71.5429 30.4523 71.4599 30.0342H63.3935ZM123.553 31.8507C123.087 30.6175 121.648 28.344 118.716 28.344C115.812 28.344 113.394 30.5787 113.394 33.8585C113.394 36.9472 115.787 39.3714 118.995 39.3714C121.589 39.3714 123.087 37.8271 123.702 36.9277L121.777 35.6751C121.135 36.5923 120.26 37.2 118.995 37.2C117.739 37.2 116.838 36.6377 116.26 35.5293L123.814 32.4779L123.553 31.8507ZM115.852 33.6868C115.787 31.5607 117.543 30.4717 118.801 30.4717C119.787 30.4717 120.623 30.953 120.902 31.6417L115.852 33.6868ZM109.712 39.036H112.195V22.8311H109.712V39.036ZM105.646 29.5723H105.563C105.005 28.9274 103.941 28.344 102.594 28.344C99.7653 28.344 97.1794 30.7683 97.1794 33.8764C97.1794 36.9666 99.7653 39.3714 102.594 39.3714C103.941 39.3714 105.005 38.7832 105.563 38.1188H105.646V38.9096C105.646 41.0178 104.492 42.1506 102.632 42.1506C101.115 42.1506 100.174 41.081 99.7852 40.1817L97.6259 41.0616C98.2483 42.5233 99.8964 44.322 102.632 44.322C105.543 44.322 107.999 42.6497 107.999 38.5806V28.6794H105.646V29.5723ZM102.806 37.2C101.095 37.2 99.6624 35.8015 99.6624 33.8764C99.6624 31.9334 101.095 30.5155 102.806 30.5155C104.492 30.5155 105.822 31.9334 105.822 33.8764C105.822 35.8015 104.492 37.2 102.806 37.2ZM135.178 22.8311H129.239V39.036H131.716V32.896H135.178C137.928 32.896 140.625 30.953 140.625 27.8627C140.625 24.7741 137.921 22.8311 135.178 22.8311ZM135.243 30.6419H131.716V25.0852H135.243C137.092 25.0852 138.147 26.5842 138.147 27.8627C138.147 29.117 137.092 30.6419 135.243 30.6419ZM150.551 28.3132C148.761 28.3132 146.901 29.0846 146.136 30.7942L148.333 31.6936C148.806 30.7942 149.676 30.5025 150.595 30.5025C151.88 30.5025 153.183 31.256 153.203 32.5864V32.7566C152.755 32.5038 151.795 32.1295 150.615 32.1295C148.248 32.1295 145.837 33.4015 145.837 35.7756C145.837 37.947 147.775 39.3455 149.955 39.3455C151.621 39.3455 152.541 38.6114 153.118 37.7574H153.203V39.0101H155.595V32.7939C155.595 29.9207 153.397 28.3132 150.551 28.3132ZM150.252 37.1935C149.442 37.1935 148.313 36.8013 148.313 35.8209C148.313 34.5667 149.721 34.0854 150.939 34.0854C152.029 34.0854 152.541 34.3204 153.203 34.6299C153.009 36.1305 151.686 37.1935 150.252 37.1935ZM164.308 28.6681L161.462 35.6929H161.377L158.434 28.6681H155.764L160.185 38.485L157.663 43.9477H160.25L167.063 28.6681H164.308ZM141.986 39.036H144.469V22.8311H141.986V39.036Z" fill="white" />
              <path d="M13.858 9.9175C13.4679 10.3161 13.2422 10.9368 13.2422 11.7405V40.4102C13.2422 41.214 13.4679 41.8347 13.858 42.2333L13.9542 42.3208L30.409 26.2618V25.8826L13.9542 9.82351L13.858 9.9175Z" fill="url(#paint0_linear_301_2616)" />
              <path d="M35.8851 31.6173L30.4062 26.2616V25.8824L35.8917 20.5267L36.0146 20.5964L42.5108 24.2052C44.3648 25.2293 44.3648 26.9147 42.5108 27.9453L36.0146 31.5476L35.8851 31.6173Z" fill="url(#paint1_linear_301_2616)" />
              <path d="M36.0149 31.5477L30.4065 26.072L13.8555 42.2332C14.4712 42.8651 15.4754 42.9413 16.6173 42.3093L36.0149 31.5477Z" fill="url(#paint2_linear_301_2616)" />
              <path d="M36.0149 20.5965L16.6173 9.83485C15.4754 9.20934 14.4712 9.2855 13.8555 9.91749L30.4065 26.0721L36.0149 20.5965Z" fill="url(#paint3_linear_301_2616)" />
              <defs>
                <linearGradient id="paint0_linear_301_2616" x1="28.948" y1="40.7088" x2="7.19772" y2="18.4315" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00A0FF" />
                  <stop offset="0.0066" stopColor="#00A1FF" />
                  <stop offset="0.2601" stopColor="#00BEFF" />
                  <stop offset="0.5122" stopColor="#00D2FF" />
                  <stop offset="0.7604" stopColor="#00DFFF" />
                  <stop offset="1" stop-color="#00E3FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_301_2616" x1="44.925" y1="26.0702" x2="12.7962" y2="26.0702" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFE000" />
                  <stop offset="0.4087" stop-color="#FFBD00" />
                  <stop offset="0.7754" stop-color="#FFA500" />
                  <stop offset="1" stop-color="#FF9C00" />
                </linearGradient>
                <linearGradient id="paint2_linear_301_2616" x1="32.9652" y1="23.0954" x2="3.47002" y2="-7.11453" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF3A44" />
                  <stop offset="1" stop-color="#C31162" />
                </linearGradient>
                <linearGradient id="paint3_linear_301_2616" x1="9.68922" y1="51.7716" x2="22.8601" y2="38.2816" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#32A071" />
                  <stop offset="0.0685" stopColor="#2DA771" />
                  <stop offset="0.4762" stopColor="#15CF74" />
                  <stop offset="0.8009" stopColor="#06E775" />
                  <stop offset="1" stopColor="#00F076" />
                </linearGradient>
              </defs>
            </svg></div>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="180" height="52" viewBox="0 0 180 52" fill="none">
              <path d="M179.002 46.0197C179.002 48.7832 176.717 51.0216 173.89 51.0216H6.61428C3.78921 51.0216 1.49609 48.7832 1.49609 46.0197V6.13123C1.49609 3.36909 3.78921 1.1228 6.61428 1.1228H173.889C176.717 1.1228 179.001 3.36909 179.001 6.13123L179.002 46.0197Z" fill="black" />
              <path d="M173.352 1.18309C176.43 1.18309 178.935 3.62516 178.935 6.62631V45.518C178.935 48.5192 176.43 50.9613 173.352 50.9613H7.14816C4.07006 50.9613 1.56537 48.5192 1.56537 45.518V6.62631C1.56537 3.62516 4.07006 1.18309 7.14816 1.18309H173.352ZM173.352 0.144354H7.14816C3.49333 0.144354 0.5 3.06286 0.5 6.62631V45.518C0.5 49.0815 3.49333 52 7.14816 52H173.352C177.007 52 180 49.0815 180 45.518V6.62631C180 3.06286 177.007 0.144354 173.352 0.144354Z" fill="#A6A6A6" />
              <path d="M40.5584 25.7915C40.5199 21.6132 44.0673 19.5805 44.2296 19.4859C42.2205 16.6299 39.1065 16.2397 38.0122 16.2086C35.3968 15.9402 32.8599 17.7344 31.5276 17.7344C30.1687 17.7344 28.1171 16.2345 25.9059 16.2786C23.0605 16.3214 20.3986 17.9276 18.9386 20.4219C15.9257 25.5076 18.1728 32.9813 21.0594 37.0921C22.5034 39.1054 24.1907 41.3534 26.3992 41.2743C28.5598 41.1874 29.3669 39.9312 31.9743 39.9312C34.5578 39.9312 35.3157 41.2743 37.5681 41.2237C39.887 41.1874 41.3469 39.2014 42.7404 37.1699C44.4091 34.8624 45.0792 32.5898 45.1058 32.4731C45.0513 32.455 40.6023 30.7995 40.5584 25.7915Z" fill="white" />
              <path d="M36.3036 13.5043C37.4657 12.0874 38.2608 10.1596 38.0401 8.20337C36.3581 8.27597 34.2547 9.33771 33.0434 10.7236C31.9717 11.9448 31.0143 13.9464 31.2617 15.8287C33.1511 15.9662 35.091 14.8992 36.3036 13.5043Z" fill="white" />
              <path d="M71.829 40.9854H68.8094L67.1554 35.9178H61.4061L59.8304 40.9854H56.8906L62.5868 23.733H66.105L71.829 40.9854ZM66.6568 33.7917L65.1609 29.2868C65.0027 28.8266 64.7062 27.7428 64.2688 26.0367H64.2156C64.0414 26.7705 63.7608 27.8543 63.3752 29.2868L61.906 33.7917H66.6568Z" fill="white" />
              <path d="M86.4785 34.6123C86.4785 36.728 85.8922 38.4004 84.7194 39.628C83.669 40.7209 82.3647 41.2667 80.8077 41.2667C79.127 41.2667 77.9197 40.6781 77.1844 39.501H77.1312V46.0542H74.2964V32.6405C74.2964 31.3104 74.2605 29.9453 74.1914 28.5452H76.6845L76.8427 30.517H76.8959C77.8412 29.0313 79.2759 28.2898 81.2012 28.2898C82.7064 28.2898 83.9629 28.8693 84.9681 30.0296C85.9759 31.1911 86.4785 32.7183 86.4785 34.6123ZM83.5906 34.7134C83.5906 33.5026 83.3114 32.5044 82.7502 31.7188C82.1373 30.8994 81.3142 30.4898 80.2824 30.4898C79.5831 30.4898 78.9475 30.7179 78.3797 31.1678C77.8107 31.6215 77.4384 32.214 77.2642 32.9477C77.1764 33.29 77.1326 33.57 77.1326 33.7904V35.8646C77.1326 36.7695 77.4171 37.5331 77.9862 38.1566C78.5553 38.7802 79.2945 39.0913 80.204 39.0913C81.2717 39.0913 82.1027 38.6894 82.6971 37.8883C83.2927 37.0858 83.5906 36.028 83.5906 34.7134Z" fill="white" />
              <path d="M101.153 34.6123C101.153 36.728 100.567 38.4004 99.3926 39.628C98.3435 40.7209 97.0391 41.2667 95.4821 41.2667C93.8015 41.2667 92.5941 40.6781 91.8602 39.501H91.807V46.0542H88.9722V32.6405C88.9722 31.3104 88.9363 29.9453 88.8672 28.5452H91.3602L91.5185 30.517H91.5717C92.5157 29.0313 93.9504 28.2898 95.877 28.2898C97.3808 28.2898 98.6373 28.8693 99.6452 30.0296C100.649 31.1911 101.153 32.7183 101.153 34.6123ZM98.265 34.7134C98.265 33.5026 97.9845 32.5044 97.4234 31.7188C96.8104 30.8994 95.99 30.4898 94.9569 30.4898C94.2562 30.4898 93.622 30.7179 93.0529 31.1678C92.4838 31.6215 92.1128 32.214 91.9386 32.9477C91.8522 33.29 91.807 33.57 91.807 33.7904V35.8646C91.807 36.7695 92.0915 37.5331 92.658 38.1566C93.227 38.7789 93.9663 39.0913 94.8785 39.0913C95.9462 39.0913 96.7772 38.6894 97.3715 37.8883C97.9672 37.0858 98.265 36.028 98.265 34.7134Z" fill="white" />
              <path d="M117.559 36.1473C117.559 37.6148 117.037 38.8088 115.988 39.7305C114.835 40.7378 113.23 41.2408 111.168 41.2408C109.264 41.2408 107.737 40.883 106.582 40.1661L107.239 37.8624C108.483 38.5961 109.849 38.9643 111.337 38.9643C112.404 38.9643 113.236 38.7284 113.833 38.2591C114.427 37.7898 114.723 37.1597 114.723 36.3741C114.723 35.6741 114.479 35.0842 113.988 34.6059C113.5 34.1275 112.685 33.6828 111.547 33.2719C108.449 32.1453 106.901 30.495 106.901 28.3248C106.901 26.9066 107.444 25.7437 108.53 24.8388C109.612 23.9327 111.056 23.4802 112.862 23.4802C114.472 23.4802 115.81 23.7538 116.877 24.2995L116.169 26.5527C115.171 26.0237 114.044 25.7593 112.782 25.7593C111.785 25.7593 111.006 25.9991 110.447 26.4762C109.975 26.9027 109.739 27.4226 109.739 28.0383C109.739 28.7202 110.008 29.2842 110.551 29.7275C111.023 30.1372 111.881 30.5806 113.125 31.0589C114.648 31.6566 115.766 32.3553 116.485 33.1565C117.202 33.9551 117.559 34.9546 117.559 36.1473Z" fill="white" />
              <path d="M126.934 30.6195H123.81V36.6593C123.81 38.1956 124.36 38.963 125.464 38.963C125.97 38.963 126.391 38.9202 126.723 38.8347L126.801 40.9335C126.243 41.1371 125.508 41.2395 124.597 41.2395C123.477 41.2395 122.602 40.9063 121.971 40.2413C121.342 39.5749 121.026 38.4574 121.026 36.8875V30.6169H119.164V28.5426H121.026V26.2649L123.81 25.4456V28.5426H126.934V30.6195Z" fill="white" />
              <path d="M141.032 34.663C141.032 36.5752 140.471 38.1451 139.352 39.3728C138.178 40.6368 136.619 41.2668 134.677 41.2668C132.805 41.2668 131.314 40.6614 130.203 39.4506C129.091 38.2398 128.535 36.7113 128.535 34.8691C128.535 32.9414 129.107 31.3624 130.254 30.1347C131.399 28.9058 132.944 28.2913 134.887 28.2913C136.759 28.2913 138.265 28.8967 139.402 30.1088C140.49 31.2846 141.032 32.8027 141.032 34.663ZM138.091 34.7525C138.091 33.6052 137.84 32.6212 137.331 31.8006C136.736 30.8076 135.887 30.3123 134.786 30.3123C133.646 30.3123 132.781 30.8089 132.186 31.8006C131.677 32.6225 131.426 33.622 131.426 34.8043C131.426 35.9516 131.677 36.9356 132.186 37.7549C132.799 38.748 133.656 39.2432 134.76 39.2432C135.843 39.2432 136.692 38.7376 137.305 37.729C137.828 36.8928 138.091 35.8985 138.091 34.7525Z" fill="white" />
              <path d="M150.244 30.9759C149.964 30.9254 149.665 30.8994 149.351 30.8994C148.354 30.8994 147.582 31.2663 147.04 32.0014C146.568 32.6496 146.331 33.4689 146.331 34.458V40.9854H143.498L143.524 32.4629C143.524 31.0291 143.488 29.7236 143.418 28.5465H145.887L145.991 30.9267H146.069C146.368 30.1086 146.84 29.4501 147.487 28.9561C148.118 28.5115 148.8 28.2898 149.536 28.2898C149.798 28.2898 150.034 28.3079 150.244 28.3404V30.9759Z" fill="white" />
              <path d="M162.925 34.1766C162.925 34.6718 162.892 35.0893 162.821 35.4302H154.317C154.35 36.6592 154.761 37.5991 155.551 38.2473C156.268 38.8268 157.194 39.1172 158.332 39.1172C159.592 39.1172 160.74 38.9214 161.774 38.5286L162.218 40.4472C161.01 40.9606 159.585 41.216 157.94 41.216C155.962 41.216 154.409 40.6482 153.279 39.5138C152.151 38.3795 151.586 36.8562 151.586 34.9454C151.586 33.0695 152.111 31.5073 153.163 30.2615C154.264 28.9314 155.752 28.2664 157.624 28.2664C159.463 28.2664 160.855 28.9314 161.8 30.2615C162.549 31.3181 162.925 32.6248 162.925 34.1766ZM160.222 33.4597C160.241 32.6404 160.056 31.9326 159.671 31.3349C159.181 30.5662 158.427 30.1824 157.412 30.1824C156.486 30.1824 155.732 30.5571 155.156 31.309C154.684 31.9066 154.403 32.6235 154.317 33.4584H160.222V33.4597Z" fill="white" />
              <path d="M65.7197 13.1195C65.7197 14.6454 65.2503 15.794 64.3129 16.5653C63.4447 17.2771 62.2108 17.6336 60.6125 17.6336C59.8201 17.6336 59.142 17.5999 58.5742 17.5324V9.19535C59.3148 9.07868 60.1126 9.01904 60.9742 9.01904C62.4966 9.01904 63.6441 9.34184 64.418 9.98745C65.2849 10.7173 65.7197 11.7609 65.7197 13.1195ZM64.2504 13.1571C64.2504 12.168 63.9818 11.4096 63.4447 10.8807C62.9075 10.353 62.123 10.0886 61.0899 10.0886C60.6511 10.0886 60.2775 10.1171 59.9677 10.1767V16.5148C60.1392 16.5407 60.453 16.5524 60.9091 16.5524C61.9754 16.5524 62.7985 16.2633 63.3782 15.6851C63.9579 15.1069 64.2504 14.2642 64.2504 13.1571Z" fill="white" />
              <path d="M73.51 14.4522C73.51 15.3921 73.2348 16.1622 72.6843 16.7663C72.1072 17.3873 71.3427 17.6971 70.388 17.6971C69.4679 17.6971 68.7353 17.4002 68.1888 16.8039C67.6437 16.2089 67.3711 15.4582 67.3711 14.5534C67.3711 13.607 67.6516 12.8305 68.2154 12.2276C68.7792 11.6248 69.5371 11.3228 70.4917 11.3228C71.4118 11.3228 72.1511 11.6196 72.7109 12.2147C73.2428 12.7929 73.51 13.5396 73.51 14.4522ZM72.0647 14.4963C72.0647 13.9324 71.9397 13.4488 71.6911 13.0457C71.3986 12.5582 70.9824 12.3145 70.4412 12.3145C69.8814 12.3145 69.456 12.5582 69.1634 13.0457C68.9135 13.4488 68.7898 13.9402 68.7898 14.521C68.7898 15.0849 68.9148 15.5684 69.1634 15.9716C69.4653 16.4591 69.8854 16.7028 70.4279 16.7028C70.9598 16.7028 71.3773 16.4552 71.6778 15.9586C71.9357 15.5477 72.0647 15.0602 72.0647 14.4963Z" fill="white" />
              <path d="M83.9564 11.447L81.9952 17.5582H80.7187L79.9063 14.9045C79.7002 14.242 79.5327 13.5835 79.4024 12.9301H79.3771C79.2561 13.6016 79.0886 14.2589 78.8732 14.9045L78.0103 17.5582H76.7192L74.875 11.447H76.307L77.0157 14.3522C77.1872 15.0393 77.3282 15.694 77.4412 16.3137H77.4664C77.5702 15.8029 77.7417 15.1521 77.9837 14.3652L78.8732 11.4483H80.0087L80.861 14.303C81.0671 14.9991 81.2346 15.6694 81.3636 16.315H81.4022C81.4966 15.6862 81.6388 15.016 81.8276 14.303L82.5882 11.4483H83.9564V11.447Z" fill="white" />
              <path d="M91.1815 17.5584H89.7881V14.0581C89.7881 12.9795 89.3679 12.4402 88.5249 12.4402C88.1114 12.4402 87.7777 12.588 87.5184 12.8849C87.2618 13.1818 87.1315 13.5318 87.1315 13.9324V17.5571H85.738V13.1934C85.738 12.6567 85.7207 12.0746 85.6875 11.4446H86.9121L86.9772 12.4H87.0158C87.178 12.1032 87.42 11.8581 87.7378 11.6624C88.1154 11.4342 88.5382 11.3188 89.0009 11.3188C89.586 11.3188 90.0726 11.5029 90.4595 11.8724C90.9409 12.3248 91.1815 13.0003 91.1815 13.8974V17.5584Z" fill="white" />
              <path d="M95.021 17.5583H93.6289V8.64307H95.021V17.5583Z" fill="white" />
              <path d="M103.225 14.452C103.225 15.3919 102.95 16.1619 102.399 16.7661C101.822 17.387 101.056 17.6969 100.103 17.6969C99.1814 17.6969 98.4488 17.4 97.9037 16.8037C97.3585 16.2086 97.0859 15.458 97.0859 14.5531C97.0859 13.6068 97.3665 12.8302 97.9303 12.2274C98.494 11.6246 99.2519 11.3225 100.205 11.3225C101.127 11.3225 101.865 11.6194 102.426 12.2144C102.958 12.7926 103.225 13.5393 103.225 14.452ZM101.778 14.4961C101.778 13.9321 101.653 13.4486 101.405 13.0454C101.113 12.558 100.696 12.3142 100.156 12.3142C99.595 12.3142 99.1695 12.558 98.8783 13.0454C98.6283 13.4486 98.5047 13.9399 98.5047 14.5207C98.5047 15.0846 98.6296 15.5682 98.8783 15.9714C99.1801 16.4588 99.6003 16.7025 100.143 16.7025C100.675 16.7025 101.091 16.4549 101.391 15.9584C101.651 15.5474 101.778 15.06 101.778 14.4961Z" fill="white" />
              <path d="M109.97 17.5584H108.719L108.615 16.8545H108.576C108.148 17.4158 107.538 17.6971 106.746 17.6971C106.154 17.6971 105.675 17.5117 105.315 17.1435C104.988 16.8091 104.824 16.3929 104.824 15.899C104.824 15.1523 105.143 14.5832 105.786 14.1891C106.426 13.795 107.328 13.6018 108.489 13.6109V13.4968C108.489 12.6917 108.055 12.2899 107.187 12.2899C106.569 12.2899 106.024 12.4415 105.553 12.7423L105.27 11.8504C105.852 11.4991 106.571 11.3228 107.42 11.3228C109.058 11.3228 109.879 12.1654 109.879 13.8507V16.1013C109.879 16.7119 109.91 17.198 109.97 17.5584ZM108.523 15.4582V14.5158C106.986 14.4898 106.218 14.9008 106.218 15.7473C106.218 16.0662 106.305 16.3048 106.485 16.4642C106.664 16.6237 106.893 16.7028 107.166 16.7028C107.472 16.7028 107.757 16.6081 108.018 16.4202C108.28 16.2309 108.441 15.9911 108.501 15.6968C108.515 15.6307 108.523 15.5503 108.523 15.4582Z" fill="white" />
              <path d="M117.89 17.5583H116.653L116.588 16.577H116.549C116.154 17.3237 115.482 17.6971 114.536 17.6971C113.781 17.6971 113.152 17.408 112.653 16.8298C112.155 16.2516 111.906 15.501 111.906 14.5792C111.906 13.5901 112.176 12.7889 112.719 12.177C113.244 11.6066 113.887 11.3214 114.653 11.3214C115.495 11.3214 116.084 11.5975 116.419 12.1511H116.446V8.64307H117.84V15.9119C117.84 16.507 117.856 17.0553 117.89 17.5583ZM116.446 14.9811V13.9622C116.446 13.7859 116.432 13.6432 116.407 13.5344C116.329 13.2077 116.16 12.9328 115.903 12.7111C115.644 12.4895 115.331 12.378 114.971 12.378C114.451 12.378 114.044 12.5789 113.745 12.9821C113.449 13.3853 113.298 13.8999 113.298 14.5287C113.298 15.1328 113.441 15.6228 113.727 16.0001C114.028 16.402 114.435 16.6029 114.944 16.6029C115.402 16.6029 115.767 16.4357 116.045 16.0999C116.314 15.7901 116.446 15.4167 116.446 14.9811Z" fill="white" />
              <path d="M129.807 14.452C129.807 15.3919 129.532 16.1619 128.981 16.7661C128.404 17.387 127.641 17.6969 126.685 17.6969C125.766 17.6969 125.034 17.4 124.486 16.8037C123.941 16.2086 123.668 15.458 123.668 14.5531C123.668 13.6068 123.949 12.8302 124.512 12.2274C125.076 11.6246 125.834 11.3225 126.79 11.3225C127.709 11.3225 128.449 11.6194 129.008 12.2144C129.54 12.7926 129.807 13.5393 129.807 14.452ZM128.363 14.4961C128.363 13.9321 128.238 13.4486 127.989 13.0454C127.695 12.558 127.281 12.3142 126.738 12.3142C126.18 12.3142 125.754 12.558 125.46 13.0454C125.21 13.4486 125.087 13.9399 125.087 14.5207C125.087 15.0846 125.212 15.5682 125.46 15.9714C125.762 16.4588 126.182 16.7025 126.725 16.7025C127.257 16.7025 127.675 16.4549 127.976 15.9584C128.233 15.5474 128.363 15.06 128.363 14.4961Z" fill="white" />
              <path d="M137.297 17.5586H135.905V14.0584C135.905 12.9798 135.485 12.4405 134.641 12.4405C134.227 12.4405 133.894 12.5883 133.636 12.8851C133.378 13.182 133.249 13.532 133.249 13.9326V17.5573H131.854V13.1937C131.854 12.657 131.838 12.0749 131.805 11.4448H133.028L133.093 12.4003H133.132C133.295 12.1034 133.537 11.8584 133.854 11.6626C134.233 11.4345 134.654 11.3191 135.118 11.3191C135.702 11.3191 136.188 11.5032 136.575 11.8727C137.058 12.3251 137.297 13.0005 137.297 13.8976V17.5586Z" fill="white" />
              <path d="M146.677 12.465H145.142V15.4338C145.142 16.1883 145.415 16.5655 145.955 16.5655C146.205 16.5655 146.412 16.5448 146.576 16.502L146.612 17.5326C146.336 17.6338 145.975 17.6843 145.529 17.6843C144.979 17.6843 144.551 17.521 144.241 17.1943C143.93 16.8676 143.775 16.3179 143.775 15.5466V12.465H142.859V11.4474H143.775V10.3273L145.141 9.92542V11.4461H146.675V12.465H146.677Z" fill="white" />
              <path d="M154.053 17.5583H152.658V14.084C152.658 12.9886 152.238 12.4402 151.396 12.4402C150.75 12.4402 150.309 12.7578 150.067 13.393C150.025 13.5266 150.002 13.6899 150.002 13.8818V17.5571H148.609V8.64307H150.002V12.3261H150.028C150.467 11.6559 151.096 11.3214 151.911 11.3214C152.488 11.3214 152.965 11.5055 153.344 11.875C153.816 12.3352 154.053 13.0197 154.053 13.9246V17.5583Z" fill="white" />
              <path d="M161.662 14.2139C161.662 14.4576 161.644 14.6625 161.61 14.8297H157.431C157.45 15.4338 157.65 15.894 158.036 16.2129C158.39 16.4981 158.846 16.6407 159.405 16.6407C160.023 16.6407 160.587 16.5448 161.095 16.3516L161.313 17.2954C160.718 17.5469 160.019 17.6727 159.209 17.6727C158.239 17.6727 157.474 17.3939 156.921 16.8365C156.365 16.2791 156.09 15.531 156.09 14.5924C156.09 13.6707 156.346 12.9032 156.864 12.2914C157.404 11.638 158.133 11.3113 159.055 11.3113C159.956 11.3113 160.641 11.638 161.104 12.2914C161.478 12.8099 161.662 13.4516 161.662 14.2139ZM160.333 13.8626C160.343 13.4594 160.252 13.112 160.063 12.819C159.821 12.4417 159.452 12.2525 158.954 12.2525C158.499 12.2525 158.128 12.4365 157.845 12.806C157.614 13.1003 157.477 13.4516 157.431 13.8626H160.333Z" fill="white" />
            </svg></div>
          </div>
        </div>
        <div className="sm:hidden lg:block">
          <Image
            src='/Phone.png'
            height={410}
            width={220}
            alt="phone"
          />
        </div>
        <div className="hidden sm:block lg:hidden">
          <Image
            src='/Phone.png'
            height={550}
            width={320}
            alt="phone"
          />
        </div>
      </div>

      <div className="md:mx-16 xl:mx-52 mx-2 px-6 mt-32">
        <h6 className="text-3xl text-center">Frequently Asked Questions</h6>
        <Collapse items={items} onChange={onFAQChange} />
      </div>

      <div className="bg-[#272855] md:px-16 xl:px-52 px-6 mt-32 flex flex-col sm:flex-row items-center p-4 justify-center">
        <div className="flex">
          <Image
            src='/notice.png'
            height={50}
            width={70}
            alt="Notice"
          />
          <p className="text-white font-bold">
            Refer a start up and get ₹500
          </p>
        </div>
        <Button type="primary" className="my-4 sm:my-0 sm:mx-8 w-[100%] sm:w-min bg-[#8686F5]">Know More</Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between lg:px-20 p-4">
        <div className="flex">
          <Image
            src='/logo.png'
            height={50}
            width={200}
            alt="Logo"
            className="bg-white"
          />
        </div>
        <div className="flex gap-x-6 mt-4 sm:mt-0">
          <Link href='https://instagram.com' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
              <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.5 19.5C0.5 8.73045 9.23045 0 20 0C30.7696 0 39.5 8.73045 39.5 19.5C39.5 30.2696 30.7696 39 20 39C9.23045 39 0.5 30.2696 0.5 19.5Z" fill="#8686F5" />
              <path fillRule="evenodd" clipRule="evenodd" d="M20.0025 9.1001C17.178 9.1001 16.8236 9.11245 15.7142 9.16293C14.607 9.21363 13.8513 9.38892 13.19 9.6461C12.506 9.91174 11.9258 10.2671 11.3477 10.8454C10.7692 11.4234 10.4139 12.0037 10.1474 12.6875C9.88952 13.349 9.71401 14.1049 9.66418 15.2117C9.61456 16.321 9.60156 16.6757 9.60156 19.5002C9.60156 22.3247 9.61413 22.6781 9.6644 23.7874C9.71531 24.8946 9.8906 25.6504 10.1476 26.3116C10.4134 26.9957 10.7688 27.5759 11.347 28.154C11.9249 28.7325 12.5051 29.0887 13.1887 29.3543C13.8504 29.6115 14.6064 29.7868 15.7134 29.8375C16.8227 29.888 17.177 29.9003 20.0012 29.9003C22.826 29.9003 23.1793 29.888 24.2887 29.8375C25.3959 29.7868 26.1525 29.6115 26.8142 29.3543C27.498 29.0887 28.0774 28.7325 28.6552 28.154C29.2337 27.5759 29.5891 26.9957 29.8556 26.3118C30.1112 25.6504 30.2867 24.8944 30.3387 23.7877C30.3886 22.6783 30.4016 22.3247 30.4016 19.5002C30.4016 16.6757 30.3886 16.3212 30.3387 15.2119C30.2867 14.1047 30.1112 13.349 29.8556 12.6877C29.5891 12.0037 29.2337 11.4234 28.6552 10.8454C28.0767 10.2669 27.4982 9.91152 26.8135 9.6461C26.1505 9.38892 25.3943 9.21363 24.2872 9.16293C23.1778 9.11245 22.8247 9.1001 19.9993 9.1001H20.0025ZM19.0695 10.9743C19.3464 10.9738 19.6554 10.9743 20.0025 10.9743C22.7793 10.9743 23.1084 10.9842 24.205 11.0341C25.219 11.0804 25.7694 11.2499 26.136 11.3922C26.6213 11.5807 26.9673 11.806 27.3311 12.1701C27.6951 12.5341 27.9204 12.8807 28.1094 13.3661C28.2517 13.7322 28.4214 14.2826 28.4675 15.2966C28.5174 16.3929 28.5282 16.7223 28.5282 19.4978C28.5282 22.2733 28.5174 22.6027 28.4675 23.699C28.4212 24.713 28.2517 25.2634 28.1094 25.6295C27.9209 26.1149 27.6951 26.4605 27.3311 26.8242C26.9671 27.1882 26.6215 27.4136 26.136 27.6021C25.7698 27.7451 25.219 27.9141 24.205 27.9605C23.1087 28.0103 22.7793 28.0211 20.0025 28.0211C17.2254 28.0211 16.8963 28.0103 15.8 27.9605C14.786 27.9137 14.2356 27.7442 13.8688 27.6019C13.3835 27.4134 13.0368 27.188 12.6728 26.824C12.3088 26.46 12.0835 26.1142 11.8945 25.6287C11.7522 25.2625 11.5825 24.7122 11.5364 23.6981C11.4865 22.6018 11.4766 22.2725 11.4766 19.4952C11.4766 16.7179 11.4865 16.3903 11.5364 15.294C11.5827 14.28 11.7522 13.7296 11.8945 13.363C12.083 12.8777 12.3088 12.531 12.6728 12.167C13.0368 11.803 13.3835 11.5777 13.8688 11.3887C14.2354 11.2457 14.786 11.0767 15.8 11.0302C16.7594 10.9868 17.1312 10.9738 19.0695 10.9717V10.9743ZM25.554 12.7011C24.865 12.7011 24.306 13.2595 24.306 13.9487C24.306 14.6377 24.865 15.1967 25.554 15.1967C26.243 15.1967 26.802 14.6377 26.802 13.9487C26.802 13.2597 26.243 12.7011 25.554 12.7011ZM20.0026 14.1593C17.053 14.1593 14.6617 16.5507 14.6617 19.5002C14.6617 22.4497 17.053 24.84 20.0026 24.84C22.9521 24.84 25.3426 22.4497 25.3426 19.5002C25.3426 16.5507 22.9521 14.1593 20.0026 14.1593ZM20.0025 16.0335C21.917 16.0335 23.4692 17.5855 23.4692 19.5002C23.4692 21.4147 21.917 22.9669 20.0025 22.9669C18.0878 22.9669 16.5358 21.4147 16.5358 19.5002C16.5358 17.5855 18.0878 16.0335 20.0025 16.0335Z" fill="#8686F5" />
            </svg></Link>
          <Link href='https://instagram.com' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
              <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.5 19.5C0.5 8.73045 9.23045 0 20 0C30.7696 0 39.5 8.73045 39.5 19.5C39.5 30.2696 30.7696 39 20 39C9.23045 39 0.5 30.2696 0.5 19.5Z" fill="#8686F5" />
              <path fillRule="evenodd" clipRule="evenodd" d="M30.4016 19.4857C30.4016 20.189 30.33 20.8914 30.1893 21.576C30.0522 22.2444 29.8491 22.9006 29.583 23.5278C29.323 24.144 29.0005 24.7378 28.6237 25.2915C28.2525 25.8418 27.8248 26.358 27.3551 26.8286C26.8843 27.2971 26.3663 27.7236 25.8163 28.0964C25.2608 28.4706 24.6661 28.7926 24.0496 29.0538C23.4214 29.3185 22.7637 29.5213 22.0959 29.6582C21.4104 29.7992 20.7054 29.8712 20.0011 29.8712C19.2962 29.8712 18.5913 29.7992 17.9068 29.6582C17.238 29.5213 16.5803 29.3185 15.9526 29.0538C15.3361 28.7926 14.7409 28.4706 14.1853 28.0964C13.6353 27.7236 13.1174 27.2971 12.6476 26.8286C12.1774 26.358 11.7497 25.8418 11.378 25.2915C11.0032 24.7378 10.6802 24.144 10.4192 23.5278C10.1531 22.9006 9.94944 22.2443 9.81181 21.576C9.67268 20.8914 9.60156 20.189 9.60156 19.4857C9.60156 18.7818 9.67264 18.078 9.81185 17.3948C9.94948 16.7265 10.1531 16.0693 10.4192 15.443C10.6802 14.8264 11.0033 14.2321 11.378 13.6783C11.7498 13.1276 12.1774 12.6123 12.6476 12.1412C13.1174 11.6726 13.6354 11.2472 14.1854 10.875C14.7409 10.4992 15.3362 10.1772 15.9527 9.91554C16.5804 9.65027 17.238 9.44695 17.9068 9.31106C18.5914 9.17111 19.2963 9.1001 20.0011 9.1001C20.7055 9.1001 21.4104 9.17111 22.0959 9.31106C22.7637 9.44699 23.4214 9.65031 24.0496 9.91554C24.6661 10.1772 25.2608 10.4992 25.8164 10.875C26.3664 11.2472 26.8844 11.6726 27.3551 12.1412C27.8249 12.6123 28.2525 13.1276 28.6237 13.6783C29.0005 14.2321 29.323 14.8264 29.583 15.443C29.8491 16.0693 30.0522 16.7265 30.1893 17.3948C30.33 18.078 30.4016 18.7818 30.4016 19.4857ZM16.2116 11.4637C13.7348 12.6316 11.8863 14.9105 11.3099 17.657C11.544 17.6591 15.2451 17.7057 19.5094 16.5743C17.9722 13.8471 16.3299 11.6215 16.2116 11.4637ZM20.2453 17.94C15.6722 19.3071 11.284 19.2088 11.1266 19.2027C11.124 19.298 11.1194 19.3903 11.1194 19.4857C11.1194 21.7641 11.9802 23.8412 13.3951 25.4117C13.392 25.4071 15.8226 21.1013 20.6155 19.5536C20.7313 19.5151 20.8491 19.4806 20.9659 19.4471C20.743 18.9431 20.4997 18.438 20.2453 17.94ZM25.8666 12.8294C24.3029 11.4525 22.2498 10.6174 20.0011 10.6174C19.2794 10.6174 18.5791 10.7046 17.9083 10.8659C18.0413 11.0444 19.7096 13.2543 21.2285 16.0393C24.5797 14.7848 25.8447 12.8618 25.8666 12.8294ZM21.5713 20.9167C21.5516 20.9233 21.5318 20.9289 21.5124 20.936C16.2721 22.7602 14.5608 26.4365 14.5423 26.4766C16.0501 27.6475 17.9413 28.354 20.0011 28.354C21.2311 28.354 22.4027 28.1039 23.4686 27.6511C23.3371 26.8762 22.8211 24.1602 21.5713 20.9167ZM24.9642 26.8408C26.9584 25.4969 28.3748 23.363 28.7699 20.8913C28.5871 20.8325 26.1022 20.047 23.2354 20.5059C24.4004 23.7028 24.8738 26.3063 24.9642 26.8408ZM21.9121 17.3609C22.1183 17.7838 22.3179 18.2143 22.5022 18.6469C22.5677 18.8021 22.6317 18.9542 22.6942 19.1063C25.7453 18.723 28.7512 19.368 28.8797 19.3943C28.8594 17.2919 28.1062 15.3623 26.86 13.8517C26.8432 13.8755 25.4188 15.9308 21.9121 17.3609Z" fill="#8686F5" />
            </svg></Link>
          <Link href='https://instagram.com' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
              <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.5 19.5C0.5 8.73045 9.23045 0 20 0C30.7696 0 39.5 8.73045 39.5 19.5C39.5 30.2696 30.7696 39 20 39C9.23045 39 0.5 30.2696 0.5 19.5Z" fill="#8686F5" />
              <path fillRule="evenodd" clipRule="evenodd" d="M19.416 15.8498L19.4569 16.5245L18.7749 16.4419C16.2925 16.1252 14.1237 15.0511 12.2823 13.2472L11.3821 12.3521L11.1502 13.0131C10.6592 14.4865 10.9729 16.0426 11.9959 17.0891C12.5415 17.6675 12.4187 17.7501 11.4776 17.4058C11.1502 17.2957 10.8638 17.2131 10.8365 17.2544C10.741 17.3508 11.0684 18.6039 11.3275 19.0996C11.6822 19.7881 12.4051 20.4628 13.1962 20.8622L13.8646 21.1789L13.0734 21.1927C12.3096 21.1927 12.2823 21.2064 12.3642 21.4956C12.637 22.3907 13.7145 23.3408 14.9148 23.7539L15.7605 24.0431L15.0239 24.4838C13.9328 25.1172 12.6506 25.4752 11.3685 25.5028C10.7547 25.5165 10.25 25.5716 10.25 25.6129C10.25 25.7506 11.9141 26.5218 12.8825 26.8247C15.7878 27.7198 19.2387 27.3342 21.8302 25.8057C23.6716 24.7179 25.513 22.5559 26.3723 20.4628C26.8361 19.3474 27.2998 17.3094 27.2998 16.3318C27.2998 15.6983 27.3407 15.6157 28.1046 14.8583C28.5547 14.4177 28.9775 13.9357 29.0593 13.798C29.1957 13.5364 29.1821 13.5364 28.4865 13.7705C27.3271 14.1836 27.1634 14.1285 27.7363 13.5088C28.1591 13.0682 28.6638 12.2695 28.6638 12.0354C28.6638 11.9941 28.4592 12.063 28.2273 12.1869C27.9818 12.3246 27.4362 12.5312 27.027 12.6551L26.2905 12.8892L25.6221 12.4348C25.2538 12.1869 24.7355 11.9115 24.4627 11.8289C23.7671 11.6361 22.7032 11.6636 22.0757 11.884C20.3708 12.5036 19.2932 14.101 19.416 15.8498Z" fill="#8686F5" />
            </svg></Link>
          <Link href='https://instagram.com' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
              <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.5 19.5C0.5 8.73045 9.23045 0 20 0C30.7696 0 39.5 8.73045 39.5 19.5C39.5 30.2696 30.7696 39 20 39C9.23045 39 0.5 30.2696 0.5 19.5Z" fill="#8686F5" />
              <path fillRule="evenodd" clipRule="evenodd" d="M28.1279 12.7964C29.0229 13.042 29.7277 13.7656 29.9669 14.6846C30.4016 16.3501 30.4016 19.8251 30.4016 19.8251C30.4016 19.8251 30.4016 23.3 29.9669 24.9656C29.7277 25.8846 29.0229 26.6082 28.1279 26.8539C26.5059 27.3001 20.0016 27.3001 20.0016 27.3001C20.0016 27.3001 13.4972 27.3001 11.8751 26.8539C10.9802 26.6082 10.2753 25.8846 10.0361 24.9656C9.60156 23.3 9.60156 19.8251 9.60156 19.8251C9.60156 19.8251 9.60156 16.3501 10.0361 14.6846C10.2753 13.7656 10.9802 13.042 11.8751 12.7964C13.4972 12.3501 20.0016 12.3501 20.0016 12.3501C20.0016 12.3501 26.5059 12.3501 28.1279 12.7964ZM18.0516 16.9V23.4L23.2516 20.1502L18.0516 16.9Z" fill="#8686F5" />
            </svg></Link>
        </div>
      </div>
      <div className="lg:px-20 p-4">
        <div className="flex flex-col lg:flex-row justify-between gap-x-32">
          <div className="flex gap-x-8 flex-col sm:flex-row lg:flex-col">
            <div className="max-w-[383px]">
              <h6 className="text-xl mb-0">Registered office</h6>
              <p className="text-xs text-[#6E6E73]">G2, Empire Business Centre, Empire Complex, 414 Senapati Bapat Marg, Delisle Rd, near shreeniwas mill, Lower Parel, Mumbai, Maharashtra, 400013 </p>
              <p className="text-xs text-[#6E6E73]">CIN U72900MH2022379408</p>
            </div>
            <div>
              <h6 className="text-xl mb-0">Contact</h6>
              <p className="text-xs text-[#8686F5]"><a href="mailto:support@bizdateup.com">support@bizdateup.com</a></p>
              <p className="text-xs"><a href="tel:+91-9587566666">+91-9587566666</a></p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between grow">
            {Links.map((data) => (
              <div key={data.id} className="flex flex-col gap-y-4">
                <h6 className="text-xl mb-0">{data.title}</h6>
                {Object.values(data.link).map((items, index) => (
                  <Link key={index} href={items.href} className="text-xs text-[#6E6E73]">{items.name}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 mb-0 flex flex-col md:flex-row gap-8 lg:items-center justify-between text-xs text-[#6E6E73]">
          <div className="grid grid-cols-2 lg:grid-cols-5 justify-between gap-8">
            <Link href='/' target="_blank">Privacy Policy</Link>
            <Link href='/' target="_blank">Risk of Investment</Link>
            <Link href='/' target="_blank">Terms of Use</Link>
            <Link href='/' target="_blank">Refund Policy</Link>
            <Link href='/' target="_blank">Cancellation Policy</Link>
          </div>
          <div>
            <p className="text-[#260F53]">Bizdateup Pvt Ltd • 2023 All Rights Reserved</p>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h6 className="text-xl mb-0">Disclaimer</h6>
          <p className="text-xs text-[#6E6E73]">All trademarks and logos or registered trademarks and logos found on this Site or mentioned herein belong to their respective owners and are solely being used for informational purposes. Information provided herein has been gathered from public sources. Bizdateup Technologies Pvt Ltd disclaims any and all responsibility in connection with veracity of this data. Information presented on this website is for educational purposes only and should not be treated as legal, financial , or any other form of advice. Bizdateup Technologies Pvt Ltd is not liable for financial or any other form of loss incurred by the user or any affiliated party on the basis of information provided herein. Bizdateup Technologies Pvt Ltd is neither a stock exchange nor does it intend to get recognized as a stock exchange under the Securities Contracts Regulation Act, 1956. Bizdateup Technologies Pvt Ltd is not authorized by the capital markets regulator to solicit investments. The securities traded on these platforms are not traded on any regulated exchange. Bizdateup also provides that it does not facilitate any online or offline buying, selling, or trading of securities.<br /> <br />This Site will be updated on a regular basis.</p>
        </div>
      </div>

    </main >
  );
}
