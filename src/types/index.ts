// noinspection JSUnusedGlobalSymbols
export type UserRole = 'investor' | 'admin' | 'startup'

export interface Aadhar {
  aadharNo: string
  status: string
}

export interface Address {
  address: string
  city: string
  state: string
  pincode: string
  country: string
}

export interface Pan {
  panNo: string
  status: string
}

export interface Other {
  occupation: string
  investAmount: string
  sector: string[]
  investedFund: string
  linkedlnUrl: string
  status: string
}

export interface Bank {
  bankName: string
  accountType: string
  accountNumber: string
  ifsc: string
  bankReference: string
  registeredName: string
  status: string
}

interface Membership {
  isMember: string
  amount: number
}

export interface DataInner {
  aadhar: Aadhar
  address: Address
  pan: Pan
  other: Other
  bank: Bank
  membership: Membership
  _id: string
  firstName: string
  lastName: string
  email: string
  phone: number
  gender: string
  linkedlnUrl: string
  provider: string
  providerId: string
  isAccelerator: boolean
  status: string
  role: string
  created_at: string
  __v: number
  code: number
  refer: null | string
}

export interface IInvestorData {
  aadhar: Aadhar
  address: Address
  pan: Pan
  other: Other
  bank: Bank
  membership: Membership
  _id: string
  firstName: string
  lastName: string
  email: string
  phone: number
  gender: string
  LinkedInUrl: string
  provider: string
  providerId: string
  isAccelerator: boolean
  status: string
  role: string
}

export enum KYCStatus {
  profile = 'profile',
  pan = 'pan',
  aadhar = 'aadhar',
  bank = 'bank',
  other = 'other',
}

export enum KYCCompletion {
  pan = 'pan',
  aadhar = 'aadhar',
  bank = 'bank',
  other = 'other',
}

// Create a type for KYCStatus array
export type KYCStatusArray = KYCStatus[]

export interface AuthUserState {
  token: string | null
  investorUserId: string | null
  refId: string | null
  temp_auth_medium: string | null
  user: DataInner | null
  kycStatus: KYCStatusArray | null
  isVerified: boolean
  kycCompletionPercentage: number
  riskAccepted: boolean
  premiumMember: boolean
  role: string | UserRole | null
}

export interface Data {
  code: number
  message: string
  refId: string
  data: DataInner
  status: KYCStatusArray
  token: string
}

export type ISendOtpResponseData = {
  code: number
  message: string
  refId?: string
  data: Data
  method: 'login' | 'signup'
}

export type IResponse = {
  code: number
  status: 'OK' | any
  error: boolean
}

export type QueryParams = {
  limit: number
}

export interface Campaign {
  _id: string
  registeredCompanyName: string
  shortDescription: string
  banner: string
  logo: string
  tags: string[]
  dealTerms: {
    typeOfSecurity: string
    valuation: number
    minimumInvestment: number
    targetAmount: number
    // Add any other properties as needed
  }
  totalRaised: number
}

export interface HeaderLink {
  dashboard: (
    | {
    name: string
    icon: ({ ...props }: { [p: string]: any }) => JSX.Element
    link: string
  }
    | {
    name: string
    icon: JSX.Element
    link: string
  }
    )[]
  normal: {
    name: string
    to: string
  }[]
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error'

interface TotalAmount {
  code: number
  data: {
    _id: string
    totalamount: number
  }
}

export interface ITotalInvestmentResponse {
  code: number
  status: string | 'OK'
  data: [] | TotalAmount[]
  error: boolean
}

export interface IInvestmentItem {
  amountBreakdown: {
    totalamount: number
    amount: number
    convenienceFee: number
    tds: number
    gst: number
  }
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
}

export interface IInvestorSlice {
  totalamount: number
  investedStartups: {
    pending: IInvestmentItem[]
    approved: IInvestmentItem[]
  }
}

export interface IInvestmentDataResponse {
  code: number
  status: string
  data: {
    code: number
    data: IInvestmentItem[]
    message: string
  }
  error: boolean
}

export interface ILogoutStatus {
  status: number
  data: {
    status: boolean
    message: string
  }
}

export interface VerifyOtpErrorResponseDetail {
  message: string
  path: string[]
  type: string
  context: {
    label: string
    key: string
  }
}

export interface VerifyOtpErrorResponseData {
  _original: Object
  details: VerifyOtpErrorResponseDetail[]
}

export interface VerifyOtpEResponseData {
  code: number
  httpCode: number
  error: boolean
  message: string
  data: VerifyOtpErrorResponseData
}

export interface VerifyInvalid {
  status: string
  message: string
}

export interface VerifyOtpServerResponse {
  code: number
  status: string
  data: ISendOtpResponseData | VerifyOtpEResponseData | VerifyInvalid
  error: boolean
}

export type PaymentData = {
  order_amount: number
  order_currency: string
  order_note: string
  customer_id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  startupId: string
  amount: number
  dateOfpayment?: string
  reference?: string
  tds: number
  convenienceFee: number
  gst: number
}
