const fs = require('fs')

// Comenzamos preparando la carpeta y el archivo
// y vamos a guardar la fecha, si hay valores anteriores pues se agrega al log
function escribirLog() {
    console.log(`Comenzando escritura de logs`);

    const carpeta = 'generated/logs'
    const archivo = `${carpeta}/logs.txt`
    let contenidoAnterior = undefined
    let payload = new Date().toISOString()


    // Crear carpeta de archivos generados
    fs.mkdirSync(carpeta, { recursive: true })


    // Tenemos el archivo creado entonces a escribir
    // Fecha anterior + Fecha nueva al final del archivo con salto de linea
    // Queremos las 10 lineas mas recientes
    if (fs.existsSync(archivo)) {
        contenidoAnterior = fs.readFileSync(archivo, { encoding: 'utf-8' })
        const listaDeLogs = contenidoAnterior.split('\n')

        if (listaDeLogs.length >= 10) {
            // Tomar los ultimos 10 valores, leyendo desde abajo hacia arriba
            payload = listaDeLogs.reverse().slice(
                0, 10
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