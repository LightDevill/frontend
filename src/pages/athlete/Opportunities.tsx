import React, { useState } from 'react';
import { 
  AcademicCapIcon,
  TrophyIcon,
  MapPinIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  EyeIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon, BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';

interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: 'scholarship' | 'competition' | 'camp' | 'recruitment';
  sport: string;
  location: string;
  deadline: string;
  description: string;
  requirements: string[];
  value?: string;
  eligibility: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  tags: string[];
  isFavorited: boolean;
  isBookmarked: boolean;
  applicants?: number;
  maxApplicants?: number;
  featured: boolean;
}

export const Opportunities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterSport, setFilterSport] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock opportunities data
  const mockOpportunities: Opportunity[] = [
    {
      id: '1',
      title: 'Division I Track & Field Scholarship',
      organization: 'State University Athletics',
      type: 'scholarship',
      sport: 'Track & Field',
      location: 'State University, CA',
      deadline: '2024-03-15',
      description: 'Full scholarship opportunity for exceptional track and field athletes. Covers tuition, room, board, and training expenses.',
      requirements: [
        'Minimum 3.5 GPA',
        'Sub-11.0 100m or equivalent in other events',
        'Clean drug test',
        'Character references'
      ],
      value: '$75,000/year',
      eligibility: 'High School Seniors, Transfer Students',
      contactInfo: {
        name: 'Coach Sarah Johnson',
        email: 'sjohnson@stateuniv.edu',
        phone: '(555) 123-4567'
      },
      tags: ['full-ride', 'division-i', 'track', 'sprints'],
      isFavorited: true,
      isBookmarked: false,
      applicants: 45,
      maxApplicants: 100,
      featured: true
    },
    {
      id: '2',
      title: 'Nike Elite Summer Training Camp',
      organization: 'Nike Sports',
      type: 'camp',
      sport: 'Track & Field',
      location: 'Portland, OR',
      deadline: '2024-02-28',
      description: 'Intensive 2-week training camp with world-class coaches and Olympic athletes. Includes accommodation and meals.',
      requirements: [
        'Regional qualifying times',
        'Coach recommendation',
        'Medical clearance',
        'Training experience'
      ],
      value: 'Free (sponsored)',
      eligibility: 'Ages 16-20, All skill levels',
      contactInfo: {
        name: 'Program Director Mike Chen',
        email: 'camps@nike.com',
        phone: '(555) 987-6543'
      },
      tags: ['elite', 'training', 'nike', 'summer'],
      isFavorited: false,
      isBookmarked: true,
      applicants: 120,
      maxApplicants: 150,
      featured: false
    },
    {
      id: '3',
      title: 'Regional Championships Qualifier',
      organization: 'Athletics Regional Board',
      type: 'competition',
      sport: 'Track & Field',
      location: 'Regional Sports Complex, TX',
      deadline: '2024-02-20',
      description: 'Official qualifying event for regional championships. Top 3 finishers advance to state level.',
      requirements: [
        'Current season times',
        'Valid registration',
        'Medical clearance',
        'Entry fee payment'
      ],
      value: '$50 entry fee',
      eligibility: 'All registered athletes',
      contactInfo: {
        name: 'Meet Director Lisa Wang',
        email: 'info@regionaltrack.org',
        phone: '(555) 456-7890'
      },
      tags: ['competition', 'qualifier', 'regional', 'championship'],
      isFavorited: false,
      isBookmarked: false,
      applicants: 200,
      maxApplicants: 300,
      featured: false
    },
    {
      id: '4',
      title: 'Youth Development Program Recruitment',
      organization: 'Olympic Training Center',
      type: 'recruitment',
      sport: 'Track & Field',
      location: 'Colorado Springs, CO',
      deadline: '2024-04-01',
      description: 'Scouting program for promising young athletes with Olympic potential. Includes mentorship and development opportunities.',
      requirements: [
        'Under 18 years old',
        'National-level performances',
        'Physical assessment',
        'Psychological evaluation'
      ],
      value: 'Scholarship potential',
      eligibility: 'Ages 14-18, Elite level only',
      contactInfo: {
        name: 'Talent Scout Rachel Davis',
        email: 'recruitment@usaolympic.org',
        phone: '(555) 321-0987'
      },
      tags: ['olympic', 'development', 'elite', 'youth'],
      isFavorited: false,
      isBookmarked: false,
      applicants: 25,
      maxApplicants: 50,
      featured: true
    }
  ];

  const [opportunities, setOpportunities] = useState(mockOpportunities);

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || opp.type === filterType;
    const matchesSport = filterSport === 'all' || opp.sport === filterSport;
    
    return matchesSearch && matchesType && matchesSport;
  });

  const toggleFavorite = (id: string) => {
    setOpportunities(prev => prev.map(opp => 
      opp.id === id ? { ...opp, isFavorited: !opp.isFavorited } : opp
    ));
  };

  const toggleBookmark = (id: string) => {
    setOpportunities(prev => prev.map(opp => 
      opp.id === id ? { ...opp, isBookmarked: !opp.isBookmarked } : opp
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'scholarship': return AcademicCapIcon;
      case 'competition': return TrophyIcon;
      case 'camp': return CalendarIcon;
      case 'recruitment': return EyeIcon;
      default: return AcademicCapIcon;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'scholarship': return 'bg-blue-100 text-blue-800';
      case 'competition': return 'bg-green-100 text-green-800';
      case 'camp': return 'bg-purple-100 text-purple-800';
      case 'recruitment': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const OpportunityCard: React.FC<{ opportunity: Opportunity }> = ({ opportunity }) => {
    const TypeIcon = getTypeIcon(opportunity.type);
    const typeColor = getTypeColor(opportunity.type);
    const daysToDeadline = Math.ceil((new Date(opportunity.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    
    return (
      <div className={`bg-white rounded-lg border-2 p-6 hover:shadow-lg transition-shadow ${opportunity.featured ? 'border-primary-200 bg-primary-50' : 'border-gray-200'}`}>
        {opportunity.featured && (
          <div className="mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
              ⭐ Featured Opportunity
            </span>
          </div>
        )}
        
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${typeColor}`}>
              <TypeIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{opportunity.title}</h3>
              <p className="text-sm text-gray-600">{opportunity.organization}</p>
              <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                <span className="flex items-center">
                  <MapPinIcon className="h-3 w-3 mr-1" />
                  {opportunity.location}
                </span>
                <span className="flex items-center">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  Due: {new Date(opportunity.deadline).toLocaleDateString()}
                </span>
                {opportunity.value && (
                  <span className="flex items-center">
                    <CurrencyDollarIcon className="h-3 w-3 mr-1" />
                    {opportunity.value}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleFavorite(opportunity.id)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {opportunity.isFavorited ? (
                <HeartSolidIcon className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
            <button
              onClick={() => toggleBookmark(opportunity.id)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {opportunity.isBookmarked ? (
                <BookmarkSolidIcon className="h-5 w-5 text-blue-500" />
              ) : (
                <BookmarkIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-2">{opportunity.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Requirements:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {opportunity.requirements.slice(0, 2).map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                {req}
              </li>
            ))}
            {opportunity.requirements.length > 2 && (
              <li className="text-primary-600 text-xs">
                +{opportunity.requirements.length - 2} more requirements
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {opportunity.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            {opportunity.applicants && opportunity.maxApplicants && (
              <span>
                {opportunity.applicants}/{opportunity.maxApplicants} applicants
              </span>
            )}
            {daysToDeadline > 0 && (
              <span className={daysToDeadline <= 7 ? 'text-red-600 font-medium' : ''}>
                {daysToDeadline} days left
              </span>
            )}
          </div>
          <Button size="sm">
            View Details
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Opportunities</h1>
          <p className="mt-2 text-gray-600">Discover scholarships, competitions, camps, and recruitment opportunities</p>
        </div>
        <Button variant="outline">
          <BookmarkIcon className="h-4 w-4 mr-2" />
          My Saved ({opportunities.filter(o => o.isBookmarked).length})
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <Input
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              leftIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              options={[
                { value: 'all', label: 'All Types' },
                { value: 'scholarship', label: 'Scholarships' },
                { value: 'competition', label: 'Competitions' },
                { value: 'camp', label: 'Camps' },
                { value: 'recruitment', label: 'Recruitment' },
              ]}
            />
            
            <Select
              value={filterSport}
              onChange={(e) => setFilterSport(e.target.value)}
              options={[
                { value: 'all', label: 'All Sports' },
                { value: 'Track & Field', label: 'Track & Field' },
                { value: 'Basketball', label: 'Basketball' },
                { value: 'Football', label: 'Football' },
                { value: 'Soccer', label: 'Soccer' },
              ]}
            />
            
            <Button
              variant="outline"
              size="md"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FunnelIcon className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
        
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                label="Deadline"
                options={[
                  { value: 'all', label: 'Any deadline' },
                  { value: 'week', label: 'Within a week' },
                  { value: 'month', label: 'Within a month' },
                  { value: 'quarter', label: 'Within 3 months' },
                ]}
              />
              <Select
                label="Value"
                options={[
                  { value: 'all', label: 'Any value' },
                  { value: 'free', label: 'Free/Sponsored' },
                  { value: 'partial', label: 'Partial funding' },
                  { value: 'full', label: 'Full funding' },
                ]}
              />
              <Select
                label="Level"
                options={[
                  { value: 'all', label: 'All levels' },
                  { value: 'beginner', label: 'Beginner' },
                  { value: 'intermediate', label: 'Intermediate' },
                  { value: 'advanced', label: 'Advanced' },
                  { value: 'elite', label: 'Elite' },
                ]}
              />
            </div>
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {filteredOpportunities.length} of {opportunities.length} opportunities
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <Select
            size="sm"
            value="deadline"
            options={[
              { value: 'deadline', label: 'Deadline' },
              { value: 'newest', label: 'Newest' },
              { value: 'value', label: 'Value' },
              { value: 'relevance', label: 'Relevance' },
            ]}
          />
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOpportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="text-center py-12">
          <TrophyIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No opportunities found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setFilterType('all');
            setFilterSport('all');
          }}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};