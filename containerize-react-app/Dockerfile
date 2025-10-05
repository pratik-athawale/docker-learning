# 1. build our production bundle
FROM node:22-alpine

WORKDIR /app
COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

# 2. server the bundle with a HTTP server
