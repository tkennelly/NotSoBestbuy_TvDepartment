const { Schema } = require('mongoose')

const Brand = new Schema(
    {
      name: { type: String, required: true },
      priceRange: { type: String, required: true },
      brandNum: { type: Number, required: true}
    },
    { timestamps: true }
)

module.exports = Brand