import React, { createContext, useState } from 'react'
import all_product from '../assets/all_product'

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

// * creatting an empty cart,
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextPovider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const contextValue = { all_product, cartItems };

  // console.log(cartItems);
  const addToCart = () => {
    
  }

 
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextPovider;
