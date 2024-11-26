import axios from 'axios';

// const username = `${process.env.REACT_APP_BROKER_USERNAME}`;
// const password = `${process.env.REACT_APP_BROKER_PASSWORD}`;

const username = 'stripebraid752';
const password = 'fNRdxQZ1avTGWgYh';

const api = axios.create({
  baseURL: 'https://stripebraid752.cloud.shiftr.io',
  auth: { username, password },
});

export default api;
