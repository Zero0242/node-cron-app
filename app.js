const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db')

// Le pasamos directamente la funcion al argumento del cron
cron.schedule('1-59/5 * * * * *', syncDB);

// Con la sintaxis de `flecha`
cron.schedule('1-59/5 * * * * *', () => {
    console.log(`Proceso 2 ${new Date().toISOString()}`)
});

// Con la sintaxis de `function`
cron.schedule('1-59/5 * * * * *', function () {
    console.log(`Proceso 3 ${new Date().toISOString()}`)
});

console.log('Iniciando CRON TICKER MODO DEV');