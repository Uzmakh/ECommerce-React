import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="my-28 mx-36">
      <div className="grid grid-cols-6 items-center gap-14 py-12 px-0 text-amber-600 text-[18px] font-bold">
        <div>Products</div>
        <div>Title</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div>Remove</div>
      </div>
      <hr className="h-2 bg-amber-50 border-0" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="grid grid-cols-6 items-center gap-14 py-12 px-0 text-amber-600 text-[18px] font-bold">
                <img src={e.img} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr className="h-2 border-0 bg-amber-50" />
            </div>
          );
        }
        return null;
      })}

      <div>
        <div>
          <h1 className="font-bold">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-4 px-0">
              <p>subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="flex justify-between py-4 px-0">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-4 px-0">
              <h3 className="font-bold">Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button className="border px-12 py-4 rounded-xl bg-amber-600 text-white cursor-pointer font-medium">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex flex-col py-8 text-[16px]">
          <p className="text-gray-600">
            If you have a promo code,enter it here.
          </p>
          <div className=" flex w-80 mt-4 ps-4 bg-amber-100 rounded">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your promo code here"
              className="w-full h-14 text-[16px] bg-transparent border-0 outline-0"
            />
          <button className=" bg-gray-700 text-white w-32 rounded cursor-pointer">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
