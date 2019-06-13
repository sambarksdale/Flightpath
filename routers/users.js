const express = require('express')
const router = express.Router();
const userApi = require('../api/userApi')


router
.route('/users')
.get((req,res)=>{
    userApi.getUsers()
        .then(results => {
            res.json(results.rows)
        })
})
.post((req,res)=>{
    userApi.getUserByUserName(req.body.username)
        .then(user=>{
            if (user.rowCount !== 0){
                res.send("that username is taken")
            } else {
                userApi.newUser(req.body.username, req.body.password)
                    .then(()=>{
                        userApi.getUserByUserName(req.body.username)
                            .then(createdUser=>{
                                res.send(createdUser.rows)
                            })
                    })
            }
        })
})

router.route('/users/:id').get((req,res) => {
    userApi.getUserById(req.params.id)
        .then(results => {
            res.json(results.rows)
        })
})

router.route('/users/auth').post((req,res)=>{
    userApi.authenticateUser(req.body.username, req.body.password)
        .then((user)=>{
            console.log(user)
            if (user.rowCount === 0){res.json("failed")}else{
                res.json(user.rows)
            }
        })
})

module.exports = router;