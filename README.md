# Node.js TypeScript Clean Architecture
This project was created with [Node.js](https://nodejs.org/en)

## About this project

I've built a Node.js REST API project using TypeScript and MongoDB, adhering to a clean architecture. Additionally, I've included a Dockerfile and Docker Compose configuration for straightforward containerization. I hope this provides a simple yet effective starting point for implementing clean architecture in Node.js.


## Directory structure
    ├── adapters
        ├── express
        ├── socket
    ├── data
        ├── models
        ├── view-models
    ├── infrastructure
        ├── repositories
        ├── use-cases
    ├── Dockerfile
    ├── docker-compose.yml


## Usage (Recommanded)

### 1. Navigate to the project directory:
```
cd folder-name
```

### 2. To run the application, execute the following command in the root directory:

**Important! Please make sure that ports 3000 and 27017 are not being used on your local machine.**

```
docker-compose up
```
### 3. Browser http://localhost:3000

```
Method: POST

Header: 
Content-Type: application/json
api-key: abd23AghQYJK8cP2aXKY4zR/YWGGZq8HsErTbfW1E7k=

URL
http://localhost:3000/api/persons/create
```

```
Method: GET

Header: 
api-key: abd23AghQYJK8cP2aXKY4zR/YWGGZq8HsErTbfW1E7k=

URL
localhost:3000/api/persons/getAll
```

---

## Run in development mode

### Install dependencies
```
npm install
```
**Important! Please ensure that MongoDB is installed on your local machine.**

### Run

```
npm run serve
```