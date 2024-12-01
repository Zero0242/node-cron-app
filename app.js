import cron from 'node-cron'
import { escribirLog, mineriaDatos, syncDB } from './tasks'
import { prisma } from './db';

async function bootstrap() {
    await prisma.$connect()
    // Le pasamos directamente la funcion al argumento del cron
    cron.schedule('1-59/5 * * * * *', syncDB);
    // Con la sintaxis de `flecha`
    cron.schedule('1-59/5 * * * * *', () => {
        escribirLog({
            nombre: 'cron-logs.txt',
            maximoLineas: 15,
            payload: new Date().toISOString()
        })
    });

    // Con la sintaxis de `function`
    cron.schedule('1-59/5 * * * * *', function () {
        mineriaDatos()
    });

    console.log('Iniciando CRON TICKER MODO DEV');
}

bootstrap()