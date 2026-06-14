# ─────────────────────────────
# 1. Install deps
# ─────────────────────────────
FROM node:20-slim AS deps

WORKDIR /app

RUN corepack enable

# Prisma + openssl requirement
RUN apt-get update && apt-get install -y openssl

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma

RUN pnpm install --frozen-lockfile

RUN pnpx prisma generate


# ─────────────────────────────
# 2. Build app
# ─────────────────────────────
FROM node:20-slim AS builder

WORKDIR /app

RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build


# ─────────────────────────────
# 3. Production runtime
# ─────────────────────────────
FROM node:20-slim AS runner

WORKDIR /app

RUN apt-get update && apt-get install -y openssl

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN corepack enable

# create user
RUN useradd -m nextjs
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["sh", "./docker/start.sh"]