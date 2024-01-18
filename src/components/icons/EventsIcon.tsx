import React from 'react'

function EventsIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      fill="none"
      viewBox="0 0 20 22"
      {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.094 8.404h17.824M14.443 12.31h.01M10.005 12.31h.01M5.56 12.31h.01M14.443 16.196h.01M10.005 16.196h.01M5.56 16.196h.01M14.041 1v3.29M5.963 1v3.29"></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.238 2.58H5.771C2.834 2.58 1 4.214 1 7.221v9.05C1 19.326 2.834 21 5.771 21h8.458C17.175 21 19 19.355 19 16.347V7.222c.01-3.007-1.816-4.643-4.762-4.643z"
        clipRule="evenodd"></path>
    </svg>
  )
}

export default EventsIcon
