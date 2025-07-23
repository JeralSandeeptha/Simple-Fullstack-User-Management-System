# Use the official Node.js image as the base image
FROM node:24-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port (default port 5000 for Express.js)
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
