const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  specifications: [
    {
      key: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  description: { type: String, required: true },
  categoryID: { type: String, required: true },
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
