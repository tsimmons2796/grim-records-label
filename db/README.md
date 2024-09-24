
# Grim Records MongoDB Setup

This project sets up a MongoDB database with a `grim-records` database, including `Artists` and `FormSubmissions` collections, using Docker and Docker Compose.

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) (Ensure Docker is installed and running on your system)
- [Docker Compose](https://docs.docker.com/compose/install/) (Included with Docker Desktop)
- [Mongo Compass](https://www.mongodb.com/products/tools/compass)
- [Mongo Shell](https://www.mongodb.com/try/download/shell)

## Setup and Usage

Follow these steps to set up and run the MongoDB database locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd grim-records-db
```

### 2. Build the Docker Image

Use the following command to build the Docker image for MongoDB:

```bash
docker-compose build
```

### 3. Start the Services

Start the MongoDB container using Docker Compose:

```bash
docker-compose up -d
```

This will start the MongoDB service in detached mode. The database will be initialized with the specified collections and data.

### 4. Check Running Containers

To check if the containers are running, use the following command:

```bash
docker ps
```

This will list all the running Docker containers. Look for the container named `mongodb`.

### 5. Rebuild the Docker Image

If you make changes to the `Dockerfile` or the `init-grim-records.js` script, you will need to rebuild the image:

```bash
docker-compose build
```

### 6. Restart the Containers

If you need to restart the services, use the following command:

```bash
docker-compose restart
```

### 7. Stop and Remove Containers

To stop the containers and remove them along with their networks and volumes:

```bash
docker-compose down
```

### 8. Remove Unused Docker Resources

To clean up unused Docker networks and volumes:

```bash
docker network prune
docker volume prune
```

### 9. View Logs

To view the logs of the MongoDB container:

```bash
docker logs mongodb
```
### 10. Connecting to the DB

Open Mongo Compass and connect to the mongo database running on the container using the connection string: "mongodb://admin:adminpassword@localhost:27018/?directConnection=true"