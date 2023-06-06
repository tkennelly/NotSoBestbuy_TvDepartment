const { Schema } = require('mongoose')

const Product = new Schema(
    {
      name: { type: String, required: true },
      brand: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      type: { type: Schema.Types.ObjectId, ref: 'type_id'},
      modelNum: { type: Number, required: true },
      ItemsInStock: { type: Number, required: true }
    },
    { timestamps: true }
)

module.exports = Product