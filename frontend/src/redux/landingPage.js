import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { notify } from "../App";

const initialState = {
  cartCount: 0,
//   contactList: [],
//   formOpen: false,

};

const landingPageSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    // setFormUpdate: (state, action) => {
    //   state.formUpdate = action.payload;
    // },

  },
//   extraReducers: (builder) => {
//     builder
    //   .addCase(fetchContacts.pending, (state) => {
    //     console.log("loading");
    //   })
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.contactList = action.payload.data ? action.payload.data : "";
    //     state.totalContact = action.payload.totalEmployee;
    //   })
    //   .addCase(fetchContacts.rejected, (state, action) => {
    //     console.log("rejected");
    //   })

//   },
});

// export const fetchContacts = createAsyncThunk(
//   "list/fetchContacts",
//   async ({ page, limit, search }) => {
//     const response = await axios.get(
//       `http://localhost:3002/contactlist/${page}/${limit}/${search}`
//     );
//     const data = response.data.data || [];
//     const totalEmployee = response.data.totalEmployee;
//     return { data, totalEmployee, limit: data.length };
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "list/deleteContact",
//   async (id) => {
//     const response = await axios.delete(
//       `http://localhost:3002/contactlist/${id}`
//     );
//     return response.data;
//   }
// );


export default landingPageSlice.reducer;
export const {
  setCartCount
  // setFormOpen,
  // setFormUpdate,
  // setContactLimit,
  // setSearchText,
  // setContactsPerPage,
} = landingPageSlice.actions;
