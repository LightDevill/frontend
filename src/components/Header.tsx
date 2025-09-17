import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Features', href: '/features' },
    { name: 'Athletes', href: '/athlete' },
    { name: 'Coaches', href: '/coach' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z" fill="white" fillOpacity="0.2"/>
              <path d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8Z" fill="white" fillOpacity="0.2"/>
              <path d="M24 12C17.37 12 12 17.37 12 24C12 30.63 17.37 36 24 36C30.63 36 36 30.63 36 24C36 17.37 30.63 12 24 12Z" fill="white"/>
              <path d="M24 18L28 28H20L24 18Z" fill="#3B82F6"/>
            </svg>
            <span className="text-2xl font-bold tracking-tight">AthleteOne</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition ${
                  isActive(item.href) 
                    ? 'text-white' 
                    : 'hover:text-white/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/auth/login"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition font-medium"
            >
              Log in
            </Link>
            <Link
              to="/auth/signup"
              className="px-4 py-2 rounded-full bg-white text-primary-600 hover:bg-white/90 transition font-medium"
            >
              Sign up
            </Link>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary-700 border-t border-primary-500">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition ${
                    isActive(item.href)
                      ? 'bg-primary-600 text-white'
                      : 'text-white/80 hover:bg-primary-600 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
