// noinspection JSUnusedGlobalSymbols
import { StartupData } from '@/types/invest'

export type UserRole = 'investor' | 'admin' | 'startup'

export enum Role {
  startup = 'startup',
  investor = 'investor',
}

export interface Aadhar {
  aadharNo: string,
  aadharImageFront:string,
  aadharImageBack:string,
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
  panNo: string,
  panImageFront:string,
  panImageBack:string,
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


// types of investor user data
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
  role: 'investor'
  created_at: string
  __v: number
  code: number
  refer: null | string
  profilePic: string
  acknowledgement: 'false' | 'true'
}

// types of startup user data 
//TODO - Remove this from usage
export interface DataStartup extends StartupData{}


export interface dealTerms {
  typeOfSecurity: string
  valuation: number
  minimumInvestment: number
  targetAmount: number
  discount: number
  // Add any other properties as needed
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

export interface BaseAuthUserState {
  token: string | null
  refId: string | null
  userId: string | null
  temp_auth_medium: string | null
  user: DataInner | StartupData | null
  isVerified: boolean
  riskAccepted: boolean
  kycCompletionPercentage: number
  kycStatus: KYCStatusArray
  premiumMember: boolean
  role: 'investor'|'startup'|undefined
}

export interface InvestorUserState extends BaseAuthUserState {
  token: string | null
  userId: string | null
  refId: string | null
  temp_auth_medium: string | null
  user: DataInner | null
  riskAccepted: boolean
  premiumMember: boolean
  role: 'investor'
}

export interface StartupUserState extends BaseAuthUserState {
  token: string | null
  userId: string | null
  user: StartupData | null
  premiumMember: false
  role: 'startup'
}

export interface Data {
  code: number
  message: string
  refId: string | null
  data: DataInner | StartupData
  status?: KYCStatusArray
  token: string | null
}

export type ISendOtpResponseData = {
  code: number
  message: string
  refId?: string
  data: Data
  method: 'login' | 'signup'
  referedUrl: string | null
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
  amountToInvest: number
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



export type BaseUserData = {
  role: 'investor' | 'startup' | null
  refId: string
  status: KYCStatusArray
  token: string
  user: DataInner | StartupData | null
}

export type InvestmentType = {
  createdAt: Date
  investorName: string
  type: string
  status: string
  amountBreakdown:
    | {
        totalamount: number
        amount: number
        convenienceFee: number
        tds: number
        gst: number
      }
    | {}
}

export type StartupInvestment = [InvestmentType] | []

export interface InvestorUserData extends BaseUserData {
  role: 'investor'
  user: DataInner | null
}

export interface StartupUserData extends BaseUserData {
  role: 'startup'
  user: StartupData | null
}


// Redux User Payload
export interface BaseUserPayload {
  token: string | null
  userData: DataInner | StartupData
  refId: string | null
  premiumMember?: boolean
  role: 'investor' | 'startup'
}

export interface InvestorUserPayload extends BaseUserPayload {
  userData: DataInner
  kycStatus: KYCStatusArray
  premiumMember: boolean
  role: 'investor'
}

export interface StartupUserPayload extends BaseUserPayload {
  userData: StartupData
  premiumMember: false
  role: 'startup'
}
