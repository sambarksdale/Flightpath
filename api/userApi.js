const client = require('../connection')

getUsers = () => {
    return client.query('SELECT * FROM users ORDER BY id ASC')
}

getUserById = (id) => {
    return client.query(`SELECT * FROM users WHERE id = ${id}`)
}

module.exports = { getUsers, getUserById }