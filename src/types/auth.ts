export type UserRole = 'athlete' | 'coach';

export interface User {
  id: string;
  email: string;
  name: string;
  roles: UserRole[];
  createdAt: string;
  updatedAt: string;
  profileCompleted: boolean;
}

export interface Session {
  token: string;
  userId: string;
  role: UserRole;
  expiresAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  agreedToTerms: boolean;
}

export interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<{ user: User; session: Session }>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  switchRole: (role: UserRole) => void;
}