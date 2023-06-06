const express = require('express')
const router = express.Router()

const TypeRouter = require('./typeRoute.js')
const ProductRouter = require('./productRoute.js')

router.use('/types', TypeRouter)
router.use('/products', ProductRouter)

module.exports = {
    TypeRouter,
    ProductRouter
}

