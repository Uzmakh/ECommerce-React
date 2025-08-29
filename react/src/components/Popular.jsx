import data_product from "../assets/data";
import Item from "./Item";

const Popular = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-4  mt-10">
      <h1 className="text-gray-800 text-2xl font-bold">POPULAR IN WOMEN</h1>
      <hr className="w-36   h-1.5 rounded-xl bg-gray-800" />
      <div className="flex gap-12 mt-8">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
