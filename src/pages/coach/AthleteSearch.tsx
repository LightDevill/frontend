import React from 'react';
import { MagnifyingGlassIcon, FunnelIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Badge } from '../../components/ui/Misc';

export const AthleteSearch: React.FC = () => {
  return (
    <div className="space-y-8">
      <SectionHeader 
        title="Athlete Search" 
        subtitle="Discover talented athletes based on your specific requirements"
      />

      {/* Search Filters */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <FunnelIcon className="h-5 w-5 mr-2" />
          Search Filters
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Input
            label="Search"
            placeholder="Name, position, school..."
            leftIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
          
          <Select
            label="Sport"
            options={[
              { value: '', label: 'All Sports' },
              { value: 'basketball', label: 'Basketball' },
              { value: 'football', label: 'Football' },
              { value: 'soccer', label: 'Soccer' },
              { value: 'baseball', label: 'Baseball' },
            ]}
          />
          
          <Select
            label="Position"
            options={[
              { value: '', label: 'All Positions' },
              { value: 'pg', label: 'Point Guard' },
              { value: 'sg', label: 'Shooting Guard' },
              { value: 'sf', label: 'Small Forward' },
              { value: 'pf', label: 'Power Forward' },
              { value: 'c', label: 'Center' },
            ]}
          />
          
          <Select
            label="Class Year"
            options={[
              { value: '', label: 'All Years' },
              { value: '2024', label: 'Class of 2024' },
              { value: '2025', label: 'Class of 2025' },
              { value: '2026', label: 'Class of 2026' },
              { value: '2027', label: 'Class of 2027' },
            ]}
          />
        </div>
        
        <div className="flex space-x-4">
          <Button>
            <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
            Search Athletes
          </Button>
          <Button variant="outline">
            Save Search
          </Button>
          <Button variant="outline">
            Advanced Filters
          </Button>
        </div>
      </Card>

      {/* Search Results */}
      <div className="grid grid-cols-1 gap-6">
        {/* Sample Athlete Cards */}
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-gray-400">
                  {String.fromCharCode(64 + i)}
                </span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Athlete {i === 1 ? 'Michael Johnson' : i === 2 ? 'Sarah Davis' : i === 3 ? 'James Wilson' : 'Emma Thompson'}
                    </h3>
                    <p className="text-gray-600">
                      {i === 1 ? 'Point Guard' : i === 2 ? 'Shooting Guard' : i === 3 ? 'Small Forward' : 'Center'} • 
                      {i === 1 ? 'Senior' : i === 2 ? 'Junior' : i === 3 ? 'Sophomore' : 'Senior'}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {i === 1 ? 'Los Angeles, CA' : i === 2 ? 'Chicago, IL' : i === 3 ? 'Miami, FL' : 'Boston, MA'}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex space-x-2 mb-2">
                      <Badge variant={i % 2 === 0 ? 'success' : 'info'}>
                        {i % 2 === 0 ? 'Available' : 'Interested'}
                      </Badge>
                      <Badge variant="outline">
                        {i === 1 ? '6\'2"' : i === 2 ? '5\'9"' : i === 3 ? '6\'6"' : '6\'4"'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">
                      Profile Match: {90 - i * 5}%
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>PPG: {(18 + i * 2).toFixed(1)}</span>
                    <span>APG: {(5.2 + i * 0.8).toFixed(1)}</span>
                    <span>FG%: {(45 + i * 3)}%</span>
                    <span>GPA: {(3.5 + i * 0.1).toFixed(1)}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                    <Button size="sm">
                      Add to Shortlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing 1-4 of 156 athletes
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <Card className="bg-blue-50 border-blue-200">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Search Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're developing advanced AI matching algorithms, predictive analytics, 
            and enhanced search capabilities to help you find the perfect athletes for your program.
          </p>
        </div>
      </Card>
    </div>
  );
};