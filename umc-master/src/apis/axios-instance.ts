import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    accept: 'application/json',
  },
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default axiosInstance;
