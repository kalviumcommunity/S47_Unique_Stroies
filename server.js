const express = require('express');

const { startDatabase, stopDatabase, isConnected } = require('./connectData');
const app = express();

const port = process.env.PUBLIC_PORT ?? 300;

app.get('/', (req, res) => {
    res.json({
        message: 'Server working fine',
        database: isConnected() ? 'connected' : 'disconnected'
    })
});


process.on('SIGINT', async () => {
    await stopDatabase();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await stopDatabase();
    process.exit(0);
});

if (require.main === module) {
    app.listen(port, async () => {
        await startDatabase();

        console.log(`🚀 server running on PORT: ${port}`);
    });
}





module.exports = app;
