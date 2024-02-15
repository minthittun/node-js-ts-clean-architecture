# Use an official Node.js runtime as a base image
FROM node:21-alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build TypeScript files
RUN npm run build

# Expose the port on which your application will run
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]