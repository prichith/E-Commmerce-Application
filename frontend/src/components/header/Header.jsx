import React from 'react';
import './header.css';
import { useSelector, useDispatch} from "react-redux";
import { setLoginFormOpen } from '../../redux/landingPage';

export default function Header() {
  const { cartCount } = useSelector((state) => state.home);
  const { login } = useSelector((state) => state.home);
  const dispatch = useDispatch();

function loginformOpen(){
  dispatch(setLoginFormOpen(true))
}

  return (
    <header>
    <div className="container">
      <h2 className="brandName">BrandName</h2>
      <div className="headerMenu">
        <input type="search" className="search" placeholder="Search"/>
        <button onClick={loginformOpen} className="signupBtn">Login</button>
        {login && <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="cartCount">{cartCount}</div>
        </div>}
        {login && <div className="avatar">
          <img src={"https://avatars.githubusercontent.com/u/126453231?v=4"} alt="user"/>
        </div>}
      </div>
    </div>
  </header>
)
}

