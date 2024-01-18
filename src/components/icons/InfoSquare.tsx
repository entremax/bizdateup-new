import React from 'react'

function InfoSquare({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.334.75H5.665C2.644.75.75 2.889.75 5.916v8.168c0 3.027 1.885 5.166 4.915 5.166h8.668c3.031 0 4.917-2.139 4.917-5.166V5.916c0-3.027-1.886-5.166-4.916-5.166z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.992 14v-4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.987 6.204h.01"
      />
    </svg>
  )
}

export default InfoSquare
