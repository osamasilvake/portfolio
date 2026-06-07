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
<<<<<<< HEAD

# Remove problematic lines 50-51 and use a single RUN command instead
RUN mkdir -p ./node_modules/.prisma ./node_modules/@prisma
COPY --from=builder --chown=nodejs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nodejs:nodejs /app/node_modules/@prisma ./node_modules/@prisma
=======
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma || true
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma || true
>>>>>>> 3b94517956171209daa2d28f6232b811f71241bc

COPY docker/start.sh ./docker/start.sh
RUN chmod +x ./docker/start.sh

RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000
CMD ["./docker/start.sh"]
