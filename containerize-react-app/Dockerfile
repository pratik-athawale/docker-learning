# 1. build our production bundle
FROM node:22-alpine as build

WORKDIR /app
COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

# 2. serve the bundle with a HTTP server
FROM nginx:1.27.0

COPY --from=build /app/build /usr/share/nginx/html 
