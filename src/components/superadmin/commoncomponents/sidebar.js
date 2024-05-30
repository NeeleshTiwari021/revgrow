import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { AiTwotoneSchedule } from "react-icons/ai";
import { CiGift, CiMail } from "react-icons/ci";
import { MdOutlineShoppingCart, MdOutlineRateReview } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { LuUsers2 } from "react-icons/lu";
import logo from '../../../images/logo.png';
import './common.css';

const Sidebar = ({ isSidebarVisible }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className={`sidebar flex flex-col p-4 h-full bg-white overflow-hidden overflow-y-auto overflow-x-auto ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
      <div className='flex justify-center items-center'>
        <img src={logo} className='h-48 cursor-pointer' alt='logo'/>
      </div>

      <div className='flex flex-col gap-3'>
        <Link 
          to='/' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/')}
        >
          <IoHomeOutline className='text-4xl bg-white text-black p-2 rounded-xl'/>
          <p className='font-semibold'>Dashboard</p>
        </Link>
        <Link 
          to='/companies' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/companies' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/companies')}
        >
          <FaRegBuilding className='text-4xl bg-white text-black p-2 rounded-xl'/>
          <p className='font-semibold'>Companies</p>
        </Link>
        <Link 
          to='/plans' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/plans' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/plans')}
        >
          <AiTwotoneSchedule className='text-4xl bg-white text-black p-2 rounded-xl'/>
          <p className='font-semibold'>Plans</p>
        </Link>
        <Link 
          to='/plan-request' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/plan-request' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/plan-request')}
        >
          <FaArrowsTurnToDots className='text-4xl bg-white text-black p-2 rounded-xl'/>
          <p className='font-semibold'>Plan Request</p>
        </Link>
        <Link 
          to='/coupons' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/coupons' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/coupons')}
        >
          <CiGift className='text-4xl bg-white text-black p-2 rounded-xl'/>
          <p className='font-semibold'>Coupons</p>
        </Link>
        <Link 
          to='/order' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/order' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/order')}
        >
          <MdOutlineShoppingCart className='text-4xl bg-white text-black p-2 rounded-xl'/>
          <p className='font-semibold'>Orders</p>
        </Link>
        <Link 
          to='/email-template' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/email-template' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/email-template')}
        >
          <CiMail className='text-4xl bg-white text-black p-2 rounded-xl'/>
          <p className='font-semibold'>Email Template</p>
        </Link>
        <Link 
          to='/landing-page' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/landing-page' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/landing-page')}
        >
          <RiPagesLine className='text-4xl bg-white text-black p-2 rounded-xl'/>
          <p className='font-semibold'>Landing Page</p>
        </Link>
        <Link 
          to='/user_management' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/user_management' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/user_management')}
        >
          <LuUsers2 className='text-4xl bg-white text-black p-2 rounded-xl'/>
          <p className='font-semibold'>User Management</p>
        </Link>
        <Link 
          to='/review' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/review' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/review')}
        >
          <MdOutlineRateReview className='text-4xl text-black bg-white p-2 rounded-xl'/>
          <p className='font-semibold'>Review Management</p>
        </Link>
        {/* <Link to='/tickets' className='px-6 py-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-600 rounded-xl'>
          <CiHeadphones className='text-4xl bg-white p-2 rounded-xl'/>
          <p className='font-semibold hover:text-white'>Tickets</p>
        </Link> */}
        <Link 
          to='/settings/brand' 
          className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-xl ${activeLink === '/settings/email' ? 'bg-green-600 text-white' : 'hover:bg-cyan-700'}`} 
          onClick={() => handleLinkClick('/settings/brand')}
        >
          <IoSettingsOutline className='text-4xl text-black bg-white p-2 rounded-xl'/>
          <p className='font-semibold'>Settings</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
