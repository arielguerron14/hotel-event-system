import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // Proxy configurado en vite.config.js
});

export const fetchEvents = async () => {
  const response = await API.get('/events');
  return response.data;
};

export const createEvent = async (eventData) => {
  const response = await API.post('/events', eventData);
  return response.data;
};
