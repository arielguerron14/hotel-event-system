require('dotenv').config();

const config = {
  environment: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/hotel-system',
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
  emailUser: process.env.EMAIL_USER || '',
  emailPass: process.env.EMAIL_PASS || '',
};

module.exports = config;
