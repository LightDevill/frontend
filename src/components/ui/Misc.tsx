import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-success-100 text-success-800',
    warning: 'bg-warning-100 text-warning-800',
    error: 'bg-error-100 text-error-800',
    info: 'bg-info-100 text-info-800',
    outline: 'border border-gray-300 text-gray-700 bg-transparent',
  };

  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
  lines?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = false,
  lines = 1,
}) => {
  if (lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`
              animate-pulse bg-gray-200 
              ${rounded ? 'rounded-full' : 'rounded'}
              ${index === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'}
            `}
            style={{
              width: index === lines - 1 && lines > 1 ? undefined : width,
              height: height || '1rem',
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`
        animate-pulse bg-gray-200 
        ${rounded ? 'rounded-full' : 'rounded'}
        ${className}
      `}
      style={{
        width: width || '100%',
        height: height || '1rem',
      }}
    />
  );
};

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string | React.ReactNode;
  description?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({  
  label,
  description,
  error,
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const inputId = props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={`
            ${sizeClasses[size]}
            text-primary-600 border-gray-300 rounded
            focus:ring-primary-500 focus:ring-2 focus:ring-offset-2
            ${error ? 'border-error-500' : ''}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${inputId}-error` : description ? `${inputId}-description` : undefined
          }
          {...props}
        />
      </div>
      {(label || description) && (
        <div className="ml-3 text-sm">
          {label && (
            <label htmlFor={inputId} className={`font-medium ${error ? 'text-error-700' : 'text-gray-700'}`}>
              {label}
            </label>
          )}
          {description && (
            <p id={`${inputId}-description`} className="text-gray-500">
              {description}
            </p>
          )}
        </div>
      )}
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-error-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';