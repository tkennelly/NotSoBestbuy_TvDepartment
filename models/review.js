const { Schema } = require('mongoose')

const Review = new Schema(
    {
      score: { type: Number, required: true },
      comment: { type: String, required: true },
      productId: {  type: Schema.Types.ObjectId, ref: "product_id"}
    },
    { timestamps: true }
)

module.exports = Review