import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

type IPaymentInitial = {
  startup: {
    id: string
    name: string
  } | null
  status: 'failed' | 'success' | 'canceled' | null
}
type IDefaultPaymentContext = {
  state: IPaymentInitial
  dispatch: React.Dispatch<{ type: string; payload: any }>
}
const PaymentContext = createContext<IDefaultPaymentContext | null>(null)

export const usePaymentContext = () => useContext(PaymentContext)

const initialState: IPaymentInitial = {
  startup: null,
  status: null,
}

const reducer = (
  state: IPaymentInitial,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    // case 'setAuthModal':
    //   return { ...state, openSigninModal: !state.openSigninModal }
    default:
      return state
  }
}

const PaymentContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const router = useRouter()
  const { query } = useRouter()

  useEffect(() => {
    if (query.session_id) {
    }
  }, [query])

  return (
    <PaymentContext.Provider value={{ state, dispatch }}>
      {children}
    </PaymentContext.Provider>
  )
}

export default PaymentContextProvider
