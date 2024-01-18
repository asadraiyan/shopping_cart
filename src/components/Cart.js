import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Scrollbars } from "react-custom-scrollbars";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=50");
    const result = await response.json();
    console.log(result.products);
    setProduct(result.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <section className="main_section">
        <div className="shopping_cart">
          <h2>Shopping Cart</h2>
          <p>You have 7 Items in Shopping Cart</p>
        </div>
        <div className="cart_container">
          <div className="cart_items">
            <Scrollbars>
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
              <div className="cart_info">
                <div className="product_img">
                  <img src="" alt="" />
                </div>
                <div className="product_name">
                  <h3>Samsung S21</h3>
                  <span>Black Color</span>
                </div>
                <div className="increment_container">
                  <FaMinus />
                  <input type="text" />
                  <FaPlus />
                </div>
                <div className="price_tag">
                  <span>200Rs</span>
                </div>
                <div className="remove_icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
              <hr />
            </Scrollbars>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
