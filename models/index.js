const mongoose = require('mongoose')
const ProductSchema = require('./product')
const BrandSchema = require('./brand')


const Product = mongoose.model('Product', ProductSchema)
const Brand = mongoose.model('Type', BrandSchema)

module.exports = {
  Product,
  Brand
}
