import React from "react";
import axios from 'axios';
import "./productForm.css";
import { useSelector, useDispatch } from "react-redux";
import { setFormOpen } from "../../redux/adminPage";
import { useEffect, useState } from "react";


export default function ProductForm() {
  const [data, setData] = useState({}); //form data
  const [images, setImages] = useState([]);
  const { formOpen } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  function closeForm(){
    dispatch(setFormOpen(false));
  }

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  async function handleSubmit(event){
    console.log('hai');
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', event.target.name.value);
    formData.append('brand', event.target.brand.value);
    formData.append('price', event.target.price.value);
    formData.append('quantity', event.target.quantity.value);
    formData.append('weight', event.target.weight.value);
    formData.append('color', event.target.color.value);
    formData.append('description', event.target.description.value);
    formData.append('categoryID', event.target.category.value);

    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    console.log(formData,'== formdata');
    try {
      const response = await axios.post('http://localhost:3001/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product successfully submitted:', response.data);
    } catch (error) {
      console.error('There was an error submitting the product:', error);
    }

    // const formData = {
    //   name: event.target.name.value,
    //   brand: event.target.brand.value,
    //   price: event.target.price.value,
    //   quantity: event.target.quantity.value,
    //   weight: event.target.weight.value,
    //   color: event.target.color.value,
    //   description:  event.target.description.value,
    //   categoryID:  event.target.category.value,
    //   images: [{ type: String }]
    // };
    //write code for post
    closeForm();
  }

  return (
    <div className="formContainer">
      <form className={`${formOpen ? "flex productForm" : "productForm"}`} onSubmit={handleSubmit}>
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
            // value=""
            // required
            multiple
            onChange={handleFileChange}
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
          id="weight"
          type="number"
          placeholder="Weight"
          name="weight"
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

        <button id="addContact" onClick={handleSubmit}>Add Product</button>
      </form>
    </div>
  );
}
