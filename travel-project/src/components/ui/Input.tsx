import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BaseInputProps {
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

interface InputProps extends BaseInputProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  icon?: LucideIcon;
}

interface TextareaProps extends BaseInputProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  rows?: number;
}

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends BaseInputProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  options?: SelectOption[];
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  placeholder, 
  type = 'text', 
  icon: Icon, 
  className = '', 
  error = '',
  required = false,
  ...props 
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
            Icon ? 'pl-10' : ''
          } ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

const Textarea: React.FC<TextareaProps> = ({ 
  label, 
  placeholder, 
  className = '', 
  error = '',
  required = false,
  rows = 4,
  ...props 
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

const Select: React.FC<SelectProps> = ({ 
  label, 
  options = [], 
  placeholder = '선택하세요',
  className = '', 
  error = '',
  required = false,
  ...props 
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export { Input, Textarea, Select };
export type { InputProps, TextareaProps, SelectProps, SelectOption };
export default Input;