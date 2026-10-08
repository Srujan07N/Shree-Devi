import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, role?: UserRole) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  hasRole: (role: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const DEMO_CREDENTIALS = {
  admin: {
    email: 'admin@sdit.demo',
    password: 'admin123',
    role: 'admin' as UserRole,
    user: {
      id: 'usr-admin',
      name: 'Dr. Suresh V. Rao',
      email: 'admin@sdit.demo',
      role: 'admin' as UserRole,
      designation: 'Principal & Chief Academic Officer',
      department: 'Central Administration'
    }
  },
  faculty: {
    email: 'faculty@sdit.demo',
    password: 'faculty123',
    role: 'faculty' as UserRole,
    user: {
      id: 'usr-fac',
      name: 'Dr. Anand Shenoy',
      email: 'faculty@sdit.demo',
      role: 'faculty' as UserRole,
      designation: 'Professor & HOD',
      department: 'Computer Science & Engineering (AI & ML)'
    }
  },
  student: {
    email: 'student@sdit.demo',
    password: 'student123',
    role: 'student' as UserRole,
    user: {
      id: 'usr-std',
      name: 'Aravind S. Rao',
      email: 'student@sdit.demo',
      role: 'student' as UserRole,
      usn: '4SD23CS042',
      department: 'Computer Science & Engineering',
      semester: 7,
      phone: '+91 98450 12345'
    }
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem('sdit_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('sdit_auth_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('sdit_auth_user');
    }
  }, [currentUser]);

  const login = async (email: string, specifiedRole?: UserRole): Promise<{ success: boolean; message?: string }> => {
    const cleanEmail = email.trim().toLowerCase();

    // Check specific credentials
    if (cleanEmail === DEMO_CREDENTIALS.admin.email || specifiedRole === 'admin') {
      setCurrentUser(DEMO_CREDENTIALS.admin.user);
      return { success: true };
    }
    if (cleanEmail === DEMO_CREDENTIALS.faculty.email || specifiedRole === 'faculty') {
      setCurrentUser(DEMO_CREDENTIALS.faculty.user);
      return { success: true };
    }
    if (cleanEmail === DEMO_CREDENTIALS.student.email || specifiedRole === 'student') {
      setCurrentUser(DEMO_CREDENTIALS.student.user);
      return { success: true };
    }

    // Default fallback to student demo
    setCurrentUser(DEMO_CREDENTIALS.student.user);
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('sdit_auth_user');
  };

  const hasRole = (role: UserRole) => {
    return currentUser?.role === role;
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        login,
        logout,
        hasRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
