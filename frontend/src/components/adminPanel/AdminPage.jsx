import React from "react";
import "./admin.css";
import { useSelector, useDispatch } from "react-redux";
import { setFormOpen } from "../../redux/adminPage";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/products";
import { addCategory , fetchCategories} from "../../redux/categories";

export default function AdminPage(props) {
  const { allProducts } = useSelector((state) => state.products);
  const { allCategories } = useSelector((state) => state.categories);
  let setImages = props.updateImages;

  const [categoryImage, setCategoryImage] = useState();
  const dispatch = useDispatch();

  function openForm() {
    props.updateData({
      name: "",
      brand: "",
      quantity: "",
      price: "",
      category: "",
      description: "",
      weight: "",
      color: "",
    });
    setImages([]);
    dispatch(setFormOpen(true));
  }

  function editFormOpen(data) {
    props.updateData(data);
    dispatch(setFormOpen(true));
  }

  useEffect(() => {
    dispatch(fetchProducts()); // temp - fetch all products
    dispatch(fetchCategories()); //
  }, []);

  function updateCatImg(event){
    setCategoryImage(event.target.files[0])
  }

  function handleSubmit(event){
    event.preventDefault();
    let data = { name : event.target.name.value };
    const formData = new FormData();
      formData.append("image", categoryImage); 

    try {
      let result = dispatch(addCategory({ data, formData })); // post a product with data and images
    } catch (error) {
      console.error("There was an error submitting the product:", error);
    }
  }

  return (
    <div className="adminPage container">
      <div className="adminCategories">
        <div className="categoryHeader heading">
          <h3>Categories</h3>
          <form className="addCategory" onSubmit={handleSubmit}>
            <input type="text" placeholder="New Category Name" name="name" id="category"/>
            <div className="catImageDiv">
              <label htmlFor="catImage">Image: </label>
              <input type="file" id="catImage" name="image" onChange={updateCatImg}/>
            </div>
            <button type="submit">Add</button>
          </form>
        </div>

        <form action="">
          {allCategories.map((category,index)=>(
            <>
            <input key={index} type="radio" id={category.name} name="category" value={category.name} />
            <label htmlFor={category.name}>{category.name}</label>
            <br />
            </>
          ))}
        </form>
      </div>

      <div className="productDashboard">
        <div className="addProductBtn">
          <button onClick={openForm}>Add Product</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Product Name</th>
              <th>Brand Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.quantity}</td>
                <td>₹ {product.price}</td>
                <td className="actions">
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => editFormOpen(product)}
                  ></i>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
