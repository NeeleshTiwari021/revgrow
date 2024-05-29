import React from 'react'
import './popup.css';
import { RxCross1 } from "react-icons/rx";

const Notification = () => {
  return (
    <div className='notification absolute flex flex-col gap-4 bg-sky-100 p-4 rounded-xl shadow_card'>
    <div className=' flex justify-between items-center gap-2'>
        <p className=' font-medium text-xl'>Notification</p>
        <RxCross1 className=' text-sky-500 cursor-pointer text-xl'/>
    </div>

    <hr/>

    <div className=' p-4 bg-white rounded-lg'>
        <div className=' flex justify-between items-start'>
            <p className=' font-medium'>Project Successfully Created</p>
            <RxCross1 className=' text-sky-500 cursor-pointer'/>
            </div>
            <p className=' text-xs'>Project Successfully Created Project Successfully Created Project Successfully Created</p>
            <p className=' text-blue-500'>Learn More</p>
    </div>
      
    </div>
  )
}

export default Notification
