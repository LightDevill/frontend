import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { AboutPage } from './pages/AboutPage';
import { AthletePage } from './pages/AthletePage';
import { CoachesPage } from './pages/CoachesPage';
import { LoginPage } from './pages/auth/LoginPage';
import { SignupPage } from './pages/auth/SignupPage';
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoute';
import { AppLayout } from './components/app/AppLayout';
import { CoachDashboard } from './pages/coach/CoachDashboard';
import { CoachOnboarding } from './pages/coach/CoachOnboarding';
import { CoachProfile } from './pages/coach/CoachProfile';
import { AthleteSearch } from './pages/coach/AthleteSearch';
import { CoachSettings } from './pages/coach/CoachSettings.js';
import { AthleteDashboard } from './pages/athlete/AthleteDashboard';
import { AthleteOnboarding } from './pages/athlete/AthleteOnboarding';
import { AthleteProfile } from './pages/athlete/AthleteProfile';
import { AthleteSettings } from './pages/athlete/AthleteSettings';
import { Performance } from './pages/athlete/Performance';
import { Opportunities } from './pages/athlete/Opportunities';
import { VideoHighlights } from './pages/athlete/VideoHighlights';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicRoute><HomePage /></PublicRoute>} />
        <Route path="/features" element={<PublicRoute><FeaturesPage /></PublicRoute>} />
        <Route path="/about" element={<PublicRoute><AboutPage /></PublicRoute>} />
        <Route path="/athlete" element={<PublicRoute><AthletePage /></PublicRoute>} />
        <Route path="/coach" element={<PublicRoute><CoachesPage /></PublicRoute>} />
        
        {/* Auth routes */}
        <Route path="/auth/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/auth/signup" element={<PublicRoute><SignupPage /></PublicRoute>} />
        
        {/* Protected Athlete routes */}
        <Route path="/athlete/*" element={
          <ProtectedRoute requiredRole="athlete">
            <AppLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<AthleteDashboard />} />
          <Route path="onboarding" element={<AthleteOnboarding />} />
          <Route path="profile" element={<AthleteProfile />} />
          <Route path="performance" element={<Performance />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="videos" element={<VideoHighlights />} />
          <Route path="training" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-gray-900 mb-4">Training Plans</h2><p className="text-gray-600">Advanced training plans and coaching tools coming soon.</p></div>} />
          <Route path="settings" element={<AthleteSettings />} />
        </Route>
        
        {/* Protected Coach routes */}
        <Route path="/coach/*" element={
          <ProtectedRoute requiredRole="coach">
            <AppLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<CoachDashboard />} />
          <Route path="onboarding" element={<CoachOnboarding />} />
          <Route path="profile" element={<CoachProfile />} />
          <Route path="search" element={<AthleteSearch />} />
          <Route path="shortlists" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-gray-900 mb-4">Athlete Shortlists</h2><p className="text-gray-600">Advanced shortlist management tools coming soon.</p></div>} />
          <Route path="analytics" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h2><p className="text-gray-600">Comprehensive recruiting analytics and insights coming soon.</p></div>} />
          <Route path="opportunities" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-gray-900 mb-4">Opportunity Management</h2><p className="text-gray-600">Post and manage recruiting opportunities coming soon.</p></div>} />
          <Route path="resources" element={<div className="text-center py-12"><h2 className="text-2xl font-bold text-gray-900 mb-4">Coaching Resources</h2><p className="text-gray-600">Educational resources and coaching materials coming soon.</p></div>} />
          <Route path="settings" element={<CoachSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
