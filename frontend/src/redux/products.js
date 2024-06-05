import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../index";

const initialState = {
  allProducts : [],
  groupProducts : [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // setCartCount: (state, action) => {
    //   state.cartCount = action.payload;
    // },
  },
    extraReducers: (builder) => {
      builder
    .addCase(fetchProducts.fulfilled, (state,action) => {
      state.allProducts = action.payload ? action.payload : "";
    })
    .addCase(addProduct.fulfilled, (state,action) => {
      state.allProducts.unshift(action.payload);
    })
    .addCase(fetchGroupProducts.fulfilled, (state,action) => {
      state.groupProducts = action.payload ? action.payload : "";
    })

    },
});

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async ({ data, formData }) => {
    console.log(data,'=data in redux');
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
    if(id) notify("Product Added Successfully");
    return response.data;
  }
);

export const fetchProducts = createAsyncThunk( //  temperory
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      `http://localhost:3002/admin/product`
    );
    const data = response.data || [];

    return data;
  }
);

export const fetchGroupProducts = createAsyncThunk( //  products w.r.t categories
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
export const {
  //   setCartCount,
  // setFormOpen,
} = productsSlice.actions;
