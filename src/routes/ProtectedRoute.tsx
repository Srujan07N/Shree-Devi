import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRole?: UserRole;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRole }) => {
  const { currentUser, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated || !currentUser) {
    const loginTarget = allowedRole ? `/${allowedRole}/login` : '/student/login';
    return <Navigate to={loginTarget} state={{ from: location }} replace />;
  }

  if (allowedRole && currentUser.role !== allowedRole) {
    return <Navigate to={`/${currentUser.role}/dashboard`} replace />;
  }

  return <>{children}</>;
};
