# How to Run the Application

This document provides detailed instructions on how to run this Express web application.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

## Step-by-Step Instructions

1. **Install Dependencies**

   Before running the application for the first time, you need to install its dependencies:

   ```bash
   npm install
   ```

2. **Run the Application**

   To start the application, run:

   ```bash
   npm start
   ```

   This will start the Express server on port 3000 (by default).

3. **Access the Application**

   Once the server is running, you can access it at:
   
   - Main page: http://localhost:3000/
   - Status API: http://localhost:3000/api/status

## Environment Variables

- **PORT**: You can specify a custom port by setting the PORT environment variable:
  
  ```bash
  PORT=8080 npm start
  ```

## Other Useful Commands

- **Run Tests**:
  ```bash
  npm test
  ```

- **Build the Application**:
  ```bash
  npm run build
  ```

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed (`npm install`)
2. Check if the port is already in use by another application
3. Verify that Node.js is properly installed (`node --version`)