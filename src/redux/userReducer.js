import { Repository } from '../models/Repository';

const initialState = {
  profile: {},
  repositories: [],
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        profile: action.payload.profile,
        loading: false,
      };

    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case 'FETCH_REPOSITORIES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'FETCH_REPOSITORIES_SUCCESS':
      return {
        ...state,
        repositories: action.payload.map((repo) => new Repository(repo)),
        loading: false,
      };

    case 'FETCH_REPOSITORIES_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case 'SORT_REPOSITORIES':
      const sortedRepositories = [...state.repositories].sort((a, b) => b.stars - a.stars);
      return {
        ...state,
        repositories: sortedRepositories,
      };

    case 'RESET_REPOSITORIES':
      return {
        ...state,
        repositories: [],
        error: null,
        loading: false,
      };

    default:
      return state;
  }
}
