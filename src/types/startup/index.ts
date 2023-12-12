import { StartupData } from '@/types/invest'

export type IStartupUpdatesResponse = {
  code: number | string
  data: {
    code: number | string
    data: [] | StartupUpdate[]
  }
}
export type StartupUpdate = {
  _id: string
  startup: string
  logo: string
  company_name: string
  title: string
  created_at: string
}

export interface IStartupDetails {
  founderFirstName: string | any
  founderLastName: string | any
  emailOrPhone: string | any
  phone: string | any
  founderLinkedinUrl: string | any
  registeredCompanyName: string | any
  companyName: string | any
  companyLinkedinUrl: string | any
  website: string | any
  productDescription: string | any
  previousFundraisingRounds: string | any
  tractionDescription: string | any
  revenue: string | any
  teamCapacity: string | any
  companyBased: string | any
  sector: string | any
  pitchUpload: string | any
  refer: string | any
}

export type StartupTypes =
  | 'all'
  | 'ccds'
  | 'ccps'
  | 'equity'
  | 'startup'
  | 'closed'
export type StartupParameters = 'startup' | 'CCPS' | 'CCDS' | 'equity'

export type IStartupReducer = {
  updates: StartupUpdate[]
  search: StartupData[]
  startups: {
    all: StartupData[]
    startup: StartupData[]
    ccps: StartupData[]
    ccds: StartupData[]
    equity: StartupData[]
    closed: StartupData[]
  }
}
