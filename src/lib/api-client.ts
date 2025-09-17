import { LoginCredentials, SignupData, User, Session } from '../types';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// API client for communicating with MSW handlers
export class ApiClient {
  private static baseUrl = 'http://localhost:3001/api'; // Real backend server

  private static async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const token = localStorage.getItem('athleteone_session');
    if (token) {
      const session = JSON.parse(token);
      defaultHeaders['Authorization'] = `Bearer ${session.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  static async login(credentials: LoginCredentials): Promise<{ user: User; session: Session }> {
    const response = await this.request<{ user: User; session: Session }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (!response.success || !response.data) {
      throw new Error(response.error || 'Login failed');
    }

    return response.data;
  }

  static async signup(data: SignupData): Promise<{ user: User; session: Session }> {
    const response = await this.request<{ user: User; session: Session }>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.success || !response.data) {
      throw new Error(response.error || 'Signup failed');
    }

    return response.data;
  }

  static async refreshSession(): Promise<Session> {
    const response = await this.request<Session>('/auth/refresh', {
      method: 'POST',
    });

    if (!response.success || !response.data) {
      throw new Error(response.error || 'Session refresh failed');
    }

    return response.data;
  }

  static async logout(): Promise<void> {
    await this.request('/auth/logout', {
      method: 'POST',
    });
  }
}