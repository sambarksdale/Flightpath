const express = require('express')
const router = express.Router();


router.use(require('./user'))
router.use(require('./number'))
router.use(require('./cricket'))


module.exports = router;