import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header>
    <div className="container">
      <h2 className="brandName">BrandName</h2>
      <div className="headerMenu">
        <input type="search" className="search" placeholder="Search"/>
        <button className="signupBtn">SignUp</button>
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="cartCount">0</div>
        </div>
        <div className="avatar">
          <img src={"https://avatars.githubusercontent.com/u/126453231?v=4"} alt="user"/>
        </div>
      </div>
    </div>
  </header>
)
}

