import React from "react";
import "./popularPosts.css";
import PopularPost from "./PopularPost";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PopularPosts = () => {
  const { groupProducts } = useSelector((state) => state.products);

  useEffect(() => {
    console.log(groupProducts, "==group products");
  }, []);

  return (
    <div className="container popularPostSection">
      {/* <h2 className="heading">Best of {groupProducts[0].category}</h2> */}
      <h2 className="heading">Best of Mobiles</h2>
      <div className="popularPosts">
        {groupProducts.map((product, index) => (
          <div key={product._id} className="popularPost">
            <img
              src={`http://localhost:3002/images/products/${product.images[0]}`}
              alt={product.name}
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
