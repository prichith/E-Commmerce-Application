import React from "react";
import "./admin.css";
import { useSelector, useDispatch } from "react-redux";
import { setFormOpen } from "../../redux/adminPage";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/products";

export default function AdminPage(props) {
  const { formOpen } = useSelector((state) => state.admin);
  const { allProducts } = useSelector((state) => state.products);
  // const [data, setData] = useState();
  const dispatch = useDispatch();

  function openForm() {
    props.updateData();
    dispatch(setFormOpen(true));
  }

  function editFormOpen(data){
    props.updateData(data);
    dispatch(setFormOpen(true));
  }
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="adminPage container">
      <div className="adminCategories">
        <form action="">
          <h3 className="heading">Categories</h3>
          <input type="radio" id="mobile" name="category" value="mobile" />
          <label htmlFor="mobile">Mobile</label>
          <br />
          <input type="radio" id="laptop" name="category" value="laptop" />
          <label htmlFor="laptop">Laptop</label>
          <br />
          <br />
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
                  <i className="fa-solid fa-pen-to-square" onClick= { ()=> editFormOpen(product) }></i>
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
