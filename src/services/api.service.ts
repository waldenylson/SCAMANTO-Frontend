import axios from 'axios';

// const token = localStorage.getItem('@SCAMANTO:authorization');

const api = axios.create({
  baseURL: 'http://10.80.33.40:3333',
});

// api.interceptors.request.use(async config => {
//   if (token) {
//     // eslint-disable-next-line no-param-reassign
//     config.headers.Authorization = null;
//     // eslint-disable-next-line no-param-reassign
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;
