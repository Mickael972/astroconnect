import axios from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async () => {
  try {
    const res = await api.get('/articles');
    return res.data['hydra:member'];
  } catch (err) {
    console.error("Erreur API :", err);
    return [];
  }
};

export default api;