const express = require('express')
const router = express.Router();
const axios = require('axios')


router.use(require('./user'))
router.use(require('./number'))

// router.post('/random_number', (req,res) => {
//     axios.post('https://api.random.org/json-rpc/1/invoke', {
//         "jsonrpc": "2.0",
//         "method": "generateIntegers",
//         "params": {
//             "apiKey": "d70ec30e-8eeb-4c72-ab8c-3ad7749908e1",
//             "n": 1,
//             "min": 1,
//             "max": 2,
//             "replacement": true
//         },
//         "id": 1
//     }).then((data) => {
//         res.json(data.data.result.random.data)
//         console.log(data.data.result.random.data)
//     })
// })

module.exports = router;