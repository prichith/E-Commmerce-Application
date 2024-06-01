import React from "react";
import axios from 'axios';
import "./productForm.css";
import { useSelector, useDispatch } from "react-redux";
import { setFormOpen } from "../../redux/adminPage";
import { useState } from "react";


export default function ProductForm() {
  const [data, setData] = useState({}); //form data
  const [images, setImages] = useState([]); //
  const { formOpen } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  function closeForm(){
    dispatch(setFormOpen(false));
  }

  async function updateImages(event){
    await setImages(event.target.files);
  }

  function updateFormData(event){
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));      

    console.log(data);
  }

  async function handleSubmit(event){
    console.log(data,'==data');
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/admin/product', data);
      let id = response.data._id;
      const uploadImage = await axios.post(`http://localhost:3002/admin/product/${id}/avatar`, images);
    } catch (error) {
      console.error('There was an error submitting the product:', error);
    }

    closeForm();
  }

  return (
    <div className="formContainer">
      <form className={`${formOpen ? "flex productForm" : "productForm"}`} encType="multipart/form-data" onSubmit={handleSubmit}>
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
        <select name="category" id="productCategory" placeholder="Category" onChange={updateFormData}>
          <option value="">Choose Category</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
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

        <button id="addContact" onClick={handleSubmit}>Add Product</button>
      </form>
    </div>
  );
}
