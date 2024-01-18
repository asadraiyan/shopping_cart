import React, { createContext, useEffect, useState } from "react";
import ContextCart from "./ContextCart";

export const CartContext = createContext();

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
      <CartContext.Provider value={product}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
