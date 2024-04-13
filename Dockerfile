# FROM --platform=linux/amd64 node:19.2-alpine3.16
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16
# Esta es la etapa donde construimos las dependencias
FROM node:19.2-alpine3.16 as dependencies
WORKDIR /app
COPY package.json ./
RUN npm install

# Esta es la etapa de pruebas y builds
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . ./
RUN npm run test

# Aca vamos a correr finalmente la aplicacion
FROM node:19.2-alpine3.16 as prod-dependencies
WORKDIR /app
COPY package.json .
RUN npm install --prod

# Aca vamos a correr finalmente la aplicacion
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-dependencies /app/node_modules ./node_modules
COPY app.js ./
COPY tasks ./tasks

CMD [ "node","app" ]