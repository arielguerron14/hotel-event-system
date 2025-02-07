const axios = require("axios");

const apiGateway = axios.create({
  baseURL: process.env.API_GATEWAY_URL || "http://localhost:3000",
  timeout: 5000
});

module.exports = apiGateway;
