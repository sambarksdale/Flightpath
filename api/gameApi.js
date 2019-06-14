const client = require('../connection')

newGamae = (game_type,p1_id, p2_id, result)=>{
    return client.query(`INSERT INTO game (game_type, p1_id, p2_id, result) VALUES (\'${game_type}\', ${p1_id}, ${p2_id}, ${result}) RETURNING id`)
}

getGamesByUserID = (id)=>{
    return client.query(`SELECT * FROM game WHERE p1_id = ${id} OR p2_id = ${id}`)
}

getTableData = (id)=>{
    return client.query(`SELECT game_type, username AS opponent, result, game_id FROM (  
                            SELECT user_id, game_type, result, game_id FROM (
                                SELECT * FROM game WHERE p1_id = ${id} OR p2_id = ${id}
                                    ) AS G INNER JOIN cricket_details AS CD ON G.id = CD.game_id WHERE user_id <> ${id}
                                        ) AS T INNER JOIN users AS U ON U.id = T.user_id`)
}

module.exports = { getGamesByUserID, newGamae, getTableData }

