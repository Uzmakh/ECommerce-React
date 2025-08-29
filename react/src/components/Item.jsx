import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  // console.log(props);
  return (
    <div className="w-48 hover:-translate-2 transition-translate  duration-150 ">
      <Link to={`/product/${props.id}`}>
        {" "}
        <img src={props.image} alt="" />{" "}
      </Link>
      <p className="mt-2 mx-0">{props.name}</p>
      <div className="flex gap-6">
        item-prices
        <div className="text-gray-400 text-[18px] font-bold">
          ${props.new_price}
        </div>
        <div className="text-yellow-300 font-bold line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
