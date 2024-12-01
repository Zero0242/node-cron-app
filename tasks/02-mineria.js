const { PokemonActions } = require('../actions')
const { prisma } = require('../db')

// Guardado de informacion en un archivo local
async function mineriaDatos() {
    console.log('Comenzando mineria de datos')
    let data = await prisma.pokemon.findMany()


    // Cual es el primer pokemon a contar?, longitud de lista +1
    const currentId = data.length + 1

    const pokemon = await PokemonActions.obtenerUnPokemon(currentId)

    if (!pokemon) throw new Error('No se puede continuar, revise los logs')

    const pokemondb = await prisma.pokemon.create({
        data: {
            imagenUrl: pokemon.foto,
            nombre: pokemon.nombre,
            peso: pokemon.peso
        }
    })



    // Retornamos la lista y el ultimo pokemon insertado
    return { pokemon: pokemondb, data }
}


module.exports = {
    mineriaDatos
}