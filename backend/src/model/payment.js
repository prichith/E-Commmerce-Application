const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema( //works when buy the product
  {
    orderID: { type: Schema.Types.ObjectId, ref: "Orders", required: true },
    customerID: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    amount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: [
        "credit_card",
        "debit_card",
        "paypal",
        "bank_transfer",
        "cash_on_delivery",
      ],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"], // only allows these values... otherwise- error
      default: "pending",
    },
    transactionID: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("payments", PaymentSchema);
module.exports = Payment;
