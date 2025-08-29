import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item'

const ShopCategory = (props) => {
  console.log(props)
  const { all_product } = useContext(ShopContext);


  return (
    <div className="pt-0 block w-[85%] my-8 mx-auto">
      <img src={props.banner} alt="" />
      <div className="flex justify-between items-center mx-32 ">
        <p >
          <span className='font-bold'>Showing 1-12</span>  out of 36 products
        </p>
        <div  className="flex justify-start items-center gap-2 py-3 px-8 border-gray-400 border-2 rounded-3xl mt-4 font-bold">
          Sort by <img src={dropdown_icon} alt="" className='mt-2' />
        </div>
      </div>
      <div className="mx-6 my-6 grid grid-cols-4 gap-12">
        {all_product.map((item, i) => {
          if (props.category===item.category) {
            return <Item key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price} />
          } else {
            return null;
          }
        })}
      </div>
    <div className="flex justify-center items-center my-24   mx-auto w-36 h-16 rounded-xl bg-white text-gray-400 text-[18px] font-medium cursor-pointer border-8">Explore More</div>
    </div>
  )
}

export default ShopCategory
