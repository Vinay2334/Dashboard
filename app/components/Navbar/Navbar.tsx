import React from 'react'
import {AiOutlineSetting} from 'react-icons/ai';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BiSearchAlt2} from 'react-icons/bi';

function Navbar() {
  return (
    <div className='navbar w-full p-5 flex align-middle justify-between'>
      <div className="logo flex align-middle">
        <img src="https://marketplace.canva.com/EAFauoQSZtY/1/0/400w/canva-brown-mascot-lion-free-logo-jkQ4FTu0MlM.jpg" alt="Image" className=' sm:w-11 sm:h-11 w-9 h-9 rounded-full'/>
      </div>
      <div className="icons flex align-middle gap-5">
        <BiSearchAlt2 className='text-white text-xl hover:cursor-pointer hidden sm:block'/>
        <div className="notification relative">
          <IoMdNotificationsOutline className='text-white text-xl hover:cursor-pointer'/>
          <span className=' bg-red-600 text-white w-4 h-4 rounded-full absolute -top-3 -right-3 flex align-middle justify-center text-xs'>1</span>
        </div>
        <div className="user flex align-middle gap-3">
          <img src="/photo.jpeg" alt="User Image" className='w-7 h-7 rounded-full object-cover'/>
          <span>Vinay</span>
        </div>
        <AiOutlineSetting className='text-white text-xl hover:cursor-pointer hidden sm:block'/>
      </div>
    </div>
  )
}

export default Navbar
