import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormOpen } from "../../redux/adminPage";
import { fetchCategories } from "../../redux/categories";
import TemporaryDrawer from "./DrawerList";
import { deleteProduct } from "../../redux/products";
import { setDeletePopupForm } from "../../redux/adminPage";
import "./admin.css";
import DeleteProductPopUp from "./DeleteProductPopUp";

export default function AdminPage(props) {
  const [ID, setID] = useState(null);
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

  function OpenDeletePopupForm(ID) {
    dispatch(setDeletePopupForm(true));
    setID(ID);
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
      <div className="addProductBtn">
        <button onClick={openForm}>Add Product</button>
        <TemporaryDrawer />
      </div>
      <div className="productDashboard">
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
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => OpenDeletePopupForm(product._id)}
                    // onClick={() => dispatch(deleteProduct(product._id))}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteProductPopUp id={ID} />
    </div>
  );
}
