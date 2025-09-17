import { User, AthleteProfile, CoachProfile, Opportunity, PerformanceMetric, Achievement } from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'athlete-1',
    email: 'john.athlete@example.com',
    name: 'John Smith',
    roles: ['athlete'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z',
    profileCompleted: true,
  },
  {
    id: 'coach-1',
    email: 'sarah.coach@example.com',
    name: 'Sarah Johnson',
    roles: ['coach'],
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-22T12:00:00Z',
    profileCompleted: true,
  },
  {
    id: 'dual-role-1',
    email: 'mike.dual@example.com',
    name: 'Mike Williams',
    roles: ['athlete', 'coach'],
    createdAt: '2024-01-05T14:00:00Z',
    updatedAt: '2024-01-23T09:15:00Z',
    profileCompleted: true,
  },
];

// Mock Athlete Profiles
export const mockAthleteProfiles: AthleteProfile[] = [
  {
    userId: 'athlete-1',
    sport: 'Basketball',
    position: 'Point Guard',
    level: 'semi-professional',
    yearsExperience: 8,
    physicalMetrics: {
      height: 188, // cm
      weight: 82, // kg
      bodyFatPercentage: 12,
      muscleMass: 45,
    },
    biometrics: {
      restingHeartRate: 52,
      maxHeartRate: 195,
      vo2Max: 58,
      bloodPressure: {
        systolic: 120,
        diastolic: 80,
      },
    },
    performanceMetrics: [],
    achievements: [],
    videos: [],
    visibility: 'public',
    profileCompletion: 85,
    verified: true,
    location: {
      country: 'USA',
      region: 'California',
      city: 'Los Angeles',
    },
    availability: {
      forTraining: true,
      forCompetition: true,
      forRelocation: true,
    },
    goals: [
      'Professional basketball career',
      'College scholarship',
      'National team selection',
    ],
    biography: 'Dedicated point guard with exceptional court vision and leadership skills. Looking to take my game to the next level.',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z',
  },
];

// Mock Coach Profiles
export const mockCoachProfiles: CoachProfile[] = [
  {
    userId: 'coach-1',
    organization: 'Elite Basketball Academy',
    role: 'Head Coach',
    sportsOfInterest: ['Basketball', 'Track & Field'],
    levelsOfInterest: ['amateur', 'semi-professional', 'professional'],
    regions: ['USA', 'Canada'],
    yearsExperience: 15,
    certifications: [
      {
        id: 'cert-1',
        name: 'USA Basketball Coaching License',
        organization: 'USA Basketball',
        dateObtained: '2020-03-15',
        verified: true,
      },
    ],
    specializations: ['Player Development', 'Team Strategy', 'Youth Coaching'],
    biography: 'Experienced basketball coach passionate about developing young talent and building championship teams.',
    contactPreferences: {
      email: true,
      phone: true,
      messaging: true,
    },
    availability: {
      hours: '9AM-6PM PST',
      timezone: 'America/Los_Angeles',
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    savedAthletes: ['athlete-1'],
    savedSearches: [],
    resourceAllocation: [],
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-22T12:00:00Z',
  },
];

// Mock Opportunities
export const mockOpportunities: Opportunity[] = [
  {
    id: 'opp-1',
    coachId: 'coach-1',
    title: 'Basketball Scholarship Program',
    description: 'Full scholarship opportunity for talented basketball players aged 18-22.',
    sport: 'Basketball',
    position: 'Any',
    level: 'semi-professional',
    location: {
      type: 'on-site',
      country: 'USA',
      region: 'California',
      city: 'Los Angeles',
    },
    deadline: '2024-03-15',
    requirements: [
      'High school diploma or equivalent',
      'Minimum 3.0 GPA',
      'Basketball experience',
      'Physical fitness test',
    ],
    benefits: [
      'Full tuition coverage',
      'Housing allowance',
      'Professional coaching',
      'Strength and conditioning program',
    ],
    tags: ['scholarship', 'basketball', 'college', 'california'],
    status: 'open',
    applicants: [],
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
  },
  {
    id: 'opp-2',
    coachId: 'coach-1',
    title: 'Summer Training Camp',
    description: 'Intensive 6-week training camp for elite athletes.',
    sport: 'Basketball',
    level: 'professional',
    location: {
      type: 'on-site',
      country: 'USA',
      region: 'Florida',
      city: 'Miami',
    },
    deadline: '2024-04-01',
    requirements: [
      'Proven track record',
      'Medical clearance',
      'Commitment to full program',
    ],
    benefits: [
      'Elite coaching staff',
      'State-of-the-art facilities',
      'Nutrition program',
      'Performance analytics',
    ],
    tags: ['training', 'elite', 'summer', 'florida'],
    status: 'open',
    applicants: [],
    createdAt: '2024-01-18T14:00:00Z',
    updatedAt: '2024-01-18T14:00:00Z',
  },
];

// Mock Performance Metrics
export const mockPerformanceMetrics: PerformanceMetric[] = [
  {
    id: 'metric-1',
    athleteId: 'athlete-1',
    metric: 'Sprint 40 yards',
    value: 4.8,
    unit: 'seconds',
    verified: true,
    recordedAt: '2024-01-15T10:00:00Z',
    context: 'training',
  },
  {
    id: 'metric-2',
    athleteId: 'athlete-1',
    metric: 'Vertical Jump',
    value: 32,
    unit: 'inches',
    verified: false,
    recordedAt: '2024-01-18T15:30:00Z',
    context: 'training',
  },
  {
    id: 'metric-3',
    athleteId: 'athlete-1',
    metric: 'Free Throw Percentage',
    value: 85,
    unit: 'percent',
    verified: true,
    recordedAt: '2024-01-20T12:00:00Z',
    context: 'competition',
  },
];

// Mock Achievements
export const mockAchievements: Achievement[] = [
  {
    id: 'achievement-1',
    title: 'State Championship MVP',
    description: 'Most Valuable Player in the State Basketball Championship',
    date: '2023-12-15',
    level: 'regional',
    verified: true,
    evidence: ['certificate-url', 'news-article-url'],
  },
  {
    id: 'achievement-2',
    title: 'All-Conference First Team',
    description: 'Selected for the All-Conference First Team for outstanding performance',
    date: '2023-11-20',
    level: 'regional',
    verified: true,
  },
];

export const mockDatabase = {
  users: mockUsers,
  athleteProfiles: mockAthleteProfiles,
  coachProfiles: mockCoachProfiles,
  opportunities: mockOpportunities,
  performanceMetrics: mockPerformanceMetrics,
  achievements: mockAchievements,
};