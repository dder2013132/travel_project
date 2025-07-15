import React from 'react';
import { Heart, MessageCircle, Share2, Star, MapPin, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Card, Avatar } from '../ui/Card';

// Badge 컴포넌트를 직접 정의 (Navigation에서 가져오는 대신)
const Badge: React.FC<{
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  className?: string;
}> = ({ variant = 'default', children, className = '' }) => {
  const variants: Record<string, string> = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

interface PostData {
  id: string;
  userName: string;
  userAvatar?: string;
  timeAgo: string;
  title: string;
  excerpt: string;
  location: string;
  category: string;
  likes: number;
  comments: number;
}

interface TravelDestination {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  rating: number;
  category: string;
}

interface CompanionData {
  id: string;
  name: string;
  avatar?: string;
  description: string;
  destination: string;
  date: string;
  currentPeople: number;
  maxPeople: number;
  budget: string;
  status: 'recruiting' | 'deadline';
  tags: string[];
}

interface PostCardProps {
  post: PostData;
  onLike?: (postId: string) => void;
  isLiked?: boolean;
}

interface TravelCardProps {
  destination: TravelDestination;
}

interface CompanionCardProps {
  companion: CompanionData;
}

// 여행 게시물 카드
const PostCard: React.FC<PostCardProps> = ({ post, onLike, isLiked = false }) => {
  return (
    <Card hover className="p-6">
      <div className="flex items-start space-x-4">
        <Avatar src={post.userAvatar} alt={post.userName} />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-gray-900">{post.userName}</h3>
            <span className="text-gray-500 text-sm">{post.timeAgo}</span>
            <Badge variant="primary">{post.category}</Badge>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{post.location}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => onLike?.(post.id)}
                className={`flex items-center space-x-2 transition-colors ${
                  isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                }`}
                type="button"
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button 
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
                type="button"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button 
                className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors"
                type="button"
              >
                <Share2 className="h-5 w-5" />
                <span className="text-sm">공유</span>
              </button>
            </div>
            <Button size="sm" variant="outline">
              더 보기 <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

// 여행지 카드
const TravelCard: React.FC<TravelCardProps> = ({ destination }) => {
  return (
    <Card hover className="overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{destination.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{destination.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{destination.location}</span>
          </div>
          <Badge variant="primary">{destination.category}</Badge>
        </div>
      </div>
    </Card>
  );
};

// 동행자 찾기 카드
const CompanionCard: React.FC<CompanionCardProps> = ({ companion }) => {
  return (
    <Card hover className="p-6">
      <div className="flex items-start space-x-4">
        <Avatar src={companion.avatar} alt={companion.name} size="lg" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{companion.name}</h3>
            <Badge variant={companion.status === 'recruiting' ? 'success' : 'warning'}>
              {companion.status === 'recruiting' ? '모집중' : '마감임박'}
            </Badge>
          </div>
          <p className="text-gray-600 mb-3">{companion.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{companion.destination}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📅</span>
              <span>{companion.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>👥</span>
              <span>{companion.currentPeople}/{companion.maxPeople}명</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>💰</span>
              <span>{companion.budget}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {companion.tags.map((tag, index) => (
                <Badge key={index} variant="default">{tag}</Badge>
              ))}
            </div>
            <Button size="sm">참여하기</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { PostCard, TravelCard, CompanionCard, Badge };

export type {
  PostCardProps,
  TravelCardProps,
  CompanionCardProps,
  PostData,
  TravelDestination,
  CompanionData
};