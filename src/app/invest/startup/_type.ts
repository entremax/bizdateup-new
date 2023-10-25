export interface KeyHighlights {
  keyHighlight1: string;
  keyHighlight2: string;
  keyHighlight3: string;
}

export interface DealTerms {
  typeOfSecurity: string;
  valuation: number;
  minimumInvestment: number;
  targetAmount: number;
}

export interface Portfolio {
  currentAmount: string;
  currentValuation: string;
  expectedValuation: string;
  currentRevenue: string;
  ARR: string;
  MRR: string;
  nextRound: string;
  profitable: string;
  numberOfShares: string;
  shareprice: string;
  exitStrategy: string;
  certificate1: string;
  certificate2: string;
}

export interface ActiveStatus {
  status: string;
  endDate: string;
  startDate: string;
}

export interface TeamMember {
  profileImage: string;
  fullName: string;
  designation: string;
  description: string;
  linkedinUrl: string;
  _id: string;
}

export interface FAQ {
  question: string;
  answer: string;
  _id: string;
}

export interface DueDiligenceFile {
  name: string;
  _id: string;
}

export interface StartupData {
  code: number;
  data: {
    keyHighlights: KeyHighlights;
    dealTerms: DealTerms;
    portfolio: Portfolio;
    activeStatus: ActiveStatus;
    _id: string;
    refId: string;
    founderFirstName: string;
    founderLastName: string;
    founderLinkedinUrl: string;
    registeredCompanyName: string;
    registeredStartupName: string;
    companyName: string;
    companyLinkedinUrl: string;
    website: string;
    previousFundraisingRounds: string;
    productDescription: string;
    tractionDescription: string;
    revenue: number;
    teamCapacity: number;
    companyBased: string;
    startupSector: string;
    companyDetails: string;
    email: string;
    phone: string;
    sector: string;
    stage: string;
    shortDescription: string;
    banner: string;
    logo: string;
    tags: string[];
    youtubeVideoUrl: string;
    pitch: string;
    raisedFund: string;
    totalRaised: number;
    status: string;
    profileComplete: string;
    teamMembers: TeamMember[];
    faq: FAQ[];
    mentors: any[]; // Empty for now
    dueDiligenceFiles: DueDiligenceFile[];
    events: any[]; // Empty for now
    created_at: string;
    __v: number;
  };
  message: string;
}

