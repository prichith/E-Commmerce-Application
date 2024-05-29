import React from 'react';
import './popularPost.css';

export default function PopularPost() {
  return (
    <div className="popularPost">
    <img src="https://m.media-amazon.com/images/I/714mr6GxecL.jpg" alt="monitor"/>
    <div className="popularPostContent">
      <p>Acer LED Computer Monitor</p>
      <p>$12,000</p>
      <button className='addToCartBtn'>Add to Cart</button>
    </div>
  </div>  )
}

