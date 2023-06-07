const mongoose = require('mongoose')
const ProductSchema = require('./product')
const TypeSchema = require('./type')


const Product = mongoose.model('Product', ProductSchema)
const Type = mongoose.model('Type', TypeSchema)

module.exports = {
  Product,
  Type
}
