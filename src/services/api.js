import axios from 'axios';

const BACKEND_URL = typeof process !== 'undefined' ? process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000' : 'http://localhost:5000';
const API_BASE_URL = `${BACKEND_URL}/api`;

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor to handle API response format
api.interceptors.response.use(
  (response) => {
    // API returns data in format: { message, data, status }
    return response.data;
  },
  (error) => {
    console.error('API Error:', error);
    throw error;
  }
);

// News API calls
export const fetchNews = async (take = 20) => {
  const response = await api.get(`/news?take=${take}`);
  return response.data;
};

export const fetchNewsById = async (id) => {
  const response = await api.get(`/news/${id}`);
  return response.data;
};

export const fetchNewsByCategory = async (categoryId, take = 20) => {
  const response = await api.get(`/news/${categoryId}/category?take=${take}`);
  return response.data;
};

export const fetchNewsByCountry = async (countryId, take = 20) => {
  const response = await api.get(`/news/${countryId}/country?take=${take}`);
  return response.data;
};

export const fetchNewsBySource = async (sourceId, take = 20) => {
  const response = await api.get(`/news/${sourceId}/source?take=${take}`);
  return response.data;
};

export const searchNews = async (keyword) => {
  const response = await api.get(`/news/search?keyword=${encodeURIComponent(keyword)}`);
  return response.data;
};

export const searchNewsByTitle = async (keyword) => {
  const response = await api.get(`/news/search-title?keyword=${encodeURIComponent(keyword)}`);
  return response.data;
};

// Category API calls
export const fetchCategories = async () => {
  const response = await api.get('/category');
  return response.data;
};

export const fetchCategoryById = async (id) => {
  const response = await api.get(`/category/${id}`);
  return response.data;
};

// Country API calls
export const fetchCountries = async () => {
  const response = await api.get('/country');
  return response.data;
};

export const fetchCountryById = async (id) => {
  const response = await api.get(`/country/${id}`);
  return response.data;
};

// Source API calls
export const fetchSources = async () => {
  const response = await api.get('/source');
  return response.data;
};

export const fetchSourceById = async (id) => {
  const response = await api.get(`/source/${id}`);
  return response.data;
};

export const searchSources = async (keyword) => {
  const response = await api.get(`/source/search?keyword=${encodeURIComponent(keyword)}`);
  return response.data;
};

export default api;
