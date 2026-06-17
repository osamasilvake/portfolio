#!/bin/sh
set -e

echo "Applying database migrations..."
npx prisma migrate deploy

echo "Seeding database..."    # ← add this
npx prisma db seed             # ← add this

echo "Starting production server..."
exec node server.js