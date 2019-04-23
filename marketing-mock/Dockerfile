FROM node:11-alpine as builder

WORKDIR /src
COPY . .

RUN npm install
RUN npm test
RUN npm prune --production

FROM node:11-alpine
RUN apk --no-cache upgrade

WORKDIR /app
COPY . .
COPY --from=builder /src/node_modules node_modules

EXPOSE 10000
CMD ["npm","start"]