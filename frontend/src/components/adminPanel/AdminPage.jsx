import React from 'react';
import './admin.css';
import { useSelector, useDispatch } from "react-redux";
import { setFormOpen } from "../../redux/adminPage";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const { formOpen } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  function openForm(){ //open form
    dispatch(setFormOpen(true));
  }

  return (
    <div className="adminPage container">
      <div className="adminCategories">
        <form action="">
          <h3 className="heading">Categories</h3>
          <input type="radio" id="mobile" name="category" value="mobile" />
          <label htmlFor="mobile">Mobile</label><br />
          <input type="radio" id="laptop" name="category" value="laptop" />
          <label htmlFor="laptop">Laptop</label><br />
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
            <tr>
              <td>1</td>
              <td>Redmi 10</td>
              <td>Xiomi</td>
              <td>55</td>
              <td>$14,000</td>
              <td className="actions">
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>Redmi 10 Pro</td>
              <td>Xiomi</td>
              <td>33</td>
              <td>$18,000</td>
              <td className="actions">
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
