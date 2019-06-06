const express = require('express')
const router = express.Router();

router.get('/', (req,res) => {
    res.json({info: 'Node.js, Express, and Postgres API'})
})


module.exports = router;