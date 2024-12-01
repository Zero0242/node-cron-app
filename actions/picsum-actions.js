export class PicsumActions {
    static getImage = async (id) => {
        const respuesta = await fetch(`https://picsum.photos/${id}`)
        const blob = await respuesta.blob()
        return Buffer.from(await blob.arrayBuffer())
    }
}