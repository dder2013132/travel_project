import React, { useState } from 'react';
import { Edit3, Trash2, Eye, ChevronUp, ChevronDown } from 'lucide-react';
import { Avatar } from './Card';

interface TableColumn<T = any> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

interface TableProps<T = any> {
  columns?: TableColumn<T>[];
  data?: T[];
  sortable?: boolean;
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onView?: (row: T) => void;
  className?: string;
}

interface SortConfig {
  key: string | null;
  direction: 'asc' | 'desc';
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location: string;
  posts: number;
  joined: string;
}

interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar?: string;
  location: string;
  likes: number;
  createdAt: string;
}

interface Companion {
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

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

// 기본 테이블 컴포넌트 - 제네릭을 함수 컴포넌트로 변경
function Table<T extends Record<string, any>>({ 
  columns = [], 
  data = [], 
  sortable = false, 
  onSort = () => {},
  onEdit = () => {},
  onDelete = () => {},
  onView = () => {},
  className = ''
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'asc' });

  const handleSort = (key: string) => {
    if (!sortable) return;
    
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
    onSort(key, direction);
  };

  const SortIcon = ({ column }: { column: TableColumn<T> }) => {
    if (!sortable || !column.sortable) return null;
    
    if (sortConfig.key === String(column.key)) {
      return sortConfig.direction === 'asc' ? 
        <ChevronUp className="h-4 w-4" /> : 
        <ChevronDown className="h-4 w-4" />;
    }
    
    return <ChevronUp className="h-4 w-4 opacity-30" />;
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                onClick={() => handleSort(String(column.key))}
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  sortable && column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                }`}
              >
                <div className="flex items-center space-x-1">
                  <span>{column.label}</span>
                  <SortIcon column={column} />
                </div>
              </th>
            ))}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              액션
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={row.id || index} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-6 py-4 whitespace-nowrap">
                  {column.render ? column.render(row[column.key], row) : String(row[column.key] || '')}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => onView(row)}
                    className="text-blue-600 hover:text-blue-900"
                    title="보기"
                    type="button"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => onEdit(row)}
                    className="text-indigo-600 hover:text-indigo-900"
                    title="수정"
                    type="button"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => onDelete(row)}
                    className="text-red-600 hover:text-red-900"
                    title="삭제"
                    type="button"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {data.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">
            <p className="text-lg">데이터가 없습니다</p>
            <p className="text-sm mt-2">새로운 항목을 추가해보세요</p>
          </div>
        </div>
      )}
    </div>
  );
}

// 사용자 테이블 (특화된 테이블)
const UserTable: React.FC<{
  users?: User[];
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
  onView?: (user: User) => void;
}> = ({ users = [], onEdit, onDelete, onView }) => {
  const columns: TableColumn<User>[] = [
    {
      key: 'name',
      label: '사용자',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          <Avatar src={row.avatar} alt={row.name} size="sm" className="mr-3" />
          <div>
            <div className="text-sm font-medium text-gray-900">{row.name}</div>
            <div className="text-sm text-gray-500">{row.email}</div>
          </div>
        </div>
      )
    },
    {
      key: 'location',
      label: '위치',
      sortable: true,
      render: (value) => (
        <span className="text-sm text-gray-900">{value}</span>
      )
    },
    {
      key: 'posts',
      label: '게시물',
      sortable: true,
      render: (value) => (
        <span className="text-sm text-gray-900 font-medium">{value}개</span>
      )
    },
    {
      key: 'joined',
      label: '가입일',
      sortable: true,
      render: (value) => (
        <span className="text-sm text-gray-900">{value}</span>
      )
    }
  ];

  return (
    <Table<User>
      columns={columns}
      data={users}
      sortable={true}
      onEdit={onEdit}
      onDelete={onDelete}
      onView={onView}
    />
  );
};

// 여행록 테이블
const PostTable: React.FC<{
  posts?: Post[];
  onEdit?: (post: Post) => void;
  onDelete?: (post: Post) => void;
  onView?: (post: Post) => void;
}> = ({ posts = [], onEdit, onDelete, onView }) => {
  const columns: TableColumn<Post>[] = [
    {
      key: 'title',
      label: '제목',
      sortable: true,
      render: (value, row) => (
        <div>
          <div className="text-sm font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{row.excerpt}</div>
        </div>
      )
    },
    {
      key: 'author',
      label: '작성자',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          <Avatar src={row.authorAvatar} alt={value} size="sm" className="mr-2" />
          <span className="text-sm text-gray-900">{value}</span>
        </div>
      )
    },
    {
      key: 'location',
      label: '여행지',
      sortable: true,
      render: (value) => (
        <span className="text-sm text-gray-900">{value}</span>
      )
    },
    {
      key: 'likes',
      label: '좋아요',
      sortable: true,
      render: (value) => (
        <span className="text-sm text-gray-900">{value}</span>
      )
    },
    {
      key: 'createdAt',
      label: '작성일',
      sortable: true,
      render: (value) => (
        <span className="text-sm text-gray-900">{value}</span>
      )
    }
  ];

  return (
    <Table<Post>
      columns={columns}
      data={posts}
      sortable={true}
      onEdit={onEdit}
      onDelete={onDelete}
      onView={onView}
    />
  );
};

// 동행자 모집 테이블
const CompanionTable: React.FC<{
  companions?: Companion[];
  onEdit?: (companion: Companion) => void;
  onDelete?: (companion: Companion) => void;
  onView?: (companion: Companion) => void;
}> = ({ companions = [], onEdit, onDelete, onView }) => {
  const columns: TableColumn<Companion>[] = [
    {
      key: 'title',
      label: '제목',
      sortable: true,
      render: (value, row) => (
        <div>
          <div className="text-sm font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{row.destination}</div>
        </div>
      )
    },
    {
      key: 'organizer',
      label: '주최자',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          <Avatar src={row.organizerAvatar} alt={value} size="sm" className="mr-2" />
          <span className="text-sm text-gray-900">{value}</span>
        </div>
      )
    },
    {
      key: 'currentParticipants',
      label: '참가자',
      sortable: false,
      render: (value, row) => (
        <span className="text-sm text-gray-900">
          {row.currentParticipants}/{row.maxParticipants}명
        </span>
      )
    },
    {
      key: 'date',
      label: '여행일',
      sortable: true,
      render: (value) => (
        <span className="text-sm text-gray-900">{value}</span>
      )
    },
    {
      key: 'status',
      label: '상태',
      sortable: true,
      render: (value: Companion['status']) => {
        const statusColors = {
          recruiting: 'bg-green-100 text-green-800',
          full: 'bg-yellow-100 text-yellow-800',
          closed: 'bg-red-100 text-red-800'
        };
        const statusLabels = {
          recruiting: '모집중',
          full: '모집완료',
          closed: '마감'
        };
        
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[value]}`}>
            {statusLabels[value]}
          </span>
        );
      }
    }
  ];

  return (
    <Table<Companion>
      columns={columns}
      data={companions}
      sortable={true}
      onEdit={onEdit}
      onDelete={onDelete}
      onView={onView}
    />
  );
};

// 페이지네이션 컴포넌트
const Pagination: React.FC<PaginationProps> = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange = () => {},
  className = ''
}) => {
  const getPageNumbers = (): (number | string)[] => {
    const delta = 2;
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];

    for (let i = Math.max(2, currentPage - delta); 
         i <= Math.min(totalPages - 1, currentPage + delta); 
         i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
        >
          이전
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
        >
          다음
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            페이지 <span className="font-medium">{currentPage}</span> / <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
            >
              이전
            </button>
            
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && onPageChange(page)}
                disabled={page === '...'}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  page === currentPage
                    ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                    : page === '...'
                    ? 'bg-white border-gray-300 text-gray-700 cursor-default'
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                }`}
                type="button"
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
            >
              다음
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { Table, UserTable, PostTable, CompanionTable, Pagination };

export type {
  TableProps,
  TableColumn,
  PaginationProps,
  User,
  Post,
  Companion
};

export default Table;