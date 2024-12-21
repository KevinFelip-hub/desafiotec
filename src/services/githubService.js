import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const getUser = async username => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

export const getUserRepositories = async username => {
  const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
  return response.data;
};

export const getRepositoryDetails = async fullName => {
  const response = await axios.get(`${BASE_URL}/repos/${fullName}`);
  return response.data;
};
