
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'blue' | 'orange' | 'mixed';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  variant = 'blue',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const variantClasses = {
    blue: 'before:border-omantel-blue',
    orange: 'before:border-omantel-orange',
    mixed: 'before:border-omantel-orange after:border-omantel-blue'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`
          ${sizeClasses[size]}
          relative
          rounded-full
          before:content-['']
          before:absolute
          before:inset-0
          before:rounded-full
          before:border-[3px]
          before:border-t-transparent
          before:border-l-transparent
          before:animate-spin
          ${variant === 'mixed' ? `
            after:content-['']
            after:absolute
            after:inset-0
            after:rounded-full
            after:border-[3px]
            after:border-b-transparent
            after:border-r-transparent
            after:animate-spin
            after:animation-delay-150
            after:animation-duration-1000
          ` : ''}
          ${variantClasses[variant]}
        `}
      />
    </div>
  );
};

export default LoadingSpinner;
