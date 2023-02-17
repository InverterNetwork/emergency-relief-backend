FROM node:18-alpine AS BUILD_IMAGE

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npx prisma migrate deploy && npm run build

FROM node:18-alpine

RUN apk add --no-cache --update bash

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY --from=BUILD_IMAGE /usr/src/app/dist ./dist

EXPOSE 3000

CMD /bin/sh -c "npm run start:prod"
