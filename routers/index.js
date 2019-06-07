const express = require('express')
const router = express.Router();
const userApi = require('../api/userApi')

router.get('/', (req,res) => {
    // res.json({info: 'Node.js, Express, and Postgres API'})
    userApi.getUsers()
        .then(results => {
            res.json(results.rows)
        })
})


module.exports = router;