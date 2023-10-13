export interface Aadhar {
  aadharNo: string;
  status: string;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface Pan {
  panNo: string;
  status: string;
}

export interface Other {
  occupation: string;
  investAmount: string;
  sector: string[];
  investedFund: string;
  linkedlnUrl: string;
  status: string;
}

export interface Bank {
  bankName: string;
  accountType: string;
  accountNumber: string;
  ifsc: string;
  bankReference: string;
  registeredName: string;
  status: string;
}

interface Membership {
  isMember: string;
  amount: number;
}

export interface DataInner {
  aadhar: Aadhar;
  address: Address;
  pan: Pan;
  other: Other;
  bank: Bank;
  membership: Membership;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  gender: string;
  linkedlnUrl: string;
  provider: string;
  providerId: string;
  isAccelerator: boolean;
  status: string;
  role: string;
  created_at: string;
  __v: number;
  code: number;
  refer: null | string;
}

export interface IInvestorData {
  aadhar: Aadhar;
  address: Address;
  pan: Pan;
  other: Other;
  bank: Bank;
  membership: Membership;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  gender: string;
  LinkedInUrl: string;
  provider: string;
  providerId: string;
  isAccelerator: boolean;
  status: string;
  role: string;
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
export type KYCStatusArray = KYCStatus[];

export interface AuthUserState {
  token: string;
  investorUserId: string;
  refId: string;
  temp_auth_medium: string;
  user: DataInner;
  kycStatus: KYCStatusArray
  isVerified: boolean;
  kycCompletionPercentage:number;
}
export interface Data {
  code: number;
  message: string;
  refId: string;
  data: DataInner;
  status: KYCStatusArray
  token: string;
}

export type ISendOtpResponseData = {
  code: number,
  message: string,
  refId?: string,
  data: Data,
  method: 'login' | 'signup'
}

export type IResponse = {
  code: number,
  status: 'OK' | any,
  error: boolean
}

export type QueryParams = {
  limit: number;
};

export interface Campaign {
  _id: string;
  registeredCompanyName: string;
  shortDescription: string;
  banner: string;
  logo: string;
  tags: string[];
  dealTerms: {
    typeOfSecurity: string;
    valuation: number;
    minimumInvestment: number;
    targetAmount: number;
    // Add any other properties as needed
  };
  totalRaised: number;
}
export interface HeaderLink {
  dashboard: ({
    name: string;
    icon: ({ ...props }: { [p: string]: any }) => JSX.Element;
    link: string;
  } | {
    name: string;
    icon: JSX.Element;
    link: string;
  })[];
  normal: {
    name: string;
    to: string;
  }[];
}
export type NotificationType = 'success' | 'info' | 'warning' | 'error';