import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setNewCategoryForm } from "../../redux/adminPage";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/categories";

const AddCategoryForm = () => {
  const [image, setImage] = useState();
  const [imageFile, setImageFile] = useState(null);
  const { newCategoryForm } = useSelector((state) => state.admin); // category form
  const dispatch = useDispatch();
  // let file = "";

  // const updateImages = (event) => {
  //   setImageFile(event.target.files[0]);
  //   if (file) {
  //     setImage(URL.createObjectURL(file));
  //   }
  // };
  const updateImages = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  function closeForm(){
    dispatch(setNewCategoryForm(false));
  }

  function handleSubmit(event){
    event.preventDefault();
    let data = { name : event.target.name.value };
    const formData = new FormData();
      // formData.append("image", file); 
      formData.append("image", imageFile);


    try {
      let result = dispatch(addCategory({ data, formData })); // post a category with data and image
    } catch (error) {
      console.error("There was an error submitting the product:", error);
    }
    closeForm();
  }

  return (
    <div className={`${newCategoryForm ? "formContainer addCatForm flex" : "formContainer addCatForm"}`} >
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="formClose">
          <h3>Add Category</h3>
          <span>
            <i onClick={closeForm} className="fa-solid fa-xmark"></i>
          </span>
        </div>

        {/* preview */}
        <div className="catImgDivPreview">
          <img id="CategoryPreview" src={image} alt="preview" />
        </div>

        <div className="productImg">
          <label htmlFor="images">Product Images : </label>
          <input
            id="images"
            type="file"
            placeholder="Images"
            name="images"
            onChange={updateImages}
            multiple
          />
        </div>

        <input
          id="category"
          type="text"
          placeholder="Category Name"
          name="name"
            // onChange={updateFormData}
          //   value={data.brand}
          required
        />

        <button id="addContact">
          {/* <button id="addContact" onClick={handleSubmit}> */}
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
