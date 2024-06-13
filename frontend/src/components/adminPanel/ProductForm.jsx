// import React from "react";
// import axios from "axios";
// import "./productForm.css";
// import { useSelector, useDispatch } from "react-redux";
// import { setFormOpen } from "../../redux/adminPage";
// import { useState, useEffect } from "react";
// import { addProduct } from "../../redux/products";

// export default function ProductForm(props) {
//   const { formOpen } = useSelector((state) => state.admin);
//   const { allCategories } = useSelector((state) => state.categories);
//   const dispatch = useDispatch();
//   let data = props.data;
//   let updateData = props.updateData;
//   let images = props.images;
//   let setImages = props.updateImages;

//   function closeForm() {
//     dispatch(setFormOpen(false));
//   }

//   async function updateImages(event) {
//     await setImages(event.target.files);
//   }

//   function updateFormData(event) {
//     const { name, value } = event.target;
//     updateData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));

//     //for debugging
//     console.log({ name, value }); // Log the name and value
//     console.log(data);
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     console.log(data, "==data");

//     const formData = new FormData();
//     for (let i = 0; i < images.length; i++) {
//       formData.append("images", images[i]);
//     }

//     try {
//       let result = dispatch(addProduct({ data, formData })); // post a product with data and images
//     } catch (error) {
//       console.error("There was an error submitting the product:", error);
//     }
//     closeForm();
//   }

//   return (
//     <div className="formContainer">
//       <form
//         className={`${formOpen ? "flex productForm" : "productForm"}`}
//         encType="multipart/form-data"
//         onSubmit={handleSubmit}
//       >
//         <div className="formClose">
//           <span>
//             <i onClick={closeForm} className="fa-solid fa-xmark"></i>
//           </span>
//         </div>
//         <div className="productImg">
//           <label htmlFor="images">Product Images : </label>
//           <input
//             id="images"
//             type="file"
//             placeholder="Images"
//             name="images"
//             onChange={updateImages}
//             // required
//             multiple
//           />
//         </div>
//         <input
//           id="productName"
//           type="text"
//           placeholder="Product Name"
//           name="name"
//           onChange={updateFormData}
//           value={data.name}
//           required
//         />
//         <input
//           id="brandName"
//           type="text"
//           placeholder="Brand Name"
//           name="brand"
//           onChange={updateFormData}
//           value={data.brand}
//           required
//         />
//         <select
//           name="categoryID"
//           id="productCategory"
//           placeholder="Category"
//           onChange={(e) => updateData({ ...data, category: e.target.value })}
//           // onChange={(e) => updateData({ ...data, categoryID: e.target.value })}
//           value={data.category}
//         >
//           <option value="">Choose Category</option>
//           {allCategories.map((category, index) => (
//             <option key={index} value={category.name}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//         <input
//           id="quantity"
//           type="number"
//           placeholder="Quantity"
//           name="quantity"
//           onChange={updateFormData}
//           value={data.quantity}
//           required
//         />
//         <input
//           id="price"
//           type="number"
//           placeholder="Price"
//           name="price"
//           onChange={updateFormData}
//           value={data.price}
//           required
//         />
//         <input
//           id="description"
//           type="text"
//           placeholder="Description"
//           name="description"
//           onChange={updateFormData}
//           value={data.description}
//           required
//         />
//         <input
//           id="weight"
//           type="number"
//           placeholder="Weight"
//           name="weight"
//           onChange={updateFormData}
//           value={data.weight}
//           required
//         />
//         <input
//           id="color"
//           type="text"
//           placeholder="Color"
//           name="color"
//           onChange={updateFormData}
//           value={data.color}
//           required
//         />

//         <button id="addContact" onClick={handleSubmit}>
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }



import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setFormOpen } from "../../redux/adminPage";
import { useState } from "react";
import { addProduct } from "../../redux/products";
import { Form, Button } from "react-bootstrap";
import "./productForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function ProductForm(props) {
  const { formOpen } = useSelector((state) => state.admin);
  const { allCategories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [data, setData] = useState(props.data);
  const [images, setImages] = useState(props.images);

  const closeForm = () => {
    dispatch(setFormOpen(false));
  };

  const updateImages = (event) => {
    setImages(event.target.files);
  };

  const updateFormData = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      let result = await dispatch(addProduct({ data, formData }));
      console.log("Product added successfully:", result);
    } catch (error) {
      console.error("There was an error submitting the product:", error);
    }
    closeForm();
  };

  return (
    <div className="formContainer">
      <Form
        className={`productForm ${formOpen ? "flex" : ""}`}
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="formClose">
          <span>
            <i onClick={closeForm} className="fa-solid fa-xmark"></i>
          </span>
        </div>

        <Form.Group className="mb-3 productImg" controlId="productImages" >
          <Form.Label>Product Images:</Form.Label>
          <Form.Control
            type="file"
            placeholder="Images"
            name="images"
            onChange={updateImages}
            multiple
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            name="name"
            value={data.name}
            onChange={updateFormData}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="brandName">
          <Form.Label>Brand Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Brand Name"
            name="brand"
            value={data.brand}
            onChange={updateFormData}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productCategory">
          <Form.Label>Category:</Form.Label>
          <Form.Select
            name="categoryID"
            onChange={(e) => updateFormData({ ...data, category: e.target.value })}
            value={data.category}
          >
            <option value="">Choose Category</option>
            {allCategories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="productQuantity">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={data.quantity}
            onChange={updateFormData}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            name="price"
            value={data.price}
            onChange={updateFormData}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            value={data.description}
            onChange={updateFormData}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productWeight">
          <Form.Label>Weight:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Weight"
            name="weight"
            value={data.weight}
            onChange={updateFormData}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productColor">
          <Form.Label>Color:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Color"
            name="color"
            value={data.color}
            onChange={updateFormData}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" id="addProduct">
          Add Product
        </Button>
      </Form>
    </div>
  );
}
