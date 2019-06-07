const pool = require('../connection')

getUsers = () => {
    return pool.query('SELECT * FROM users ORDER BY id ASC')
}

getUserById = (id) => {
    return pool.query(`SELECT * FROM users WHERE id = ${id}`)
}

module.exports = { getUsers, getUserById }