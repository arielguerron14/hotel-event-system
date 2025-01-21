require('dotenv').config();

const env = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017',
  jwtSecret: process.env.JWT_SECRET || 'default_secret',
  emailUser: process.env.EMAIL_USER || '',
  emailPassword: process.env.EMAIL_PASSWORD || '',
};

module.exports = env;
