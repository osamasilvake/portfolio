# ------------------------------------------------------------
# Stage 1: Install dependencies
# ------------------------------------------------------------
FROM node:24.15.0-slim AS deps
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts && pnpm approve-builds --yes || true

# ------------------------------------------------------------
# Stage 2: Build the app
# ------------------------------------------------------------
FROM node:24.15.0-slim AS builder
WORKDIR /app

RUN npm install -g pnpm
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV DATABASE_URL="postgresql://build:build@localhost:5432/build"
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm prisma generate
RUN pnpm build

# ------------------------------------------------------------
# Stage 3: Production runner
# ------------------------------------------------------------
FROM node:24.15.0-slim AS runner
WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs -s /bin/sh -m nodejs

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma || true
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma || true

COPY docker/start.sh ./docker/start.sh
RUN chmod +x ./docker/start.sh

RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000
CMD ["./docker/start.sh"]
