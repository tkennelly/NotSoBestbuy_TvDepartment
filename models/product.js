const { Schema } = require('mongoose')

const Product = new Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      brand: { type: Schema.Types.ObjectId, ref: 'brand'},
      size: { type: String, required: true },
      modelNum: { type: Number, required: true },
      itemsInStock: { type: Number, required: true },
      img: { type: String, required: true}
    },
    { timestamps: true }
)

module.exports = Product