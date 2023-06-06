const { Schema } = require('mongoose')

const Type = new Schema(
    {
      name: { type: String, required: true },
      priceRange: { type: String, required: true },
      departmentNumber: { type: Number, required: true}
    },
    { timestamps: true }
)

module.exports = Type