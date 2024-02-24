import axios from 'axios';

const TEST_API_BASE_URL = 'http://localhost:8080';
const PROD_API_BASE_URL = 'https://veteran-help.railway.app';

const api = axios.create({
  baseURL: TEST_API_BASE_URL,
});

export default api;