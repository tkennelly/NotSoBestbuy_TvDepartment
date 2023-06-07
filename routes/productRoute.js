const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController.js')

router.get('/', controller.getAllProducts)
router.get('/:id', controller.getProductById)
router.get('/find/query', controller.findProduct)
// router.get('/brand/:id', controller.getProductsByBrandId)
// router.get('/size/:size', controller.getProductsBySize)
// router.get('/price/:price', controller.getProductsByPrice)
// router.get('/stock/:stock', controller.getProductsByStock)

module.exports = router