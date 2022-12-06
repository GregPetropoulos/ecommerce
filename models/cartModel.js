const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users'
    },
    products: [
      {
        productId: Number,
        name: String,
        oldPrice: Number,
        newPrice: Number,
        category: String
        //   image: Image
      }
    ],
    quantity: {
      type: Number,
      default: 0
    },
    size: { type: String },
    color: { type: String },
    couponCode: { type: String }
  },
  { timestamps: true }
);
module.exports = mongoose.model('Cart', cartSchema);
