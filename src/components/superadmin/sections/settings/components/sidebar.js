import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {

    const data = [
        {
            "name":"Brand Settings",
            "links":"#"
        },
        {
            "name":"Email Settings",
            "links":"#"
        },
        {
            "name":"Payment Settings",
            "links":"#"
        },
        {
            "name":"Pucher Settings",
            "links":"#"
        },
        {
            "name":"ReCaptcha Settings",
            "links":"#"
        },
        {
            "name":"Storage Settings",
            "links":"#"
        },
        {
            "name":"SEO Settings",
            "links":"#"
        },
        {
            "name":"Cookie Settings",
            "links":"#"
        },
        {
            "name":"Chache Settings",
            "links":"#"
        },
        {
            "name":"Twilio Settings",
            "links":"#"
        },
        {
            "name":"Refer and Earn",
            "links":"#"
        },
    ]

  return (
    <div className='shadow_card sidebar flex flex-col bg-white rounded-xl p-4 overflow-hidden overflow-y-auto overflow-x-auto' style={{flex:"2"}}>
      { data.map((item)=>(

        <div className=' p-3 w-full flex justify-between items-center cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-150 rounded-lg'>
        <p className='font-medium'>{item.name}</p>
        <IoIosArrowForward/>
      </div>
    ))}
    </div>
  )
}

export default Sidebar
