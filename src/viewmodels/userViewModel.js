import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUser,
  getUserRepositories,
} from '../services/githubService';
import { Repository } from '../models/Repository';

export const fetchUser = createAsyncThunk('user/fetchUser', async (username) => {
  const data = await getUser(username);
  return data;
});

export const fetchRepositories = createAsyncThunk(
  'user/fetchRepositories',
  async (username) => {
    const data = await getUserRepositories(username);
    return data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .map((repo) => new Repository(repo));
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: null,
    repositories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.repositories = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const userReducer = userSlice.reducer;
