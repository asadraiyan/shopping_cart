import React from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItems = ({ item }) => {
  return (
    <>
      <div className="cart_info">
        <div className="product_img">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="product_name">
          <h3>{item.title.substring(0, 10)}...</h3>
          <span>{item.description.substring(0, 10)}...</span>
        </div>
        <div className="increment_container">
          <FaMinus />
          <input type="text" />
          <FaPlus />
        </div>
        <div className="price_tag">
          <span>{item.price}.00$</span>
        </div>
        <div className="remove_icon">
          <RiDeleteBin6Line style={{ color: "red" }} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItems;
