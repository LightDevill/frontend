import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

export const HomePage: React.FC = () => {
  return (
    <div id="webcrumbs">
      <Header />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 pt-16 pb-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                From rural tracks to global arenas
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                AthleteOne connects athletes and coaches through standardized, transparent, bias-aware, AI-powered tools that enable merit-based recognition for every athlete's journey.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/auth/signup" 
                  className="px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 z-20 text-center"
                >
                  Get Started
                </Link>
                <Link 
                  to="/athlete" 
                  className="px-6 py-3 rounded-full border-2 border-primary-600 text-primary-600 font-medium hover:bg-primary-50 transition z-20 text-center"
                >
                  Start Discovering
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl shadow-2xl">
                <div className="absolute inset-0 bg-gray-800 opacity-40 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Athletes racing on track" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-primary-500">verified</span>
                      <span className="ml-2 font-medium text-gray-800">1,000+ athletes discovered</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary-500 h-1.5 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <span className="material-symbols-outlined text-green-500">trending_up</span>
                  <span className="font-medium text-gray-800">Fair Access for All</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fillOpacity="1" d="M0,224L60,229.3C120,235,240,245,360,218.7C480,192,600,128,720,117.3C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Core Features"
              subtitle="Our platform is designed to level the playing field and give every athlete the opportunity to shine."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="group">
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-200 transition">
                  <span className="material-symbols-outlined text-amber-600 text-2xl">balance</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bias-Free Scouting</h3>
                <p className="text-gray-600">
                  Merit-centric ranking with standardized inputs, bias audits, and equitable search filters across regions and demographics.
                </p>
              </Card>
              
              {/* Feature 2 */}
              <Card className="group">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition">
                  <span className="material-symbols-outlined text-purple-600 text-2xl">leaderboard</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Leaderboards</h3>
                <p className="text-gray-600">
                  Transparent rankings based on verified performance data, updated in real-time with fair comparison metrics.
                </p>
              </Card>
              
              {/* Feature 3 */}
              <Card className="group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                  <span className="material-symbols-outlined text-blue-600 text-2xl">fitness_center</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Training Plans</h3>
                <p className="text-gray-600">
                  Personalized, adaptive routines derived from goals, position, and performance history with low-cost access to professional guidance.
                </p>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/features" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                See More Features
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="How AthleteOne Works"
              subtitle="Our platform connects athletes and coaches through a merit-based system that eliminates traditional barriers."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl z-10">1</div>
                <div className="pt-10 pb-6 px-6 bg-white rounded-xl shadow-md hover:shadow-lg transition mt-6 relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Create Your Profile</h3>
                  <p className="text-gray-600 text-center">
                    Build your standardized profile with verified stats, videos, and achievements that highlight your true potential.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                      alt="Athlete creating profile" 
                      className="h-40 w-40 object-cover rounded-lg shadow"
                    />
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-16 h-2 bg-primary-200 -translate-y-1/2"></div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl z-10">2</div>
                <div className="pt-10 pb-6 px-6 bg-white rounded-xl shadow-md hover:shadow-lg transition mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">AI-Powered Matching</h3>
                  <p className="text-gray-600 text-center">
                    Our algorithms match you with opportunities based on your skills and goals, not your background or connections.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                      alt="AI matching athletes and coaches" 
                      className="h-40 w-40 object-cover rounded-lg shadow"
                    />
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-16 h-2 bg-primary-200 -translate-y-1/2"></div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl z-10">3</div>
                <div className="pt-10 pb-6 px-6 bg-white rounded-xl shadow-md hover:shadow-lg transition mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Grow & Achieve</h3>
                  <p className="text-gray-600 text-center">
                    Track your progress, train with AI-generated plans, and connect with coaches who see your true potential.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                      alt="Athlete achieving goals" 
                      className="h-40 w-40 object-cover rounded-lg shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Athletic Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of athletes and coaches who are already using AthleteOne to discover talent and achieve their goals.
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
                className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary-600 transition shadow-lg"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
