FROM node:14-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json package-lock.json ./

# unsafe-perm to get the patches to work
RUN npm ci --unsafe-perm
COPY config/ ./config/
COPY src/  ./src/

# Only copy over the node pieces we need from the above image
FROM node:14-alpine
WORKDIR /app
COPY --from=0 /app .
EXPOSE 8080
CMD npm run start
