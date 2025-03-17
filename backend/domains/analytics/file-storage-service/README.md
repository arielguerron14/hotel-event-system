# File Storage Service

## Overview

The **File Storage Service** is responsible for handling file uploads, storage, and retrieval within the hotel management system. It allows secure and efficient file management.

## Features

- Upload and store files securely.
- Retrieve stored files.
- Delete stored files when necessary.

## Installation

1. Navigate to the service directory:
   ```bash
   cd file-storage-service
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env` file. Ensure the following variables are correctly defined:
   ```env
   PORT=3019
   STORAGE_PATH=./uploads
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
docker build -t file-storage-service .
docker run -p 3019:3019 file-storage-service
```

### Dockerfile

The following `Dockerfile` is used to containerize the File Storage Service:

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3019

CMD ["npm", "start"]
```

## API Endpoints

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| POST   | /api/files/upload   | Upload a file                |
| GET    | /api/files/:filename | Retrieve a stored file       |
| DELETE | /api/files/:filename | Delete a stored file         |

## Technologies Used

- **Node.js** - Used as the runtime environment for the service.
- **Express.js** - Framework for handling routes and HTTP requests.
  - **Used in:** `index.js`, `routes/fileRoutes.js`
  ```javascript
  const express = require('express');
  const router = express.Router();
  const { uploadFile, getFile, deleteFile } = require("../controllers/fileController");
  const upload = require("../middleware/uploadMiddleware");

  router.post("/upload", upload.single("file"), uploadFile);
  router.get("/files/:filename", getFile);
  router.delete("/files/:filename", deleteFile);

  module.exports = router;
  ```
- **Multer** - Middleware for handling file uploads.
  - **Used in:** `middleware/uploadMiddleware.js`
  ```javascript
  const multer = require("multer");
  const storage = multer.diskStorage({
      destination: process.env.STORAGE_PATH || "./uploads",
      filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`);
      }
  });
  module.exports = multer({ storage });
  ```
- **JSON Web Tokens (JWT)** - Used for authentication and security.
  - **Used in:** `middleware/authMiddleware.js`
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
- **Error Handling Enhancements**
  - **Used in:** `middleware/errorHandler.js`
  ```javascript
  module.exports = (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: "Something went wrong!" });
  };
  ```
- **Docker** - Used for containerization.

## License

This project is licensed under the MIT License.

