export interface AnalyticsMetrics {
  totalUsers: number;
  activeUsers: number;
  deletedUsers: number;
}

export interface RegistrationTrendData {
  month: string;
  users: number;
}

export interface UserRegionData {
  region: string;
  userCount: number;
}
