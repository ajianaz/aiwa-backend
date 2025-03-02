#!/bin/sh

echo "🚀 Starting application in ${NODE_ENV:-development} mode..."

echo "⏳ Waiting for PostgreSQL to be ready..."
until pg_isready -h db -p 5432 -U ${DB_USERNAME}; do
  sleep 2
done
echo "✅ Database is ready!"

# **1️⃣ Generate Prisma Client untuk Dev & Prod**
echo "🔧 Running Prisma Generate..."
npx prisma generate || echo "⚠️ Warning: Prisma Generate failed"

# **2️⃣ Jalankan Migrate Deploy (Hanya Jika Ada Perubahan)**
echo "📦 Running Prisma Migrate Deploy..."
npx prisma migrate deploy || echo "⚠️ Warning: Prisma Migrate failed"

echo "🟢 Starting Application..."
exec "$@"
