const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rental',
    password: 'admin',
    port: 5434,
})

module.exports = pool