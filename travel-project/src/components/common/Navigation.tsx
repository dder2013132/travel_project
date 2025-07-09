import React, { useState } from 'react';
import { Search, Bell, Menu, X, Filter } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Input from '../ui/Input';
import { Avatar } from '../ui/Card';

interface User {
  id: string;
  name: string;
  avatar?: string;
}

interface NavItem {
  href: string;
  label: string;
  active?: boolean;
}

interface NavigationProps {
  user?: User | null;
}

interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  filters?: FilterOption[];
  selectedFilter?: string;
  onFilterChange?: (filterId: string) => void;
}

interface BadgeProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  className?: string;
}

interface BreadcrumbItem {
  href?: string;
  label: string;
  icon?: LucideIcon;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

interface TabItem {
  id: string;
  label: string;
  count?: number;
}

interface TabNavigationProps {
  tabs?: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

// 메인 네비게이션
const Navigation: React.FC<NavigationProps> = ({ user = null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState(3); // 알림 개수

  const navItems: NavItem[] = [
    { href: '/', label: '홈', active: true },
    { href: '/destinations', label: '여행지' },
    { href: '/posts', label: '여행록' },
    { href: '/companions', label: '동행 찾기' },
    { href: '/community', label: '커뮤니티' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">TravelMate</h1>
            </div>
            
            {/* 데스크톱 메뉴 */}
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.active
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 우측 메뉴 */}
          <div className="flex items-center space-x-4">
            {/* 검색 */}
            <div className="relative hidden sm:block">
              <Input placeholder="여행지 검색..." icon={Search} className="w-64" />
            </div>

            {/* 알림 */}
            <button className="text-gray-500 hover:text-blue-600 relative">
              <Bell className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* 사용자 메뉴 */}
            {user ? (
              <div className="relative">
                <Avatar src={user.avatar} alt={user.name} size="sm" />
              </div>
            ) : (
              <button className="text-gray-600 hover:text-blue-600 text-sm font-medium">
                로그인
              </button>
            )}

            {/* 모바일 메뉴 버튼 */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-500 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    item.active
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* 모바일 검색 */}
              <div className="px-3 py-2">
                <Input placeholder="여행지 검색..." icon={Search} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// 필터 바
const FilterBar: React.FC<FilterBarProps> = ({ 
  filters = [], 
  selectedFilter = 'all', 
  onFilterChange = () => {} 
}) => {
  return (
    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
      <Filter className="h-5 w-5 text-gray-500" />
      <div className="flex space-x-2 overflow-x-auto">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              selectedFilter === filter.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// 뱃지 컴포넌트
const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  children, 
  className = '' 
}) => {
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

// 브레드크럼
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg className="w-4 h-4 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {item.href ? (
              <a href={item.href} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                {item.label}
              </a>
            ) : (
              <span className="inline-flex items-center text-sm font-medium text-gray-500">
                {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// 탭 네비게이션
const TabNavigation: React.FC<TabNavigationProps> = ({ 
  tabs = [], 
  activeTab = '', 
  onTabChange = () => {} 
}) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
            {tab.count && (
              <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export { Navigation, FilterBar, Badge, Breadcrumb, TabNavigation };

export type {
  NavigationProps,
  FilterBarProps,
  BadgeProps,
  BreadcrumbProps,
  TabNavigationProps,
  User,
  NavItem,
  FilterOption,
  BreadcrumbItem,
  TabItem
};

export default Navigation;