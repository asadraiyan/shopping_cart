import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import CartImg from "../assets/cart.png";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={CartImg} alt="" />
          <h2>Shopify</h2>
        </div>
        <div className="search_bar">
          <input type="text" placeholder="Search a product..." />
        </div>

        <div className="cart_icon">
          <div className="cart_box">
            <FaShoppingCart className="cart_img" />
            <span>0</span>
          </div>
          <MdArrowDropDown
            className="drop_icon"
            onClick={() => setShow(!show)}
          />
        </div>
      </header>
      {show ? (
        <div className="cart_dropdown">
          <div className="dropdown_menu">
            <span>Cart is empty!</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
