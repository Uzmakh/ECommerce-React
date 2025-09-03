import React, { createContext, useState } from 'react'
import all_product from '../assets/all_product'

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

// * creating an empty cart,
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextPovider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
 
  // console.log(cartItems);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1 }))
  }

  const contextValue = { all_product, cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextPovider;
