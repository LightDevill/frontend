import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const baseClasses = 'bg-white rounded-xl border border-gray-100 p-6';
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow duration-300' : 'shadow-md';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};
