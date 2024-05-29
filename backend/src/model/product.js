const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  specifications: [
    {
      key: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  description: { type: String, required: true },
  categoryID: { type: Schema.Types.ObjectId, required: true },
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
