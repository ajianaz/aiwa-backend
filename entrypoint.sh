#!/bin/sh

echo "🚀 Starting application in ${NODE_ENV:-development} mode..."

echo "⏳ Waiting for PostgreSQL to be ready..."
until pg_isready -h db -p 5432 -U ${DB_USERNAME}; do
  sleep 2
done
echo "✅ Database is ready!"

# Jalankan Prisma Generate di semua mode
echo "🔧 Running Prisma Generate..."
npx prisma generate

# Jalankan migrasi hanya jika NODE_ENV=production
if [ "$NODE_ENV" = "production" ]; then
  echo "📦 Running Prisma Migrate Deploy..."
  npx prisma migrate deploy
fi

echo "🟢 Starting Application..."
exec "$@"
