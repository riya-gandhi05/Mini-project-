# Base image
FROM node:18

# Working directory
WORKDIR /app

# Package files copy
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining code
COPY . .

# Port expose
EXPOSE 5000

# Start app
CMD ["node", "server.js"]
