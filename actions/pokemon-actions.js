export class PokemonActions {
    static obtenerUnPokemon = async (id) => {
        try {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await respuesta.json()
            return {
                id: id,
                nombre: data.name,
                peso: data.weight,
                foto: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            }
        } catch (error) {
            console.error('No se pudo obtener el pokemon con el id', id)
            console.error(error)
            return null
        }
    }
}