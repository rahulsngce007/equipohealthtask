
Multi-Container Docker Setup

Application using:

- FastAPI (Python) for backend API
- MySQL as the database
- React for frontend
- Nginx as reverse proxy and frontend server

---

Components

1. Python API (FastAPI)
- Uses 'python:3.11-slim'
- Connects to MySQL database using environment variables
- Exposes '/api/hello' and '/api/db' endpoints

2. MySQL Database
- Uses official 'mysql:8' image
- Environment-configured root password and database name
- Data persisted using Docker volume

3. React App
- Built with 'node:18-alpine'
- Built output served via 'nginx:alpine'

4. Nginx Reverse Proxy
- Routes:
  - '/api/*' → Python API
  - '/' → React App

---

## How to Build and Run

1. Clone the project

'''bash
git clone <your-repo-url>
cd <project-folder>
'''

2. Build and run all containers

'''bash
docker-compose up --build
'''

3. Open your browser:

- React App → [http://localhost]
- API Hello → [http://localhost/api/hello]
- API DB Check → [http://localhost/api/db]

---

## How to Test

### Test API Endpoints

- 'GET /api/hello'  
  Response: '{ "message": "Hello from FastAPI" }'

- 'GET /api/db'  
  Checks database connection  
  Response: '{ "status": "Connected to DB" }'

Use 'curl', Postman or your browser.

'''bash
curl http://localhost/api/hello
curl http://localhost/api/db
'''

### Test React App

Go to [http://localhost](http://localhost)  
You should see "Hello from React" message.

---

## Environment Variables

### 🔹 MySQL Service
'MYSQL_ROOT_PASSWORD':  Root password for MySQL
'MYSQL_DATABASE':       Database name to create |

### 🔹 Backend (FastAPI)
'DB_HOST'     Hostname for DB (use 'db' as service name)
'DB_PORT'     MySQL port (default: 3306)
'DB_USER'     MySQL user (default: 'root')
'DB_PASSWORD' MySQL password
'DB_NAME'     Target database

> These are defined in 'docker-compose.yml' under each service's 'environment' section.

---

## To Clean Up

'''
docker-compose down -v
'''

- Removes containers, networks, and volumes.

---

## Project Structure

'''
.
  backend/            # FastAPI app
  frontend/           # React app
  nginx/              # Nginx reverse proxy config
  docker-compose.yml  # Compose file
'''

