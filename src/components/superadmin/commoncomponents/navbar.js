import React, { useState } from 'react';
import { CiBellOn, CiMail, CiGlobe, CiSettings } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import Notification from './popup/notification';
import Message from './popup/message';
import Langague from './popup/langague';
import ProfilePopup from './popup/profile';
import globe from '../../../images/globe.png';
import './common.css';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
    setShowLanguage(false);
    setShowMessage(false);
  };

  const handleLanguageClick = () => {
    setShowLanguage(!showLanguage);
    setShowNotification(false);
    setShowMessage(false);
  };

  const handleMessageClick = () => {
    setShowMessage(!showMessage);
    setShowNotification(false);
    setShowLanguage(false);
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className='flex justify-between p-4 bg-white rounded-lg m-2 shadow_card navbar_main_block'>
      <div className='flex gap-2 items-center cursor-pointer' onClick={handleProfileClick}>
        <img src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' className='rounded-full h-10 w-10 object-cover' alt='Profile' />
        <p className='font-semibold'>Hii, Super Admin</p>
        <MdKeyboardArrowDown />
      </div>

      <div className="relative w-1/2 search_block">
        <input type="text" className="w-full py-2 pl-10 pr-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>

      <div className='flex items-center gap-2 buttons_navbar'>
        <div className='p-2 rounded-xl bg-cyan-300 cursor-pointer' onClick={handleNotificationClick}><CiBellOn className='text-cyan-800 text-xl' /></div>
        <div className='p-2 rounded-xl bg-cyan-300 cursor-pointer' onClick={handleMessageClick}><CiMail className='text-cyan-800 text-xl' /></div>
        <div className=' cursor-pointer' onClick={handleLanguageClick}><img src={globe} alt='' className=' h-10 hover:h-11 transition-all duration-200'/></div>
        <Link to='/settings/brand' className='p-2 rounded-xl bg-cyan-300 cursor-pointer'><CiSettings className='text-cyan-800 text-xl' /></Link>
        <div className='p-2 rounded-xl bg-cyan-300 cursor-pointer lg:hidden' onClick={toggleSidebar}><CiMenuBurger className='text-cyan-800 text-xl' /></div>
      </div>

      {showNotification && <Notification closePopup={() => setShowNotification(false)} />}
      {showLanguage && <Langague closePopup={() => setShowLanguage(false)} />}
      {showMessage && <Message closePopup={() => setShowMessage(false)} />}
      {showProfile && <ProfilePopup closePopup={() => setShowProfile(false)} />}

    </div>
  )
}

export default Navbar;
