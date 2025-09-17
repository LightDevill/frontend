import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon,
  ChartBarIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
  CogIcon,
  TrophyIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import { Badge } from '../ui/Misc';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  badge?: string;
  description?: string;
}

const athleteNavigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/athlete/dashboard', icon: HomeIcon },
  { name: 'Performance', href: '/athlete/performance', icon: ChartBarIcon, description: 'Track your progress' },
  { name: 'Opportunities', href: '/athlete/opportunities', icon: TrophyIcon, badge: 'New' },
  { name: 'Video Highlights', href: '/athlete/videos', icon: VideoCameraIcon },
  { name: 'Training Plans', href: '/athlete/training', icon: AcademicCapIcon },
  { name: 'Settings', href: '/athlete/settings', icon: CogIcon },
];

const coachNavigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/coach/dashboard', icon: HomeIcon },
  { name: 'Athlete Search', href: '/coach/search', icon: MagnifyingGlassIcon },
  { name: 'Shortlists', href: '/coach/shortlists', icon: BookmarkIcon },
  { name: 'Analytics', href: '/coach/analytics', icon: ChartBarIcon },
  { name: 'Opportunities', href: '/coach/opportunities', icon: TrophyIcon },
  { name: 'Resources', href: '/coach/resources', icon: BanknotesIcon },
  { name: 'Settings', href: '/coach/settings', icon: CogIcon },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user, session } = useAuth();
  const location = useLocation();
  
  const navigation = session?.role === 'athlete' ? athleteNavigation : coachNavigation;
  
  const isItemActive = (href: string) => {
    return location.pathname === href || 
           (href !== '/athlete/dashboard' && href !== '/coach/dashboard' && location.pathname.startsWith(href));
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z" fill="#747FFF" fillOpacity="0.2"/>
                <path d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8Z" fill="#747FFF" fillOpacity="0.2"/>
                <path d="M24 12C17.37 12 12 17.37 12 24C12 30.63 17.37 36 24 36C30.63 36 36 30.63 36 24C36 17.37 30.63 12 24 12Z" fill="#747FFF"/>
                <path d="M24 18L28 28H20L24 18Z" fill="white"/>
              </svg>
              <span className="text-xl font-bold text-gray-900">AthleteOne</span>
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-2"
              aria-label="Close sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Role Badge */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-600 uppercase">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.name}
                </p>
                <Badge variant="outline" size="sm" className="mt-1">
                  {session?.role}
                </Badge>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isItemActive(item.href);
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={`
                    group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${active 
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon 
                    className={`
                      mr-3 h-5 w-5 transition-colors
                      ${active ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'}
                    `}
                  />
                  <span className="flex-1">{item.name}</span>
                  {item.badge && (
                    <Badge variant="success" size="sm">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Profile Completion (for athletes) */}
          {session?.role === 'athlete' && (
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="bg-gradient-to-r from-primary-50 to-indigo-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900">Profile Completion</h3>
                  <span className="text-sm font-medium text-primary-600">73%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full w-3/4 transition-all duration-300" />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Complete your profile to get better matches
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};