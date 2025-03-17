# Inventory Service

## Overview

The **Inventory Service** manages inventory-related operations, including listing, adding, and deleting items. It ensures that inventory data is maintained consistently.

## Features

- Fetch inventory items.
- Add new items to inventory.
- Delete items from inventory.
- Uses JWT authentication for security.

## Installation

1. Navigate to the service directory:
   ```bash
   cd inventory-service
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env` file. Ensure the following variables are correctly defined:
   ```env
   PORT=3009
   DB_HOST=databaseinventory.c731zxhjiqll.us-east-1.rds.amazonaws.com
   DB_PORT=3306
   DB_USER=admin
   DB_PASSWORD=Reco1688
   DB_NAME=inventory_db
   JWT_SECRET=your-secret-key
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
docker build -t inventory-service .
docker run -p 3009:3009 inventory-service
```

### Dockerfile

The following `Dockerfile` is used to containerize the Inventory Service:
```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3009

CMD ["npm", "start"]
```

## API Endpoints

| Method | Endpoint         | Description               |
| ------ | --------------- | ------------------------- |
| GET    | /api/inventory  | Retrieve inventory items |
| POST   | /api/inventory  | Add a new inventory item |
| DELETE | /api/inventory/:id | Delete an item from inventory |

## Technologies Used

- **Node.js** - Used as the runtime environment for the service.
- **Express.js** - Framework for handling routes and HTTP requests.
  - **Used in:** `index.js`, `routes/inventoryRoutes.js`
- **MySQL2** - Database driver for connecting to MySQL.
  - **Used in:** `models/db.js`
- **JSON Web Tokens (JWT)** - Used for authentication and security.
  - **Used in:** `middleware/authMiddleware.js`
- **dotenv** - Loads environment variables from a `.env` file.
- **CORS** - Middleware to enable cross-origin requests.
  - **Used in:** `index.js`
- **Request Logging Middleware** - Logs incoming requests for debugging.
  - **Used in:** `middleware/requestLogger.js`
- **Error Handling Middleware** - Centralized error handling.
  - **Used in:** `middleware/errorHandler.js`
- **Docker** - Used for containerization.

## License

This project is licensed under the MIT License.

