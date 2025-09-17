import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types';
import { Skeleton } from '../components/ui/Misc';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  requireAuth?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  requireAuth = true,
  redirectTo,
}) => {
  const { isAuthenticated, isLoading, user, session } = useAuth();
  const location = useLocation();

  // Show loading skeleton while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full space-y-4 p-8">
          <Skeleton height="2rem" className="mx-auto w-48" />
          <Skeleton lines={3} />
          <Skeleton height="3rem" />
        </div>
      </div>
    );
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    return (
      <Navigate 
        to="/auth/login" 
        state={{ from: location }} 
        replace 
      />
    );
  }

  // If specific role is required
  if (requiredRole && (!user?.roles.includes(requiredRole) || session?.role !== requiredRole)) {
    // If user doesn't have the required role, redirect to their current dashboard
    const defaultRedirect = session?.role === 'athlete' ? '/athlete/dashboard' : '/coach/dashboard';
    return (
      <Navigate 
        to={defaultRedirect} 
        replace 
      />
    );
  }

  // If user is authenticated but trying to access auth pages
  if (isAuthenticated && location.pathname.startsWith('/auth')) {
    const defaultRedirect = redirectTo || (session?.role === 'athlete' ? '/athlete/dashboard' : '/coach/dashboard');
    return (
      <Navigate 
        to={defaultRedirect} 
        replace 
      />
    );
  }

  return <>{children}</>;
};

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  return (
    <ProtectedRoute requireAuth={false}>
      {children}
    </ProtectedRoute>
  );
};

interface RoleBasedRouteProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { user, session } = useAuth();

  // Check if user has any of the allowed roles and current session matches
  const hasPermission = user?.roles.some(role => allowedRoles.includes(role)) &&
                       session?.role && allowedRoles.includes(session.role);

  if (!hasPermission) {
    const defaultRedirect = session?.role === 'athlete' ? '/athlete/dashboard' : '/coach/dashboard';
    return (
      <Navigate 
        to={defaultRedirect} 
        replace 
      />
    );
  }

  return <>{children}</>;
};