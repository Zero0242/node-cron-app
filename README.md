<p align="center">
  <a href="https://github.com/" target="blank">
  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="200" alt="App Logo" /></a>
</p>

# Proyecto Cron

Cron básico, creado durante el curso de [docker](https://www.udemy.com/share/107Ple3@bdv7jBU2dSlE6vZw8aLAd8Eq0N7Xt_pSOL83lFBOB34jOuRb_K8f1XJgFnBywx8J8g==/).

Configurado con [babel](https://mugan86.medium.com/configurar-babel-en-nodejs-525fd101990b) para la sintaxis moderna de javascript

> creado en node js

## Cómo hacer un Fork

1. Ve a la página principal del repositorio en GitHub.
2. Haz clic en el botón "Fork" en la esquina superior derecha de la página.
3. Selecciona tu cuenta de GitHub como el destino del fork.
4. GitHub creará una copia del repositorio en tu cuenta.

Una vez que hayas hecho el fork, puedes clonar tu repositorio forked a tu máquina local y trabajar en él.

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
```

## DEV

1. Clonar repositorio con `git clone`
2. Instalar los paquetes de node js con `npm install`
3. Crear un archivo `.env` basado en el `.env.example`
4. Ejecutar el proyecto con `npm run start` o `npm run dev`
   - Opcional: ejecutar los comandos del `package.json` o usando `F5`

## Requisitos

1. Tener instalado node js

## Scripts

Algunos scripts que pueden ser utilizados en modo desarrollo

| Comando               | Descripcion              |
| --------------------- | ------------------------ |
| `npm install`         | Instala las dependencias |
| `npm run jest`        | Ejecuta las pruebas      |
| `rm -rf node_modules` | Limpia las dependencias  |

## Cron Jobs

Ejemplos de cron jobs para diferentes intervalos de tiempo:

| Intervalo de Tiempo | Cron Job Expression |
| ------------------- | ------------------- |
| Cada 10 segundos    | `*/10 * * * * *`    |
| Cada 30 segundos    | `*/30 * * * * *`    |
| Cada 50 segundos    | `*/50 * * * * *`    |
| Cada 1 minuto       | `*/1 * * * *`       |
| Cada 3 minutos      | `*/3 * * * *`       |
| Cada 5 minutos      | `*/5 * * * *`       |
| Cada 10 minutos     | `*/10 * * * *`      |
