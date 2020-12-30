// Connecting to database
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "sakat",
    host: "127.0.0.1",
    port: 5432,
    database: "todoapp"
});

module.exports = pool;
