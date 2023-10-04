export type ISendOtpResponseData = {
  code: number,
  message: string,
  refId: string,
  data?: {
    [key: string]: any
  },
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
