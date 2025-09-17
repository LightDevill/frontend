import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: 'account_circle',
      title: 'Standardized Profiles',
      description: 'Verified stats, achievements, biometrics, video highlights, and wearable integrations for fair evaluation across all backgrounds.',
      color: 'primary'
    },
    {
      icon: 'smart_toy',
      title: 'AI Training Plans',
      description: 'Personalized, adaptive routines derived from goals, position, and performance history with low-cost access to professional guidance.',
      color: 'indigo'
    },
    {
      icon: 'fitness_center',
      title: 'Performance Tracking',
      description: 'Training logs, match data, time-series metrics, and progress insights for athletes and coaches to make data-driven decisions.',
      color: 'blue'
    },
    {
      icon: 'balance',
      title: 'Bias-Free Scouting',
      description: 'Merit-centric ranking with standardized inputs, bias audits, and equitable search filters across regions and demographics.',
      color: 'green'
    },
    {
      icon: 'videocam',
      title: 'Video Highlights',
      description: 'Accessible anywhere with simple upload/playback for highlights using modern web video tooling to showcase your talent.',
      color: 'amber'
    },
    {
      icon: 'leaderboard',
      title: 'Leaderboards',
      description: 'Transparent rankings based on verified performance data, updated in real-time with fair comparison metrics.',
      color: 'purple'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Create Your Profile',
      description: 'Build your standardized profile with verified stats, videos, and achievements that highlight your true potential.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      step: 2,
      title: 'AI-Powered Matching',
      description: 'Our algorithms match you with opportunities based on your skills and goals, not your background or connections.',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      step: 3,
      title: 'Grow & Achieve',
      description: 'Track your progress, train with AI-generated plans, and connect with coaches who see your true potential.',
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const inclusivityFeatures = [
    {
      title: 'Geographic Equity',
      description: 'No location bias - athletes from rural areas have the same visibility as those in major cities.',
      icon: 'public'
    },
    {
      title: 'Economic Accessibility',
      description: 'Free basic profiles ensure talent isn\'t hidden behind paywalls or expensive equipment requirements.',
      icon: 'monetization_on'
    },
    {
      title: 'Demographic Fairness',
      description: 'Standardized metrics eliminate unconscious bias based on background, appearance, or connections.',
      icon: 'diversity_3'
    },
    {
      title: 'Language Support',
      description: 'Multi-language interface ensures global accessibility and removes language barriers.',
      icon: 'translate'
    }
  ];

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
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Powerful Features for Fair Play
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Discover the tools that level the playing field and give every athlete the opportunity to shine based on merit, not connections.
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

      {/* Key Capabilities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Key Capabilities"
            subtitle="Our platform is designed to level the playing field and give every athlete the opportunity to shine."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group">
                <div className={`w-14 h-14 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:bg-${feature.color}-200 transition`}>
                  <span className={`material-symbols-outlined text-${feature.color}-600 text-2xl`}>
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How AthleteOne Works"
            subtitle="Our platform connects athletes and coaches through a merit-based system that eliminates traditional barriers."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl z-10">
                  {step.step}
                </div>
                <Card className="pt-10 pb-6 px-6 mt-6 relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {step.description}
                  </p>
                  <div className="flex justify-center">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="h-40 w-40 object-cover rounded-lg shadow"
                    />
                  </div>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-16 h-2 bg-primary-200 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusivity & Equity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Inclusivity & Equity"
            subtitle="We're committed to breaking down barriers and ensuring fair access for all athletes, regardless of background or location."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusivityFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary-600 text-3xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights Demo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Video Highlights Demo"
            subtitle="Showcase your talent with our advanced video platform featuring accessibility controls and highlight chapters."
          />
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-0 overflow-hidden">
              <div className="relative h-64 md:h-96 bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="material-symbols-outlined text-6xl mb-4 block">play_circle</span>
                    <p className="text-lg">Video Demo Coming Soon</p>
                    <p className="text-sm opacity-75">Interactive video player with captions and keyboard controls</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-800">Chapter 1: Sprint Highlights</span>
                      <span className="text-xs text-gray-600">2:34</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-primary-500 h-1 rounded-full w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Leaderboards Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Leaderboards Preview"
            subtitle="Transparent rankings based on verified performance data, updated in real-time."
          />
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Rank</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Athlete</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Sport</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Score</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Region</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { rank: 1, name: 'Alex Johnson', sport: 'Track & Field', score: '98.5', region: 'Rural Midwest' },
                      { rank: 2, name: 'Maria Santos', sport: 'Soccer', score: '97.8', region: 'Urban East' },
                      { rank: 3, name: 'David Chen', sport: 'Basketball', score: '96.2', region: 'Suburban West' },
                      { rank: 4, name: 'Sarah Williams', sport: 'Swimming', score: '95.9', region: 'Rural South' },
                      { rank: 5, name: 'Michael Brown', sport: 'Tennis', score: '94.7', region: 'Urban North' }
                    ].map((athlete, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                            athlete.rank <= 3 ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {athlete.rank}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-medium text-gray-900">{athlete.name}</td>
                        <td className="py-3 px-4 text-gray-600">{athlete.sport}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {athlete.score}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{athlete.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline">
                  View Full Leaderboards
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of athletes and coaches who are already using AthleteOne to discover talent and achieve their goals.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/auth/signup"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-medium hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
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
