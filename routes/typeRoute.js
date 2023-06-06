const express = require('express')
const router = express.Router()
const controllers = require('../controllers/typeController')

router.get('/', controllers.getAllTypes)
router.get('/:id', controllers.getType)

module.exports = router