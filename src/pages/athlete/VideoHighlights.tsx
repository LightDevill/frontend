import React, { useState } from 'react';
import { 
  VideoCameraIcon,
  PlusIcon,
  PlayIcon,
  ShareIcon,
  EyeIcon,
  HeartIcon,
  ChartBarIcon,
  FolderIcon,
  MagnifyingGlassIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';

interface VideoHighlight {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number; // in seconds
  uploadDate: string;
  event: string;
  sport: string;
  tags: string[];
  views: number;
  likes: number;
  isLiked: boolean;
  isPublic: boolean;
  performance: {
    result?: string;
    placement?: string;
    personalBest: boolean;
  };
  analytics: {
    totalViews: number;
    uniqueViewers: number;
    avgWatchTime: number;
    completionRate: number;
  };
}

interface VideoCollection {
  id: string;
  name: string;
  description: string;
  videoCount: number;
  thumbnailUrl: string;
  isPublic: boolean;
  createdDate: string;
}

export const VideoHighlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState('highlights');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSport, setFilterSport] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Mock data
  const mockVideos: VideoHighlight[] = [
    {
      id: '1',
      title: '100m Sprint - Personal Best Performance',
      description: 'Breaking my personal record at State Championships with a time of 10.85 seconds',
      thumbnailUrl: '/api/placeholder/320/180',
      videoUrl: '/api/videos/sprint-pb.mp4',
      duration: 45,
      uploadDate: '2024-01-15',
      event: 'State Championships',
      sport: 'Track & Field',
      tags: ['sprint', 'personal-best', 'championship', '100m'],
      views: 1250,
      likes: 89,
      isLiked: true,
      isPublic: true,
      performance: {
        result: '10.85s',
        placement: '1st Place',
        personalBest: true,
      },
      analytics: {
        totalViews: 1250,
        uniqueViewers: 980,
        avgWatchTime: 38,
        completionRate: 84,
      },
    },
    {
      id: '2',
      title: 'Long Jump Technique Analysis',
      description: 'Slow-motion breakdown of my approach and takeoff technique',
      thumbnailUrl: '/api/placeholder/320/180',
      videoUrl: '/api/videos/longjump-analysis.mp4',
      duration: 120,
      uploadDate: '2024-01-10',
      event: 'Training Session',
      sport: 'Track & Field',
      tags: ['long-jump', 'technique', 'training', 'analysis'],
      views: 567,
      likes: 34,
      isLiked: false,
      isPublic: false,
      performance: {
        result: '7.25m',
        personalBest: false,
      },
      analytics: {
        totalViews: 567,
        uniqueViewers: 445,
        avgWatchTime: 95,
        completionRate: 79,
      },
    },
    {
      id: '3',
      title: 'Relay Handoff Training',
      description: 'Practicing baton exchanges with my 4x100m relay team',
      thumbnailUrl: '/api/placeholder/320/180',
      videoUrl: '/api/videos/relay-training.mp4',
      duration: 180,
      uploadDate: '2024-01-08',
      event: 'Team Practice',
      sport: 'Track & Field',
      tags: ['relay', 'teamwork', 'training', '4x100m'],
      views: 234,
      likes: 18,
      isLiked: false,
      isPublic: true,
      performance: {
        personalBest: false,
      },
      analytics: {
        totalViews: 234,
        uniqueViewers: 189,
        avgWatchTime: 142,
        completionRate: 78,
      },
    },
  ];

  const mockCollections: VideoCollection[] = [
    {
      id: '1',
      name: 'Championship Performances',
      description: 'My best performances from major competitions',
      videoCount: 8,
      thumbnailUrl: '/api/placeholder/160/90',
      isPublic: true,
      createdDate: '2024-01-01',
    },
    {
      id: '2',
      name: 'Training Highlights',
      description: 'Key moments from training sessions and technique work',
      videoCount: 15,
      thumbnailUrl: '/api/placeholder/160/90',
      isPublic: false,
      createdDate: '2023-12-15',
    },
    {
      id: '3',
      name: 'Personal Bests Collection',
      description: 'Every time I set a new personal record',
      videoCount: 5,
      thumbnailUrl: '/api/placeholder/160/90',
      isPublic: true,
      createdDate: '2023-11-20',
    },
  ];

  const [videos, setVideos] = useState(mockVideos);
  const [collections] = useState(mockCollections);

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSport = filterSport === 'all' || video.sport === filterSport;
    
    return matchesSearch && matchesSport;
  });

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
      case 'oldest':
        return new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime();
      case 'views':
        return b.views - a.views;
      case 'likes':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const toggleLike = (videoId: string) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId 
        ? { 
            ...video, 
            isLiked: !video.isLiked,
            likes: video.isLiked ? video.likes - 1 : video.likes + 1
          }
        : video
    ));
  };

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const VideoCard: React.FC<{ video: VideoHighlight }> = ({ video }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center">
          <button
            onClick={() => console.log('Playing video:', video.id)}
            className="opacity-0 hover:opacity-100 transition-opacity bg-white bg-opacity-90 rounded-full p-3"
          >
            <PlayIcon className="h-6 w-6 text-gray-900" />
          </button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {formatDuration(video.duration)}
        </div>
        {video.performance?.personalBest && (
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-100 text-success-800">
              PB
            </span>
          </div>
        )}
        {!video.isPublic && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Private
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>{video.event}</span>
          <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
        </div>
        
        {video.performance?.result && (
          <div className="mb-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
              {video.performance.result}
              {video.performance.placement && ` • ${video.performance.placement}`}
            </span>
          </div>
        )}
        
        <div className="flex flex-wrap gap-1 mb-3">
          {video.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
          {video.tags.length > 3 && (
            <span className="text-xs text-gray-500">+{video.tags.length - 3}</span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <EyeIcon className="h-4 w-4 mr-1" />
              {video.views}
            </span>
            <button
              onClick={() => toggleLike(video.id)}
              className="flex items-center hover:text-red-500 transition-colors"
            >
              {video.isLiked ? (
                <HeartSolidIcon className="h-4 w-4 mr-1 text-red-500" />
              ) : (
                <HeartIcon className="h-4 w-4 mr-1" />
              )}
              {video.likes}
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost">
              <ShareIcon className="h-4 w-4" />
            </Button>
            <Button size="sm">View</Button>
          </div>
        </div>
      </div>
    </div>
  );

  const CollectionCard: React.FC<{ collection: VideoCollection }> = ({ collection }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={collection.thumbnailUrl}
          alt={collection.name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <FolderIcon className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm font-medium">{collection.videoCount} videos</p>
          </div>
        </div>
        {!collection.isPublic && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Private
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{collection.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{collection.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>Created {new Date(collection.createdDate).toLocaleDateString()}</span>
        </div>
        
        <Button size="sm" className="w-full">
          View Collection
        </Button>
      </div>
    </div>
  );

  const UploadArea = () => (
    <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-primary-500 transition-colors">
      <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">Upload New Video</h3>
      <p className="text-gray-600 mb-4">
        Share your best performances and training highlights
      </p>
      <Button>
        <PlusIcon className="h-4 w-4 mr-2" />
        Choose Files
      </Button>
      <p className="text-xs text-gray-500 mt-2">
        Supports MP4, MOV, AVI up to 500MB
      </p>
    </div>
  );

  const AnalyticsOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">
                {videos.reduce((sum, video) => sum + video.views, 0).toLocaleString()}
              </p>
            </div>
            <EyeIcon className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Likes</p>
              <p className="text-2xl font-bold text-gray-900">
                {videos.reduce((sum, video) => sum + video.likes, 0)}
              </p>
            </div>
            <HeartIcon className="h-8 w-8 text-red-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Videos</p>
              <p className="text-2xl font-bold text-gray-900">{videos.length}</p>
            </div>
            <VideoCameraIcon className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Completion</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(videos.reduce((sum, video) => sum + video.analytics.completionRate, 0) / videos.length)}%
              </p>
            </div>
            <ChartBarIcon className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Videos</h3>
        <div className="space-y-4">
          {videos
            .sort((a, b) => b.views - a.views)
            .slice(0, 5)
            .map((video, index) => (
              <div key={video.id} className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-500 w-4">#{index + 1}</span>
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-16 h-9 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{video.title}</p>
                  <p className="text-xs text-gray-500">{video.views} views • {video.likes} likes</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Video Highlights</h1>
          <p className="mt-2 text-gray-600">Showcase your best performances and training moments</p>
        </div>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Upload Video
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 w-fit">
          <TabsTrigger value="highlights">My Videos</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="highlights" className="mt-6">
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search videos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    leftIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <Select
                    value={filterSport}
                    onChange={(e) => setFilterSport(e.target.value)}
                    options={[
                      { value: 'all', label: 'All Sports' },
                      { value: 'Track & Field', label: 'Track & Field' },
                      { value: 'Basketball', label: 'Basketball' },
                      { value: 'Football', label: 'Football' },
                    ]}
                  />
                  
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    options={[
                      { value: 'newest', label: 'Newest' },
                      { value: 'oldest', label: 'Oldest' },
                      { value: 'views', label: 'Most Views' },
                      { value: 'likes', label: 'Most Liked' },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

            {sortedVideos.length === 0 && (
              <div className="text-center py-12">
                <VideoCameraIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
                <p className="text-gray-600">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="collections" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="upload" className="mt-6">
          <UploadArea />
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <AnalyticsOverview />
        </TabsContent>
      </Tabs>
    </div>
  );
};