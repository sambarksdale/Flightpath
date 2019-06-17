const express = require('express')
const router = express.Router();
const cricketApi = require('../api/cricketApi')

router
    .route('/cricket/details')
    .post((req,res)=>{
        detailKeys = cricketApi.parseGameDetailKeys(req.body)
        detailValues = cricketApi.parseGameDetailValues(req.body)
        console.log(detailKeys)
        console.log(detailValues)
        cricketApi.newGameDetails(detailKeys, detailValues)
            .then(()=>{
                console.log("posted")
            })
    })

router.route('/cricket/details/:game_id').get((req,res)=>{
    cricketApi.getDetailsByGameId(req.params.game_id)
        .then(details => {
            res.json(details.rows)
        })
})

module.exports = router;