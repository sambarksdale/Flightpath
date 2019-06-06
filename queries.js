const Pool = require('pg').Pool
const pool = new Pool({
    user: 'sam',
    host: 'localhost',
    database: 'flightpath',
    password: 'barksdale',
    post: '5432'
})

const getAllUSers = (req,res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = { getAllUSers }
