const client = require('../connection')

getUsers = () => {
    return client.query('SELECT * FROM users ORDER BY id ASC')
}

getUserById = (id) => {
    return client.query(`SELECT * FROM users WHERE id = ${id}`)
}

authenticateUser = (username, password)=>{
    let queryString = `SELECT id, username FROM users WHERE username = \'${username}\' AND password = \'${password}\'`
    return client.query(queryString)
}

getUserByUserName = (username)=>{
    let queryString = `SELECT username, id FROM users WHERE username = \'${username}\'`
    return client.query(queryString)
}

newUser = (username, password)=>{
    let queryString = `INSERT INTO users (username, password) VALUES (\'${username}\', \'${password}\')`
    return client.query(queryString)
}

module.exports = { getUsers, getUserById, authenticateUser, getUserByUserName, newUser }