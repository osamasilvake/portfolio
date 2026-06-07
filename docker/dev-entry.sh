#!/bin/sh
set -e

echo "Installing dependencies..."
npm install -g pnpm
pnpm install

echo "Generating Prisma client..."
pnpm prisma generate

echo "Applying database migrations..."
pnpm prisma migrate deploy

if [ "$SEED_DB" = "true" ]; then
    echo "Seeding database..."
    pnpm prisma db seed
fi

echo "Starting development server on http://localhost:3000"
exec pnpm dev