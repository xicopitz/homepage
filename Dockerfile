# syntax = docker/dockerfile:latest

# Install dependencies only when needed
FROM ghcr.io/linuxserver/baseimage-alpine:3.15 AS deps

WORKDIR /app

COPY --link package.json pnpm-lock.yaml* ./

RUN <<EOF
    set -xe
    apk add nodejs npm libc6-compat tzdata
    apk add --virtual .gyp python3 make g++
    npm install -g pnpm
EOF

RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store pnpm fetch | grep -v "cross-device link not permitted\|Falling back to copying packages from store"

RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store pnpm install -r --offline

# Rebuild the source code only when needed
FROM node:current-alpine AS builder
WORKDIR /app

COPY --link --from=deps /app/node_modules ./node_modules/
COPY . .

RUN <<EOF
    set -xe
    npm run telemetry
    mkdir config && echo '-' > config/settings.yaml
    npm run build
EOF

# Production image, copy all the files and run next
FROM node:current-alpine AS runner
LABEL org.opencontainers.image.title "Homepage"
LABEL org.opencontainers.image.description "A self-hosted services landing page, with docker and service integrations."
LABEL org.opencontainers.image.url="https://github.com/benphelps/homepage"
LABEL org.opencontainers.image.documentation='https://github.com/benphelps/homepage/wiki'
LABEL org.opencontainers.image.source='https://github.com/benphelps/homepage'
LABEL org.opencontainers.image.licenses='Apache-2.0'

ENV NODE_ENV production
WORKDIR /app

# Copy files from context (this allows the files to copy before the builder stage is done).
COPY --link package.json next.config.js ./
COPY --link /public ./public

# Copy files from builder
COPY --link --from=builder /app/.next/standalone ./
COPY --link --from=builder /app/.next/static/ ./.next/static/

ENV PORT 3000
EXPOSE $PORT

HEALTHCHECK --interval=10s --timeout=3s --start-period=20s \
  CMD wget --no-verbose --tries=1 --spider --no-check-certificate http://localhost:$PORT/api/healthcheck || exit 1

USER $PUID:$PGID
CMD ["node", "server.js"]
