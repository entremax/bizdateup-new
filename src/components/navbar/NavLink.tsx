'use client'
import React, {JSX, useEffect, useState} from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Icons} from "@/icons";

const headerType = {
  dashboard:{
    main:[{
      name: 'Dashboard',
      icon: Icons.Dashboard,
      to: '/dashboard'
    },{
      name: 'Invest',
      icon: Icons.Invest,
      to: '/invest'
    },{
      name: 'Portfolio',
      icon: Icons.Portfolio,
      to: '/portfolio'
    },],
    userMenu:[
      {
        name:'Refer & Earn'
      }
    ]
  },
  normal: {
    main:[
      {
        name: 'Invest',
        icon:null,
        to: '/invest',
      },
      {
        name: 'Raise Funds',
        icon:null,
        to: '/raise',
      },
      {
        name: 'Dashboard',
        icon:null,
        to: '/dashboard',
      },
      {
        name: 'Learn',
        icon:null,
        to: '/learn',
      },],
  }
};

const pathType={
  normal:["/login","/signup"],
  dashboard:["/dashboard","/invest"]
}

const Links=({type}:{type:string})=>{
  const path=usePathname()
  
  useEffect(() => {
    if(!pathType.normal.includes(path)){
      console.log(path)
    }
  }, []);
  return(
    <div className='hidden md:flex gap-4'>
      {(type !== 'normal' ? headerType.dashboard : headerType.normal).main.map((link, index) => (
        <div className={'group'}>
        <Link href={link.to} key={index}
              className='flex gap-2 items-center text-gray-400 font-medium text-md px-4 group-hover:text-blue-600'>
          {link.icon ?
            <link.icon className='fill-current group-hover:fill-blue-500' width='1rem' height='1rem'/> : null}
          <p>{link.name}</p>
        </Link>
        </div>
      ))}
    </div>
  )
}
export default Links