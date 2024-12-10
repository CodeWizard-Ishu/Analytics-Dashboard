import {
  AnalyticsMetrics,
  RegistrationTrendData,
  UserRegionData,
} from "../types/analytics";
import { User } from "../types/user";

export const generateMockUsers = (count: number = 50): User[] => {
  const regions = ["North", "South", "East", "West", "Central"];
  const statuses: ("active" | "inactive")[] = ["active", "inactive"];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    region: regions[Math.floor(Math.random() * regions.length)],
    registrationDate: new Date(
      Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)
    ).toISOString(),
  }));
};

export const mockAnalyticsMetrics = (users: User[]): AnalyticsMetrics => ({
  totalUsers: users.length,
  activeUsers: users.filter((user) => user.status === "active").length,
  deletedUsers: 0,
});

export const mockRegistrationTrend = (): RegistrationTrendData[] => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  return months.map((month, index) => ({
    month,
    users: Math.floor(Math.random() * 100) + 50 * (index + 1),
  }));
};

export const mockUserRegionData = (users: User[]): UserRegionData[] => {
  const regions = ["North", "South", "East", "West", "Central"];
  return regions.map((region) => ({
    region,
    userCount: users.filter((user) => user.region === region).length,
  }));
};
