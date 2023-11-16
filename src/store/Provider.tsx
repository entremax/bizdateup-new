'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '.'
import { PersistGate } from 'redux-persist/integration/react'

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  )
}

export default ReduxProvider
