const os = require('os')

setInterval(() => {

    const { totalmem, freemem } = os

    const totalMemory = parseInt(totalmem() / 1024 / 1024)
    const freeMemory = parseInt(freemem() / 1024 / 1024)
    const percentageAvailable = parseInt((freeMemory / totalMemory) * 100)

    const stats = {
        total: `${totalMemory} MB`,
        free: `${freeMemory} MB`,
        available: `${percentageAvailable}%`
    }

    console.clear()
    console.table(stats)

}, 1000)
