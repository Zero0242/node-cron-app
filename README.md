# Cron App

Para iniciar la aplicación.

```bash
npm start
```

# Docker

Para construir la imagen

```bash
docker build --tag imagen-super:1.0.0 .
```


Para renombrar la imagen

```bash
docker image tag <image-1> <image-2>
```

# BUILDX

Para crear el buildx de docker

```bash
docker buildx create --name udemy-builder --driver docker-container --bootstrap
```

El comando del build para multiples arquitecturas

```bash
docker buildx build \
--platform linux/amd64,linux/arm64 \
--tag zero0242/node-cron:1.0.7 \
--push .   
```