const Pool = require('pg').Pool
const { Client } = require('pg');

let client = null

if (process.env.DATABASE_URL){
    client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
      });
}else{
    client = new Pool({
        user: 'sam',
        host: 'localhost',
        database: 'flightpath',
        password: 'barksdale',
        post: '5432'
    })
}
client.connect();
module.exports = client;