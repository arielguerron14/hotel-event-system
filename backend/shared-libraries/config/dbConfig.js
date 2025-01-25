const mongoose = require('mongoose');
const logger = require('../logger/logger');
const { mongoUri } = require('./env');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Connected to MongoDB');
  } catch (err) {
    logger.error(`Database connection failed: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
