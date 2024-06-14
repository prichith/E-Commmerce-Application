import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../index";

const initialState = {
  allCategories: [], //for Add-category section
  categoryArray: [], //to show all products w.r.t categories
};

const productsSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // setCartCount: (state, action) => {
    //   state.cartCount = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload ? action.payload : "";
    });

  },
});

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async ({ data, formData }) => {
    const response = await axios.post(
      "http://localhost:3002/admin/category",
      data
    );
    let id = response.data._id; //take id for upload images
    console.log(formData,'==formdata in controller')


    const uploadImage = await axios.post(
      `http://localhost:3002/admin/category/${id}/avatar`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (id) notify("Category Added Successfully");
    return response.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(`http://localhost:3002/admin/category`);
    const data = response.data || [];

    return data;
  }
);

export default productsSlice.reducer;
export const {
  //   setCartCount,
} = productsSlice.actions;
