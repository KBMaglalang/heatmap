# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json, pnpm-lock.yaml (or package-lock.json if you still use npm for lock file)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the current directory contents into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app using pnpm
CMD ["pnpm", "dev"]
