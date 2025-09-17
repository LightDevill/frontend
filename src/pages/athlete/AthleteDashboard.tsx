import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon,
  VideoCameraIcon,
  TrophyIcon,
  UserIcon,
  ArrowUpIcon,
  EyeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Misc';
import { LevelPerformanceGraph } from '../../components/ui/LevelPerformanceGraph';
import { useAuth } from '../../contexts/AuthContext';

interface DashboardCard {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ComponentType<any>;
  color: string;
  href?: string;
}

interface QuickAction {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  color: string;
  badge?: string;
}

interface Opportunity {
  id: string;
  title: string;
  organization: string;
  location: string;
  deadline: string;
  match: number;
  type: 'scholarship' | 'tryout' | 'competition';
}

export const AthleteDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data - replace with real API calls
  const profileCompletion = 73;
  const recentViews = 24;
  const opportunityMatches = 12;
  const performanceScore = 8.7;

  // Mock athletes data for performance graph
  const mockAthletes = [
    { name: 'John Doe', level: 'amateur', score: 75 },
    { name: 'Jane Smith', level: 'semi-professional', score: 85 },
    { name: 'Mike Johnson', level: 'professional', score: 95 },
  ];

  const dashboardCards: DashboardCard[] = [
    {
      title: 'Profile Views',
      value: recentViews,
      subtitle: 'This week',
      trend: { value: 15, isPositive: true },
      icon: EyeIcon,
      color: 'blue',
      href: '/athlete/profile'
    },
    {
      title: 'Opportunity Matches',
      value: opportunityMatches,
      subtitle: 'Available now',
      icon: TrophyIcon,
      color: 'yellow',
      href: '/athlete/opportunities'
    },
    {
      title: 'Performance Score',
      value: performanceScore,
      subtitle: 'Out of 10',
      trend: { value: 0.3, isPositive: true },
      icon: ChartBarIcon,
      color: 'green',
      href: '/athlete/performance'
    },
    {
      title: 'Video Highlights',
      value: 8,
      subtitle: 'Uploaded',
      icon: VideoCameraIcon,
      color: 'purple',
      href: '/athlete/videos'
    }
  ];

  const quickActions: QuickAction[] = [
    {
      title: 'Complete Profile',
      description: 'Add missing information to improve your visibility',
      icon: UserIcon,
      href: '/athlete/profile',
      color: 'blue',
      badge: `${100 - profileCompletion}% left`
    },
    {
      title: 'Log Performance',
      description: 'Record your latest training or competition results',
      icon: ChartBarIcon,
      href: '/athlete/performance/log',
      color: 'green'
    },
    {
      title: 'Upload Highlights',
      description: 'Share your best moments with coaches',
      icon: VideoCameraIcon,
      href: '/athlete/videos/upload',
      color: 'purple'
    },
    {
      title: 'Browse Opportunities',
      description: 'Find scholarships, tryouts, and competitions',
      icon: TrophyIcon,
      href: '/athlete/opportunities',
      color: 'yellow'
    }
  ];

  const recentOpportunities: Opportunity[] = [
    {
      id: '1',
      title: 'Basketball Scholarship Program',
      organization: 'State University',
      location: 'California, USA',
      deadline: '2024-03-15',
      match: 95,
      type: 'scholarship'
    },
    {
      id: '2',
      title: 'Regional Track & Field Championships',
      organization: 'Athletics Federation',
      location: 'Texas, USA',
      deadline: '2024-02-28',
      match: 88,
      type: 'competition'
    },
    {
      id: '3',
      title: 'Summer Training Camp Tryouts',
      organization: 'Elite Sports Academy',
      location: 'Florida, USA',
      deadline: '2024-04-01',
      match: 82,
      type: 'tryout'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'scholarship': return 'success';
      case 'competition': return 'info';
      case 'tryout': return 'warning';
      default: return 'default';
    }
  };

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays <= 7) return `${diffDays} days left`;
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-50 to-indigo-50 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {user?.name?.split(' ')[0] || 'Athlete'}!
            </h1>
            <p className="text-gray-600 mt-1">
              Here's what's happening with your athletic journey today.
            </p>
          </div>
          <div className="hidden sm:block">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=120&h=120&fit=crop&crop=face" 
              alt="Athlete illustration" 
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Completion Alert */}
      {profileCompletion < 100 && (
        <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-5 w-5 text-warning-400 mt-0.5" />
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-warning-800">
                Complete your profile to maximize opportunities
              </h3>
              <p className="text-sm text-warning-700 mt-1">
                Your profile is {profileCompletion}% complete. Add more information to get better matches from coaches.
              </p>
              <div className="mt-3">
                <Link to="/athlete/profile">
                  <Button size="sm" variant="outline">
                    Complete Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                  {card.subtitle && (
                    <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
                  )}
                  {card.trend && (
                    <div className={`flex items-center mt-2 text-sm ${
                      card.trend.isPositive ? 'text-success-600' : 'text-error-600'
                    }`}>
                      <ArrowUpIcon className={`h-4 w-4 mr-1 ${
                        card.trend.isPositive ? '' : 'rotate-180'
                      }`} />
                      <span>{card.trend.value}% from last week</span>
                    </div>
                  )}
                </div>
                <div className={`p-3 rounded-lg bg-${card.color}-100`}>
                  <Icon className={`h-6 w-6 text-${card.color}-600`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.title}
                to={action.href}
                className="group p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg bg-${action.color}-100 group-hover:bg-${action.color}-200 transition-colors`}>
                    <Icon className={`h-5 w-5 text-${action.color}-600`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                        {action.title}
                      </h3>
                      {action.badge && (
                        <Badge variant="warning" size="sm">
                          {action.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{action.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Performance Trends</h2>
            <Link to="/athlete/performance">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <LevelPerformanceGraph athletes={mockAthletes} />
        </Card>

        {/* Recent Opportunities */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Matched Opportunities</h2>
            <Link to="/athlete/opportunities">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {recentOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-sm font-medium text-gray-900">{opportunity.title}</h3>
                      <Badge variant={getTypeColor(opportunity.type)} size="sm">
                        {opportunity.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{opportunity.organization}</p>
                    <p className="text-xs text-gray-500 mt-1">{opportunity.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary-600">{opportunity.match}% match</div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      {formatDeadline(opportunity.deadline)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
              <CheckCircleIcon className="h-4 w-4 text-success-600" />
            </div>
            <div>
              <p className="text-sm text-gray-900">Performance data updated</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-info-100 rounded-full flex items-center justify-center">
              <EyeIcon className="h-4 w-4 text-info-600" />
            </div>
            <div>
              <p className="text-sm text-gray-900">Profile viewed by 3 coaches</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <VideoCameraIcon className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-900">New highlight video uploaded</p>
              <p className="text-xs text-gray-500">3 days ago</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};