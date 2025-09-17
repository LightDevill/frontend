import React from 'react';
import { CogIcon } from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';

export const CoachSettings: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('account');

  return (
    <div className="space-y-8">
      <SectionHeader 
        title="Settings" 
        subtitle="Manage your coaching account and recruitment preferences"
      />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="recruiting">Recruiting</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    defaultValue="Coach Sarah Johnson" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    defaultValue="s.johnson@ucla.edu" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                  <input 
                    type="text" 
                    defaultValue="University of California, Los Angeles" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <Button>Save Changes</Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Coaching Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Sport</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>Basketball</option>
                    <option>Football</option>
                    <option>Soccer</option>
                    <option>Baseball</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Coaching Level</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>NCAA Division I</option>
                    <option>NCAA Division II</option>
                    <option>NCAA Division III</option>
                    <option>NAIA</option>
                    <option>Junior College</option>
                    <option>High School</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                  <input 
                    type="number" 
                    defaultValue="15" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recruiting">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recruiting Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Target Positions</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    Point Guard
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    Shooting Guard
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Small Forward
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Power Forward
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Center
                  </label>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Geographic Preferences</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    West Coast
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Southwest
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Midwest
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    East Coast
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    International
                  </label>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">New Athlete Matches</h4>
                  <p className="text-sm text-gray-600">Get notified when athletes match your criteria</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Application Updates</h4>
                  <p className="text-sm text-gray-600">Receive notifications for athlete applications</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">System Updates</h4>
                  <p className="text-sm text-gray-600">Get updates about new platform features</p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Weekly Digest</h4>
                  <p className="text-sm text-gray-600">Receive a weekly summary of activity</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Public Profile</h4>
                  <p className="text-sm text-gray-600">Make your coaching profile visible to athletes</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Contact Information</h4>
                  <p className="text-sm text-gray-600">Allow athletes to see your contact details</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Recruiting Data</h4>
                  <p className="text-sm text-gray-600">Share recruiting statistics and success rates</p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Analytics</h4>
                  <p className="text-sm text-gray-600">Participate in platform analytics and insights</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Coming Soon Notice */}
      <Card className="bg-blue-50 border-blue-200">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <CogIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Coaching Tools Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're working on advanced recruiting analytics, team management tools, 
            and enhanced communication features for coaches.
          </p>
        </div>
      </Card>
    </div>
  );
};