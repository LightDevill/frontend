import React from 'react';
import { UserIcon, PencilIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Badge } from '../../components/ui/Misc';

export const CoachProfile: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <SectionHeader 
          title="Coach Profile" 
          subtitle="Manage your coaching profile and showcase your expertise"
          className="text-left mb-0"
        />
        <Button>
          <PencilIcon className="h-5 w-5 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Preview */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon className="h-12 w-12 text-gray-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Coach Sarah Johnson</h3>
                <p className="text-gray-600">Basketball Coach • Head Coach</p>
                <p className="text-sm text-gray-500">University of California, Los Angeles</p>
                <div className="flex space-x-2 mt-2">
                  <Badge variant="info">NCAA Division I</Badge>
                  <Badge variant="success">15 Years Experience</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
                <p className="text-gray-600">
                  Experienced basketball coach with a proven track record of developing talent at the collegiate level. 
                  Specializes in point guard development and team strategy.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Coaching Philosophy</h4>
                <p className="text-gray-600">
                  I believe in developing the whole athlete - not just their physical skills, but their mental toughness, 
                  leadership abilities, and character both on and off the court.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span>Conference Championship</span>
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span>Coach of the Year Award</span>
                    <span className="text-sm text-gray-500">2022</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span>NCAA Tournament Appearances</span>
                    <span className="text-sm text-gray-500">2020, 2021, 2023</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Badge variant="outline">USA Basketball License</Badge>
                  <Badge variant="outline">Sports Psychology Certified</Badge>
                  <Badge variant="outline">Strength & Conditioning</Badge>
                  <Badge variant="outline">Leadership Development</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Profile Stats */}
        <div className="space-y-6">
          <Card>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Profile Stats</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Athletes Discovered</span>
                <span className="font-medium">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Active Recruits</span>
                <span className="font-medium">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Profile Views</span>
                <span className="font-medium">89</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-medium">92%</span>
              </div>
            </div>
          </Card>
          
          <Card>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Recruiting Focus</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Primary Sport</span>
                <Badge>Basketball</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Positions</span>
                <div className="text-right">
                  <Badge size="sm" className="mr-1">PG</Badge>
                  <Badge size="sm">SG</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Level</span>
                <Badge variant="info">Division I</Badge>
              </div>
            </div>
          </Card>
          
          <Card>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Search Athletes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Post Opportunity
              </Button>
              <Button variant="outline" className="w-full justify-start">
                View Shortlist
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Update Preferences
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <Card className="bg-blue-50 border-blue-200">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <AcademicCapIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Coach Features Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're developing advanced recruiting tools, detailed analytics dashboards, and enhanced 
            communication features to help you find and develop the best athletic talent.
          </p>
        </div>
      </Card>
    </div>
  );
};