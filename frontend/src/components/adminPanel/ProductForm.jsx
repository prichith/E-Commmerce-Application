import React from "react";
import axios from "axios";
import "./productForm.css";
import { useSelector, useDispatch } from "react-redux";
import { setFormOpen } from "../../redux/adminPage";
import { useState, useEffect } from "react";
import { addProduct } from "../../redux/products";

export default function ProductForm(props) {
  const { formOpen } = useSelector((state) => state.admin);
  const { allCategories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  let data = props.data;
  let updateData = props.updateData;
  let images = props.images;
  let setImages = props.updateImages;

  function closeForm() {
    dispatch(setFormOpen(false));
  }

  async function updateImages(event) {
    await setImages(event.target.files);
  }

  function updateFormData(event) {
    const { name, value } = event.target;
    updateData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    //for debugging
    console.log({ name, value }); // Log the name and value
    console.log(data);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(data, "==data");

    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      let result = dispatch(addProduct({ data, formData })); // post a product with data and images
    } catch (error) {
      console.error("There was an error submitting the product:", error);
    }
    closeForm();
  }

  return (
    <div className="formContainer">
      <form
        className={`${formOpen ? "flex productForm" : "productForm"}`}
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="formClose">
          <span>
            <i onClick={closeForm} className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="productImg">
          <label htmlFor="images">Product Images : </label>
          <input
            id="images"
            type="file"
            placeholder="Images"
            name="images"
            onChange={updateImages}
            // required
            multiple
          />
        </div>
        <input
          id="productName"
          type="text"
          placeholder="Product Name"
          name="name"
          onChange={updateFormData}
          value={data.name}
          required
        />
        <input
          id="brandName"
          type="text"
          placeholder="Brand Name"
          name="brand"
          onChange={updateFormData}
          value={data.brand}
          required
        />
        <select
          name="categoryID"
          id="productCategory"
          placeholder="Category"
          onChange={(e) => updateData({ ...data, category: e.target.value })}
          // onChange={(e) => updateData({ ...data, categoryID: e.target.value })}
          value={data.categoryID}
        >
          <option value="">Choose Category</option>
          {allCategories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          id="quantity"
          type="number"
          placeholder="Quantity"
          name="quantity"
          onChange={updateFormData}
          value={data.quantity}
          required
        />
        <input
          id="price"
          type="number"
          placeholder="Price"
          name="price"
          onChange={updateFormData}
          value={data.price}
          required
        />
        <input
          id="description"
          type="text"
          placeholder="Description"
          name="description"
          onChange={updateFormData}
          value={data.description}
          required
        />
        <input
          id="weight"
          type="number"
          placeholder="Weight"
          name="weight"
          onChange={updateFormData}
          value={data.weight}
          required
        />
        <input
          id="color"
          type="text"
          placeholder="Color"
          name="color"
          onChange={updateFormData}
          value={data.color}
          required
        />

        <button id="addContact" onClick={handleSubmit}>
          Add Product
        </button>
      </form>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCategories } from '../../redux/categories';
// import { addProduct } from '../../redux/products';
// import { setFormOpen } from '../../redux/adminPage';

// export default function ProductForm(props) {
//   const { formOpen } = useSelector((state) => state.admin);
//   const { allCategories } = useSelector((state) => state.categories);
//   const dispatch = useDispatch();
//   const { data, updateData, images, updateImages } = props;

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   function closeForm() {
//     dispatch(setFormOpen(false));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData();
//     for (let i = 0; i < images.length; i++) {
//       formData.append('images', images[i]);
//     }

//     try {
//       dispatch(addProduct({ data, formData }));
//     } catch (error) {
//       console.error('There was an error submitting the product:', error);
//     }
//     closeForm();
//   }

//   return (
//     <div className="formContainer">
//       <form
//         className={`${formOpen ? 'flex productForm' : 'productForm'}`}
//         encType="multipart/form-data"
//         onSubmit={handleSubmit}
//       >
//         <div className="formClose">
//           <span>
//             <i onClick={closeForm} className="fa-solid fa-xmark"></i>
//           </span>
//         </div>
//         <div className="productImg">
//           <label htmlFor="images">Product Images: </label>
//           <input
//             id="images"
//             type="file"
//             placeholder="Images"
//             name="images"
//             onChange={updateImages}
//             multiple
//           />
//         </div>
//         <input
//           id="productName"
//           type="text"
//           placeholder="Product Name"
//           name="name"
//           onChange={(e) => updateData({ ...data, name: e.target.value })}
//           value={data.name}
//           required
//         />
//         <input
//           id="brandName"
//           type="text"
//           placeholder="Brand Name"
//           name="brand"
//           onChange={(e) => updateData({ ...data, brand: e.target.value })}
//           value={data.brand}
//           required
//         />
//         <select
//           name="categoryID"
//           id="productCategory"
//           placeholder="Category"
//           onChange={(e) => updateData({ ...data, categoryID: e.target.value })}
//           value={data.categoryID}
//         >
//           <option value="">Choose Category</option>
//           {allCategories.map((category, index) => (
//             <option key={index} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//         <input
//           id="quantity"
//           type="number"
//           placeholder="Quantity"
//           name="quantity"
//           onChange={(e) => updateData({ ...data, quantity: e.target.value })}
//           value={data.quantity}
//           required
//         />
//         <input
//           id="price"
//           type="number"
//           placeholder="Price"
//           name="price"
//           onChange={(e) => updateData({ ...data, price: e.target.value })}
//           value={data.price}
//           required
//         />
//         <input
//           id="description"
//           type="text"
//           placeholder="Description"
//           name="description"
//           onChange={(e) => updateData({ ...data, description: e.target.value })}
//           value={data.description}
//           required
//         />
//         <input
//           id="weight"
//           type="number"
//           placeholder="Weight"
//           name="weight"
//           onChange={(e) => updateData({ ...data, weight: e.target.value })}
//           value={data.weight}
//           required
//         />
//         <input
//           id="color"
//           type="text"
//           placeholder="Color"
//           name="color"
//           onChange={(e) => updateData({ ...data, color: e.target.value })}
//           value={data.color}
//           required
//         />
//         <button id="addContact" type="submit">
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }
