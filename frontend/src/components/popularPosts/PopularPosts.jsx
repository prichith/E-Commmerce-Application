import React from 'react';
import './popularPosts.css';

const PopularPosts = () => {
  return (
    <div className="container popularPostSection">
    <h2 className="heading">Best of Electronics</h2>
    <div className="popularPosts">
      <div className="popularPost">
        <img src="https://m.media-amazon.com/images/I/714mr6GxecL.jpg" alt="monitor"/>
        <div className="popularPostContent">
          <p>Acer cm 54.61 cm (21.5 inch) LED Backlit Computer Monitor</p>
          <p>$12,000</p>
        </div>
      </div>
      <div className="popularPost">
        <img src="https://image01.realme.net/general/20230608/16861961188439f6dadb798564c789616a9f12eca14eb.png.webp?width=1440&height=1440&size=706751" alt="realme"/>
        <div className="popularPostContent">
          <p>Realme 11 Pro5G</p>
          <p>$5,199</p>
        </div>
      </div>
    </div>
  </div>  )
}

export default PopularPosts