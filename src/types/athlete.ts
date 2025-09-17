export interface PhysicalMetrics {
  height: number; // cm
  weight: number; // kg
  bodyFatPercentage?: number;
  muscleMass?: number;
}

export interface Biometrics {
  restingHeartRate?: number;
  maxHeartRate?: number;
  vo2Max?: number;
  bloodPressure?: {
    systolic: number;
    diastolic: number;
  };
}

export interface PerformanceMetric {
  id: string;
  athleteId: string;
  metric: string;
  value: number;
  unit: string;
  verified: boolean;
  recordedAt: string;
  context?: string; // training, competition, etc.
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  level: 'local' | 'regional' | 'national' | 'international';
  verified: boolean;
  evidence?: string[]; // URLs to certificates, videos, etc.
}

export interface VideoAsset {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  duration: number;
  tags: string[];
  visibility: 'public' | 'coaches' | 'private';
  uploadedAt: string;
  segments?: {
    startTime: number;
    endTime: number;
    label: string;
  }[];
}

export interface AthleteProfile {
  userId: string;
  sport: string;
  position: string;
  level: 'amateur' | 'semi-professional' | 'professional' | 'elite';
  yearsExperience: number;
  physicalMetrics: PhysicalMetrics;
  biometrics: Biometrics;
  performanceMetrics: PerformanceMetric[];
  achievements: Achievement[];
  videos: VideoAsset[];
  visibility: 'public' | 'coaches-only' | 'private';
  profileCompletion: number; // percentage
  verified: boolean;
  location: {
    country: string;
    region: string;
    city?: string;
  };
  availability: {
    forTraining: boolean;
    forCompetition: boolean;
    forRelocation: boolean;
  };
  goals: string[];
  biography: string;
  createdAt: string;
  updatedAt: string;
}

export interface TrainingPlan {
  id: string;
  athleteId: string;
  coachId?: string;
  title: string;
  description: string;
  duration: number; // weeks
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'elite';
  sessions: TrainingSession[];
  aiGenerated: boolean;
  createdAt: string;
}

export interface TrainingSession {
  id: string;
  title: string;
  description: string;
  duration: number; // minutes
  exercises: Exercise[];
  scheduledDate?: string;
  completed: boolean;
  notes?: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
  sets?: number;
  reps?: number;
  duration?: number; // seconds
  intensity?: string;
  restTime?: number; // seconds
  instructions: string;
}