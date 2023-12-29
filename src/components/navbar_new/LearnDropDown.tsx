import React from 'react'
import Link from 'next/link'

const dropDownItems = [
  {
    name: 'Tutorials',
    icon: ({ ...props }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9398 11.2436C14.014 12.923 12.6586 14.3431 10.9127 14.4145C10.7841 14.4199 4.51503 14.4073 4.51503 14.4073C2.77763 14.5392 1.25705 13.2907 1.12001 11.6176C1.10969 11.4929 1.1125 4.76634 1.1125 4.76634C1.03553 3.08514 2.38904 1.6614 4.13583 1.58732C4.26629 1.581 10.527 1.59274 10.527 1.59274C12.2728 1.46266 13.7981 2.72017 13.9332 4.40137C13.9426 4.52242 13.9398 11.2436 13.9398 11.2436Z"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9414 6.14851L16.96 3.67809C17.708 3.06576 18.83 3.59926 18.8291 4.56451L18.8181 11.3011C18.8172 12.2663 17.6942 12.7953 16.9481 12.1829L13.9414 9.71251"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    desc: 'Grow your start up investment knowledge here',
    to: '',
  },
  {
    name: 'Frequently asked questions',
    icon: ({ ...props }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.9987 18.479C14.681 18.479 18.4779 14.6831 18.4779 9.99984C18.4779 5.3175 14.681 1.52067 9.9987 1.52067C5.31545 1.52067 1.51953 5.3175 1.51953 9.99984C1.51953 14.6831 5.31545 18.479 9.9987 18.479Z"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99349 13.4795V9.42874"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99281 6.52018H10.002"
          stroke="#8686F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    desc: 'All your questions answered in one place',
    to: '/faqs',
  },
  {
    name: 'About the company',
    desc: 'Everything about company and people behind the scenes',
    icon: ({ ...props }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        {...props}>
        <path
          d="M9.99349 14.287V11.9614"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6729 3.88574C17.222 3.88574 18.4687 5.14158 18.4687 6.69074V9.84408C16.2137 11.1641 13.2345 11.9616 9.98953 11.9616C6.74453 11.9616 3.77453 11.1641 1.51953 9.84408V6.68158C1.51953 5.13241 2.77536 3.88574 4.32453 3.88574H15.6729Z"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.2018 3.88184V3.54634C13.2018 2.42801 12.2943 1.52051 11.176 1.52051H8.81099C7.69266 1.52051 6.78516 2.42801 6.78516 3.54634V3.88184"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.54297 13.1924L1.71622 15.4923C1.83355 17.0424 3.12514 18.2405 4.67889 18.2405H15.3113C16.8651 18.2405 18.1566 17.0424 18.274 15.4923L18.4472 13.1924"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    to: '/about-us',
  },
  {
    name: 'Blogs',
    desc: 'Everything about company and people behind the scenes',
    icon: ({ ...props }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        {...props}>
        <path
          d="M12.4074 13.8714H5.78906"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.4074 10.0335H5.78906"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.31448 6.20492H5.78906"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5823 1.52051C12.5823 1.52051 5.54508 1.52417 5.53408 1.52417C3.00408 1.53976 1.4375 3.20442 1.4375 5.74359V14.1733C1.4375 16.7253 3.016 18.3963 5.568 18.3963C5.568 18.3963 12.6043 18.3936 12.6162 18.3936C15.1463 18.378 16.7138 16.7124 16.7138 14.1733V5.74359C16.7138 3.19159 15.1343 1.52051 12.5823 1.52051Z"
          stroke="#8686F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    to: '/blogs',
  },
]
export default function LearnDropDown() {
  return (
    <div
      className={
        'border_gray right-[4rem] top-[5.4rem] min-h-[14rem] w-[24rem] rounded-lg bg-white p-2 px-2 shadow-lg xl:w-fit'
      }>
      {dropDownItems.map((link, index) => (
        <Link
          key={link.to + index}
          href={`/learn${link.to}`}
          className={
            'flex items-center gap-2 rounded px-2 py-2 !text-black-lighter hover:bg-light-shadow'
          }>
          <div className="flex items-center justify-center rounded-xl bg-[#F3F3FE] p-4">
            <link.icon />
          </div>
          <div className="flex flex-col gap-0">
            <span className={'text-lg font-semibold'}>{link.name}</span>
            <span className={'text-base text-gray-300'}>{link.desc}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
