const { Product } = require('../models')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        return res.status(200).json({products})
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getProductById = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        if (product) {
            return res.status(200).json({product})
        } else {
            return res.status(400).send('Product does not exist.')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const findProduct = async (req, res) => {
    console.log(req.query)
    try {
        console.log(req.query)
        const products = await Product.find(req.query)
        if (products) {
            return res.status(200).json({products})
        } else {
            return res.status(400).json({message: 'Product does not exist'})
        }
    } catch (e) {
        console.log(req.query)
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    findProduct
}