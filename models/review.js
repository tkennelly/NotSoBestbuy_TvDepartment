const { Schema } = require('mongoose')

const Review = new Schema(
    {
      score: { type: Number, required: true },
      comment: { type: String, required: true },
      productId: {  Schema.Types.ObjectId, ref: "product_id"}
    },
    { timestamps: true }
)

module.exports = Review