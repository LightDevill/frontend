import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  CheckCircleIcon, 
  ChevronRightIcon,
  ChevronLeftIcon,
  UserIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  TrophyIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Textarea } from '../../components/ui/Textarea';
import { useToast } from '../../components/ui/Toast';

// Validation schemas for each step
const professionalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required').min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(1, 'Last name is required').min(2, 'Last name must be at least 2 characters'),
  organization: z.string().min(1, 'Organization is required'),
  position: z.string().min(1, 'Position is required'),
  yearsExperience: z.string().min(1, 'Experience is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  country: z.string().min(1, 'Country is required'),
});

const coachingBackgroundSchema = z.object({
  primarySports: z.array(z.string()).min(1, 'Select at least one sport'),
  coachingLevel: z.string().min(1, 'Coaching level is required'),
  certifications: z.array(z.string()).optional(),
  achievements: z.string().optional(),
  coachingPhilosophy: z.string().optional(),
  specializations: z.array(z.string()).optional(),
});

// Additional schemas and types will be implemented when those steps are fully built
// const searchPreferencesSchema = z.object({ ... });
// const discoveryPreferencesSchema = z.object({ ... });
// const preferencesSchema = z.object({ ... });

type ProfessionalInfoData = z.infer<typeof professionalInfoSchema>;
type CoachingBackgroundData = z.infer<typeof coachingBackgroundSchema>;

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType<{ onNext: () => void; onPrev: () => void }>;
}

export const CoachOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [allData, setAllData] = useState<Record<string, any>>({});

  // Professional Info Step Component
  const ProfessionalInfoStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ProfessionalInfoData>({
      resolver: zodResolver(professionalInfoSchema),
      defaultValues: allData.professionalInfo || {},
    });

    const onSubmit = (data: ProfessionalInfoData) => {
      setAllData((prev: Record<string, any>) => ({ ...prev, professionalInfo: data }));
      setCompletedSteps(prev => new Set([...prev, 0]));
      onNext();
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            required
            error={errors.firstName?.message}
            {...register('firstName')}
          />
          <Input
            label="Last Name"
            required
            error={errors.lastName?.message}
            {...register('lastName')}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Organization/School"
            required
            placeholder="e.g., Elite Athletics Academy, Lincoln High School"
            error={errors.organization?.message}
            {...register('organization')}
          />
          <Input
            label="Position/Title"
            required
            placeholder="e.g., Head Coach, Assistant Coach, Director"
            error={errors.position?.message}
            {...register('position')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Years of Coaching Experience"
            required
            error={errors.yearsExperience?.message}
            {...register('yearsExperience')}
            options={[
              { value: '0-2', label: '0-2 years' },
              { value: '3-5', label: '3-5 years' },
              { value: '6-10', label: '6-10 years' },
              { value: '11-15', label: '11-15 years' },
              { value: '16-20', label: '16-20 years' },
              { value: '20+', label: '20+ years' },
            ]}
          />
          <Input
            label="Phone Number"
            type="tel"
            required
            error={errors.phoneNumber?.message}
            {...register('phoneNumber')}
          />
        </div>

        <Input
          label="Street Address"
          required
          error={errors.address?.message}
          {...register('address')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="City"
            required
            error={errors.city?.message}
            {...register('city')}
          />
          <Input
            label="State/Province"
            required
            error={errors.state?.message}
            {...register('state')}
          />
          <Input
            label="ZIP/Postal Code"
            required
            error={errors.zipCode?.message}
            {...register('zipCode')}
          />
        </div>

        <Select
          label="Country"
          required
          error={errors.country?.message}
          {...register('country')}
          options={[
            { value: 'US', label: 'United States' },
            { value: 'CA', label: 'Canada' },
            { value: 'UK', label: 'United Kingdom' },
            { value: 'AU', label: 'Australia' },
          ]}
        />

        <div className="flex justify-end">
          <Button type="submit">
            Continue
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </form>
    );
  };

  // Coaching Background Step Component
  const CoachingBackgroundStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext, onPrev }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm<CoachingBackgroundData>({
      resolver: zodResolver(coachingBackgroundSchema),
      defaultValues: allData.coachingBackground || { primarySports: [], certifications: [], specializations: [] },
    });

    const [selectedSports, setSelectedSports] = useState<string[]>(allData.coachingBackground?.primarySports || []);

    const sportOptions = [
      'Track & Field', 'Basketball', 'Football', 'Soccer', 'Tennis', 
      'Swimming', 'Baseball', 'Softball', 'Volleyball', 'Golf', 
      'Cross Country', 'Wrestling', 'Gymnastics', 'Lacrosse'
    ];

    const toggleSport = (sport: string) => {
      const updated = selectedSports.includes(sport)
        ? selectedSports.filter(s => s !== sport)
        : [...selectedSports, sport];
      setSelectedSports(updated);
      setValue('primarySports', updated);
    };

    const onSubmit = (data: CoachingBackgroundData) => {
      setAllData((prev: Record<string, any>) => ({ ...prev, coachingBackground: { ...data, primarySports: selectedSports } }));
      setCompletedSteps(prev => new Set([...prev, 1]));
      onNext();
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Primary Sports <span className="text-error-500">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {sportOptions.map((sport) => (
              <label key={sport} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedSports.includes(sport)}
                  onChange={() => toggleSport(sport)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{sport}</span>
              </label>
            ))}
          </div>
          {errors.primarySports && (
            <p className="mt-1 text-sm text-error-600">{errors.primarySports.message}</p>
          )}
        </div>

        <Select
          label="Coaching Level"
          required
          error={errors.coachingLevel?.message}
          {...register('coachingLevel')}
          options={[
            { value: 'youth', label: 'Youth/Recreational' },
            { value: 'high-school', label: 'High School' },
            { value: 'club', label: 'Club/Select' },
            { value: 'college', label: 'College/University' },
            { value: 'professional', label: 'Professional/Elite' },
            { value: 'mixed', label: 'Multiple Levels' },
          ]}
        />

        <Textarea
          label="Key Achievements"
          placeholder="Notable coaching achievements, awards, championships, etc."
          error={errors.achievements?.message}
          {...register('achievements')}
        />

        <Textarea
          label="Coaching Philosophy"
          placeholder="Describe your coaching approach, values, and methodology"
          error={errors.coachingPhilosophy?.message}
          {...register('coachingPhilosophy')}
        />

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onPrev}>
            <ChevronLeftIcon className="mr-2 h-5 w-5" />
            Back
          </Button>
          <Button type="submit">
            Continue
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </form>
    );
  };

  // Search Preferences Step Component - Simplified for now
  const SearchPreferencesStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext, onPrev }) => (
    <div className="space-y-6">
      <div className="text-center py-12">
        <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-primary-600 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Search Preferences</h3>
        <p className="text-gray-600 mb-6">Configure your athlete search and discovery preferences</p>
        <p className="text-sm text-gray-500">This step will be fully implemented soon</p>
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrev}>
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Button onClick={() => { setCompletedSteps(prev => new Set([...prev, 2])); onNext(); }}>
          Continue
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );

  // Discovery Preferences Step Component - Simplified for now
  const DiscoveryPreferencesStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext, onPrev }) => (
    <div className="space-y-6">
      <div className="text-center py-12">
        <TrophyIcon className="mx-auto h-12 w-12 text-primary-600 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Discovery Preferences</h3>
        <p className="text-gray-600 mb-6">Set your recruitment and athlete evaluation criteria</p>
        <p className="text-sm text-gray-500">This step will be fully implemented soon</p>
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrev}>
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Button onClick={() => { setCompletedSteps(prev => new Set([...prev, 3])); onNext(); }}>
          Continue
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );

  // Preferences Step Component - Simplified for now
  const PreferencesStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onPrev }) => (
    <div className="space-y-6">
      <div className="text-center py-12">
        <CogIcon className="mx-auto h-12 w-12 text-primary-600 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Privacy & Preferences</h3>
        <p className="text-gray-600 mb-6">Configure your privacy settings and communication preferences</p>
        <p className="text-sm text-gray-500">This step will be fully implemented soon</p>
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrev}>
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Button onClick={async () => {
          setCompletedSteps(prev => new Set([...prev, 4]));
          
          // Complete onboarding
          try {
            // Mock updateProfile - in real app this would update the user profile
            console.log('Updating coach profile with data:', allData);
            addToast({
              type: 'success',
              title: 'Coach Onboarding Complete!',
              message: 'Welcome to AthleteOne. Your coaching profile has been created successfully.',
            });
            navigate('/coach/dashboard');
          } catch (error) {
            addToast({
              type: 'error',
              title: 'Error',
              message: 'Failed to complete onboarding. Please try again.',
            });
          }
        }}>
          Complete Onboarding
          <CheckCircleIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );

  const steps: OnboardingStep[] = [
    {
      id: 'professional',
      title: 'Professional Info',
      description: 'Organization and contact details',
      icon: UserIcon,
      component: ProfessionalInfoStep,
    },
    {
      id: 'background',
      title: 'Coaching Background',
      description: 'Experience, sports, and philosophy',
      icon: AcademicCapIcon,
      component: CoachingBackgroundStep,
    },
    {
      id: 'search',
      title: 'Search Preferences',
      description: 'Athlete search criteria',
      icon: MagnifyingGlassIcon,
      component: SearchPreferencesStep,
    },
    {
      id: 'discovery',
      title: 'Discovery Settings',
      description: 'Recruitment and evaluation',
      icon: TrophyIcon,
      component: DiscoveryPreferencesStep,
    },
    {
      id: 'preferences',
      title: 'Preferences',
      description: 'Privacy and notifications',
      icon: CogIcon,
      component: PreferencesStep,
    },
  ];

  const currentStepData = steps[currentStep];
  const CurrentStepComponent = currentStepData.component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div id="webcrumbs">
      <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Complete Your Coach Profile
          </h1>
          <p className="text-lg text-gray-600">
            Set up your coaching profile to connect with talented athletes
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const isCompleted = completedSteps.has(index);
              const isCurrent = index === currentStep;
              const IconComponent = step.icon;

              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                        flex items-center justify-center w-10 h-10 rounded-full border-2 
                        ${isCompleted 
                          ? 'bg-primary-600 border-primary-600 text-white' 
                          : isCurrent 
                            ? 'border-primary-600 text-primary-600 bg-white' 
                            : 'border-gray-300 text-gray-400 bg-white'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <CheckCircleIcon className="w-6 h-6" />
                      ) : (
                        <IconComponent className="w-5 h-5" />
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <p className={`text-sm font-medium ${isCurrent ? 'text-primary-600' : 'text-gray-500'}`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-400 max-w-20 leading-tight">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 ${isCompleted ? 'bg-primary-600' : 'bg-gray-300'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentStepData.title}
            </h2>
            <p className="text-gray-600">
              {currentStepData.description}
            </p>
          </div>

          <CurrentStepComponent onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
      </div>
    </div>
  );
};