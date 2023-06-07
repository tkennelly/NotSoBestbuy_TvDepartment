const express = require('express')
const router = express.Router()

const BrandRouter = require('./brandRoute.js')
const ProductRouter = require('./productRoute.js')
const ReviewRouter = require('./reviewRoute.js')

router.use('/brands', BrandRouter)
router.use('/products', ProductRouter)
router.use('/reviews', ReviewRouter)

module.exports = router


