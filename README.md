# Internship Management System

The Internship Management App is a digital solution designed to streamline internship tracking, task management, and departmental coordination. It helps interns log their work hours, complete assigned tasks, and ensure a smooth workflow within teams and departments.

---

# Project Setup Guide

## Note for Development
To set up SSL for secure connections, follow these steps:
1. **Create an SSL directory in the root project folder:**
   ```bash
   mkdir ssl
   ```
2. **Generate an SSL certificate:**
   ```bash
   openssl req -x509 -newkey rsa:4096 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes
   ```

---

## Backend (Django)

### Prerequisites
- **Python** installed
- **Virtual environment** package installed

### Setup Steps
1. **Create and activate a virtual environment:**
   - **Windows (CMD/PowerShell):**
     ```cmd
     python -m venv venv
     venv\Scripts\activate
     ```
   - **Mac/Linux (Bash):**
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
2. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

---

## Frontend (React)

### Prerequisites
- **Node.js** and **npm** installed

### Setup Steps
1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Running the Project

### Backend (Django)
1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```
2. **Run the development server with SSL:**
   ```bash
   python manage.py runsslserver 127.0.0.1:8000
   ```

#### Troubleshooting SSL Issues
If you encounter errors, modify the SSL server file:
1. **Locate and open the following file:**
   ```
   venv\Lib\site-packages\sslserver\management\commands\runsslserver.py
   ```
2. **Find this code:**
   ```python
   self.socket = ssl.wrap_socket(self.socket, certfile=certificate, keyfile=key)
   ```
3. **Replace it with:**
   ```python
   context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
   context.load_cert_chain(certfile=certificate, keyfile=key)
   self.socket = context.wrap_socket(self.socket, server_side=True)
   ```
4. **Restart the server:**
   ```bash
   python manage.py runsslserver 127.0.0.1:8000
   ```

---

### Frontend (React)
1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
2. **Start the frontend development server:**
   ```bash
   npm start
   ```

---

## Environment Variables
### Backend
Create a `.env` file inside the `backend` directory with necessary configurations:
```
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=your_database_url
```

### Frontend
Create a `.env` file inside the `frontend` directory:
```
REACT_APP_API_URL=https://127.0.0.1:8000/api
```

---

## Deployment
### Backend
- Use **Gunicorn** and **NGINX** for production deployment.
- Set up **PostgreSQL** or **MySQL** as a database instead of SQLite.

### Frontend
- Use **Vercel**, **Netlify**, or **Docker** for deployment.

---

## Contributing
If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch` or `bugfix-branch`).
3. Commit your changes.
4. Push to your branch and create a Pull Request.

---

## License
This project is licensed under the MIT License.

