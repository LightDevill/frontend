import { http, HttpResponse } from 'msw';
import { mockDatabase } from './seed-data';
import { LoginCredentials, SignupData, User, Session } from '../types';

// Helper function to simulate network delay
const delay = (ms: number = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to find user by email
const findUserByEmail = (email: string) => {
  return mockDatabase.users.find(user => user.email === email);
};

// Helper function to create a mock session
const createMockSession = (user: User, role: string): Session => ({
  token: `mock-jwt-${Date.now()}`,
  userId: user.id,
  role: role as any,
  expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
});

export const handlers = [
  // Authentication endpoints
  http.post('/api/auth/login', async ({ request }) => {
    await delay(1000);
    
    const { email, password } = await request.json() as LoginCredentials;
    
    // Simple mock authentication - in real app, would verify password
    const user = findUserByEmail(email);
    
    if (!user || password !== 'password123') {
      return HttpResponse.json({
        success: false,
        error: 'Invalid email or password',
      }, { status: 401 });
    }
    
    const session = createMockSession(user, user.roles[0]);
    
    return HttpResponse.json({
      success: true,
      data: {
        user,
        session,
      },
    });
  }),

  http.post('/api/auth/signup', async ({ request }) => {
    await delay(1500);
    
    const signupData = await request.json() as SignupData;
    
    // Check if user already exists
    const existingUser = findUserByEmail(signupData.email);
    if (existingUser) {
      return HttpResponse.json({
        success: false,
        error: 'User with this email already exists',
      }, { status: 409 });
    }
    
    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      email: signupData.email,
      name: signupData.name,
      roles: [signupData.role],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      profileCompleted: false,
    };
    
    // Add to mock database
    mockDatabase.users.push(newUser);
    
    const session = createMockSession(newUser, signupData.role);
    
    return HttpResponse.json({
      success: true,
      data: {
        user: newUser,
        session,
      },
    }, { status: 201 });
  }),

  http.post('/api/auth/logout', async () => {
    await delay(300);
    
    return HttpResponse.json({
      success: true,
      message: 'Logged out successfully',
    });
  }),

  http.post('/api/auth/refresh', async ({ request }) => {
    await delay(500);
    
    // In real app, would validate refresh token
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      return HttpResponse.json({
        success: false,
        error: 'No authorization header',
      }, { status: 401 });
    }
    
    // Mock refresh - extend session
    const mockSession: Session = {
      token: `mock-jwt-${Date.now()}`,
      userId: 'current-user-id',
      role: 'athlete',
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    };
    
    return HttpResponse.json({
      success: true,
      data: mockSession,
    });
  }),

  // User profile endpoints
  http.get('/api/users/:userId', async ({ params }) => {
    await delay(500);
    
    const { userId } = params;
    const user = mockDatabase.users.find(u => u.id === userId);
    
    if (!user) {
      return HttpResponse.json({
        success: false,
        error: 'User not found',
      }, { status: 404 });
    }
    
    return HttpResponse.json({
      success: true,
      data: user,
    });
  }),

  // Athlete profile endpoints
  http.get('/api/athletes/:userId', async ({ params }) => {
    await delay(500);
    
    const { userId } = params;
    const profile = mockDatabase.athleteProfiles.find(p => p.userId === userId);
    
    if (!profile) {
      return HttpResponse.json({
        success: false,
        error: 'Athlete profile not found',
      }, { status: 404 });
    }
    
    return HttpResponse.json({
      success: true,
      data: profile,
    });
  }),

  // Coach profile endpoints
  http.get('/api/coaches/:userId', async ({ params }) => {
    await delay(500);
    
    const { userId } = params;
    const profile = mockDatabase.coachProfiles.find(p => p.userId === userId);
    
    if (!profile) {
      return HttpResponse.json({
        success: false,
        error: 'Coach profile not found',
      }, { status: 404 });
    }
    
    return HttpResponse.json({
      success: true,
      data: profile,
    });
  }),

  // Opportunities endpoints
  http.get('/api/opportunities', async ({ request }) => {
    await delay(500);
    
    const url = new URL(request.url);
    const sport = url.searchParams.get('sport');
    const level = url.searchParams.get('level');
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    
    let filteredOpportunities = [...mockDatabase.opportunities];
    
    if (sport) {
      filteredOpportunities = filteredOpportunities.filter(opp => 
        opp.sport.toLowerCase().includes(sport.toLowerCase())
      );
    }
    
    if (level) {
      filteredOpportunities = filteredOpportunities.filter(opp => opp.level === level);
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedOpportunities = filteredOpportunities.slice(startIndex, endIndex);
    
    return HttpResponse.json({
      success: true,
      data: paginatedOpportunities,
      pagination: {
        page,
        limit,
        total: filteredOpportunities.length,
        totalPages: Math.ceil(filteredOpportunities.length / limit),
      },
    });
  }),

  // Performance metrics endpoints
  http.get('/api/athletes/:userId/metrics', async ({ params }) => {
    await delay(500);
    
    const { userId } = params;
    const metrics = mockDatabase.performanceMetrics.filter(m => m.athleteId === userId);
    
    return HttpResponse.json({
      success: true,
      data: metrics,
    });
  }),

  // Achievements endpoints
  http.get('/api/athletes/:userId/achievements', async () => {
    await delay(300);
    
    // Note: userId from params would be used in real API to fetch user-specific achievements
    // In this mock, achievements are not user-specific, but in real app they would be
    
    return HttpResponse.json({
      success: true,
      data: mockDatabase.achievements,
    });
  }),
];