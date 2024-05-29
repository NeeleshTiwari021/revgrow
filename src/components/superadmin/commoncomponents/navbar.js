import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import Notification from './popup/notification';
import Langague from './popup/langague';
import Message from './popup/message';


const Navbar = () => {
  return (
    <div className=' flex justify-between p-4 bg-white rounded-lg m-2'>
      <div className=' flex gap-2 items-center'>
        <img src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' className=' rounded-full h-10 w-10 object-cover'/>
        <p className=' font-semibold'>Hii, Super Admin</p>
      </div>

      <div class="relative w-1/2">
    <input type="text" class="w-full py-3 pl-10 pr-4 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
    <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  </div>

  <div className=' flex items-center gap-2'>
    <div className=' p-2 rounded-xl bg-cyan-300 cursor-pointer'><CiBellOn className=' text-cyan-800 text-xl'/></div>
    <div className=' p-2 rounded-xl bg-cyan-300 cursor-pointer'><CiMail className=' text-cyan-800 text-xl'/></div>
    <div className=' p-2 rounded-xl bg-cyan-300 cursor-pointer'><CiGlobe className=' text-cyan-800 text-xl'/></div>
    <div className=' p-2 rounded-xl bg-cyan-300 cursor-pointer'><CiSettings className=' text-cyan-800 text-xl'/></div>
  </div>

  {/* <Notification/> */}
  {/* <Langague/> */}
  {/* <Message/> */}


    </div>
  )
}

export default Navbar
