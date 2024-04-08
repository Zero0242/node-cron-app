let times = 0

module.exports = {
    syncDB: () => {
        times++
        console.log('Tick cada multiplo de 5, con conteo de...', times);
        return times
    }
}