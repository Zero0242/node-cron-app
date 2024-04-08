FROM node:19.2-alpine3.16

# Carpeta de trabajo
WORKDIR /app

# Moviendo archivos al contenedor
COPY package.json ./

# Instalar las dependencias
RUN npm install

# Moviendo archivos al contenedor
COPY app.js ./


# Correr el contenedor
CMD [ "node","app" ]