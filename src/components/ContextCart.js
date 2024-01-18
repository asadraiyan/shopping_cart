import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import CartItems from "./CartItems";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const product = useContext(CartContext);
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

export default ContextCart;
