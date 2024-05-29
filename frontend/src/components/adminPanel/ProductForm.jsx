import React from "react";
import "./productForm.css";

export default function ProductForm() {
  return (
    <div className="formContainer">
      <form className="flex productForm">
        <div className="formClose">
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="productImg">
          <label for="images">Product Images : </label>
          <input
            id="images"
            type="file"
            placeholder="Images"
            name="images"
            // value=""
            // required
            multiple
          />
        </div>
        <input
          id="productName"
          type="text"
          placeholder="Product Name"
          name="name"
        //   value=""
          required
        />
        <input
          id="brandName"
          type="text"
          placeholder="Brand Name"
          name="brand"
        //   value=""
          required
        />
        <select name="category" id="productCategory" placeholder="Category" >
          <option value="">Choose Category</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
        </select>
        <input
          id="quantity"
          type="number"
          placeholder="Quantity"
          name="quantity"
        //   value=""
          required
        />
        <input
          id="price"
          type="number"
          placeholder="Price"
          name="price"
        //   value=""
          required
        />
        <input
          id="description"
          type="text"
          placeholder="Description"
          name="description"
        //   value=""
          required
        />
        <input
          id="model"
          type="text"
          placeholder="Model Name"
          name="model"
        //   value=""
          required
        />
        <input
          id="color"
          type="text"
          placeholder="Color"
          name="color"
        //   value=""
          required
        />

        <button id="addContact">Add Product</button>
      </form>
    </div>
  );
}
