import { create } from 'apisauce';

const defaultConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000
};

// TODO: Check if can and should be removed
if (defaultConfig.baseURL === process.env.REACT_APP_API_URL) {
  console.warn('API baseURL has not been properly initialized'); // eslint-disable-line no-console
}

export default create(defaultConfig);
