import { configureStore } from "@reduxjs/toolkit";
import landingPage from "./landingPage";
import adminPage from "./adminPage";

const store = configureStore({
  reducer: {
    home: landingPage,
    admin: adminPage,
  },
});

export default store;