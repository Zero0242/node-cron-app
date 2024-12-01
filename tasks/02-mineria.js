const fs = require('fs')
const { PokemonActions } = require('../actions')

// Guardado de informacion en un archivo local
async function mineriaDatos() {
    console.log('Comenzando mineria de datos')
    const carpeta = 'generated/data'
    const archivo = `${carpeta}/pokemon.json`
    let data = []

    // Generar directorio
    fs.mkdirSync(carpeta, { recursive: true })

    // Lectura de valores anteriores
    if (fs.existsSync(archivo)) {
        const datacruda = fs.readFileSync(archivo, { encoding: 'utf-8' })
        data = JSON.parse(datacruda)
    }

    // Cual es el primer pokemon a contar?, longitud de lista +1
    const currentId = data.length + 1

    const pokemon = await PokemonActions.obtenerUnPokemon(currentId)

    if (!pokemon) throw new Error('No se puede continuar, revise los logs')

    // Agregar la informacion a la lista
    data.push(pokemon)


    fs.writeFileSync(archivo, JSON.stringify(data, null, 4))


    // Retornamos la lista y el ultimo pokemon insertado
    return { pokemon, data }
}


module.exports = {
    mineriaDatos
}