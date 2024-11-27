const fs = require('fs')

// Comenzamos preparando la carpeta y el archivo
// y vamos a guardar la fecha, si hay valores anteriores pues se agrega al log

// Los parametros pueden quedar con los valores aca por defecto, son sobreescritos
// Al momento de especificar los valores al llamar la funcion
function escribirLog({
    maximoLineas = 10,
    nombre = 'logs.txt',
    payload = new Date().toISOString()
}) {
    console.log(`Comenzando escritura de logs`);

    const carpeta = 'generated/logs'
    const archivo = `${carpeta}/${nombre}`
    let contenidoAnterior = undefined

    // Crear carpeta de archivos generados
    fs.mkdirSync(carpeta, { recursive: true })

    // Tenemos el archivo creado entonces a escribir
    // Fecha anterior + Fecha nueva al final del archivo con salto de linea
    // Queremos las [X] lineas mas recientes
    if (fs.existsSync(archivo)) {
        contenidoAnterior = fs.readFileSync(archivo, { encoding: 'utf-8' })
        const listaDeLogs = contenidoAnterior.split('\n')

        if (listaDeLogs.length >= maximoLineas) {
            // Tomar los ultimos [X] valores, leyendo desde abajo hacia arriba
            payload = listaDeLogs.reverse().slice(
                0, maximoLineas
            ).join('\n')
        } else {
            payload = [contenidoAnterior, payload].join('\n')
        }
    }

    // Escribe finalmente el archivo y retornar el payload para otros usos
    fs.writeFileSync(archivo, payload)
    return payload
}



module.exports = { escribirLog }