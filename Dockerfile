# Use a specific Node version for consistency (e.g., 22-alpine for a lighter image)
FROM node

# Set the working directory
WORKDIR /app

# Copy only package.json and yarn.lock first (to leverage Docker layer caching)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Install nodemon as a development dependency globally
RUN yarn global add nodemon

# Copy the rest of your app code
COPY . .

# Expose the app port
EXPOSE 8000

# Run the app using the dev script
CMD ["yarn", "dev"]
