import React from "react";
import "./cartSection.css";
import { useSelector, useDispatch } from "react-redux";
import { setCartCount } from "../../redux/landingPage";

export default function CartSection() {
  const { cartCount } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  console.log(cartCount);

  function increment() {
    dispatch(setCartCount(cartCount + 1));
  }

  function decrement() {
    cartCount > 0 && dispatch(setCartCount(cartCount - 1));
  }

  return (
    <div className="container cartDashboard">
      <h2 className="heading">My Cart</h2>
      <div className="cartDiv">
        <div className="cartList">
          <ul>
            <li>
              <div className="cartListImg">
                <img
                  src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"
                  alt="Redmi10"
                />
                <span className="productQuantity">
                  <span className="increment" onClick={decrement}>
                    -
                  </span>
                  <span className="quantity">{cartCount}</span>
                  <span className="increment" onClick={increment}>
                    +
                  </span>
                </span>
              </div>
              <div className="cartListDetails">
                <p>Redmi10</p>
                <p>Mobile</p>
                <p>$12,000</p>
              </div>
              <div className="actionAndPrice">
                <span className="cartDelete">
                  <i className="fa-solid fa-trash"></i>
                </span>
                <p>$36,000</p>
              </div>
            </li>
            <li>
              <div className="cartListImg">
                <img
                  src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"
                  alt="Redmi10"
                />
                <span className="productQuantity">
                  <span className="increment" onClick={decrement}>
                    -
                  </span>
                  <span className="quantity">{cartCount}</span>
                  <span className="increment" onClick={increment}>
                    +
                  </span>
                </span>
              </div>
              <div className="cartListDetails">
                <p>Redmi10</p>
                <p>Mobile</p>
                <p>$12,000</p>
              </div>
              <div className="actionAndPrice">
                <span className="cartDelete">
                  <i className="fa-solid fa-trash"></i>
                </span>
                <p>$36,000</p>
              </div>
            </li>
            <li>
              <div className="cartListImg">
                <img
                  src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"
                  alt="Redmi10"
                />
                <span className="productQuantity">
                  <span className="increment">-</span>
                  <span className="quantity">0</span>
                  <span className="increment">+</span>
                </span>
              </div>
              <div className="cartListDetails">
                <p>Redmi10</p>
                <p>Mobile</p>
                <p>$12,000</p>
              </div>
              <div className="actionAndPrice">
                <span className="cartDelete">
                  <i className="fa-solid fa-trash"></i>
                </span>
                <p>$36,000</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="cartSummary">
          <h3>Summary</h3>
          <ul>
            <li>
              <p>Quantity</p>
              <p className="totalQuantity">2</p>
            </li>
            <li>
              <p>Total Price</p>
              <p className="totalPrice">$12,000</p>
            </li>
          </ul>
          <div className="cartPurchase">
            <button>Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
