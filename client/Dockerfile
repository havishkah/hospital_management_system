# Use Node.js as the base image for building the client application
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client-side application files
COPY client/ ./

# Build the client-side application
RUN npm run build