
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-omantel-orange border-opacity-25 rounded-full`}></div>
        <div className={`${sizeClasses[size]} absolute top-0 left-0 border-4 border-omantel-orange rounded-full animate-spin border-t-transparent`}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
