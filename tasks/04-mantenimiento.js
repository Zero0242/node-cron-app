const fs = require('fs')
const { prisma } = require('../db')

async function mantenimientoGaleria() {
    const createdAtThreshold = new Date(Date.now() - 1 * 60 * 1000);
    // SQL algo como : "Where createdAt < (createdAt + 1 minutes)"
    const galeriaPorBorrar = await prisma.imagen.findMany({
        where: {
            createdAt: {
                lt: createdAtThreshold
            }
        }
    });

    // Remover las imagenes
    for (const imagen of galeriaPorBorrar) {
        fs.rmSync(imagen.path)
    }

    // Remover registros de base de datos
    const idsABorrar = galeriaPorBorrar.map(imagen => imagen.id)
    const procesos = idsABorrar.map(id => prisma.imagen.delete({ where: { id: id } }))

    const resultados = await Promise.all(procesos)


    return { resultados, idsABorrar }
}

module.exports = {
    mantenimientoGaleria
}