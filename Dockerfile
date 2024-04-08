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


# Correr el contenedor
CMD [ "node","app" ]