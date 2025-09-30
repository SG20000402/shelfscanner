import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Backend URL
});

export const uploadBookshelf = async (formData) => {
  return await api.post('/scan', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};