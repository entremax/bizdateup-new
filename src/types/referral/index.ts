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

export interface AmountBreakdown {
  totalamount: number
  amount: number
  convenienceFee: number
  tds: number
  gst: number
}

export interface Investment {
  amountBreakdown: AmountBreakdown
  _id: string
  startup: string
  investor: string
  investorName: string
  companyName: string
  type: string
  orderId: string
  reference: string
  status: string
  dateOfpayment: string
  createdAt: string
  __v: number
  legal?: string
  commission: number
}

export type ReferedInvestor = {
  name: string
  email: string
  date: string
  kyc: boolean
  totalInvestmentAmount: number
  investments: Investment[]
  totalCommission: number
  totalConfirmedCommission: number
}
export type ReferedStartup = {
  name: string
  email: string
  date: string
  activeStatus: 'live' | string
  status: 'pending' | 'accepted'
  target: number
  investments: Investment[]
  totalRaised: number
  totalCommission: number
  totalConfirmedCommission: number
}
export type InviteeDetails = {
  referrer_id: string
  accelerator_id: string
  name: string
  accelerator: boolean
  investors: ReferedInvestor[]
  startups: ReferedStartup[]
  withdraws: any[]
}

type Commission = {
  confirmed: any
  pending: any
}
export type KYCFilter = 'all' | 'pending' | 'done'
export type StartupStatusFilter = 'all' | 'pending' | 'done'
export type InvestmentFilter = 'all' | true | false
export type AcceleratorInitialState = {
  accelerator: null | InviteeDetails
  kycFilter: KYCFilter
  startupStatusFilter: StartupStatusFilter
  investmentFilter?: InvestmentFilter
  dateRangeFilter?: [string, string]
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

export type FilterKeys = keyof ReferedInvestor & keyof ReferedStartup
