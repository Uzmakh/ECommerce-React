import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='h-screen bg-linear-to-r from-pink-100 to-gray-100 flex gap-20'>
      <div className='flex-1 flex-col justify-center ps-44  pt-40'>
      
      <h2 className='text-[14px] font-medium '>NEW ARRIVALS ONLY</h2>
        <div className='flex items-center gap-4'>
     
          <p className='text-[58px] font-extrabold font-manrope '>new</p>
          <img src={hand_icon} alt="" className='w-12'/>
        </div>
        <div className='text-[58px]/14 font-extrabold font-manrope'>
        <p>collections</p>
        <p>for everyone</p>
        </div>
      <div className='flex justify-center items-center gap-2 w-60 h-14 rounded-4xl mt-6 px-4 bg-amber-600 text-white text-xl font-bold cursor-pointer'>
        <div >
          Latest Collection
        </div>
        <img src={arrow_icon} alt="" />
      </div>
      </div>

      <div className='flex flex-1 justify-center items-center'>
      
        <img src={hero_image} alt="" className='w-[80%]'/>
      </div>
    </div>
  )
}

export default Hero
