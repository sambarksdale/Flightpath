const client = require('../connection')

parseGameDetailKeys = (data) => {
    let results = ""
    for(let i = 0; i < data.length; i++){
        let id= data[i].id
        Object.keys(data[i]).forEach(e => {
          if(e !== "id"){results = results + e+id + ","}  
        })
    }
    return results.substring(0,results.length-1)
}
parseGameDetailValues = (data) => {
    let results = ""
    for(let i = 0; i < data.length; i++){
        let id= data[i].id
        Object.keys(data[i]).forEach(e => {
          if(e !== "id"){results = results + data[i][e].toString() + ","}  
        })
    }
    return results.substring(0,results.length-1)
}

newGameDetails = (keys, values) => {
    return client.query(`INSERT INTO cricket_details (${keys}) VALUES (${values})`)
}

module.exports = {parseGameDetailKeys, parseGameDetailValues, newGameDetails}