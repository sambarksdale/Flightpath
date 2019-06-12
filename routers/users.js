const express = require('express')
const router = express.Router();
const userApi = require('../api/userApi')

// router.get('/users', (req,res) => {
//     userApi.getUsers()
//         .then(results => {
//             res.json(results.rows)
//         })
// })

router.route('/users').get((req,res)=>{
    userApi.getUsers()
        .then(results => {
            res.json(results.rows)
        })
})

router.route('/users/:id').get((req,res) => {
    userApi.getUserById(req.params.id)
        .then(results => {
            res.json(results.rows)
        })
})

module.exports = router;