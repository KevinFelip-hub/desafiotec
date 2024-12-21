import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  getUser,
  getUserRepositories,
  getRepositoryDetails,
} from '../services/githubService';

// Thunks
export const fetchUser = createAsyncThunk('user/fetchUser', async username => {
  const data = await getUser(username);
  return data;
});

export const fetchRepositories = createAsyncThunk(
  'user/fetchRepositories',
  async username => {
    const data = await getUserRepositories(username);
    return data.sort((a, b) => b.stargazers_count - a.stargazers_count);
  },
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
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
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
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.repositories = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
