const express = require('express')
const axios = require('axios')
const router = express.Router()

const apiKey = process.env.API_KEY

router.post('/number', (req,res) => {
    let data ={
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": `${apiKey}`,
            "n": 1,
            "min": 1,
            "max": 2,
            "replacement": true
        },
        "id": 1
    }
    axios.post('https://api.random.org/json-rpc/2/invoke', data, {headers:{'Content-Type': 'application/json',}})
        .then((results)=>{console.log(results.data.result)})  
})


module.exports = router;