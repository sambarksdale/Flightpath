const pool = require('../connection')

getUsers = (req,res) => {
    return pool.query('SELECT * FROM users ORDER BY id ASC')
}

module.exports = { getUsers }