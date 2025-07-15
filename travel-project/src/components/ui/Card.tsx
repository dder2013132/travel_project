import React from 'react';
import { User } from 'lucide-react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// 기본 카드 컴포넌트
const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false, 
  ...props 
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-gray-200 ${
        hover ? 'hover:shadow-md transition-shadow duration-200' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// 아바타 컴포넌트
const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = '', 
  size = 'md', 
  className = '' 
}) => {
  const sizes: Record<string, string> = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };
  
  return (
    <div className={`${sizes[size]} rounded-full overflow-hidden bg-gray-200 ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <User className="h-1/2 w-1/2 text-white" />
        </div>
      )}
    </div>
  );
};

export { Card, Avatar };
export type { CardProps, AvatarProps };
export default Card;