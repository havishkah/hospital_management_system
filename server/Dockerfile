# Use Node.js as the base image for running the server application
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server-side application files
COPY server/ ./

# Start the server application
CMD ["npm", "start"]
