const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'film_db',
    password: 'Beauty6969',
    port: 5432,
});

module.exports = pool;