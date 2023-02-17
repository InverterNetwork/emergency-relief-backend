FROM node:18-alpine AS BUILD_IMAGE

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:18-alpine

RUN apk add --no-cache --update tini

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

COPY --from=BUILD_IMAGE /usr/src/app/dist ./dist

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["npm", "run", "start:prod"]
