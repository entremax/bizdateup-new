'use client'
import React from 'react'

export default function LearnPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className=" pt-28">{children}</main>
}
