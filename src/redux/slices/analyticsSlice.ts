import { createSlice } from '@reduxjs/toolkit';
import { AnalyticsMetrics, RegistrationTrendData, UserRegionData } from '../../types/analytics';
import { fetchAnalytics } from '../thunks/analyticsThunks';

interface AnalyticsState {
  metrics: AnalyticsMetrics;
  registrationTrend: RegistrationTrendData[];
  userRegionData: UserRegionData[];
  loading: boolean;
  error: string | null;
}

const initialState: AnalyticsState = {
  metrics: {
    totalUsers: 0,
    activeUsers: 0,
    deletedUsers: 0
  },
  registrationTrend: [],
  userRegionData: [],
  loading: false,
  error: null
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalytics.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.metrics = action.payload.metrics;
        state.registrationTrend = action.payload.registrationTrend;
        state.userRegionData = action.payload.userRegionData;
        state.loading = false;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch analytics';
      });
  }
});

export default analyticsSlice.reducer;