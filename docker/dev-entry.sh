#!/bin/sh
set -e

echo "Installing dependencies..."
pnpm install

echo "Generating Prisma client..."
pnpm prisma generate

echo "Applying database migrations..."
pnpm prisma migrate deploy

if [ "$SEED_DB" = "true" ]; then
    echo "Seeding database (SEED_DB=true)..."
    pnpm prisma db seed
fi

echo "Starting development server on http://localhost:3000"
exec pnpm next dev --hostname 0.0.0.0