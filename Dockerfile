# Use an official Node runtime as the base image
FROM node:24-slim AS base
WORKDIR /usr/src/app

# Build stage - install ALL dependencies
FROM base AS build
ENV HUSKY=0

COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

COPY tsconfig.json ./
COPY vite.config.ts ./
COPY eslint.config.js ./
COPY index.html ./
COPY resources ./resources
COPY proprietary ./proprietary
COPY src ./src

ARG GIT_COMMIT=unknown
ENV GIT_COMMIT="$GIT_COMMIT"

# ✅ No production build needed for dev
# RUN npm run build-prod

# Final dev image
FROM base

ENV HUSKY=0

# Copy full node_modules (includes dev deps)
COPY --from=build /usr/src/app/node_modules ./node_modules

# Copy app source
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY eslint.config.js ./
COPY index.html ./
COPY resources ./resources
COPY proprietary ./proprietary
COPY src ./src

ARG GIT_COMMIT=unknown
ENV GIT_COMMIT="$GIT_COMMIT"

# ✅ Expose dev server port (adjust if needed)
EXPOSE 5173

# ✅ Run dev server
CMD ["npm", "run", "dev"]
