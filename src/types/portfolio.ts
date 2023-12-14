type Portfolio = {
  currentAmount: string
  currentValuation: string
  expectedValuation: string
  currentRevenue: string
  ARR: string
  MRR: string
  nextRound: string
  profitable: string
  shareprice: string
  exitStrategy: string
  certificate1: string
  certificate2: string
  numberOfShares: string
  certificates: string[]
}

type StartupEvents = {
  banner: string
  date: string
  time: string
  url: string
  _id: string
}

type DealTerms = {
  typeOfSecurity: string
  valuation: number
  discount: number
  minimumInvestment: number
  targetAmount: number
}

interface InvestedDetails {
  investedAmount: number
  investedDate: string
}

export type InvestedStartup = {
  founderFirstName: string
  founderLastName: string
  companyBased: string
  startupSector: string
  registeredCompanyName: string
  sector: string
  shortDescription: string
  banner: string
  logo: string
  portfolio: Portfolio
  events: StartupEvents[]
  tags: string[]
  website: string
  youtubeVideoUrl: string
  dealTerms: DealTerms
  totalRaised: number
  revenue: number
  _id: string
  investedAmount: number
  investedDate: string
  legalArray: string[]
  investedDetails: InvestedDetails[]
}

type TotalInvestmentByDate = {
  [date: string]: number
}

type PercentageByCompany = {
  [company: string]: number
}

type TotalInvestmentPercentageByType = {
  [type: string]: number
}

type LegalDoc = {
  _id: string
  legal: string
}

export type PortfolioData = {
  totalInvestment: { _id: null; totalamount: number }[]
  investedStartupDetails: InvestedStartup[]
  totalInvestmentByDate: TotalInvestmentByDate
  percentageByCompany: PercentageByCompany
  totalInvestmentPercentageByType: TotalInvestmentPercentageByType
  legalDocs: LegalDoc[]
}

export type InvestmentPortfolioResponse = {
  code: number
  status: string
  data: {
    code: number
    data: PortfolioData
    message: string
    error: boolean
  }
}
