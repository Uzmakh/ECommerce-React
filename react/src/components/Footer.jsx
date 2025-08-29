import footer_logo from '../assets/logo_big.png'
import pinterest_icon from '../assets/pintester_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mb-3">
      <div className="flex items-center gap-3">
        <img src={footer_logo} alt="" />
        <p className=' text-xl text-amber-500 font-bold'>SHOPPER</p>
      </div>
      <ul className="flex gap-5 text-gray-500 cursor-pointer">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className=" flex flex-row gap-3 cursor-pointer">
        <div className="">
          <img src={pinterest_icon} alt="" />
        </div>
        <div>
          <img src={instagram_icon} alt="" />
        </div>
        <div>
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="flex  flex-col ee items-center  gap-4">
        <hr className='w-xl border-0 h-1 rounded bg-gray-500'/>
        <p>Copyright @ 2025 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
