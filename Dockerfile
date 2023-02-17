FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache --update bash

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npx prisma generate && npm run build

EXPOSE 3000

CMD /bin/sh -c "npx prisma migrate deploy && npm run start:prod"
