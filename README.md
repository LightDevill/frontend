# AthleteOne - Authentication & Dashboard System

A comprehensive authentication and role-based dashboard system for connecting athletes and coaches through AI-powered tools.

## 🚀 Features

### Authentication System
- **Login/Signup** with form validation using Zod schemas
- **Multi-role support** (Athlete, Coach) with role switching
- **Protected routes** with role-based access control
- **Session management** with secure token storage
- **Password strength validation** with visual feedback
- **Remember me** functionality
- **Role selection** for users with multiple roles

### User Interface
- **Responsive design** with Tailwind CSS
- **Accessible components** following WCAG 2.2 AA standards
- **Dark/light mode** support
- **Toast notifications** for user feedback
- **Loading states** and error handling
- **Modern UI primitives** (Input, Select, Dialog, Tabs, etc.)

### Dashboard Features

#### Athlete Dashboard
- **Profile completion** tracking with progress indicators
- **Performance metrics** visualization
- **Opportunity matching** based on athlete profile
- **Quick actions** for common tasks
- **Video highlights** management
- **Training plans** and progress tracking
- **Profile views** and engagement analytics

#### Coach Dashboard
- **Athlete discovery** with advanced search filters
- **Shortlisted athletes** management
- **Saved searches** with alert notifications
- **Analytics** and performance tracking
- **Resource allocation** tools
- **Opportunity posting** and management

### Technical Implementation
- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **React Router 7** for client-side routing
- **React Hook Form** with Zod validation
- **Headless UI** for accessible components
- **MSW (Mock Service Worker)** for API mocking
- **Vitest** for unit testing
- **ESLint** and **Prettier** for code quality

## 🛠️ Technology Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite 4.4+
- **Routing:** React Router 7.8.2
- **Styling:** Tailwind CSS 3.3
- **Forms:** React Hook Form + Zod
- **UI Components:** Headless UI + Heroicons
- **Testing:** Vitest + Testing Library
- **Mocking:** MSW (Mock Service Worker)

## 📁 Project Structure

```
src/
├── components/
│   ├── app/                 # App-specific components
│   │   ├── AppLayout.tsx    # Main app layout
│   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   └── Topbar.tsx       # Top navigation bar
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx       # Button component
│   │   ├── Input.tsx        # Input component with validation
│   │   ├── Select.tsx       # Select dropdown
│   │   ├── Toast.tsx        # Toast notification system
│   │   ├── Dialog.tsx       # Modal dialogs
│   │   ├── Tabs.tsx         # Tab navigation
│   │   └── Misc.tsx         # Badge, Skeleton, Checkbox
│   ├── Layout.tsx           # Public page layout
│   └── ProtectedRoute.tsx   # Route protection wrapper
├── pages/
│   ├── auth/                # Authentication pages
│   │   ├── LoginPage.tsx    # Login form with role handling
│   │   └── SignupPage.tsx   # Multi-step signup flow
│   ├── athlete/             # Athlete-specific pages
│   │   └── AthleteDashboard.tsx
│   └── coach/               # Coach-specific pages
│       └── CoachDashboard.tsx
├── contexts/
│   └── AuthContext.tsx     # Authentication state management
├── types/                   # TypeScript type definitions
│   ├── auth.ts             # Authentication types
│   ├── athlete.ts          # Athlete-related types
│   ├── coach.ts            # Coach-related types
│   └── index.ts            # Type exports
├── lib/                    # Utility libraries
│   ├── api-client.ts       # API client with mock data
│   ├── auth-storage.ts     # Local storage management
│   └── validation.ts       # Zod validation schemas
├── mocks/                  # MSW mock setup
│   ├── handlers.ts         # API request handlers
│   ├── seed-data.ts        # Mock data
│   ├── browser.ts          # Browser worker setup
│   └── server.ts           # Node server setup
├── test/                   # Test files
│   ├── auth/               # Authentication tests
│   └── setup.ts            # Test configuration
└── utils/
    └── routes.ts           # Route definitions and utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AthleteOne
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Testing

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Building for Production

```bash
npm run build
npm run preview
```

## 🔐 Authentication Flow

### Login Process
1. User enters email and password
2. Form validation using Zod schemas
3. API call to `/api/auth/login`
4. If user has multiple roles, show role selection
5. Redirect to role-specific dashboard
6. Store session in localStorage

### Signup Process
1. **Step 1:** Role selection (Athlete or Coach)
2. **Step 2:** Account details with password strength validation
3. **Step 3:** Terms and conditions agreement
4. Account creation and automatic login
5. Redirect to role-specific onboarding

### Route Protection
- **Public routes:** `/`, `/features`, `/about`, `/auth/*`
- **Protected routes:** `/athlete/*`, `/coach/*`
- **Role-based access:** Users can only access their current role's routes
- **Automatic redirects:** Unauthenticated users → login, authenticated users → appropriate dashboard

## 🎨 Design System

### Colors
- **Primary:** `#747FFF` (AthleteOne brand color)
- **Neutral:** Light/dark theme support
- **Status colors:** Success, Warning, Error, Info
- **WCAG 2.2 AA** compliant contrast ratios

### Typography
- **Font family:** Oswald (headings), Open Sans (body)
- **Responsive scaling** with fluid typography
- **Accessible font weights** and line heights

### Components
- **Consistent spacing** with 4px base unit
- **Focus management** for keyboard navigation
- **Screen reader support** with proper ARIA labels
- **Reduced motion** support for accessibility

## 🧪 Testing Strategy

### Unit Tests
- Component rendering and behavior
- Form validation logic
- Authentication flows
- Route protection

### Integration Tests
- Complete user journeys
- API integration with MSW
- Cross-component interactions

### Accessibility Tests
- Keyboard navigation
- Screen reader compatibility
- Focus management
- ARIA labeling

## 🔧 Mock Data & API

The application uses MSW (Mock Service Worker) to simulate a backend API during development and testing.

### Available Mock Endpoints
- `POST /api/auth/login` - User authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/users/:id` - User profile data
- `GET /api/athletes/:id` - Athlete profile data
- `GET /api/coaches/:id` - Coach profile data
- `GET /api/opportunities` - Available opportunities

### Mock Users
**Test credentials for login:**
- Email: `john.athlete@example.com` | Password: `password123` (Athlete)
- Email: `sarah.coach@example.com` | Password: `password123` (Coach)
- Email: `mike.dual@example.com` | Password: `password123` (Dual role)

## 🌟 Key Features Implemented

### ✅ Completed
- [x] Complete authentication system (Login/Signup)
- [x] Role-based routing and protection
- [x] Responsive app shell with sidebar/topbar
- [x] Athlete dashboard with analytics
- [x] Coach dashboard with search functionality
- [x] Form validation with Zod schemas
- [x] Toast notification system
- [x] Mock API with MSW
- [x] Testing setup with Vitest
- [x] TypeScript type safety
- [x] Accessibility compliance

### 🚧 Ready for Extension
- [ ] Athlete onboarding flow
- [ ] Coach onboarding flow
- [ ] Performance tracking features
- [ ] Video highlights management
- [ ] Advanced search and filters
- [ ] Real-time notifications
- [ ] Settings and profile management

## 🔍 Development Notes

### Architecture Decisions
- **Frontend-only:** No backend dependencies for demo
- **Type-first:** Comprehensive TypeScript coverage
- **Component composition:** Reusable UI building blocks
- **Route-based code splitting:** Optimized loading
- **Accessibility-first:** WCAG 2.2 AA compliance

### Performance Optimizations
- **Vite optimizations:** Fast HMR and builds
- **Route-based lazy loading:** Reduced initial bundle
- **Optimistic updates:** Responsive UI interactions
- **Image optimization:** WebP support with fallbacks
- **CSS purging:** Minimal production stylesheets

### Security Considerations
- **XSS protection:** Sanitized inputs and outputs
- **CSRF tokens:** API request protection
- **Secure storage:** Encrypted localStorage wrapper
- **Route guards:** Unauthorized access prevention
- **Input validation:** Server-side validation simulation

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
- [MSW Documentation](https://mswjs.io/)
- [Vitest Testing](https://vitest.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.