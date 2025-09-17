import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  UserIcon, 
  EnvelopeIcon, 
  LockClosedIcon,
  CheckCircleIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Checkbox } from '../../components/ui/Misc';
import { useToast } from '../../components/ui/Toast';
import { signupSchema, SignupFormData } from '../../lib/validation';
import { UserRole } from '../../types';

type SignupStep = 'role' | 'details' | 'profile';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const { addToast } = useToast();
  const [currentStep, setCurrentStep] = useState<SignupStep>('role');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    watch,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      agreedToTerms: false,
    },
  });

  const password = watch('password');

  const passwordStrength = {
    hasLength: password?.length >= 8,
    hasUpper: /[A-Z]/.test(password || ''),
    hasLower: /[a-z]/.test(password || ''),
    hasNumber: /[0-9]/.test(password || ''),
    hasSpecial: /[^A-Za-z0-9]/.test(password || ''),
  };

  const strengthScore = Object.values(passwordStrength).filter(Boolean).length;

  const getStrengthColor = () => {
    if (strengthScore < 3) return 'bg-error-500';
    if (strengthScore < 5) return 'bg-warning-500';
    return 'bg-success-500';
  };

  const getStrengthText = () => {
    if (strengthScore < 3) return 'Weak';
    if (strengthScore < 5) return 'Medium';
    return 'Strong';
  };

  const handleRoleSelection = (role: UserRole) => {
    setSelectedRole(role);
    setCurrentStep('details');
  };

  const onSubmit = async (data: SignupFormData) => {
    if (!selectedRole) {
      setError('root', { message: 'Please select a role first.' });
      return;
    }

    try {
      const signupData = {
        ...data,
        role: selectedRole,
      };
      
      await signup(signupData);
      
      addToast({
        type: 'success',
        title: 'Account created successfully!',
        message: 'Welcome to AthleteOne. Let\'s complete your profile.',
      });

      // Redirect to onboarding
      const onboardingPath = selectedRole === 'athlete' ? '/athlete/onboarding' : '/coach/onboarding';
      navigate(onboardingPath, { replace: true });
    } catch (error) {
      console.error('Signup error:', error);
      setError('root', {
        type: 'manual',
        message: 'Failed to create account. Please try again.',
      });
      addToast({
        type: 'error',
        title: 'Signup failed',
        message: 'Please check your information and try again.',
      });
    }
  };

  const renderRoleSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Choose Your Path</h2>
        <p className="mt-2 text-base text-gray-600">
          Select your role to get started with AthleteOne
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <button
          type="button"
          onClick={() => handleRoleSelection('athlete')}
          className="group relative p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-left"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <UserIcon className="w-6 h-6 text-primary-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">I'm an Athlete</h3>
              <p className="mt-1 text-sm text-gray-600">
                Create your digital portfolio, get discovered by coaches, and track your progress with AI-powered insights.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">Performance Tracking</span>
                <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">Fair Discovery</span>
                <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">AI Training Plans</span>
              </div>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => handleRoleSelection('coach')}
          className="group relative p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-left"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                <AcademicCapIcon className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">I'm a Coach</h3>
              <p className="mt-1 text-sm text-gray-600">
                Discover talented athletes worldwide, analyze performance data, and build your team with bias-free scouting.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Global Talent Pool</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Data Analytics</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Bias-Free Scouting</span>
              </div>
            </div>
          </div>
        </button>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={() => setCurrentStep('role')}
          className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
        >
          ← Back to role selection
        </button>
      </div>
    </div>
  );

  const renderDetailsForm = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
        <p className="mt-2 text-base text-gray-600">
          Join as a {selectedRole} and start your journey
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {errors.root && (
          <div className="rounded-md bg-error-50 p-4" role="alert">
            <div className="text-sm text-error-700">
              {errors.root.message}
            </div>
          </div>
        )}

        <Input
          label="Full Name"
          type="text"
          autoComplete="name"
          required
          leftIcon={<UserIcon className="h-5 w-5" />}
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          label="Email Address"
          type="email"
          autoComplete="email"
          required
          leftIcon={<EnvelopeIcon className="h-5 w-5" />}
          error={errors.email?.message}
          {...register('email')}
        />

        <div className="space-y-3">
          <Input
            label="Password"
            type="password"
            autoComplete="new-password"
            required
            leftIcon={<LockClosedIcon className="h-5 w-5" />}
            showPasswordToggle
            error={errors.password?.message}
            {...register('password')}
          />
          
          {password && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Password strength:</span>
                <span className={`font-medium ${strengthScore < 3 ? 'text-error-600' : strengthScore < 5 ? 'text-warning-600' : 'text-success-600'}`}>
                  {getStrengthText()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor()}`}
                  style={{ width: `${(strengthScore / 5) * 100}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className={`flex items-center space-x-1 ${passwordStrength.hasLength ? 'text-success-600' : 'text-gray-400'}`}>
                  <CheckCircleIcon className="h-3 w-3" />
                  <span>8+ characters</span>
                </div>
                <div className={`flex items-center space-x-1 ${passwordStrength.hasUpper ? 'text-success-600' : 'text-gray-400'}`}>
                  <CheckCircleIcon className="h-3 w-3" />
                  <span>Uppercase letter</span>
                </div>
                <div className={`flex items-center space-x-1 ${passwordStrength.hasLower ? 'text-success-600' : 'text-gray-400'}`}>
                  <CheckCircleIcon className="h-3 w-3" />
                  <span>Lowercase letter</span>
                </div>
                <div className={`flex items-center space-x-1 ${passwordStrength.hasNumber ? 'text-success-600' : 'text-gray-400'}`}>
                  <CheckCircleIcon className="h-3 w-3" />
                  <span>Number</span>
                </div>
                <div className={`flex items-center space-x-1 ${passwordStrength.hasSpecial ? 'text-success-600' : 'text-gray-400'} col-span-2`}>
                  <CheckCircleIcon className="h-3 w-3" />
                  <span>Special character</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <Input
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          required
          leftIcon={<LockClosedIcon className="h-5 w-5" />}
          showPasswordToggle
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <Checkbox
          label={
            <span>
              I agree to the{' '}
              <Link to="/terms" className="text-primary-600 hover:text-primary-500">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-primary-600 hover:text-primary-500">
                Privacy Policy
              </Link>
            </span>
          }
          error={errors.agreedToTerms?.message}
          {...register('agreedToTerms')}
        />

        <div className="flex space-x-3">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => {
              setCurrentStep('role');
              setSelectedRole(null);
            }}
          >
            Back
          </Button>
          <Button
            type="submit"
            size="lg"
            className="flex-1"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting || isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div id="webcrumbs">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
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
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-4">
          <div className={`w-3 h-3 rounded-full transition-colors ${currentStep === 'role' ? 'bg-primary-600' : 'bg-primary-200'}`} />
          <div className={`w-8 h-0.5 transition-colors ${currentStep !== 'role' ? 'bg-primary-600' : 'bg-gray-200'}`} />
          <div className={`w-3 h-3 rounded-full transition-colors ${currentStep === 'details' ? 'bg-primary-600' : currentStep === 'profile' ? 'bg-primary-600' : 'bg-gray-200'}`} />
        </div>

        {/* Form Content */}
        <div className="bg-white shadow-auth rounded-xl p-8">
          {currentStep === 'role' ? renderRoleSelection() : renderDetailsForm()}
        </div>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/auth/login"
              className="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};