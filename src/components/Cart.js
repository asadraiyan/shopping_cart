import React, { useEffect, useState } from "react";

import { Scrollbars } from "react-custom-scrollbars";
import CartItems from "./CartItems";

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
              {product.map((item) => {
                return <CartItems key={item.id} item={item} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="checkout">
          <p>
            Cart Total : <span className="rs">2200Rs</span>
          </p>
          <button className="button-9">CHECKOUT</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
