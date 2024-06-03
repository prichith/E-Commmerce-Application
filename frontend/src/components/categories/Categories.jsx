import React from "react";
import "./categories.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../redux/categories";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const { allCategories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="categoriesMenu">
      <div className="container">
        <h2 className="heading">Categories</h2>
        <div className="categoryGroup">
          {allCategories.map((category, index) => (
            <div className="category"  onClick={() => navigate('/categories')}>
              <img
                src={`http://localhost:3002/images/categories/${category.image}`}
                alt={category.name}
              />
              <h4>{category.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
