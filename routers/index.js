const express = require('express')
const router = express.Router();


router.use(require('./users'))
router.use(require('./number'))
router.use(require('./cricket'))
router.use(require('./games'))


module.exports = router;