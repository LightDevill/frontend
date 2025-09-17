export const routes = {
  // Public routes
  home: '/',
  features: '/features',
  about: '/about',
  athlete: '/athlete',
  coaches: '/coach',
  
  // Auth routes
  login: '/auth/login',
  signup: '/auth/signup',
  forgotPassword: '/auth/forgot-password',
  resetPassword: '/auth/reset-password',
  
  // Athlete routes
  athleteDashboard: '/athlete/dashboard',
  athleteOnboarding: '/athlete/onboarding',
  athleteProfile: '/athlete/profile',
  athletePerformance: '/athlete/performance',
  athleteOpportunities: '/athlete/opportunities',
  athleteVideos: '/athlete/videos',
  athleteTraining: '/athlete/training',
  athleteSettings: '/athlete/settings',
  
  // Coach routes
  coachDashboard: '/coach/dashboard',
  coachOnboarding: '/coach/onboarding',
  coachProfile: '/coach/profile',
  coachSearch: '/coach/search',
  coachShortlists: '/coach/shortlists',
  coachAnalytics: '/coach/analytics',
  coachOpportunities: '/coach/opportunities',
  coachResources: '/coach/resources',
  coachSettings: '/coach/settings',
} as const;

export const getRedirectPath = (role: string, completedOnboarding: boolean = true) => {
  if (!completedOnboarding) {
    return role === 'athlete' ? routes.athleteOnboarding : routes.coachOnboarding;
  }
  return role === 'athlete' ? routes.athleteDashboard : routes.coachDashboard;
};

export const isProtectedRoute = (pathname: string): boolean => {
  return pathname.startsWith('/athlete/') || pathname.startsWith('/coach/');
};

export const isAuthRoute = (pathname: string): boolean => {
  return pathname.startsWith('/auth/');
};

export const isPublicRoute = (pathname: string): boolean => {
  const publicPaths = ['/', '/features', '/about', '/athlete', '/coach'];
  return publicPaths.includes(pathname) || pathname.startsWith('/auth/');
};