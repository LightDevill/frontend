import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon,
  BookmarkIcon,
  ChartBarIcon,
  UserGroupIcon,
  TrophyIcon,
  EyeIcon,
  ClockIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Misc';
import { useAuth } from '../../contexts/AuthContext';

export const CoachDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data
  const dashboardStats = [
    {
      title: 'Athletes Discovered',
      value: '156',
      subtitle: 'This month',
      trend: { value: 12, isPositive: true },
      icon: UserGroupIcon,
      color: 'blue'
    },
    {
      title: 'Shortlisted Athletes',
      value: '23',
      subtitle: 'Active',
      icon: BookmarkIcon,
      color: 'yellow'
    },
    {
      title: 'Opportunities Posted',
      value: '8',
      subtitle: 'This quarter',
      icon: TrophyIcon,
      color: 'green'
    },
    {
      title: 'Profile Views',
      value: '89',
      subtitle: 'This week',
      icon: EyeIcon,
      color: 'purple'
    }
  ];

  const recentSearches = [
    { id: 1, name: 'Basketball Guards 18-20', results: 45, saved: true },
    { id: 2, name: 'Track Sprinters Regional', results: 32, saved: false },
    { id: 3, name: 'Soccer Midfielders Elite', results: 18, saved: true }
  ];

  const shortlistedAthletes = [
    {
      id: 1,
      name: 'Marcus Johnson',
      sport: 'Basketball',
      position: 'Point Guard',
      location: 'California, USA',
      score: 95,
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      sport: 'Track & Field',
      position: 'Sprinter',
      location: 'Texas, USA',
      score: 92,
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Diego Martinez',
      sport: 'Soccer',
      position: 'Midfielder',
      location: 'Florida, USA',
      score: 88,
      lastActive: '3 hours ago'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {user?.name?.split(' ')[0] || 'Coach'}!
            </h1>
            <p className="text-gray-600 mt-1">
              Discover and connect with talented athletes worldwide.
            </p>
          </div>
          <div className="hidden sm:block">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=120&h=120&fit=crop&crop=face" 
              alt="Coach illustration" 
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Link to="/coach/search">
          <Button className="w-full justify-start" size="lg">
            <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
            New Search
          </Button>
        </Link>
        <Link to="/coach/opportunities">
          <Button variant="outline" className="w-full justify-start" size="lg">
            <PlusIcon className="h-5 w-5 mr-2" />
            Post Opportunity
          </Button>
        </Link>
        <Link to="/coach/shortlists">
          <Button variant="outline" className="w-full justify-start" size="lg">
            <BookmarkIcon className="h-5 w-5 mr-2" />
            Manage Shortlists
          </Button>
        </Link>
        <Link to="/coach/analytics">
          <Button variant="outline" className="w-full justify-start" size="lg">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            View Analytics
          </Button>
        </Link>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Searches */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Searches</h2>
            <Link to="/coach/search">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {recentSearches.map((search) => (
              <div key={search.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{search.name}</h3>
                  <p className="text-xs text-gray-500">{search.results} results found</p>
                </div>
                <div className="flex items-center space-x-2">
                  {search.saved && (
                    <Badge variant="success" size="sm">Saved</Badge>
                  )}
                  <Button variant="ghost" size="sm">
                    Run Again
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Shortlisted Athletes */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Shortlisted Athletes</h2>
            <Link to="/coach/shortlists">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {shortlistedAthletes.map((athlete) => (
              <div key={athlete.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary-600">
                      {athlete.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{athlete.name}</h3>
                    <p className="text-xs text-gray-500">{athlete.sport} • {athlete.position}</p>
                    <p className="text-xs text-gray-400">{athlete.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary-600">{athlete.score}% match</div>
                  <div className="flex items-center text-xs text-gray-500">
                    <ClockIcon className="h-3 w-3 mr-1" />
                    {athlete.lastActive}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Activity Feed */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
              <UserGroupIcon className="h-4 w-4 text-success-600" />
            </div>
            <div>
              <p className="text-sm text-gray-900">5 new athletes match your saved search "Basketball Guards"</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-info-100 rounded-full flex items-center justify-center">
              <BookmarkIcon className="h-4 w-4 text-info-600" />
            </div>
            <div>
              <p className="text-sm text-gray-900">Marcus Johnson updated his performance metrics</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center">
              <TrophyIcon className="h-4 w-4 text-warning-600" />
            </div>
            <div>
              <p className="text-sm text-gray-900">Summer Training Camp application deadline approaching</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};