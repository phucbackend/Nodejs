const newcontroller = require('../app/controller/NewController')
const express = require('express')
const router = express.Router()


router.use('/:slug', newcontroller.show);
router.use('/',newcontroller.index) ; 


module.exports = router ; 


