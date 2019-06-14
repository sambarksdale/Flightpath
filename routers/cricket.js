const express = require('express')
const router = express.Router();
const cricketApi = require('../api/cricketApi')

router.route('/cricket/details').post((req,res)=>{
    detailKeys = cricketApi.parseGameDetailKeys(req.body)
    detailValues = cricketApi.parseGameDetailValues(req.body)
    console.log(detailKeys)
    console.log(detailValues)
    cricketApi.newGameDetails(detailKeys, detailValues)
})

module.exports = router;