import React from "react";
import './bootstrap.min.css'
import Items from "./Items"; 
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";


function Shop() {
  return (
    <>
    <CartProvider>
    <Items />
    <Cart />
    </CartProvider>
    </>
  );
}

export default Shop;