FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm ci

FROM gcr.io/distroless/nodejs22
WORKDIR /app
COPY --from=build /app/node_modules node_modules
COPY src src
ENV PORT=3000
CMD ["src/index.js"]


# FROM node:22-alpine
# WORKDIR /app
# COPY package*.json .
# RUN npm ci
# COPY src src
# ENV PORT=9090
# CMD ["node", "src/index.js"]
