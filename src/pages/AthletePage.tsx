import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const AthletePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      location: ''
    },
    sportInfo: {
      primarySport: '',
      position: '',
      experience: '',
      level: ''
    },
    physicalMetrics: {
      height: '',
      weight: '',
      wingspan: '',
      bodyFat: ''
    },
    achievements: {
      awards: '',
      records: '',
      competitions: ''
    }
  });

  const benefits = [
    {
      title: 'Merit-Based Discovery',
      description: 'Get discovered based on your performance, not your connections or background.',
      icon: 'star'
    },
    {
      title: 'AI Training Plans',
      description: 'Receive personalized training programs that adapt to your progress and goals.',
      icon: 'fitness_center'
    },
    {
      title: 'Performance Analytics',
      description: 'Track your improvement with detailed metrics and visualizations.',
      icon: 'analytics'
    },
    {
      title: 'Global Opportunities',
      description: 'Access opportunities from coaches and teams worldwide.',
      icon: 'public'
    }
  ];

  const opportunities = [
    {
      title: 'Division I Track Scholarship',
      organization: 'University of Oregon',
      sport: 'Track & Field',
      level: 'College',
      location: 'Eugene, OR',
      deadline: '2024-03-15',
      tags: ['Scholarship', 'Division I', 'Track'],
      verified: true
    },
    {
      title: 'Youth Development Program',
      organization: 'FC Barcelona Academy',
      sport: 'Soccer',
      level: 'Youth',
      location: 'Remote',
      deadline: '2024-04-01',
      tags: ['Development', 'International', 'Youth'],
      verified: true
    },
    {
      title: 'Summer Training Camp',
      organization: 'Elite Basketball Academy',
      sport: 'Basketball',
      level: 'High School',
      location: 'Los Angeles, CA',
      deadline: '2024-05-20',
      tags: ['Training', 'Summer', 'Elite'],
      verified: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      sport: 'Track & Field',
      quote: 'AthleteOne helped me get discovered by my dream college. The standardized profile made my achievements speak for themselves.',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Miguel Santos',
      sport: 'Soccer',
      quote: 'Coming from a small town, I never thought I\'d get noticed by professional scouts. AthleteOne changed everything.',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.personalInfo.firstName}
                  onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.personalInfo.lastName}
                  onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.personalInfo.dateOfBirth}
                  onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.personalInfo.location}
                  onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sport Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Sport</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.sportInfo.primarySport}
                  onChange={(e) => handleInputChange('sportInfo', 'primarySport', e.target.value)}
                >
                  <option value="">Select Sport</option>
                  <option value="track">Track & Field</option>
                  <option value="soccer">Soccer</option>
                  <option value="basketball">Basketball</option>
                  <option value="swimming">Swimming</option>
                  <option value="tennis">Tennis</option>
                  <option value="volleyball">Volleyball</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position/Role</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.sportInfo.position}
                  onChange={(e) => handleInputChange('sportInfo', 'position', e.target.value)}
                  placeholder="e.g., Sprinter, Midfielder, Point Guard"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.sportInfo.experience}
                  onChange={(e) => handleInputChange('sportInfo', 'experience', e.target.value)}
                >
                  <option value="">Select Level</option>
                  <option value="beginner">Beginner (0-2 years)</option>
                  <option value="intermediate">Intermediate (2-5 years)</option>
                  <option value="advanced">Advanced (5+ years)</option>
                  <option value="elite">Elite/Professional</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Competition Level</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.sportInfo.level}
                  onChange={(e) => handleInputChange('sportInfo', 'level', e.target.value)}
                >
                  <option value="">Select Level</option>
                  <option value="youth">Youth/Recreational</option>
                  <option value="high-school">High School</option>
                  <option value="college">College</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Physical Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.physicalMetrics.height}
                  onChange={(e) => handleInputChange('physicalMetrics', 'height', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.physicalMetrics.weight}
                  onChange={(e) => handleInputChange('physicalMetrics', 'weight', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Wingspan (cm)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.physicalMetrics.wingspan}
                  onChange={(e) => handleInputChange('physicalMetrics', 'wingspan', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Body Fat %</label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.physicalMetrics.bodyFat}
                  onChange={(e) => handleInputChange('physicalMetrics', 'bodyFat', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Achievements & Records</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Awards & Honors</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  rows={3}
                  value={formData.achievements.awards}
                  onChange={(e) => handleInputChange('achievements', 'awards', e.target.value)}
                  placeholder="List your awards, honors, and recognitions..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Records & Personal Bests</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  rows={3}
                  value={formData.achievements.records}
                  onChange={(e) => handleInputChange('achievements', 'records', e.target.value)}
                  placeholder="List your records, personal bests, and notable performances..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Competitions & Events</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  rows={3}
                  value={formData.achievements.competitions}
                  onChange={(e) => handleInputChange('achievements', 'competitions', e.target.value)}
                  placeholder="List major competitions, tournaments, and events you've participated in..."
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
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
        <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              For Athletes
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Showcase your talent, get discovered, and achieve your athletic dreams through merit-based evaluation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/auth/signup"
                className="px-6 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
              <Link 
                to="/auth/login"
                className="px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary-600 transition"
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
            subtitle="Get the tools and opportunities you need to reach your full potential as an athlete."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary-600 text-3xl">
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

      {/* Standardized Profile Builder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Create Your Standardized Profile"
            subtitle="Build a comprehensive profile that showcases your true potential to coaches worldwide."
          />
          
          <div className="max-w-4xl mx-auto">
            <Card>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Step {currentStep} of 4</span>
                  <span className="text-sm text-gray-500">{Math.round((currentStep / 4) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Form Content */}
              {renderFormStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                <div className="flex space-x-4">
                  <Button variant="ghost">
                    Save as Draft
                  </Button>
                  {currentStep < 4 ? (
                    <Button onClick={nextStep}>
                      Next Step
                    </Button>
                  ) : (
                    <Button>
                      Complete Profile
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Logging Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Performance Tracking"
            subtitle="Monitor your progress with detailed analytics and insights."
          />
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">100m Sprint</span>
                      <span className="text-sm font-bold text-primary-600">10.85s</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Vertical Jump</span>
                      <span className="text-sm font-bold text-primary-600">32.5"</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Bench Press</span>
                      <span className="text-sm font-bold text-primary-600">185 lbs</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Chart</h3>
                  <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <span className="material-symbols-outlined text-4xl mb-2 block">show_chart</span>
                      <p>Performance chart will appear here</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Opportunities Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Current Opportunities"
            subtitle="Discover opportunities that match your profile and goals."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{opportunity.organization}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {opportunity.sport}
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {opportunity.level}
                      </span>
                      {opportunity.verified && (
                        <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full flex items-center">
                          <span className="material-symbols-outlined text-xs mr-1">verified</span>
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="material-symbols-outlined text-sm mr-2">location_on</span>
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="material-symbols-outlined text-sm mr-2">schedule</span>
                    Deadline: {opportunity.deadline}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {opportunity.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="primary">
              View All Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Video Highlights Uploader */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Video Highlights"
            subtitle="Showcase your best moments with our advanced video platform."
          />
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <span className="material-symbols-outlined text-6xl text-gray-400 mb-4 block">cloud_upload</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Your Highlights</h3>
                <p className="text-gray-600 mb-6">
                  Drag and drop your video files here, or click to browse. Supports MP4, MOV, and AVI formats.
                </p>
                <Button variant="outline">
                  Choose Files
                </Button>
                <div className="mt-4 text-sm text-gray-500">
                  <p>• Maximum file size: 500MB</p>
                  <p>• Supported formats: MP4, MOV, AVI</p>
                  <p>• Automatic compression and optimization</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Success Stories"
            subtitle="Hear from athletes who have achieved their dreams through AthleteOne."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{testimonial.sport}</p>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Discovered?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of athletes who are already using AthleteOne to showcase their talent and achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/auth/signup"
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-medium hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <Link 
              to="/auth/login"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary-600 transition"
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
