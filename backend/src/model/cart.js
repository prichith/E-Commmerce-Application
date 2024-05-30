const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  customerID: { type: mongoose.Schema.Types.ObjectId, required: true },
  items: [
    {
      productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
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
