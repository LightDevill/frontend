import { AuthState, User, Session } from '../types';

const AUTH_STORAGE_KEY = 'athleteone_auth';
const SESSION_STORAGE_KEY = 'athleteone_session';

export class AuthStorage {
  static getUser(): User | null {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  static setUser(user: User): void {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  }

  static removeUser(): void {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }

  static getSession(): Session | null {
    try {
      const stored = localStorage.getItem(SESSION_STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  static setSession(session: Session): void {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  }

  static removeSession(): void {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  }

  static clear(): void {
    this.removeUser();
    this.removeSession();
  }

  static isSessionValid(session: Session | null): boolean {
    if (!session) return false;
    return new Date(session.expiresAt) > new Date();
  }
}

export const getInitialAuthState = (): AuthState => {
  const user = AuthStorage.getUser();
  const session = AuthStorage.getSession();
  
  const isSessionValid = AuthStorage.isSessionValid(session);
  
  if (!isSessionValid) {
    AuthStorage.clear();
    return {
      user: null,
      session: null,
      isLoading: false,
      isAuthenticated: false,
    };
  }

  return {
    user,
    session,
    isLoading: false,
    isAuthenticated: !!(user && session),
  };
};