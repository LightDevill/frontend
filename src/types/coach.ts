export interface CoachProfile {
  userId: string;
  organization?: string;
  role: string; // head coach, assistant coach, trainer, etc.
  sportsOfInterest: string[];
  levelsOfInterest: string[]; // amateur, semi-professional, etc.
  regions: string[]; // areas they're interested in
  yearsExperience: number;
  certifications: Certification[];
  specializations: string[];
  biography: string;
  contactPreferences: {
    email: boolean;
    phone: boolean;
    messaging: boolean;
  };
  availability: {
    hours: string; // e.g., "9AM-5PM EST"
    timezone: string;
    daysOfWeek: string[];
  };
  savedAthletes: string[]; // athlete IDs
  savedSearches: SavedSearch[];
  resourceAllocation: ResourceAllocation[];
  createdAt: string;
  updatedAt: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  dateObtained: string;
  expiryDate?: string;
  verified: boolean;
  certificateUrl?: string;
}

export interface SavedSearch {
  id: string;
  name: string;
  criteria: SearchCriteria;
  alertsEnabled: boolean;
  createdAt: string;
  lastRun?: string;
}

export interface SearchCriteria {
  sports: string[];
  positions: string[];
  levels: string[];
  regions: string[];
  ageRange?: {
    min: number;
    max: number;
  };
  physicalMetrics?: {
    heightRange?: { min: number; max: number };
    weightRange?: { min: number; max: number };
  };
  performanceMetrics?: {
    [key: string]: {
      min?: number;
      max?: number;
      unit: string;
    };
  };
  availability?: {
    forTraining?: boolean;
    forCompetition?: boolean;
    forRelocation?: boolean;
  };
  verifiedOnly: boolean;
}

export interface ResourceAllocation {
  id: string;
  athleteId: string;
  type: 'equipment' | 'time' | 'scholarship' | 'tryout' | 'other';
  description: string;
  amount?: number;
  currency?: string;
  startDate: string;
  endDate?: string;
  status: 'proposed' | 'approved' | 'active' | 'completed' | 'cancelled';
  notes: string;
  auditTrail: {
    action: string;
    timestamp: string;
    userId: string;
    notes?: string;
  }[];
  createdAt: string;
}

export interface Opportunity {
  id: string;
  coachId: string;
  title: string;
  description: string;
  sport: string;
  position?: string;
  level: string;
  location: {
    type: 'on-site' | 'remote' | 'hybrid';
    country?: string;
    region?: string;
    city?: string;
  };
  deadline: string;
  requirements: string[];
  benefits: string[];
  tags: string[];
  status: 'open' | 'closed' | 'filled';
  applicants: string[]; // athlete IDs
  createdAt: string;
  updatedAt: string;
}