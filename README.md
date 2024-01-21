# Microservice: User-API

## Overview

The User-API microservice manages user-related data for the GameStats Tracker application. It provides endpoints for creating, retrieving, updating, and deleting user information stored in a MongoDB database.

## Setup and Configuration

1. Clone the repository.
2. Run the commands in the root project readme.

Note the environment variables:

- `USERDB_USER`: Username for MongoDB connection.
- `USERDB_PASSWORD`: Password for MongoDB connection.

these are set through Kubernetes. See the file `user-api-deployment.yaml` in the root/kubernetes folder of the project.

## MongoDB Connection

The User-API connects to a MongoDB database using the following connection string:
`mongodb://${username}:${password}@userdb-service:5250/admin?authSource=admin&authMechanism=SCRAM-SHA-256`

Access the User-API service at http://localhost:5200

## Endpoints

### Hello World Endpoint:

- **Endpoint:** /
- **Description:** Returns a simple "Hello world from user api" message.
- **Example:** http://localhost:5200/

### Create User Endpoint:

- **Endpoint:** /createuser
- **Description:** Creates a new user entry in the MongoDB database.
- **Method:** POST
- **Example:** http://localhost:5200/createuser

### Get All Users Endpoint:

- **Endpoint:** /getallusers
- **Description:** Retrieves a list of all user entries from the MongoDB database.
- **Method:** GET
- **Example:** http://localhost:5200/getallusers

### Get User by ID Endpoint:

- **Endpoint:** /getuserbyid/:id
- **Description:** Retrieves a specific user entry by its ID from the MongoDB database.
- **Method:** GET
- **Example:** http://localhost:5200/getuserbyid/123456789

### Update User Endpoint:

- **Endpoint:** /updateuser/:id
- **Description:** Updates an existing user entry in the MongoDB database.
- **Method:** PUT
- **Example:** http://localhost:5200/updateuser/123456789

### Delete User Endpoint:

- **Endpoint:** /deleteuser/:id
- **Description:** Deletes a user entry by its ID from the MongoDB database.
- **Method:** DELETE
- **Example:** http://localhost:5200/deleteuser/123456789

### Delete Users by Username Endpoint:

- **Endpoint:** /deleteusersbyusername
- **Description:** Deletes all users with a given username from the MongoDB database.
- **Method:** DELETE
- **Example:** http://localhost:5200/deleteusersbyusername

## Contact Information

For any inquiries or assistance related to the User-API microservice, please contact:

Bart Hagoort: </br>
Email: barthagoort2000@outlook.com </br>
Phone: +31 6 57113787 </br>
