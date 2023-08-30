require('dotenv').config();
const server = require('./src/app')
const { PORT } = process.env;
const { conn } = require('./src/DB_connection');

server.listen(PORT, async() => {
   await conn.sync({ force: true });
   console.log('Server raised in port: ' + PORT);
});  