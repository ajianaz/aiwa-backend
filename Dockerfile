# Base Image
FROM node:20-alpine as base

# Install PostgreSQL client untuk health check
RUN apk add --no-cache postgresql-client

# Set Workdir
WORKDIR /home/node/app

# Copy package.json & install dependencies (production only)
COPY package*.json ./
RUN npm install --only=production

# Install PM2 globally
RUN npm install -g pm2

# Copy semua file proyek
COPY --chown=node:node . .

# Copy & beri izin entrypoint script
COPY entrypoint.sh /home/node/app/entrypoint.sh
RUN chmod +x /home/node/app/entrypoint.sh

# Gunakan user non-root
USER node

# Jalankan entrypoint script
CMD ["sh", "/home/node/app/entrypoint.sh"]
