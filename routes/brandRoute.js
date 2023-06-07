const express = require('express')
const router = express.Router()
const controllers = require('../controllers/brandController')

router.get('/', controllers.getAllBrands)
router.get('/:id', controllers.getBrand)


module.exports = router