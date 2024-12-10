import { createAsyncThunk } from '@reduxjs/toolkit';
import { 
  generateMockUsers, 
  mockAnalyticsMetrics, 
  mockRegistrationTrend, 
  mockUserRegionData 
} from '../../services/mockData';

export const fetchAnalytics = createAsyncThunk(
  'analytics/fetchAnalytics',
  async (_, { rejectWithValue }) => {
    try {
      const users = generateMockUsers();
      return {
        metrics: mockAnalyticsMetrics(users),
        registrationTrend: mockRegistrationTrend(),
        userRegionData: mockUserRegionData(users)
      };
    } catch (error) {
      return rejectWithValue('Failed to fetch analytics');
    }
  }
);