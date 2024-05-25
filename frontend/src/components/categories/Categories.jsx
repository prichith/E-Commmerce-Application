import React from 'react';
import './categories.css';

export default function Categories() {
  return (
    <div className="categoriesMenu">
    <div className="container">
      <h2 className='heading'>Categories</h2>
      <div className="categoryGroup">
        <div className="category">
          <img src={"https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"} alt="mobile"/>
          <h4>Mobiles</h4>
        </div>
        <div className="category">
          <img src={"https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"} alt="mobile"/>
          <h4>Laptop</h4>
        </div>
        <div className="category">
          <img src={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011_FV1_FMT_WHH?wid=940&hei=800&fmt=jpeg&qlt=90&.v=1604776025000"} alt="mobile"/>
          <h4>AirPods</h4>
        </div>
      </div>
    </div>
  </div>
  )
}
