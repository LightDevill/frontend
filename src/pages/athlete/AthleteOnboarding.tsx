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
  TrophyIcon,
  VideoCameraIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { useToast } from '../../components/ui/Toast';

// Validation schemas for each step
const personalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required').min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(1, 'Last name is required').min(2, 'Last name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  country: z.string().min(1, 'Country is required'),
});

const athleticInfoSchema = z.object({
  primarySport: z.string().min(1, 'Primary sport is required'),
  secondarySports: z.array(z.string()).optional(),
  position: z.string().optional(),
  experienceLevel: z.string().min(1, 'Experience level is required'),
  preferredHand: z.string().optional(),
  height: z.string().optional(),
  weight: z.string().optional(),
  teamAffiliation: z.string().optional(),
  coachName: z.string().optional(),
  coachContact: z.string().optional(),
});

// Additional schemas will be implemented when those steps are fully built
// const achievementsSchema = z.object({ ... });
// const goalsSchema = z.object({ ... });
// const mediaSchema = z.object({ ... });
// const preferencesSchema = z.object({ ... });

type PersonalInfoData = z.infer<typeof personalInfoSchema>;
type AthleticInfoData = z.infer<typeof athleticInfoSchema>;

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType<{ onNext: () => void; onPrev: () => void }>;
}

export const AthleteOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [allData, setAllData] = useState<Record<string, any>>({});

  // Personal Info Step Component
  const PersonalInfoStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<PersonalInfoData>({
      resolver: zodResolver(personalInfoSchema),
      defaultValues: allData.personalInfo || {},
    });

    const onSubmit = (data: PersonalInfoData) => {
      setAllData((prev: Record<string, any>) => ({ ...prev, personalInfo: data }));
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
            label="Date of Birth"
            type="date"
            required
            error={errors.dateOfBirth?.message}
            {...register('dateOfBirth')}
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
            // Add more countries as needed
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

  // Athletic Info Step Component
  const AthleticInfoStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext, onPrev }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<AthleticInfoData>({
      resolver: zodResolver(athleticInfoSchema),
      defaultValues: allData.athleticInfo || {},
    });

    const onSubmit = (data: AthleticInfoData) => {
      setAllData((prev: Record<string, any>) => ({ ...prev, athleticInfo: data }));
      setCompletedSteps(prev => new Set([...prev, 1]));
      onNext();
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Primary Sport"
            required
            error={errors.primarySport?.message}
            {...register('primarySport')}
            options={[
              { value: 'football', label: 'Football' },
              { value: 'basketball', label: 'Basketball' },
              { value: 'baseball', label: 'Baseball' },
              { value: 'soccer', label: 'Soccer' },
              { value: 'tennis', label: 'Tennis' },
              { value: 'swimming', label: 'Swimming' },
              { value: 'track-field', label: 'Track & Field' },
              { value: 'golf', label: 'Golf' },
              { value: 'volleyball', label: 'Volleyball' },
              { value: 'other', label: 'Other' },
            ]}
          />
          <Input
            label="Position/Event"
            placeholder="e.g., Quarterback, Point Guard, 100m Sprint"
            error={errors.position?.message}
            {...register('position')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Experience Level"
            required
            error={errors.experienceLevel?.message}
            {...register('experienceLevel')}
            options={[
              { value: 'beginner', label: 'Beginner (0-2 years)' },
              { value: 'intermediate', label: 'Intermediate (3-5 years)' },
              { value: 'advanced', label: 'Advanced (6-10 years)' },
              { value: 'elite', label: 'Elite (10+ years)' },
            ]}
          />
          <Select
            label="Preferred Hand/Foot"
            error={errors.preferredHand?.message}
            {...register('preferredHand')}
            options={[
              { value: 'right', label: 'Right' },
              { value: 'left', label: 'Left' },
              { value: 'both', label: 'Both/Ambidextrous' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Height"
            placeholder="e.g., 6'2&quot;, 188 cm"
            error={errors.height?.message}
            {...register('height')}
          />
          <Input
            label="Weight"
            placeholder="e.g., 180 lbs, 82 kg"
            error={errors.weight?.message}
            {...register('weight')}
          />
        </div>

        <Input
          label="Current Team/School Affiliation"
          placeholder="e.g., Lincoln High School, Elite Athletics Club"
          error={errors.teamAffiliation?.message}
          {...register('teamAffiliation')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Coach Name"
            placeholder="Current coach's name"
            error={errors.coachName?.message}
            {...register('coachName')}
          />
          <Input
            label="Coach Contact"
            placeholder="Coach's email or phone"
            error={errors.coachContact?.message}
            {...register('coachContact')}
          />
        </div>

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

  // Placeholder components for other steps
  const AchievementsStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext, onPrev }) => (
    <div className="space-y-6">
      <div className="text-center py-12">
        <TrophyIcon className="mx-auto h-12 w-12 text-primary-600 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Achievements & Records</h3>
        <p className="text-gray-600 mb-6">Add your athletic achievements, records, and certifications</p>
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

  const GoalsStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext, onPrev }) => (
    <div className="space-y-6">
      <div className="text-center py-12">
        <CalendarIcon className="mx-auto h-12 w-12 text-primary-600 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Goals & Aspirations</h3>
        <p className="text-gray-600 mb-6">Set your short-term and long-term athletic goals</p>
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

  const MediaStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext, onPrev }) => (
    <div className="space-y-6">
      <div className="text-center py-12">
        <VideoCameraIcon className="mx-auto h-12 w-12 text-primary-600 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Media & Portfolio</h3>
        <p className="text-gray-600 mb-6">Upload photos, videos, and documents</p>
        <p className="text-sm text-gray-500">This step will be fully implemented soon</p>
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrev}>
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Button onClick={() => { setCompletedSteps(prev => new Set([...prev, 4])); onNext(); }}>
          Continue
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );

  const PreferencesStep: React.FC<{ onNext: () => void; onPrev: () => void }> = ({ onPrev }) => (
    <div className="space-y-6">
      <div className="text-center py-12">
        <UserIcon className="mx-auto h-12 w-12 text-primary-600 mb-4" />
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
          setCompletedSteps(prev => new Set([...prev, 5]));
          
          // Complete onboarding
          try {
            // Mock updateProfile - in real app this would update the user profile
            console.log('Updating profile with data:', allData);
            addToast({
              type: 'success',
              title: 'Onboarding Complete!',
              message: 'Welcome to AthleteOne. Your profile has been created successfully.',
            });
            navigate('/athlete/dashboard');
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
      id: 'personal',
      title: 'Personal Information',
      description: 'Basic personal and contact details',
      icon: UserIcon,
      component: PersonalInfoStep,
    },
    {
      id: 'athletic',
      title: 'Athletic Information',
      description: 'Sport, position, and physical attributes',
      icon: TrophyIcon,
      component: AthleticInfoStep,
    },
    {
      id: 'achievements',
      title: 'Achievements',
      description: 'Records, awards, and certifications',
      icon: TrophyIcon,
      component: AchievementsStep,
    },
    {
      id: 'goals',
      title: 'Goals & Aspirations',
      description: 'Short-term and long-term objectives',
      icon: CalendarIcon,
      component: GoalsStep,
    },
    {
      id: 'media',
      title: 'Media Portfolio',
      description: 'Photos, videos, and documents',
      icon: VideoCameraIcon,
      component: MediaStep,
    },
    {
      id: 'preferences',
      title: 'Preferences',
      description: 'Privacy and communication settings',
      icon: UserIcon,
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
            Complete Your Athlete Profile
          </h1>
          <p className="text-lg text-gray-600">
            Let's build your athletic profile to connect you with the right opportunities
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