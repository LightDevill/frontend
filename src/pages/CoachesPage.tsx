import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ComparisonGraph } from '../components/ui/ComparisonGraph';
import { SportDistributionGraph } from '../components/ui/SportDistributionGraph';
import { LevelPerformanceGraph } from '../components/ui/LevelPerformanceGraph';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const CoachesPage: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    sport: '',
    position: '',
    region: '',
    level: '',
    availability: ''
  });
  
  const [showProfiles, setShowProfiles] = useState(false);

  const benefits = [
    {
      title: 'Indian Talent Discovery',
      description: 'Access undiscovered athletes from across India with standardized, verified performance data.',
      icon: 'public'
    },
    {
      title: 'Coach-Friendly Interface',
      description: 'Easily search and filter athletes who fit your coaching style and team requirements.',
      icon: 'smart_toy'
    },
    {
      title: 'Bias-Free Evaluation',
      description: 'Discover talent based purely on merit with our transparent ranking system.',
      icon: 'balance'
    },
    {
      title: 'Performance Analytics',
      description: 'Track athlete progress with detailed analytics and data-driven insights.',
      icon: 'analytics'
    }
  ];

  const discoveryFilters = [
    {
      label: 'Sport',
      options: ['Track & Field', 'Soccer', 'Basketball', 'Swimming', 'Tennis', 'Volleyball'],
      key: 'sport'
    },
    {
      label: 'Position',
      options: ['Sprint', 'Distance', 'Field Events', 'Goalkeeper', 'Midfielder', 'Forward'],
      key: 'position'
    },
    {
      label: 'Region',
      options: ['All India', 'Metro Cities', 'Tier 2 Cities', 'Rural Areas', 'Coastal Regions', 'Himalayan Regions'],
      key: 'region'
    },
    {
      label: 'Level',
      options: ['Youth', 'High School', 'College', 'Professional'],
      key: 'level'
    },
    {
      label: 'Availability',
      options: ['Immediate', 'Next Season', 'Future Consideration'],
      key: 'availability'
    }
  ];

  const sampleAthletes = [
    {
      name: 'Arjun Sharma',
      sport: 'Cricket',
      position: 'All-rounder',
      region: 'Metro Cities',
      level: 'College',
      score: 98.5,
      verified: true,
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      stats: {
        matches: 42,
        avgScore: 62.3,
        wickets: 38
      }
    },
    {
      name: 'Priya Patel',
      sport: 'Badminton',
      position: 'Singles',
      region: 'Tier 2 Cities',
      level: 'Professional',
      score: 97.8,
      verified: true,
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      stats: {
        tournaments: 28,
        wins: 22,
        ranking: 8
      }
    },
    {
      name: 'Raj Kumar',
      sport: 'Kabaddi',
      position: 'Raider',
      region: 'Rural Areas',
      level: 'College',
      score: 96.2,
      verified: false,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      stats: {
        matches: 36,
        raidPoints: 248,
        tacklePoints: 52
      }
    }
  ];

  const trackedAthletes = [
    {
      name: 'Sarah Williams',
      sport: 'Swimming',
      progress: '+12%',
      lastUpdate: '2 days ago',
      status: 'Improving',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Brown',
      sport: 'Tennis',
      progress: '+8%',
      lastUpdate: '1 week ago',
      status: 'Stable',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emma Davis',
      sport: 'Volleyball',
      progress: '+15%',
      lastUpdate: '3 days ago',
      status: 'Rising',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const resourceAllocationPresets = [
    {
      name: 'Equipment Grant',
      description: 'Provide training equipment to promising athletes',
      budget: '$5,000',
      impact: 'High'
    },
    {
      name: 'Training Time',
      description: 'Allocate additional coaching hours',
      budget: '$2,000',
      impact: 'Medium'
    },
    {
      name: 'Scholarship Fund',
      description: 'Financial support for education and training',
      budget: '$10,000',
      impact: 'High'
    },
    {
      name: 'Tryout Invitation',
      description: 'Invite athletes to team tryouts',
      budget: '$500',
      impact: 'Low'
    }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  const clearFilters = () => {
    setSelectedFilters({
      sport: '',
      position: '',
      region: '',
      level: '',
      availability: ''
    });
  };
  
  const findAthletes = () => {
    setShowProfiles(true);
  };

  return (
    <div id="webcrumbs">
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Header */}
        <header className="relative overflow-hidden">
          <div className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
            {/* Navigation moved to Header component */}
          </div>
        </header>
        
        {/* Role Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              For Coaches
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Discover undiscovered Indian athletes through our bias-free platform that prioritizes merit over connections, helping coaches find the best local talent.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/auth/signup"
                className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
              >
                Start Discovering
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose AthleteOne?"
            subtitle="Access the tools and insights you need to build winning teams with the best talent."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-indigo-600 text-3xl">
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Filters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Discover Indian Talent"
            subtitle="Find undiscovered Indian athletes that match your coaching style and team requirements."
          />
          
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Search Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {discoveryFilters.map((filter, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {filter.label}
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={selectedFilters[filter.key as keyof typeof selectedFilters]}
                      onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                    >
                      <option value="">All {filter.label}s</option>
                      {filter.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
                <Button size="lg" className="px-8 py-3 font-bold" onClick={findAthletes}>
                  Find Athletes
                </Button>
              </div>
            </Card>

            {/* Search Results - Blurred Profiles */}
            {showProfiles && (
              <div className="relative mt-8 animate-fade-in">
                {/* Single Sign up/Login Button Overlay */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/30 z-10 flex flex-col items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Discover India's Hidden Talent</h3>
                  <p className="text-gray-700 mb-6 text-center">Sign up or log in to view complete athlete profiles and connect with promising talent</p>
                  <Link 
                    to="/auth/signup"
                    className="px-8 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition text-lg"
                  >
                    Get Started
                  </Link>
                </div>
                
                {/* Actual Athlete Profiles (Blurred) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sampleAthletes.map((athlete, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center mb-4">
                          <img 
                            src={athlete.image} 
                            alt={athlete.name} 
                            className="w-16 h-16 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h3 className="font-bold text-lg">{athlete.name}</h3>
                            <p className="text-sm text-gray-600">{athlete.sport} • {athlete.position}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Region:</span>
                            <span className="text-sm">{athlete.region}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Level:</span>
                            <span className="text-sm">{athlete.level}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Match Score:</span>
                            <span className="text-sm font-bold text-green-600">{athlete.score}%</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h4 className="text-sm font-medium mb-2">Performance Stats</h4>
                          {athlete.stats && Object.entries(athlete.stats).map(([key, value], i) => (
                            <div key={i} className="flex justify-between text-xs">
                              <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 flex space-x-2">
                          <Button variant="outline" className="flex-1 text-sm py-1">Profile</Button>
                          <Button className="flex-1 text-sm py-1">Contact</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Shortlists & Saved Searches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Shortlists & Saved Searches"
            subtitle="Organize your talent discovery with custom shortlists and saved search criteria."
          />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">My Shortlists</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Top Sprinters 2024</h4>
                      <p className="text-sm text-gray-600">12 athletes</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">International Prospects</h4>
                      <p className="text-sm text-gray-600">8 athletes</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Underclassmen Watch</h4>
                      <p className="text-sm text-gray-600">15 athletes</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Create New Shortlist
                </Button>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Saved Searches</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">College Ready Athletes</h4>
                      <p className="text-sm text-gray-600">Last run: 2 days ago</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Run
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Rural Area Talent</h4>
                      <p className="text-sm text-gray-600">Last run: 1 week ago</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Run
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">High Potential Youth</h4>
                      <p className="text-sm text-gray-600">Last run: 3 days ago</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Run
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Save Current Search
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tracked Athletes Snapshot */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Tracked Athletes"
            subtitle="Monitor the progress of athletes you're following and coaching."
          />
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Athlete</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Sport</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Progress</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Last Update</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackedAthletes.map((athlete, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={athlete.image}
                              alt={athlete.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <span className="font-medium text-gray-900">{athlete.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{athlete.sport}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {athlete.progress}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            athlete.status === 'Rising' ? 'bg-green-100 text-green-800' :
                            athlete.status === 'Improving' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {athlete.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{athlete.lastUpdate}</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Progress Comparisons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Progress Comparisons"
            subtitle="Compare athlete performance across different metrics and time periods."
          />
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="grid grid-cols-1 gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
                    <div className="h-64 rounded-lg">
                      <ComparisonGraph athletes={trackedAthletes} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Sport Distribution</h3>
                    <div className="h-64 rounded-lg">
                      <SportDistributionGraph athletes={[...trackedAthletes, ...sampleAthletes]} />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance by Level</h3>
                  <div className="h-64 rounded-lg">
                    <LevelPerformanceGraph athletes={sampleAthletes} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Average Improvement</span>
                      <span className="text-sm font-bold text-indigo-600">+11.2%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Top Performer</span>
                      <span className="text-sm font-bold text-indigo-600">Emma Davis</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Most Improved</span>
                      <span className="text-sm font-bold text-indigo-600">Sarah Williams</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Consistency Score</span>
                      <span className="text-sm font-bold text-indigo-600">8.7/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Allocation Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Resource Allocation"
            subtitle="Manage your coaching resources and support promising athletes with targeted investments."
          />
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Allocation Presets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resourceAllocationPresets.map((preset, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-900">{preset.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        preset.impact === 'High' ? 'bg-green-100 text-green-800' :
                        preset.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {preset.impact} Impact
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{preset.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Budget: {preset.budget}</span>
                      <Button variant="outline" size="sm">
                        Allocate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Custom Allocation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Allocation Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                      <option value="">Select Type</option>
                      <option value="equipment">Equipment</option>
                      <option value="training">Training</option>
                      <option value="scholarship">Scholarship</option>
                      <option value="travel">Travel</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="$0.00"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      rows={3}
                      placeholder="Add notes about this allocation..."
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>
                    Create Allocation
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover India's Hidden Talent?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join coaches across India who are already using AthleteOne to find and develop the next generation of Indian athletes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/auth/signup"
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <Link 
              to="/auth/login"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-indigo-600 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
};
