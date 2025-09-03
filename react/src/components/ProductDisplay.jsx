import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  // console.log(props);
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex my-0 mx-20 gap-12 ">
      <div className=" flex flex-1 gap-2">
      
        <div className="flex flex-col gap-2">
          <img src={product.image} alt="" className="h-26 object-cover w-32" />
          <img src={product.image} alt="" className="h-26 object-cover w-32" />
          <img src={product.image} alt="" className="h-26 object-cover w-32" />
          <img src={product.image} alt="" className="h-26 object-cover w-32" />
        </div>
        <div>
          <img src={product.image} alt="" className="h-[450px] w-[650px] object-cover" />
        </div>
      </div>
      <div className="flex-1 ">
        
        <h1 className="text-gray-600 font-bold">{product.name}</h1>
        <div className="flex gap-1 items-center mt-4">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex gap-6 items-center mt-4 text-[24px] font-bold">
          <div className="text-yellow-300 text-[18px] font-bold line-through"> ${product.old_price}</div>
          <div className= "text-gray-400  text-[18px] font-bold "> ${product.new_price}</div>
        </div>
      
        <div>
          <h1 className="text-[20px] font-bold text-gray-700 mt-4">Select Size</h1>
          <div className="flex gap-12 my-4 text-lg font-bold bg-gray-200 cursor-pointer">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
          <button className="mt-6 bg-amber-500 text-white py-3 px-8 rounded-2xl cursor-pointer" onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              consequuntur magni, rem aspernatur optio officia qui eaque hic amet,
              impedit in dignissimos praesentium consequatur assumenda!
            </p>
          </div>
          <p>
            <span>Category :</span>women, top-shirt, crop top
          </p>
          <p>
            <span>Tags :</span>modern, latest, comfortable
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
