const express = require('express')
const router = express.Router()

const BrandRouter = require('./brandRoute.js')
const ProductRouter = require('./productRoute.js')

router.use('/brands', BrandRouter)
router.use('/products', ProductRouter)

module.exports = router


