import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';

export const AboutPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Rural Track Star Discovery',
      description: 'Sarah, a 16-year-old from rural Montana, was discovered by a Division I track coach through our platform. Despite having no connections to college athletics, her verified performance data spoke for itself.',
      impact: 'Full scholarship to University of Oregon',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      title: 'International Soccer Talent',
      description: 'Miguel, a talented midfielder from a small town in Mexico, caught the attention of European scouts through our standardized video analysis and performance metrics.',
      impact: 'Professional contract with FC Barcelona Academy',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      title: 'Overcoming Economic Barriers',
      description: 'The Johnson family couldn\'t afford expensive club fees, but their daughter\'s raw talent was undeniable. Our platform provided free access to professional-level evaluation tools.',
      impact: 'Division I basketball scholarship',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const impactMetrics = [
    { label: 'Athletes Discovered', value: '1,247', description: 'From underserved communities' },
    { label: 'Scholarships Awarded', value: '$2.3M', description: 'In total financial aid' },
    { label: 'Countries Represented', value: '47', description: 'Global reach and impact' },
    { label: 'Coaches Active', value: '892', description: 'Using our platform daily' }
  ];

  const innovationAreas = [
    {
      title: 'AI-Powered Talent Assessment',
      description: 'Our machine learning algorithms analyze performance data objectively, removing human bias from the evaluation process.',
      icon: 'psychology'
    },
    {
      title: 'Standardized Metrics',
      description: 'We\'ve developed universal performance standards that work across different regions, economic backgrounds, and training environments.',
      icon: 'analytics'
    },
    {
      title: 'Accessible Technology',
      description: 'Our platform works on any device with internet access, ensuring no athlete is left behind due to technology barriers.',
      icon: 'devices'
    },
    {
      title: 'Transparent Algorithms',
      description: 'Every ranking and recommendation is explainable, with clear reasoning that athletes and coaches can understand and trust.',
      icon: 'visibility'
    }
  ];

  const sustainabilityGoals = [
    {
      title: 'Environmental Impact',
      description: 'Reducing travel for scouting through virtual evaluation, cutting carbon emissions by 60% compared to traditional methods.',
      icon: 'eco'
    },
    {
      title: 'Economic Sustainability',
      description: 'Free basic access ensures the platform remains accessible while premium features support long-term development.',
      icon: 'account_balance'
    },
    {
      title: 'Social Equity',
      description: 'Our commitment to bias-free evaluation creates lasting change in how talent is discovered and developed worldwide.',
      icon: 'balance'
    }
  ];

  return (
    <div id="webcrumbs">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Header */}
        <header className="relative overflow-hidden">
          <div className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
              <a href="/" className="flex items-center space-x-2">
                <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z" fill="white" fillOpacity="0.2"/>
                  <path d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8Z" fill="white" fillOpacity="0.2"/>
                  <path d="M24 12C17.37 12 12 17.37 12 24C12 30.63 17.37 36 24 36C30.63 36 36 30.63 36 24C36 17.37 30.63 12 24 12Z" fill="white"/>
                  <path d="M24 18L28 28H20L24 18Z" fill="#3B82F6"/>
                </svg>
                <span className="text-2xl font-bold tracking-tight">AthleteOne</span>
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/features" className="font-medium hover:text-white/80 transition">Features</a>
                <a href="/athlete" className="font-medium hover:text-white/80 transition">Athletes</a>
                <a href="/coach" className="font-medium hover:text-white/80 transition">Coaches</a>
                <a href="/about" className="font-medium text-white">About</a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/auth/login" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition font-medium">Log in</a>
                <a href="/auth/signup" className="px-4 py-2 rounded-full bg-white text-primary-600 hover:bg-white/90 transition font-medium">Sign up</a>
                <button className="md:hidden text-white">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </nav>
          </div>
        </header>
        
        {/* Mission Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Inclusion & Equity in Sports
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We believe every athlete deserves a fair chance to be discovered, regardless of their background, location, or economic circumstances.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="secondary" size="lg">
                Join Our Mission
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>

      </section>

      {/* Problem & Context */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="The Problem We're Solving"
              subtitle="Traditional talent discovery is broken, leaving countless athletes undiscovered due to systemic barriers."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Discovery Bias</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="material-symbols-outlined text-red-500 mt-1">location_off</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Geographic Barriers</h4>
                      <p className="text-gray-600">Athletes in rural areas have 73% less visibility to college and professional scouts.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="material-symbols-outlined text-red-500 mt-1">attach_money</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Economic Inequality</h4>
                      <p className="text-gray-600">Expensive club fees and travel costs exclude talented athletes from low-income families.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="material-symbols-outlined text-red-500 mt-1">group_off</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Network Dependency</h4>
                      <p className="text-gray-600">Success often depends on who you know, not what you can do.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Athletes training in diverse settings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-start space-x-3">
                    <span className="material-symbols-outlined text-primary-500 mt-1">trending_up</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Our Impact</h4>
                      <p className="text-sm text-gray-600">Leveling the playing field for athletes worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Success Stories"
            subtitle="Real athletes, real results - see how AthleteOne is changing lives through merit-based discovery."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <div className="relative mb-6">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary-600">Success Story</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {study.description}
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <span className="material-symbols-outlined text-green-600">check_circle</span>
                    <span className="font-semibold text-green-800">{study.impact}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Impact"
            subtitle="Numbers that matter - measuring our success in creating opportunities for athletes worldwide."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {metric.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Innovation & Approach"
            subtitle="How we're using technology to solve age-old problems in talent discovery and development."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationAreas.map((area, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary-600 text-3xl">
                    {area.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Access */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Sustainability & Access"
            subtitle="Building a platform that's not just effective today, but sustainable and accessible for generations to come."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityGoals.map((goal, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-green-600 text-3xl">
                    {goal.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {goal.title}
                </h3>
                <p className="text-gray-600">
                  {goal.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Team & Partners"
            subtitle="Meet the passionate individuals and organizations working together to democratize sports talent discovery."
          />
          
          <div className="max-w-4xl mx-auto">
            <Card className="text-center">
              <div className="mb-6">
                <span className="material-symbols-outlined text-6xl text-primary-600 mb-4 block">group</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
                <p className="text-gray-600 mb-8">
                  We're a diverse team of engineers, athletes, coaches, and advocates who believe in the power of technology to create fair opportunities for all.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-600 text-2xl">engineering</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Engineering</h4>
                  <p className="text-sm text-gray-600">Building scalable, accessible technology</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="material-symbols-outlined text-indigo-600 text-2xl">sports</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Sports Science</h4>
                  <p className="text-sm text-gray-600">Expertise in performance analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-600 text-2xl">diversity_3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Inclusion</h4>
                  <p className="text-sm text-gray-600">Advocates for equity and fairness</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Partners</h4>
                <p className="text-gray-600">
                  We work with universities, professional teams, and sports organizations worldwide to ensure our platform meets real-world needs.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Creating Change
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Whether you're an athlete, coach, or supporter of fair play, there's a place for you in the AthleteOne community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Become an Athlete
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              Join as Coach
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Support Our Mission
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <a href="/" className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z" fill="white" fillOpacity="0.2"/>
                  <path d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8Z" fill="white" fillOpacity="0.2"/>
                  <path d="M24 12C17.37 12 12 17.37 12 24C12 30.63 17.37 36 24 36C30.63 36 36 30.63 36 24C36 17.37 30.63 12 24 12Z" fill="white"/>
                  <path d="M24 18L28 28H20L24 18Z" fill="#3B82F6"/>
                </svg>
                <span className="text-xl font-bold">AthleteOne</span>
              </a>
              <p className="text-gray-400 mb-4 max-w-md">
                Connecting athletes and coaches through AI-powered tools that enable merit-based recognition for every athlete's journey.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="material-symbols-outlined">facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="material-symbols-outlined">twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="material-symbols-outlined">instagram</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="material-symbols-outlined">linkedin</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/athlete" className="hover:text-white transition">For Athletes</a></li>
                <li><a href="/coach" className="hover:text-white transition">For Coaches</a></li>
                <li><a href="/features" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AthleteOne. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};
