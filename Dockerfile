# Use the official Node.js image as the base image
FROM node:20.14.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the development server
CMD ["pnpm", "dev"]
