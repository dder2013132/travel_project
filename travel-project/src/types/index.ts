// types/index.ts - 공통 타입 정의 파일

// 사용자 관련 타입
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location: string;
  posts: number;
  joined: string;
}

// 게시물 관련 타입
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar?: string;
  location: string;
  likes: number;
  createdAt: string;
}

// 동행자 관련 타입
export interface Companion {
  id: string;
  title: string;
  destination: string;
  organizer: string;
  organizerAvatar?: string;
  currentParticipants: number;
  maxParticipants: number;
  date: string;
  status: 'recruiting' | 'full' | 'closed';
}

// 여행 관련 타입
export interface TravelDestination {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  rating: number;
  category: string;
}

export interface PostData {
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

export interface CompanionData {
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

// 네비게이션 관련 타입
export interface NavItem {
  href: string;
  label: string;
  active?: boolean;
}

export interface FilterOption {
  id: string;
  label: string;
}

export interface BreadcrumbItem {
  href?: string;
  label: string;
  icon?: any; // LucideIcon 타입 대신 any 사용
}

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

// 폼 관련 타입
export interface PostFormData {
  title: string;
  location: string;
  content: string;
  category: string;
}

export interface ImageData {
  src: string;
  alt: string;
}

// UI 컴포넌트 관련 타입
export interface SelectOption {
  value: string;
  label: string;
}

export interface TableColumn<T = any> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}