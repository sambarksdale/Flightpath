const client = require('../connection')

getGamesByUserID = (id)=>{
    return client.query(`SELECT * FROM game WHERE p1_id = ${id} OR p2_id = ${id}`)
}

module.exports = { getGamesByUserID }