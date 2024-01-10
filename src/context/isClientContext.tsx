'use client'

import React, { createContext } from 'react'

const isClientContext = createContext(false)

const ClientContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {}
