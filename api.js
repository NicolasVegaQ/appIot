const axios = require('axios');

const username = "stripebraid752";
const password = "fNRdxQZ1avTGWgYh";

const api = axios.create({
  baseURL: 'https://stripebraid752.cloud.shiftr.io',
  auth: { username, password },
});

module.exports = api;
