export interface EndpointProps {
  baseUrlExist?: boolean
  params?: ICheckInterest
  data?: any
  token?: string
}
export interface ICheckInterest {
  [key: string]: string
  startupId: string
  investorId: string
}
