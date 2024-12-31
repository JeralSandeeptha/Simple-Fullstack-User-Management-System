# Use an official Node.js image for development
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Install dependencies (package.json first to leverage Docker cache)
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of your app's code into the container
COPY . .

# Expose the port React development server will run on
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
