import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState();
  return (
    <div className="flex justify-around items-center font-manrope shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <img src={logo} alt="" className="w-18 h-20" />
        <p className="mt-12 text-xl text-amber-500 font-bold">SHOPPERY</p>
      </div>
      <ul className="flex gap-8 text-amber-600 font-medium cursor-pointer">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="border-0 w-full h-0.5 bg-amber-600 rounded-lg" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="./men ">Men</Link>
          {menu === "men" ? (
            <hr className="border-0 w-full h-0.5 bg-amber-600 rounded-lg" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="./women">Women</Link>
          {menu === "women" ? (
            <hr className="border-0 w-full h-0.5 bg-amber-600 rounded-lg" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="./kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="border-0 w-full h-0.5 bg-amber-600 rounded-lg" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex gap-6 items-center mt-3 mb-6">
        <Link to="/login">
          <button className="bg-transparent text-amber-600 font-extrabold cursor-pointer border w-20 h-10 rounded-xl mt-8 shadow-lg hover:bg-gray-100">
            Login
          </button>
        </Link>
        <Link to="/cart">
          {" "}
          <img src={cart_icon} alt="" className="h-10 mt-8 relative" />{" "}
        </Link>

        <div className="w-8 h-8 rounded-2xl bg-amber-600 text-white jabsolute right-24 flex justify-center items-center">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
