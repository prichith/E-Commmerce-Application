const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({ // works when checkout the order
  productID: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true },
  total: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  deliveryStatus: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  deliveryDate: { type: Date },
});

const OrderSchema = new Schema(
  {
    customerID: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true, default: 0 },
    paymentMethod: { type: String, required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    orderStatus: {
      type: String,
      enum: ["pending", "processed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// Calculate total amount before saving
OrderSchema.pre("save", function (next) {
  this.totalAmount = this.items.reduce((acc, item) => acc + item.total, 0);
  next();
});

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;
