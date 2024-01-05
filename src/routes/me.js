const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/MeController')


router.get('/trash/courses', meController.trash)
router.get('/stored/courses', meController.myCourses)

module.exports = router;