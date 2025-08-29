import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center gap-4 mt-8 px-4 py-8 text-gray-600 capitalize text-[16px]">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumbs;