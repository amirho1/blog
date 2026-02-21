# ============================================
# Stage 1: Dependencies Installation Stage
# ============================================
ARG NODE_VERSION=20-alpine

FROM node:${NODE_VERSION} AS dependencies

WORKDIR /app

# Copy package files and Yarn config
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/releases .yarn/releases

# Install dependencies
RUN corepack enable yarn && yarn install --immutable

# ============================================
# Stage 2: Build Next.js application
# ============================================
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV INIT_CWD=/app

# Build Next.js application (Contentlayer + Next.js + postbuild RSS/search)
RUN --mount=type=cache,target=/app/.next/cache \
  corepack enable yarn && \
  yarn build

# ============================================
# Stage 3: Production runner
# ============================================
FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

# Copy production assets
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Create data directory for persistent volume mount
RUN mkdir -p /app/data && chown -R node:node /app/data

USER node

EXPOSE 3001

CMD ["node", "server.js"]
