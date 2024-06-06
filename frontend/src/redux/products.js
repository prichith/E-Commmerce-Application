import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../index";

const initialState = {
  allProducts: [], // show in admin panel w r t different categories
  productImages: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductImages: (state, action) => {
      state.productImages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchProducts.fulfilled, (state,action) => {
      //   state.allProducts = action.payload ? action.payload : "";
      // })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.allProducts.unshift(action.payload);
      })
      .addCase(fetchGroupProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload ? action.payload : "";
        state.productImages.push(action.payload.images);
      });
  },
});

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async ({ data, formData }) => {
    const response = await axios.post(
      "http://localhost:3002/admin/product",
      data
    );
    let id = response.data._id; //take id for upload images

    const uploadImage = await axios.post(
      `http://localhost:3002/admin/product/${id}/avatar`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (id) notify("Product Added Successfully");
    return response.data;
  }
);

export const fetchGroupProducts = createAsyncThunk(
  //  products w.r.t categories
  "products/fetchGroupProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3002/products/${category}`
    );
    const data = response.data || [];

    return data;
  }
);

export default productsSlice.reducer;
export const { setProductImages } = productsSlice.actions;
