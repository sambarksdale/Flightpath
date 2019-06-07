const express = require('express')
const router = express.Router();
const userApi = require('../api/userApi')

router.get('/users', (req,res) => {
    userApi.getUsers()
        .then(results => {
            res.json(results.rows)
        })
})

module.exports = router;