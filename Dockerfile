# Stage 1: Build the React application
# Use a specific Node.js version for reproducibility
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Vite exposes environment variables prefixed with VITE_
# These ARGs are passed during the 'docker build' command and will be baked into your static files.
ARG VITE_API_KEY
ARG VITE_AUTH_DOMAIN
ARG VITE_PROJECT_ID
ARG VITE_STORAGE_BUCKET
ARG VITE_MESSAGING_SENDER_ID
ARG VITE_APP_ID

# Build the application for production
RUN npm run build

# Stage 2: Serve the application using Nginx
# Use a lightweight, stable Nginx image
FROM nginx:stable-alpine

# Copy the built static files from the 'builder' stage to the Nginx public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 8080

# Start Nginx and keep it in the foreground
CMD ["nginx", "-g", "daemon off;"]