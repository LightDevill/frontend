import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { 
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  CogIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import { Badge } from '../ui/Misc';
import { UserRole } from '../../types';

interface TopbarProps {
  onMenuClick: () => void;
  title?: string;
  breadcrumbs?: Array<{ name: string; href?: string }>;
}

export const Topbar: React.FC<TopbarProps> = ({ 
  onMenuClick, 
  title,
  breadcrumbs = []
}) => {
  const { user, session, logout, switchRole } = useAuth();
  const [notifications] = useState([
    { id: 1, title: 'New opportunity match', unread: true },
    { id: 2, title: 'Profile view from coach', unread: true },
    { id: 3, title: 'Training plan updated', unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;
  const hasMultipleRoles = user?.roles && user.roles.length > 1;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleRoleSwitch = (role: UserRole) => {
    switchRole(role);
    const redirectPath = role === 'athlete' ? '/athlete/dashboard' : '/coach/dashboard';
    window.location.href = redirectPath; // Navigate to the appropriate dashboard
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6 lg:px-8">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-2"
          aria-label="Open sidebar"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="hidden sm:flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.name} className="flex items-center">
                  {index > 0 && (
                    <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {crumb.href ? (
                    <Link
                      to={crumb.href}
                      className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-gray-900">
                      {crumb.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Page Title */}
        {title && !breadcrumbs.length && (
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        )}
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Menu as="div" className="relative">
          <Menu.Button className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md">
            <BellIcon className="h-6 w-6" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-error-500 text-white text-xs rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Menu.Button>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map((notification) => (
                  <Menu.Item key={notification.id}>
                    {({ active }) => (
                      <div
                        className={`
                          px-4 py-3 text-sm cursor-pointer flex items-center space-x-3
                          ${active ? 'bg-gray-50' : ''}
                          ${notification.unread ? 'bg-blue-50' : ''}
                        `}
                      >
                        <div className="flex-1">
                          <p className={`${notification.unread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                            {notification.title}
                          </p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        )}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
              <div className="p-3 border-t border-gray-200">
                <button className="text-sm text-primary-600 hover:text-primary-500 font-medium">
                  View all notifications
                </button>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* User Menu */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-primary-600">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500 capitalize">{session?.role}</p>
            </div>
            <ChevronDownIcon className="h-4 w-4" />
          </Menu.Button>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="p-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
                <Badge variant="outline" size="sm" className="mt-1 capitalize">
                  {session?.role}
                </Badge>
              </div>

              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/${session?.role}/profile`}
                      className={`
                        flex items-center px-3 py-2 text-sm
                        ${active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}
                      `}
                    >
                      <UserIcon className="mr-3 h-4 w-4" />
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/${session?.role}/settings`}
                      className={`
                        flex items-center px-3 py-2 text-sm
                        ${active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}
                      `}
                    >
                      <CogIcon className="mr-3 h-4 w-4" />
                      Settings
                    </Link>
                  )}
                </Menu.Item>

                {/* Role Switcher */}
                {hasMultipleRoles && (
                  <>
                    <div className="border-t border-gray-200 my-1" />
                    <div className="px-3 py-2">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Switch Role
                      </p>
                    </div>
                    {user?.roles.filter(role => role !== session?.role).map((role) => (
                      <Menu.Item key={role}>
                        {({ active }) => (
                          <button
                            onClick={() => handleRoleSwitch(role)}
                            className={`
                              w-full flex items-center px-3 py-2 text-sm text-left
                              ${active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}
                            `}
                          >
                            <UserCircleIcon className="mr-3 h-4 w-4" />
                            Switch to {role}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </>
                )}

                <div className="border-t border-gray-200 my-1" />
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={`
                        w-full flex items-center px-3 py-2 text-sm text-left
                        ${active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}
                      `}
                    >
                      <ArrowRightOnRectangleIcon className="mr-3 h-4 w-4" />
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};