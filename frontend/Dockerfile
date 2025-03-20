# Step 1: Start with a base Node.js image
FROM node:16

# Step 2: Set working directory in container
WORKDIR /app

# Step 3: Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Step 4: Copy React app code
COPY . .

# Step 5: Copy SSL certificates (self-signed) into the container
COPY ../ssl-certs /app/ssl-certs

# Step 6: Expose the port React will run on
EXPOSE 3000

# Step 7: Set environment variables and run React app with HTTPS
CMD HTTPS=true SSL_CRT_FILE=/app/ssl-certs/cert.pem SSL_KEY_FILE=/app/ssl-certs/key.pem npm start
