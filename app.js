import cron from 'node-cron'
import { escribirLog, syncDB } from './tasks'

// Le pasamos directamente la funcion al argumento del cron
cron.schedule('1-59/5 * * * * *', syncDB);

// Con la sintaxis de `flecha`
cron.schedule('1-59/5 * * * * *', () => {
    escribirLog()
});

// Con la sintaxis de `function`
cron.schedule('1-59/5 * * * * *', function () {
    console.log(`Proceso 3 ${new Date().toISOString()}`)
});

console.log('Iniciando CRON TICKER MODO DEV');