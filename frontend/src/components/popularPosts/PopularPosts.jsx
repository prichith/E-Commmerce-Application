import React from "react";
import "./popularPosts.css";
import PopularPost from "./PopularPost";
import { useSelector ,useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setProductImages } from "../../redux/products";

const PopularPosts = () => {
  const { allProducts } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(allProducts, "==group products");
  // }, []);

  function productPage(product){
    dispatch(setProductImages(product.images));
    navigate("/product", { state: { product } });
  }

  return (
    <div className="container popularPostSection">
      {/* <h2 className="heading">Best of {allProducts[0].category}</h2> */}
      <h2 className="heading">Best of Mobiles</h2>
      <div className="popularPosts">
        {allProducts.map((product, index) => (
          <div key={product._id} className="popularPost" >
            <img
              src={`http://localhost:3002/images/products/${product.images[0]}`}
              alt={product.name}
              onClick={() => productPage(product)}
            />
            <div className="popularPostContent">
              <p>{product.name}</p>
              <p>₹ {product.price}</p>
              <button className="addToCartBtn">Add to Cart</button>
            </div>
          </div>
        ))}

        {/* <PopularPost product={product}/> */}
        {/* <PopularPost /> */}
      </div>
    </div>
  );
};

export default PopularPosts;
