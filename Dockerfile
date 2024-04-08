# FROM --platform=linux/amd64 node:19.2-alpine3.16
FROM node:19.2-alpine3.16

# Carpeta de trabajo
WORKDIR /app

# Moviendo archivos al contenedor
COPY package.json ./

# Instalar las dependencias
RUN npm install

# Moviendo archivos al contenedor
COPY . ./

# Carpetas de pruebas
RUN npm run test

# Eliminando dependencias no necesarias en PROD
RUN rm -rf node_modules && rm -rf tests
RUN npm install --prod

# Correr el contenedor
CMD [ "node","app" ]