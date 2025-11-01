import axios from 'axios';

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL || 'https://news-api.mediakautsar.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleResponse = (response) => {
  if (response.data && response.data.status === 'success') {
    return response.data.data;
  }
  // This will now throw an error if the response is not as expected,
  // which helps in debugging build issues.
  throw new Error('API response was not successful or was in an unexpected format.');
};

const handleError = (error) => {
  console.error('API Error:', error.message);
  // Re-throw the error to ensure build processes and components can handle it.
  throw error;
};

// News API calls
export const fetchNews = (take = 20) => api.get(`/news?take=${take}`).then(handleResponse).catch(handleError);
export const fetchNewsById = (id) => api.get(`/news/${id}`).then(handleResponse).catch(handleError);
export const fetchNewsByCategory = (categoryId, take = 20) => api.get(`/news/${categoryId}/category?take=${take}`).then(handleResponse).catch(handleError);
export const fetchNewsByCountry = (countryId, take = 20) => api.get(`/news/${countryId}/country?take=${take}`).then(handleResponse).catch(handleError);
export const fetchNewsBySource = (sourceId, take = 20) => api.get(`/news/${sourceId}/source?take=${take}`).then(handleResponse).catch(handleError);
export const searchNews = (keyword, page = 1, take = 20) => api.get(`/news/search?keyword=${encodeURIComponent(keyword)}&page=${page}&take=${take}`).then(handleResponse).catch(handleError);
export const searchNewsByTitle = (keyword) => api.get(`/news/search-title?keyword=${encodeURIComponent(keyword)}`).then(handleResponse).catch(handleError);

// Category API calls
export const fetchCategories = () => api.get('/category').then(handleResponse).catch(handleError);
export const fetchCategoryById = (id) => api.get(`/category/${id}`).then(handleResponse).catch(handleError);

// Country API calls
export const fetchCountries = () => api.get('/country').then(handleResponse).catch(handleError);
export const fetchCountryById = (id) => api.get(`/country/${id}`).then(handleResponse).catch(handleError);

// Source API calls
export const fetchSources = () => api.get('/source').then(handleResponse).catch(handleError);
export const fetchSourceById = (id) => api.get(`/source/${id}`).then(handleResponse).catch(handleError);
export const searchSources = (keyword) => api.get(`/source/search?keyword=${encodeURIComponent(keyword)}`).then(handleResponse).catch(handleError);

export default api;
