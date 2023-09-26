import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
    return <div className='h-[100dvh-4.5rem] w-full pt-20'>{children}</div>;
}