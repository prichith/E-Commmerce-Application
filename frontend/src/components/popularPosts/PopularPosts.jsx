import React from 'react';
import './popularPosts.css';
import PopularPost from './PopularPost';

const PopularPosts = () => {
  return (
    <div className="container popularPostSection">
    <h2 className="heading">Best of Electronics</h2>
    <div className="popularPosts">
      <PopularPost />
      <PopularPost />
      <div className="popularPost">
        <img src="https://m.media-amazon.com/images/I/714mr6GxecL.jpg" alt="monitor"/>
        <div className="popularPostContent">
          <p>Acer LED Computer Monitor</p>
          <p>$12,000</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div>

      {/* <div className="popularPost">
        <img src="https://image01.realme.net/general/20230608/16861961188439f6dadb798564c789616a9f12eca14eb.png.webp?width=1440&height=1440&size=706751" alt="realme"/>
        <div className="popularPostContent">
          <p>Realme 11 Pro5G</p>
          <p>$5,199</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div>

      <div className="popularPost">
        <img src="https://m.media-amazon.com/images/I/714mr6GxecL.jpg" alt="monitor"/>
        <div className="popularPostContent">
          <p>Acer LED Computer Monitor</p>
          <p>$12,000</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div>

      <div className="popularPost">
        <img src="https://image01.realme.net/general/20230608/16861961188439f6dadb798564c789616a9f12eca14eb.png.webp?width=1440&height=1440&size=706751" alt="realme"/>
        <div className="popularPostContent">
          <p>Realme 11 Pro5G</p>
          <p>$5,199</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div>

      <div className="popularPost">
        <img src="https://m.media-amazon.com/images/I/714mr6GxecL.jpg" alt="monitor"/>
        <div className="popularPostContent">
          <p>Acer LED Computer Monitor</p>
          <p>$12,000</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div>

      <div className="popularPost">
        <img src="https://image01.realme.net/general/20230608/16861961188439f6dadb798564c789616a9f12eca14eb.png.webp?width=1440&height=1440&size=706751" alt="realme"/>
        <div className="popularPostContent">
          <p>Realme 11 Pro5G</p>
          <p>$5,199</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div>

      <div className="popularPost">
        <img src="https://m.media-amazon.com/images/I/714mr6GxecL.jpg" alt="monitor"/>
        <div className="popularPostContent">
          <p>Acer LED Computer Monitor</p>
          <p>$12,000</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div>

      <div className="popularPost">
        <img src="https://image01.realme.net/general/20230608/16861961188439f6dadb798564c789616a9f12eca14eb.png.webp?width=1440&height=1440&size=706751" alt="realme"/>
        <div className="popularPostContent">
          <p>Realme 11 Pro5G</p>
          <p>$5,199</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div>

      <div className="popularPost">
        <img src="https://m.media-amazon.com/images/I/714mr6GxecL.jpg" alt="monitor"/>
        <div className="popularPostContent">
          <p>Acer LED Computer Monitor</p>
          <p>$12,000</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div>

      <div className="popularPost">
        <img src="https://image01.realme.net/general/20230608/16861961188439f6dadb798564c789616a9f12eca14eb.png.webp?width=1440&height=1440&size=706751" alt="realme"/>
        <div className="popularPostContent">
          <p>Realme 11 Pro5G</p>
          <p>$5,199</p>
          <button className='addToCartBtn'>Add to Cart</button>
        </div>
      </div> */}

    </div>
  </div>  )
}

export default PopularPosts