const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  customerID: { type: String, required: true },
  items: [
    {
      productID: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, min: 1 },
      price: { type: Number, required: true }
    },
  ],
  totalPrice: { type: Number, required: true, default: 0 },
}, {
  timestamps: true
});

const Carts = mongoose.model("carts", cartSchema);

module.exports = Carts;
