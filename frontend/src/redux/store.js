import { configureStore } from "@reduxjs/toolkit";
import landingPage from "./landingPage";
import adminPage from "./adminPage";
import products from "./products";
import categories from "./categories";

const store = configureStore({
  reducer: {
    home: landingPage,
    admin: adminPage,
    products: products,
    categories: categories,
  },
});

export default store;