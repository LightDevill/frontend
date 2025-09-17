import React from 'react';
import { UserIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { SectionHeader } from '../../components/ui/SectionHeader';

export const AthleteProfile: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <SectionHeader 
          title="Athlete Profile" 
          subtitle="Manage your athletic profile and showcase your achievements"
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
                <h3 className="text-2xl font-bold text-gray-900">John Smith</h3>
                <p className="text-gray-600">Basketball • Point Guard</p>
                <p className="text-sm text-gray-500">Los Angeles, CA</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
                <p className="text-gray-600">
                  Dedicated basketball player with 8 years of competitive experience. 
                  Known for exceptional court vision and leadership skills.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span>State Championship MVP</span>
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span>All-Conference Team</span>
                    <span className="text-sm text-gray-500">2022, 2023</span>
                  </div>
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
                <span className="text-gray-600">Profile Views</span>
                <span className="font-medium">234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Coach Interests</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Opportunities</span>
                <span className="font-medium">8</span>
              </div>
            </div>
          </Card>
          
          <Card>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Update Performance Stats
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Upload Video Highlights
              </Button>
              <Button variant="outline" className="w-full justify-start">
                View Applications
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <Card className="bg-blue-50 border-blue-200">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <UserIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Profile Features Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're working on advanced profile customization, detailed analytics, and enhanced showcase features 
            to help you stand out to coaches and scouts.
          </p>
        </div>
      </Card>
    </div>
  );
};