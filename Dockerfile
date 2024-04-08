FROM node:19.2-alpine3.16

# Carpeta de trabajo
WORKDIR /app

# Moviendo archivos al contenedor
COPY app.js package.json ./

# Instalar las dependencias
RUN npm install

# Correr el contenedor
CMD [ "node","app" ]