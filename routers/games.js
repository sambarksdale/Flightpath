const express = require('express')
const router = express.Router()
const gameApi = require('../api/gameApi')

router.route('/games').post((req,res)=>{
    gameApi.getGamesByUserID(req.body.id)
        .then(results=>{res.json(results.rows)})
})

module.exports = router;