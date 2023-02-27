//include home and contact
const sitecontroller = require('../app/controller/site_controller')
const express = require('express')
const router = express.Router()


router.use('/contact',sitecontroller.contact_)
router.use('/search',sitecontroller.search)
router.use('/:slug',sitecontroller.slug)
router.use('/',sitecontroller.home_)


module.exports = router ; 

