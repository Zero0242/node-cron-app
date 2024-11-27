<p align="center">
  <a href="https://nodejs.org/en/" target="blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="200" alt="App Logo" /></a>
</p>

# Instalacion de Nodejs

#### A: con (ejecutable `.exe`)

[Guia de instalacion](https://codigofacilito.com/articulos/instalar-nodejs-windows)

- durante el proceso de instalación, estar atento a la opción `Add to Path` para dejar nodejs a nivel global en el PC
- `cmd` o `powershell` debe de emitir alguna respuesta positiva al ejecutar el comando `node -v`

#### B: con ( gestor de paquetes )

Usando un gestor de [paquetes](https://scoop.sh/) para windows, instalacion mediante PowerShell

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

Una vez completada la instalación, el gestor de paquetes hace la instalacion y configuracion mediante terminal

```powershell
scoop install nodejs
```

<hr/>

<p align="center">
  <a href="https://github.com/Zero0242/node-cron-app" target="blank">
  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="200" alt="App Logo" /></a>
</p>

# Actividad

Cualquiera de estos 2 ordenes de inicio puede servir

1. Probar comenzando con las tareas primero y despues el testing
2. Probar con que las pruebas terminen bien y luego integrar en el programa

## Tareas Programa

> Nota: no bombardear de peticiones a servicios externos, minimo pueden pedir cada 30 segundos

1. Escritura de logs -> **10 segundos**

   - escribir la hora actual en un archivo `txt` o `json`

2. "Mineria de Datos" -> [PokeApi](https://pokeapi.co/) **5-8 minutos**

   - extraer info del pokemon 1, 2 , 3 ...
   - archivo `json` => nombre `id-nombre_pokemon.json`
   - [Request](https://pokeapi.co/api/v2/pokemon/1) http get
   - `https://pokeapi.co/api/v2/pokemon/1` -> ID: 1, incremental valor

3. Integracion de una base de datos con [PrismaORM](https://youtu.be/ESShhQmBjjY?si=9wl8nXHGNWMwt4rP)

   - para guardar data de las tareas anteriores
   - **base de datos** sqlite, mariadb o mysql . es a libre elección

4. Extracción de Imagenes -> [Picsum Photos](https://picsum.photos/) **3-5 minutos**

   - descarga de bytes de imagenes y guardado de imagen en el server
   - `https://picsum.photos/200`-> ID:200, incremental valor para las siguientes imagenes

5. Mantenimiento de imagenes [**2 - 5 minutos**]
   - eliminacion de imagenes que tengan más de 12 minutos de antiguedad

## Testeos de Programa

Pruebas de tareas con **JEST** (opcional, pero es recomendado hacerlo)

1. **Funcion** guardado de logs

   - crea un archivo en el directorio y con el nombre especificado
   - contiene strings con formatos de horas
   - probar ejecuciónes multiples

2. **Funcion** extraer data

   - crea un archivo en el directorio y con el nombre especificado
   - retorna 1 resultado
   - ejecutar la funcion 2 veces con el mismo id, arroja el mismo resultado
   - ejecutar la funcion 2 veces con diferentes id, retorna valores diferentes

3. **Funcion** descarga imagenes

   - obtiene los resultados
   - obtener la extension de la imagen (es PNG, JPEG, WEBP?)
   - guarda la imagen con su extension respectiva
   - crea un registro de cuando fue descargada la imagen?

4. **Funcion** mantenimiento de imagen
   - verifica si existe un archivo en una direccion especifica
   - puede validar la hora actual con la hora de la imagen
   - puede comprobar si un resultado fue eliminado

---

# Despliegue del programa (Modo Produccion)

> PM2 es una herramienta de monitoreo y control de procesos, principalmente de nodejs

Para simular el despliegue del proceso instalar [`pm2`](https://pm2.keymetrics.io/) con el comando `npm install -g pm2`

- Para iniciar el proceso en el fondo ejecutar `pm2 start app.js --name node-cron`
- Para monitorear los logs `pm2 log node-cron`
- Monitorear todo `pm2 monit`
- Para borrar el proceso `pm2 delete node-cron`
