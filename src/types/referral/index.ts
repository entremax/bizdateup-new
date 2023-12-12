import { UserRole } from '@/types'

export type FetchAcceleratorResponse = {
  code: number | string
  status: 'OK' | any
  data: {
    code: number | string
    data: FetchAcceleratorResponseData
    message?: string
  } | null
  message?: string
}
export type FetchAcceleratorResponseData = {
  _id: string
  investorId: string
  name: string
  referal_code: string
  referedInvestor: unknown
  referedStartup: unknown
  rate: any[]
  createdAt: string
}

export type InviteeResponse = {
  code: string
  status: 'OK' | any
  data: {
    code: number | string
    data: InviteeDetails
    message: string
  }
}

export type InviteeDetails = {
  referrer_id: string
  accelerator_id: string
  name: string
  accelerator: boolean
  investors: any[]
  startups: any[]
  withdraws: any[]
}

type Commission = {
  confirmed: any
  pending: any
}

export type AcceleratorInitialState = {
  accelerator: null | InviteeDetails
  investorCommission: Commission
  startupCommission: Commission
  totalWithdrawals: {
    approve: string
    pending: string
  }
  totalCommission: string
  redeemable: string
}

export type RedeemResponse = {
  code: string | number
  data: any
}

export type BaseCookies = {
  token: string
  user_id: string
  role: UserRole
}

export type AcceleratorCookies = {
  accelerator_id: string
  referrer_id: string
}

export type Cookies = BaseCookies & AcceleratorCookies
