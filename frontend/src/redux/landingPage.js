import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  loginVerified: false,
  loginFormOpen: false,
  signupFormOpen: false,
};

const landingPageSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setLoginFormOpen: (state, action) => {
      state.loginFormOpen = action.payload;
    },
    setSignupFormOpen: (state, action) => {
      state.loginFormOpen = action.payload;
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
export const { setCartCount, setLogin, setLoginFormOpen, setSignupFormOpen } =
  landingPageSlice.actions;
