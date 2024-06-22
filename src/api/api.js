import axios from 'axios';

const TEST_API_BASE_URL = 'http://localhost:8080';
const PROD_API_BASE_URL = 'https://veteran-api-production.up.railway.app';

export const BASE_URL = PROD_API_BASE_URL;
export const FILE_DOWNLOAD_BASE_URL = BASE_URL + '/documents/download/';

const api = axios.create({
  baseURL: PROD_API_BASE_URL,
});

export default api;