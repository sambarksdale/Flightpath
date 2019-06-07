const Pool = require('pg').Pool
const pool = new Pool({
    user: 'sam',
    host: 'localhost',
    database: 'flightpath',
    password: 'barksdale',
    post: '5432'
}) || new Client({connectionString: process.env.DATABASE_URL, ssl: true,});

module.exports = pool;