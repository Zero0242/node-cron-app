# Orden de inicio

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

Pruebas de tareas con **JEST**

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
