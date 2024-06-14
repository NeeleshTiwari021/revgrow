import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const data = [
    {
      "name": "Brand Settings",
      "links": "/settings/brand"
    },
    {
      "name": "Email Settings",
      "links": "/settings/email"
    },
    {
      "name": "Payment Settings",
      "links": "/settings/payment"
    },
    {
      "name": "Pucher Settings",
      "links": "/settings/pucher"
    },
    {
      "name": "ReCaptcha Settings",
      "links": "/settings/recaptcha"
    },
    {
      "name": "Storage Settings",
      "links": "/settings/storage"
    },
    {
      "name": "SEO Settings",
      "links": "/settings/seo"
    },
    {
      "name": "Cookie Settings",
      "links": "/settings/cookie"
    },
    {
      "name": "Chache Settings",
      "links": "/settings/chache"
    },
    {
      "name": "Twilio Settings",
      "links": "/settings/twilio"
     },
    // {
    //   "name": "Refer and Earn",
    //   "links": "/settings/refer-and-earn"
    // },
  ]

  return (
    <div className='shadow_card sidebar1 flex flex-col gap-2 bg-white rounded-xl p-4 overflow-hidden overflow-y-auto overflow-x-auto' style={{ flex: "2" }}>
      {data.map((item) => (
        <Link 
          key={item.links} 
          to={item.links} 
          className={`p-3 w-full flex justify-between items-center cursor-pointer transition-all duration-150 rounded-lg 
                      ${activeLink === item.links ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`} 
          onClick={() => setActiveLink(item.links)}
        >
          <p className='font-medium'>{item.name}</p>
          <IoIosArrowForward />
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
