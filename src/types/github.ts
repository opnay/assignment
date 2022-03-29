export interface GHSearch<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export interface GHRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;

  html_url: string;

  // Using Open API, always false
  private: false;

  owner: GHUser;
}

export interface GHUser {
  id: number;
  login: string;
  type: 'User' | 'Organization';
}
