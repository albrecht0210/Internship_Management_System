# Step 1: Start with a base Python image
FROM python:3.9-slim

# Step 2: Set working directory in container
WORKDIR /app

# Step 3: Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Step 4: Copy Django application code
COPY . .

# Step 5: Copy SSL certificates (self-signed) into the container
COPY ../ssl-certs /app/ssl-certs

# Step 6: Expose the port Django will run on
EXPOSE 8000

# Step 7: Run Django with HTTPS using Gunicorn
CMD ["gunicorn", "--certfile", "/app/ssl-certs/cert.pem", "--keyfile", "/app/ssl-certs/key.pem", "your_project.wsgi:application"]
