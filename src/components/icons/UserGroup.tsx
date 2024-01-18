import React from 'react'

function UserGroup({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      fill="none"
      viewBox="0 0 22 18"
      {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.89 7.897a2.876 2.876 0 002.473-2.841 2.875 2.875 0 00-2.406-2.836M18.727 11.25c1.35.203 2.294.675 2.294 1.65 0 .671-.444 1.107-1.162 1.381"></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.889 11.664c-3.214 0-5.96.487-5.96 2.432 0 1.944 2.729 2.445 5.96 2.445 3.214 0 5.958-.482 5.958-2.428s-2.727-2.45-5.958-2.45zM10.89 8.888a3.819 3.819 0 10-3.82-3.819 3.804 3.804 0 003.791 3.819h.028z"
        clipRule="evenodd"></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.886 7.897a2.875 2.875 0 01-2.472-2.841A2.875 2.875 0 014.82 2.22M3.044 11.25C1.693 11.454.75 11.926.75 12.9c0 .671.444 1.107 1.162 1.381"></path>
    </svg>
  )
}

export default UserGroup
