import React from 'react';
import { useDispatch , useSelector } from "react-redux";
import { deleteProduct } from '../../redux/products';
import { setDeletePopupForm } from '../../redux/adminPage';
import './deletePopup.css';

function DeleteProductPopUp({id}) {
  const dispatch = useDispatch();
  const { deletePopupForm } = useSelector((state) => state.admin);

  function deleteFormClose() {
    dispatch(setDeletePopupForm(false));
  }

  function removeProduct() {
    dispatch(deleteProduct(id));
    deleteFormClose();
  }

  return (
    <div
      id="deleteEmployeeForm"
      className={`DeleteFormContainer details deteteEmployee-width fadeIn ${
        deletePopupForm ? "block" : ""
      }`}
    >
      <div className="deleteEmployeeHead">
        <h3>Delete Product</h3>
        <i
          onClick={deleteFormClose}
          id="deleteEmployeeClose"
          className="fa-solid fa-xmark"
        ></i>
      </div>
      <h6 className="delete-employee">
        Are you sure you want to delete this product?
      </h6>
      <div className="buttonDiv">
        <div className="deleteFormButtons">
          <button
            onClick={deleteFormClose}
            id="deleteModalCancel"
            className=" order-unset button"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={() => removeProduct()}
            id="deleteModalDelete"
            className="btn button delete-btn"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteProductPopUp;
