const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  weight: { type: Number, required: true },
  color: { type: String, required: true },
  description: { type: String, required: true },
  categoryID: { type: mongoose.Schema.Types.ObjectId},
  images: [{ type: String }]
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
