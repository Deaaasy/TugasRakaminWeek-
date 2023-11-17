const { request, response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rental',
    password: 'admin',
    port: 5434,
})

const geUsers = (request, response) => {
    pool.query('', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

