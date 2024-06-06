import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  formOpen: false,

};

const adminPageSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setFormOpen: (state, action) => {
      state.formOpen = action.payload;
    },
    // setFormUpdate: (state, action) => {
    //   state.formUpdate = action.payload;
    // },

  },
//   extraReducers: (builder) => {
//     builder

    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.contactList = action.payload.data ? action.payload.data : "";
    //     state.totalContact = action.payload.totalEmployee;
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

export default adminPageSlice.reducer;
export const {
  setFormOpen,

} = adminPageSlice.actions;
