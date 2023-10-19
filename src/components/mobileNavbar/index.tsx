'use client'
import React from 'react';
import {usePathname} from "next/navigation";

const MobileNavbar=()=>{
  const path=usePathname()
  
  return(
    <nav className={'fixed bottom-0 left-0 right-0 h-16 z-[999] bg-white shadow-lg'}>
      {path}
    </nav>
  )
}

export default MobileNavbar