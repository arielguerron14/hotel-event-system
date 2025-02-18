# Analytics Service

## Overview
The **Analytics Service** is responsible for data aggregation, processing, and providing insights within the hotel management system. It ensures real-time and batch data analytics for different operations.

## Features
- Data collection and aggregation.
- Processing analytics data.
- Integration with reporting tools.

## Installation
1. Navigate to the service directory:
   ```bash
   cd analytics/analytics-service
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env` file. Ensure the following variables are correctly defined:
   ```env
   PORT=3008
   DB_HOST=databaseanalytics.c731zxhjiqll.us-east-1.rds.amazonaws.com
   DB_PORT=3306
   DB_USER=your-db-user
   DB_PASSWORD=your-db-password
   DB_NAME=analytics_db
   JWT_SECRET=your-jwt-secret
   ```

## Running the Service
### Locally
Start the service with:
```bash
npm start
```

### With Docker
Build and run the container:
```bash
docker build -t analytics-service .
docker run -p 3008:3008 analytics-service
```

### Dockerfile
The following `Dockerfile` is used to containerize the Analytics Service:
```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3008

CMD ["npm", "start"]
```

## API Endpoints
| Method | Endpoint         | Description |
|--------|----------------|-------------|
| GET    | /analytics      | Retrieve analytics data |
| POST   | /analytics/data | Submit new data for processing |
| GET    | /api/analytics/bookings | Retrieve booking statistics |
| GET    | /api/analytics/revenue  | Retrieve revenue statistics |

## Technologies Used
- **Node.js** - Used as the runtime environment for the service.
- **Express.js** - Framework for handling routes and HTTP requests.
  - **Used in:** `index.js`, `routes/analyticsRoutes.js`
  ```javascript
  const express = require('express');
  const cors = require('cors');
  const router = express.Router();
  const { getBookingStats, getRevenueStats } = require("../controllers/analyticsController");
  
  router.get("/bookings", getBookingStats);
  router.get("/revenue", getRevenueStats);
  
  module.exports = router;
  ```
- **MySQL2** - Library for MySQL database interaction.
  - **Used in:** `models/db.js`, `controllers/analyticsController.js`
  ```javascript
  const mysql = require('mysql2');
  const db = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
  });
  ```
- **JSON Web Tokens (JWT)** - Used for authentication and security.
  - **Used in:** `utils/middleware/authMiddleware.js`
  ```javascript
  const jwt = require("jsonwebtoken");

  module.exports = (req, res, next) => {
      const token = req.header("Authorization");
      if (!token) return res.status(401).json({ error: "Access Denied" });
  
      try {
          const verified = jwt.verify(token, process.env.JWT_SECRET);
          req.user = verified;
          next();
      } catch (err) {
          res.status(400).json({ error: "Invalid Token" });
      }
  };
  ```
- **dotenv** - Loads environment variables from a `.env` file.
- **CORS** - Middleware to enable cross-origin requests.
  - **Used in:** `index.js`
  ```javascript
  const cors = require("cors");
  app.use(cors());
  ```
- **Request Logging Middleware**
- **Data Formatting Utility**
  - **Used in:** `utils/formatters.js`
  ```javascript
  module.exports = {
      formatAnalyticsData: (data) => {
          return data.map((entry) => ({
              date: entry.date,
              value: entry.total_bookings || entry.total_revenue || 0
          }));
      }
  };
  ```
- **Helper Functions**
  - **Used in:** `utils/helpers.js`
  ```javascript
  const crypto = require("crypto");

  module.exports = {
      generateAnalyticsId: () => {
          return "ANL-" + crypto.randomBytes(4).toString("hex").toUpperCase();
      }
  };
  ```
- **Data Validation Utility**
  - **Used in:** `utils/validators.js`
  ```javascript
  module.exports = {
      validateAnalyticsData: (data) => {
          return Array.isArray(data) && data.length > 0;
      }
  };
  ```
- **Error Handling Enhancements**
  - **Used in:** `utils/middleware/errorHandler.js`
  ```javascript
  module.exports = (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: "Something went wrong!" });
  };
  ```

- **Docker** - Used for containerization.

## License
This project is licensed under the MIT License.



