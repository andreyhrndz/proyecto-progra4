import axios from 'axios';
import { envConfig } from '../config/env.config';

export const httpClient = axios.create({
  baseURL: envConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores pueden agregarse aquí en etapas posteriores (auth, etc.)
