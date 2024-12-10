import { createAsyncThunk } from '@reduxjs/toolkit';
import { generateMockUsers } from '../../services/mockData';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call
      return generateMockUsers();
    } catch (error) {
      return rejectWithValue('Failed to fetch users');
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId: number, { rejectWithValue }) => {
    try {
      // Simulate delete API call
      return userId;
    } catch (error) {
      return rejectWithValue('Failed to delete user');
    }
  }
);