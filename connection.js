const Pool = require('pg').Pool
const pool = new Pool({
    user: 'sam',
    host: 'localhost',
    database: 'flightpath',
    password: 'barksdale',
    post: '5432'
})

module.exports = pool;