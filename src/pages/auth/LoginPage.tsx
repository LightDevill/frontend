import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Checkbox } from '../../components/ui/Misc';
import { useToast } from '../../components/ui/Toast';
import { loginSchema, LoginFormData } from '../../lib/validation';
import { UserRole } from '../../types';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, switchRole } = useAuth();
  const { addToast } = useToast();
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const { user } = await login(data);
      
      // Check if user has multiple roles
      if (user.roles.length > 1) {
        setUserRoles(user.roles);
        setShowRoleSelection(true);
      } else {
        // Single role - redirect directly
        const redirectPath = user.roles[0] === 'athlete' ? '/athlete/dashboard' : '/coach/dashboard';
        navigate(redirectPath, { replace: true });
        addToast({
          type: 'success',
          title: 'Welcome back!',
          message: 'You have been successfully logged in.',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('root', {
        type: 'manual',
        message: 'Invalid email or password. Please try again.',
      });
      addToast({
        type: 'error',
        title: 'Login failed',
        message: 'Please check your credentials and try again.',
      });
    }
  };

  const handleRoleSelection = (role: UserRole) => {
    // Update the session with the selected role using the switchRole method
    switchRole(role);
    
    const redirectPath = role === 'athlete' ? '/athlete/dashboard' : '/coach/dashboard';
    navigate(redirectPath, { replace: true });
    addToast({
      type: 'success',
      title: 'Welcome back!',
      message: `Logged in as ${role}.`,
    });
  };

  if (showRoleSelection) {
    return (
      <div id="webcrumbs">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Choose Your Role
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              You have multiple roles. Please select one to continue.
            </p>
          </div>
          
          <div className="space-y-4">
            {userRoles.map((role) => (
              <button
                key={role}
                onClick={() => handleRoleSelection(role)}
                className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
              >
                <span className="capitalize">{role}</span>
              </button>
            ))}
          </div>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div id="webcrumbs">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Hero Section */}
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z" fill="#747FFF" fillOpacity="0.2"/>
              <path d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8Z" fill="#747FFF" fillOpacity="0.2"/>
              <path d="M24 12C17.37 12 12 17.37 12 24C12 30.63 17.37 36 24 36C30.63 36 36 30.63 36 24C36 17.37 30.63 12 24 12Z" fill="#747FFF"/>
              <path d="M24 18L28 28H20L24 18Z" fill="white"/>
            </svg>
            <span className="text-2xl font-bold text-gray-900">AthleteOne</span>
          </Link>
          
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Access your data-driven athletic journey
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white shadow-auth rounded-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {errors.root && (
              <div className="rounded-md bg-error-50 p-4" role="alert">
                <div className="text-sm text-error-700">
                  {errors.root.message}
                </div>
              </div>
            )}

            <Input
              label="Email address"
              type="email"
              autoComplete="email"
              required
              leftIcon={<EnvelopeIcon className="h-5 w-5" />}
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
              required
              leftIcon={<LockClosedIcon className="h-5 w-5" />}
              showPasswordToggle
              error={errors.password?.message}
              {...register('password')}
            />

            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember me"
                {...register('rememberMe')}
              />
              <Link
                to="/auth/forgot-password"
                className="text-sm text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/auth/signup"
              className="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
            >
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-primary-600 mb-2">
              <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900">Fair Access</h3>
            <p className="text-xs text-gray-600 mt-1">Merit-based opportunities</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-primary-600 mb-2">
              <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900">Data-Driven</h3>
            <p className="text-xs text-gray-600 mt-1">Verified performance metrics</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};