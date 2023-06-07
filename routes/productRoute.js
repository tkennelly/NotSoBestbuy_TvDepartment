const express = require('express')
const router = express.Router()
const controller = require('../controlllers/productController.js')

router.get('/', controller.getAllProducts)
router.get('/:id', controller.getProduct)

module.exports = router