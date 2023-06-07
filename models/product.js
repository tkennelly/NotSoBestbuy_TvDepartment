const { Schema } = require('mongoose')

const Product = new Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      brand: { type: Schema.Types.ObjectId, ref: 'brand'},
      modelNum: { type: Number, required: true },
      ItemsInStock: { type: Number, required: true }
    },
    { timestamps: true }
)

module.exports = Product