import { configureStore } from "@reduxjs/toolkit";
import landingPage from "./landingPage";
import adminPage from "./adminPage";
import products from "./products";

const store = configureStore({
  reducer: {
    home: landingPage,
    admin: adminPage,
    products: products,
  },
});

export default store;