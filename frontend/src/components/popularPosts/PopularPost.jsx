import React from "react";
import "./popularPost.css";

export default function PopularPost(props) {
  let product = props.data;
  return (
    <div className="popularPost">
      <img
        src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=70"
        alt="mobile"
      />
      <div className="popularPostContent">
        <p>Poco C65</p>
        <p>$6,799</p>
        <button className="addToCartBtn">Add to Cart</button>
      </div>
    </div>
    //   <div key={product._id} className="popularPost">
    //   <img src={`http://localhost:3002/images/products/${product.images[0]}`} alt={product.name}/>
    //   <div className="popularPostContent">
    //     <p>{product.name}</p>
    //     <p>{product.price}</p>
    //     <button className='addToCartBtn'>Add to Cart</button>
    //   </div>
    // </div>
  );
}
