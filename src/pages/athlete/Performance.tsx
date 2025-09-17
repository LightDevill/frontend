import React, { useState } from 'react';
import { 
  TrophyIcon, 
  ChartBarIcon, 
  ClockIcon,
  ArrowTrendingUpIcon,
  PlusIcon,
  CalendarIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { LevelPerformanceGraph } from '../../components/ui/LevelPerformanceGraph';

interface PerformanceRecord {
  id: string;
  event: string;
  result: string;
  date: string;
  venue: string;
  category: string;
  personalBest: boolean;
  seasonBest: boolean;
}

interface TrainingSession {
  id: string;
  date: string;
  type: string;
  duration: number;
  intensity: 'Low' | 'Medium' | 'High';
  notes: string;
  metrics: Record<string, string | number>;
}

interface Goal {
  id: string;
  title: string;
  target: string;
  deadline: string;
  category: string;
  progress: number;
  status: 'active' | 'completed' | 'overdue';
}

export const Performance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const mockPerformanceData = {
    currentLevel: 'Regional',
    overallScore: 85,
    improvement: '+12%',
    personalBests: 8,
    totalEvents: 24,
  };

  const mockRecords: PerformanceRecord[] = [
    {
      id: '1',
      event: '100m Sprint',
      result: '10.85s',
      date: '2024-01-15',
      venue: 'State Championships',
      category: 'Track',
      personalBest: true,
      seasonBest: true,
    },
    {
      id: '2',
      event: '200m Sprint',
      result: '21.45s',
      date: '2024-01-10',
      venue: 'Regional Meet',
      category: 'Track',
      personalBest: false,
      seasonBest: true,
    },
    {
      id: '3',
      event: 'Long Jump',
      result: '7.25m',
      date: '2024-01-08',
      venue: 'Regional Meet',
      category: 'Field',
      personalBest: true,
      seasonBest: true,
    },
  ];

  const mockTraining: TrainingSession[] = [
    {
      id: '1',
      date: '2024-01-20',
      type: 'Speed Training',
      duration: 90,
      intensity: 'High',
      notes: 'Focused on acceleration drills',
      metrics: {
        distance: '3.2 km',
        avgPace: '4:30/km',
        maxSpeed: '32 km/h',
      },
    },
    {
      id: '2',
      date: '2024-01-18',
      type: 'Endurance',
      duration: 120,
      intensity: 'Medium',
      notes: 'Long distance run',
      metrics: {
        distance: '12 km',
        avgPace: '5:15/km',
        heartRate: '145 bpm',
      },
    },
  ];

  const mockGoals: Goal[] = [
    {
      id: '1',
      title: 'Break 10.80s in 100m',
      target: '10.79s',
      deadline: '2024-03-15',
      category: 'Performance',
      progress: 75,
      status: 'active',
    },
    {
      id: '2',
      title: 'Qualify for Nationals',
      target: 'Top 3 in Regionals',
      deadline: '2024-04-30',
      category: 'Competition',
      progress: 40,
      status: 'active',
    },
    {
      id: '3',
      title: 'Improve Long Jump PR',
      target: '7.50m',
      deadline: '2024-05-15',
      category: 'Performance',
      progress: 60,
      status: 'active',
    },
  ];

  // Mock athletes data for the graph
  const mockAthletes = [
    { name: 'John Doe', sport: 'Track', level: 'Regional', score: 85 },
    { name: 'Jane Smith', sport: 'Track', level: 'State', score: 92 },
    { name: 'Mike Johnson', sport: 'Track', level: 'National', score: 96 },
    { name: 'Sarah Wilson', sport: 'Track', level: 'Regional', score: 78 },
    { name: 'Chris Brown', sport: 'Track', level: 'State', score: 88 },
  ];

  const StatCard: React.FC<{ 
    title: string; 
    value: string | number; 
    change?: string; 
    icon: React.ComponentType<{ className?: string }>;
    color?: string;
  }> = ({ title, value, change, icon: Icon, color = 'text-primary-600' }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${change.startsWith('+') ? 'text-success-600' : 'text-error-600'}`}>
              {change} from last month
            </p>
          )}
        </div>
        <Icon className={`h-8 w-8 ${color}`} />
      </div>
    </div>
  );

  const PerformanceOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Current Level"
          value={mockPerformanceData.currentLevel}
          icon={TrophyIcon}
        />
        <StatCard
          title="Overall Score"
          value={mockPerformanceData.overallScore}
          change={mockPerformanceData.improvement}
          icon={ChartBarIcon}
        />
        <StatCard
          title="Personal Bests"
          value={mockPerformanceData.personalBests}
          icon={ArrowTrendingUpIcon}
          color="text-success-600"
        />
        <StatCard
          title="Total Events"
          value={mockPerformanceData.totalEvents}
          icon={CalendarIcon}
          color="text-blue-600"
        />
      </div>

      {/* Performance Graph */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance by Level</h3>
        <LevelPerformanceGraph athletes={mockAthletes} />
      </div>

      {/* Recent Records */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Performance Records</h3>
          <Button size="sm">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Record
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Result
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {record.event}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-primary-600">
                    {record.result}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(record.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.venue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-1">
                      {record.personalBest && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                          PB
                        </span>
                      )}
                      {record.seasonBest && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          SB
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const TrainingLog = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Training Log</h2>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Log Training
        </Button>
      </div>

      <div className="space-y-4">
        {mockTraining.map((session) => (
          <div key={session.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  session.intensity === 'High' ? 'bg-error-100 text-error-600' :
                  session.intensity === 'Medium' ? 'bg-warning-100 text-warning-600' :
                  'bg-success-100 text-success-600'
                }`}>
                  <ClockIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{session.type}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(session.date).toLocaleDateString()} • {session.duration} minutes
                  </p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                session.intensity === 'High' ? 'bg-error-100 text-error-800' :
                session.intensity === 'Medium' ? 'bg-warning-100 text-warning-800' :
                'bg-success-100 text-success-800'
              }`}>
                {session.intensity} Intensity
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {Object.entries(session.metrics).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                  <p className="text-lg font-bold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
            
            {session.notes && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">{session.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const Goals = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Performance Goals</h2>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Set Goal
        </Button>
      </div>

      <div className="space-y-4">
        {mockGoals.map((goal) => (
          <div key={goal.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                <p className="text-sm text-gray-500">Target: {goal.target}</p>
                <p className="text-sm text-gray-500">Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                goal.status === 'active' ? 'bg-blue-100 text-blue-800' :
                goal.status === 'completed' ? 'bg-success-100 text-success-800' :
                'bg-error-100 text-error-800'
              }`}>
                {goal.status.charAt(0).toUpperCase() + goal.status.slice(1)}
              </span>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progress</span>
                <span>{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className={`h-2 rounded-full ${
                    goal.progress >= 75 ? 'bg-success-600' :
                    goal.progress >= 50 ? 'bg-warning-600' :
                    'bg-primary-600'
                  }`}
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Performance Tracking</h1>
          <p className="mt-2 text-gray-600">Track your athletic progress and achievements</p>
        </div>
        <Button variant="outline">
          <PlayIcon className="h-4 w-4 mr-2" />
          Video Analysis
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-fit">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <PerformanceOverview />
        </TabsContent>
        
        <TabsContent value="training" className="mt-6">
          <TrainingLog />
        </TabsContent>
        
        <TabsContent value="goals" className="mt-6">
          <Goals />
        </TabsContent>
      </Tabs>
    </div>
  );
};