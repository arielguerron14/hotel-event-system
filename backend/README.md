Domains

Overview

The Domains directory contains multiple microservices that collectively form the backend infrastructure of the hotel management system. Each service is responsible for a specific functionality and operates independently, following a microservices architecture.

Microservices in Domains

Analytics

Service Name

Description

Analytics Service

Provides data aggregation, processing, and insights.

File Storage Service

Manages file uploads and storage.

Inventory Service

Tracks inventory and stock management.

Reporting Service

Generates reports and insights for the business.

Authentication

Service Name

Description

Auth Service

Handles authentication and authorization.

Notification Preferences Service

Manages user preferences for notifications.

User Profile Service

Manages user profile information.

Booking

Service Name

Description

Billing Service

Manages billing and invoicing operations.

Booking Service

Facilitates hotel room reservations.

Payment Gateway Service

Facilitates external payment processing.

Payment Service

Handles internal payment transactions.

Room Service

Handles room-related services.

Scheduler Service

Manages scheduled tasks and automation.

Customer Engagement

Service Name

Description

Email Service

Handles email notifications and communication.

Event Service

Manages events and activities in the hotel chain.

Feedback Service

Collects and processes customer feedback.

Loyalty Service

Handles customer loyalty programs.

Notification Service

Sends notifications to users.

Review Service

Manages customer reviews and ratings.

Support Service

Provides customer support management.

Project Structure

backend/
├── domains/
│   ├── analytics/
│   │   ├── analytics-service/
│   │   ├── file-storage-service/
│   │   ├── inventory-service/
│   │   ├── reporting-service/
│   ├── authentication/
│   │   ├── auth-service/
│   │   ├── notification-preferences-service/
│   │   ├── user-profile-service/
│   ├── booking/
│   │   ├── billing-service/
│   │   ├── booking-service/
│   │   ├── payment-gateway-service/
│   │   ├── payment-service/
│   │   ├── room-service/
│   │   ├── scheduler-service/
│   ├── customer-engagement/
│   │   ├── email-service/
│   │   ├── event-service/
│   │   ├── feedback-service/
│   │   ├── loyalty-service/
│   │   ├── notification-service/
│   │   ├── review-service/
│   │   ├── support-service/
├── Dockerfile
├── package-lock.json

Running the Microservices

Each microservice has its own Dockerfile and can be started individually. Below is an example of running a service:

docker build -t analytics-service ./domains/analytics/analytics-service

docker run -p 3008:3008 analytics-service

Contributing

To contribute to a specific microservice:

Navigate to the service directory.

Make the necessary modifications.

Submit a pull request.

License

This project is licensed under the MIT License.