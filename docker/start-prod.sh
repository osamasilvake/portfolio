#!/bin/sh
set -e
 
echo "Applying database migrations..."
pnpm prisma migrate deploy
 
echo "Starting production server..."
# NOTE: .next/standalone contents get flattened into /app during the
# Docker build (see Dockerfile), so server.js lives at /app/server.js
# here — NOT /app/.next/standalone/server.js like it does locally.
exec node server.js
 