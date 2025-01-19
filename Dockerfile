# Step 1: Use the Node.js image as the base image for building the app
FROM --platform=linux/amd64 node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire application code into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a lightweight Nginx image to serve the built application
FROM --platform=linux/amd64 nginx:alpine

# Step 8: Copy the built files from the previous stage to the Nginx default directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port Nginx will run on
EXPOSE 80

# Step 10: Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
