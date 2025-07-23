# Use Node.js image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci --ignore-scripts

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Copy the rest of the code
COPY . .

# Build the React app
RUN npm run build

# Serve using nginx
FROM nginx:alpine

# Copy build output to Nginx html folder
COPY --from=0 /app/build /usr/share/nginx/html

# Use non-root user (optional but safer)
# USER nginx

# Expose port and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]