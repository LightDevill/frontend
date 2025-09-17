import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthContextType, AuthState, LoginCredentials, SignupData, UserRole, User, Session } from '../types';
import { AuthStorage, getInitialAuthState } from '../lib/auth-storage';
import { ApiClient } from '../lib/api-client';

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: any; session: any } }
  | { type: 'LOGIN_ERROR' }
  | { type: 'SIGNUP_START' }
  | { type: 'SIGNUP_SUCCESS'; payload: { user: any; session: any } }
  | { type: 'SIGNUP_ERROR' }
  | { type: 'LOGOUT' }
  | { type: 'SWITCH_ROLE'; payload: { role: UserRole } }
  | { type: 'REFRESH_SESSION_SUCCESS'; payload: { session: any } };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'SIGNUP_START':
      return { ...state, isLoading: true };
    
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        session: action.payload.session,
        isLoading: false,
        isAuthenticated: true,
      };
    
    case 'LOGIN_ERROR':
    case 'SIGNUP_ERROR':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    
    case 'LOGOUT':
      return {
        user: null,
        session: null,
        isLoading: false,
        isAuthenticated: false,
      };
    
    case 'SWITCH_ROLE':
      if (!state.session) return state;
      const updatedSession = { ...state.session, role: action.payload.role };
      return {
        ...state,
        session: updatedSession,
      };
    
    case 'REFRESH_SESSION_SUCCESS':
      return {
        ...state,
        session: action.payload.session,
      };
    
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, getInitialAuthState());

  useEffect(() => {
    // Check for session expiry and refresh if needed
    const checkSession = async () => {
      if (state.session && !AuthStorage.isSessionValid(state.session)) {
        try {
          const newSession = await ApiClient.refreshSession();
          AuthStorage.setSession(newSession);
          dispatch({ type: 'REFRESH_SESSION_SUCCESS', payload: { session: newSession } });
        } catch {
          logout();
        }
      }
    };

    if (state.isAuthenticated) {
      checkSession();
    }
  }, [state.session, state.isAuthenticated]);

  const login = async (credentials: LoginCredentials): Promise<{ user: User; session: Session }> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      const { user, session } = await ApiClient.login(credentials);
      
      AuthStorage.setUser(user);
      AuthStorage.setSession(session);
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, session } });
      
      // Return the user and session data
      return { user, session };
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR' });
      throw error;
    }
  };

  const signup = async (data: SignupData): Promise<void> => {
    dispatch({ type: 'SIGNUP_START' });
    
    try {
      const { user, session } = await ApiClient.signup(data);
      
      AuthStorage.setUser(user);
      AuthStorage.setSession(session);
      
      dispatch({ type: 'SIGNUP_SUCCESS', payload: { user, session } });
    } catch (error) {
      dispatch({ type: 'SIGNUP_ERROR' });
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await ApiClient.logout();
    } catch {
      // Continue with logout even if API call fails
    } finally {
      AuthStorage.clear();
      dispatch({ type: 'LOGOUT' });
    }
  };

  const switchRole = (role: UserRole): void => {
    if (state.user?.roles.includes(role)) {
      const updatedSession = { ...state.session!, role };
      AuthStorage.setSession(updatedSession);
      dispatch({ type: 'SWITCH_ROLE', payload: { role } });
    }
  };

  const value: AuthContextType = {
    ...state,
    login,
    signup,
    logout,
    switchRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};