const mongoose = require('mongoose')
const ProductSchema = require('./product')
const BrandSchema = require('./brand')
const ReviewSchema = require('./review')


const Product = mongoose.model('Product', ProductSchema)
const Brand = mongoose.model('Brand', BrandSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
  Product,
  Brand,
  Review
}
