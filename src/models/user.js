import {getUser, getUserRepositories} from '../services/githubService';

export const fetchUser = (username) => async (dispatch) => {
  try {
    const userData = await getUser(username);
    const repositories = await getUserRepositories(username);

    dispatch({
      type: 'SET_USER',
      payload: {
        profile: {
          avatar: userData.avatar_url,
          bio: userData.bio,
          email: userData.email,
          name: userData.name,
        },
        repositories,
      },
    });
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};
