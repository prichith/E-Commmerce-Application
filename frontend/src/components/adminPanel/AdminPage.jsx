import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormOpen } from "../../redux/adminPage";
import { fetchCategories } from "../../redux/categories";
import TemporaryDrawer from "./DrawerList";
import "./admin.css";

export default function AdminPage(props) {
  const { allProducts } = useSelector((state) => state.products);
  const { allCategories } = useSelector((state) => state.categories);
  let setImages = props.updateImages;

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
    dispatch(fetchCategories()); // fetching all categories and add it in redux
  }, [allCategories]);

  return (
    <div className="adminPage container">
      <div className="productDashboard">
        <div className="addProductBtn">
          <button onClick={openForm}>Add Product</button>
          <TemporaryDrawer />
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
