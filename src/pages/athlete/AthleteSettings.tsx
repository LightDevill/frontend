import React from 'react';
import { CogIcon } from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';

export const AthleteSettings: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('account');

  return (
    <div className="space-y-8">
      <SectionHeader 
        title="Settings" 
        subtitle="Manage your account preferences and privacy settings"
      />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
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
                    defaultValue="John Smith" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    defaultValue="john.smith@example.com" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <Button>Save Changes</Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Enable Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Download Data
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">New Opportunities</h4>
                  <p className="text-sm text-gray-600">Get notified when new opportunities match your profile</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Coach Messages</h4>
                  <p className="text-sm text-gray-600">Receive notifications for new messages from coaches</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Performance Updates</h4>
                  <p className="text-sm text-gray-600">Get updates about your performance metrics</p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-primary-600" />
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
                  <p className="text-sm text-gray-600">Make your profile visible to all coaches</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Contact Information</h4>
                  <p className="text-sm text-gray-600">Allow coaches to see your contact details</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Performance Data</h4>
                  <p className="text-sm text-gray-600">Share detailed performance statistics</p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-primary-600" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Communication</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Email</option>
                  <option>SMS</option>
                  <option>In-App Only</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Pacific Time (PT)</option>
                  <option>Mountain Time (MT)</option>
                  <option>Central Time (CT)</option>
                  <option>Eastern Time (ET)</option>
                </select>
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
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Settings Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're working on enhanced privacy controls, advanced notification settings, 
            and more customization options for your AthleteOne experience.
          </p>
        </div>
      </Card>
    </div>
  );
};