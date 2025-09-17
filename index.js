const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'athleteone-secret-key';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (replace with real database in production)
const database = {
  users: [
    {
      id: 'user-1',
      email: 'john.athlete@example.com',
      name: 'John Athlete',
      passwordHash: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password123
      roles: ['athlete'],
      createdAt: new Date('2024-01-01').toISOString(),
      updatedAt: new Date('2024-01-01').toISOString(),
      profileCompleted: true,
    },
    {
      id: 'user-2',
      email: 'sarah.coach@example.com',
      name: 'Sarah Coach',
      passwordHash: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password123
      roles: ['coach'],
      createdAt: new Date('2024-01-01').toISOString(),
      updatedAt: new Date('2024-01-01').toISOString(),
      profileCompleted: true,
    },
    {
      id: 'user-3',
      email: 'mike.dual@example.com',
      name: 'Mike Dual',
      passwordHash: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password123
      roles: ['athlete', 'coach'],
      createdAt: new Date('2024-01-01').toISOString(),
      updatedAt: new Date('2024-01-01').toISOString(),
      profileCompleted: true,
    }
  ],
  athleteProfiles: [],
  coachProfiles: [],
  opportunities: [
    {
      id: 'opp-1',
      title: 'College Basketball Scholarship',
      sport: 'Basketball',
      level: 'collegiate',
      organization: 'State University',
      description: 'Full scholarship opportunity for talented basketball players',
      requirements: ['Minimum GPA 3.0', 'State-level competition experience'],
      location: 'California, USA',
      applicationDeadline: '2024-12-31',
      createdAt: new Date().toISOString()
    },
    {
      id: 'opp-2',
      title: 'Professional Soccer Training Camp',
      sport: 'Soccer',
      level: 'professional',
      organization: 'Elite Soccer Academy',
      description: 'Intensive training camp for aspiring professional soccer players',
      requirements: ['Age 18-25', 'Regional competition experience'],
      location: 'Texas, USA',
      applicationDeadline: '2024-11-30',
      createdAt: new Date().toISOString()
    }
  ],
  performanceMetrics: [],
  achievements: []
};

// Helper functions
const findUserByEmail = (email) => database.users.find(user => user.email === email);
const createMockSession = (user, role) => ({
  token: jwt.sign({ userId: user.id, role }, JWT_SECRET, { expiresIn: '7d' }),
  userId: user.id,
  role,
  expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = findUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password'
      });
    }

    // For demo purposes, accept any password that's 'password123'
    // In production, use bcrypt.compare(password, user.passwordHash)
    if (password !== 'password123') {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password'
      });
    }

    const session = createMockSession(user, user.roles[0]);
    const { passwordHash, ...userWithoutPassword } = user;

    res.json({
      success: true,
      data: {
        user: userWithoutPassword,
        session
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, password, name, role } = req.body;
    
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: 'User with this email already exists'
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = {
      id: `user-${uuidv4()}`,
      email,
      name,
      passwordHash,
      roles: [role],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      profileCompleted: false
    };

    database.users.push(newUser);
    
    const session = createMockSession(newUser, role);
    const { passwordHash: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      success: true,
      data: {
        user: userWithoutPassword,
        session
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

app.post('/api/auth/logout', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'Logged out successfully'
  });
});

app.post('/api/auth/refresh', authenticateToken, (req, res) => {
  const user = database.users.find(u => u.id === req.user.userId);
  if (!user) {
    return res.status(401).json({
      success: false,
      error: 'User not found'
    });
  }

  const newSession = createMockSession(user, req.user.role);
  res.json({
    success: true,
    data: newSession
  });
});

// User routes
app.get('/api/users/:userId', authenticateToken, (req, res) => {
  const { userId } = req.params;
  const user = database.users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }

  const { passwordHash, ...userWithoutPassword } = user;
  res.json({
    success: true,
    data: userWithoutPassword
  });
});

// Opportunities routes
app.get('/api/opportunities', authenticateToken, (req, res) => {
  const { sport, level, page = 1, limit = 10 } = req.query;
  
  let filteredOpportunities = [...database.opportunities];
  
  if (sport) {
    filteredOpportunities = filteredOpportunities.filter(opp => 
      opp.sport.toLowerCase().includes(sport.toLowerCase())
    );
  }
  
  if (level) {
    filteredOpportunities = filteredOpportunities.filter(opp => opp.level === level);
  }
  
  // Pagination
  const startIndex = (parseInt(page) - 1) * parseInt(limit);
  const endIndex = startIndex + parseInt(limit);
  const paginatedOpportunities = filteredOpportunities.slice(startIndex, endIndex);
  
  res.json({
    success: true,
    data: paginatedOpportunities,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: filteredOpportunities.length,
      totalPages: Math.ceil(filteredOpportunities.length / parseInt(limit))
    }
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`AthleteOne backend server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});