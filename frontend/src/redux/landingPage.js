import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { notify } from "../App";

const initialState = {
  cartCount: 0,

};

const landingPageSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },

  },
//   extraReducers: (builder) => {
//     builder
    //   .addCase(fetchContacts.pending, (state) => {
    //     console.log("loading");
    //   })
//   },
});



export default landingPageSlice.reducer;
export const {
  setCartCount,
  // setFormOpen,
} = landingPageSlice.actions;
