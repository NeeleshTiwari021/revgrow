import React from 'react'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { AiTwotoneSchedule } from "react-icons/ai";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { CiGift } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { CiHeadphones } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import logo from '../../../images/logo.png';
import './common.css';

const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col p-4 bg-white h-full overflow-hidden overflow-y-auto overflow-x-auto'>
      <div className=' flex justify-center items-center'>
        <img src={logo} className=' h-48 cursor-pointer' alt='logo'/>
      </div>

      <div className=' flex flex-col gap-3'>
        <Link to='/' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <IoHomeOutline className=' text-4xl bg-white p-2 rounded-xl'/> 
          <p className=' font-semibold hover:text-white'>Dashboard</p>
        </Link>
        <Link to='/companies' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <FaRegBuilding className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Companies</p>
        </Link>
        <Link to='/plans' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <AiTwotoneSchedule className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Plans</p>
        </Link>
        <Link to='/plan-request' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <FaArrowsTurnToDots className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Plan Request</p>
        </Link>
        <Link to='/coupons' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <CiGift className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Coupons</p>
        </Link>
        <Link to='/order' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <MdOutlineShoppingCart className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Orders</p>
        </Link>
        <Link to='/email-template' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <CiMail className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Email Template</p>
        </Link>
        <Link to='/landing-page' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <RiPagesLine className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Landing Page</p>
        </Link>
        <Link to='/user_management' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <LuUsers2 className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>User Management</p>
        </Link>
        <Link to='/review' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <MdOutlineRateReview className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Review Management</p>
        </Link>
        {/* <Link to='/tickets' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <CiHeadphones className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Tickets</p>
        </Link> */}
        <Link to='/settings' className=' px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <IoSettingsOutline className=' text-4xl bg-white p-2 rounded-xl'/>
          <p className=' font-semibold hover:text-white'>Settings</p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
