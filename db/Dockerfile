# Use the official MongoDB image
FROM mongo:latest

# Set environment variables for MongoDB
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=adminpassword

# Copy the initialization script into the container
COPY ./init-grim-records.js /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017
