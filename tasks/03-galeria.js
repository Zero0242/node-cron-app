const fs = require('fs')
const { PicsumActions } = require('../actions')

// Retornamos la ubicación de la galería
async function getGaleria() {
    const carpeta = 'generated/images'
    // ID: entre 200-1000
    const generatedId = Math.floor(Math.random() * 800) + 200
    const imagePath = `${carpeta}/${generatedId}.png`

    fs.mkdirSync(carpeta, { recursive: true })

    // Descarga de imagen
    const imageData = await PicsumActions.getImage(generatedId)
    fs.writeFileSync(imagePath, imageData)


    return { imagePath }
}


module.exports = {
    getGaleria
}