import React from 'react'

function AddUser({ ...props }) {
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
        d="M7.877 13.206c-3.844 0-7.127.581-7.127 2.91 0 2.327 3.263 2.93 7.127 2.93 3.845 0 7.127-.583 7.127-2.91s-3.262-2.93-7.127-2.93zM7.88 9.886a4.568 4.568 0 10-4.567-4.568 4.551 4.551 0 004.536 4.568h.03z"
        clipRule="evenodd"></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.203 6.67v4.01M19.246 8.674h-4.09"></path>
    </svg>
  )
}

export default AddUser
