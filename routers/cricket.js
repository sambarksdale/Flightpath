const express = require('express')
const router = express.Router();

router.route('/cricket/details').post((req,res)=>{
    console.log(req.body)
})

module.exports = router;