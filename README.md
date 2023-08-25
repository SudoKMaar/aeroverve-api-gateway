# AeroVerve - API Gateway

Welcome to the AeroVerve API Gateway! This repository serves as the API gateway for routing and proxying requests to various microservices in the AeroVerve flight booking system.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Proxying](#api-proxying)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The AeroVerve API Gateway acts as an entry point for all incoming requests to the AeroVerve flight booking system. It routes requests to the appropriate microservices and provides a unified interface for interacting with the system's functionalities.

### Environment Variables

Before you start using the AeroVerve API Gateway, make sure you have the following environment variables configured:

- `PORT`: The port number on which the API gateway will run (e.g., `4005`).
- `SALT_ROUNDS`: The number of salt rounds for password hashing (e.g., `20`).
- `JWT_EXPIRY`: JWT token expiry time in seconds (e.g., `86400` for 24 hours).
- `JWT_SECRET`: Secret key used for JWT token generation and validation.
- `FLIGHT_SERVICE`: URL of the flight service microservice API.
- `BOOKING_SERVICE`: URL of the booking service microservice API.
- `AUTH_SERVICE`: URL of the authentication service microservice API.
- `REMINDER_SERVICE`: URL of the reminder service microservice API.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/SudoKMaar/aeroverve-api-gateway.git
   ```

2. Navigate to the project directory:

   ```sh
   cd aeroverve-api-gateway
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the API gateway server:
   ```sh
   npm start
   ```

## API Proxying

The AeroVerve API Gateway forwards incoming requests to various microservices based on predefined routes. Here's how it works:

- `/flightsService`: Routes requests to the flight service microservice.
- `/bookingService`: Routes requests to the booking service microservice.
- `/authService`: Routes requests to the authentication service microservice.
- `/reminderService`: Routes requests to the reminder service microservice.
- `/api`: Routes specific to your project.

For more information on the available API routes and how they map to microservices, refer to the respective microservices' documentation.

## Configuration

Configuration settings for the project can be found in the `config` directory. Update the necessary configuration files to match your environment.

## Contributing

Contributions are welcome! If you'd like to contribute to the AeroVerve API Gateway, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

## AeroVerve API Gateway is open-source software licensed under the [MIT License](LICENSE).

---

AeroVerve - Elevating Flight Booking Experiences
