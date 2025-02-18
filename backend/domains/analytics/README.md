# Analytics Domain

## Overview
The **Analytics Domain** is responsible for handling all data processing, insights generation, and reporting functionalities within the hotel management system. It consists of multiple microservices that manage analytics-related tasks efficiently.

## Microservices in Analytics

| Microservice Name        | Description                                          |
|-------------------------|------------------------------------------------------|
| **Analytics Service**   | Provides data aggregation, processing, and insights. |
| **File Storage Service** | Manages file uploads and storage.                    |
| **Inventory Service**    | Tracks inventory and stock management.               |
| **Reporting Service**    | Generates reports and insights for the business.     |

## Project Structure
```
analytics/
├── analytics-service/
├── file-storage-service/
├── inventory-service/
├── reporting-service/
└── README.md
```

## Running the Services
Each microservice has its own **Dockerfile** and can be started individually. Example:
```bash
docker build -t analytics-service ./analytics/analytics-service

docker run -p 3008:3008 analytics-service
```

## License
This project is licensed under the MIT License.

