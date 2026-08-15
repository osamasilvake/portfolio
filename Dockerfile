# ------------------------------------------------------------
# Stage 1: Install dependencies
# ------------------------------------------------------------
FROM node:24.15.0-slim AS deps
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
ENV HUSKY=0
RUN pnpm install --frozen-lockfile

# ------------------------------------------------------------
# Stage 2: Build the app
# ------------------------------------------------------------
FROM node:24.15.0-slim AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV DATABASE_URL="postgresql://build:build@localhost:5432/build"
RUN pnpm db:generate
RUN pnpm build

# ------------------------------------------------------------
# Stage 3: Production runner
# ------------------------------------------------------------
FROM node:24.15.0-slim AS runner
WORKDIR /app

# Required by Prisma
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@latest --activate

# Non-root user
RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs -s /bin/sh -m nodejs

# Standalone output — self contained, no full node_modules needed.
# NOTE: this flattens .next/standalone/* directly into /app, so
# server.js ends up at /app/server.js (NOT /app/.next/standalone/server.js)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Prisma needs these at runtime for migrations
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY package.json pnpm-lock.yaml ./

# Install prod deps — since "prisma" (the CLI) now lives in
# dependencies (not devDependencies), this correctly pulls it in
# alongside everything else needed for `prisma migrate deploy`.
RUN pnpm config set ignore-scripts false && pnpm install --frozen-lockfile

# Startup script
COPY docker/start-prod.sh ./docker/start-prod.sh

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000
CMD ["sh", "docker/start-prod.sh"]