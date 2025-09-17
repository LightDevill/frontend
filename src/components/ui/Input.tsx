import React, { forwardRef } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helper?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helper,
  required,
  size = 'md',
  variant = 'default',
  leftIcon,
  rightIcon,
  showPasswordToggle,
  type: propType,
  className = '',
  disabled,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  
  const type = showPasswordToggle ? (showPassword ? 'text' : 'password') : propType;
  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-4 py-4 text-lg',
  };

  const baseClasses = `
    w-full rounded-lg border transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    ${sizeClasses[size]}
  `;

  const variantClasses = {
    default: `
      border-gray-300 bg-white text-gray-900
      hover:border-gray-400
      ${error ? 'border-error-500 focus:ring-error-500' : ''}
    `,
    filled: `
      border-transparent bg-gray-100 text-gray-900
      hover:bg-gray-200 focus:bg-white focus:border-gray-300
      ${error ? 'bg-error-50 focus:ring-error-500' : ''}
    `,
  };

  const hasLeftIcon = leftIcon;
  const hasRightIcon = rightIcon || showPasswordToggle;

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className={`block text-sm font-medium mb-2 ${
            error ? 'text-error-700' : 'text-gray-700'
          }`}
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {hasLeftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          id={inputId}
          disabled={disabled}
          className={`
            ${baseClasses}
            ${variantClasses[variant]}
            ${hasLeftIcon ? 'pl-10' : ''}
            ${hasRightIcon ? 'pr-10' : ''}
            ${className}
          `}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined
          }
          {...props}
        />
        
        {hasRightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {showPasswordToggle ? (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            ) : (
              rightIcon
            )}
          </div>
        )}
      </div>
      
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-error-600" role="alert">
          {error}
        </p>
      )}
      
      {helper && !error && (
        <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500">
          {helper}
        </p>
      )}
    </div>
  );
});