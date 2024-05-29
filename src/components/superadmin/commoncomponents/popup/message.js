import React from 'react'
import './popup.css';
import { RxCross1 } from "react-icons/rx";

const Message = () => {

    const data = [
        {
            "name": "1"
        },
        {
            "name": "1"
        },
        {
            "name": "1"
        },
        {
            "name": "1"
        },
        {
            "name": "1"
        },
        {
            "name": "1"
        },
        {
            "name": "1"
        },
    ]

    return (
        <div className='absolute flex flex-col gap-4 p-4 rounded-lg bg-white w-1/2 shadow_card message_block'>
            <div className=' flex justify-between items-center'>
                <div class="relative w-1/2">
                    <input type="text" class="w-full py-1 pl-10 pr-4 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <RxCross1 className=' text-sky-500 cursor-pointer text-xl' />
            </div>

            <hr/>

            <div className=' flex justify-between items-start gap-2'>
                <div className='message_overflow flex flex-col gap-2 p-2 bg-gray-200 rounded-lg' style={{ flex: "5" }}>
                    <p className=' font-medium'>Inbox</p>
                    <hr />
                    {data.map((item) => (
                        <div className=' flex items-center bg-white p-2'>
                            <div className=' h-10 w-10 rounded-full overflow-hidden'>
                                <img src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className='object-cover' />
                            </div>
                            <div className=' p-2'>
                                <div className=' flex justify-between items-start gap-2'>
                                    <p className=' text-xs font-medium'>Micheal John</p>
                                    <p className=' text-xs text-gray-500'>12:30 PM</p>
                                </div>
                                <p className=' text-xs text-gray-500'>Thanks for the treat mr john i hope...</p>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='message_overflow main_block_superadmin p-4 bg-white rounded-xl flex flex-col gap-2'>
                    <p className=' text-center text-sm pb-4'>Today 10:27 am</p>

                    { data.map((item)=>( 
                        <>
                         <div className=' flex gap-1 items-center'>
                        <img src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className=' h-6 w-6 rounded-full object-cover' />

                        <p className=' text-xs bg-blue-400 p-1 rounded-lg text-white'>Thanks for the treat mr john i hope...</p>
                    </div>

                    <div className=' flex gap-1 items-center'>
                        <img src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className=' h-6 w-6 rounded-full object-cover' />

                        <p className=' text-xs bg-blue-400 p-1 rounded-lg text-white'>How are you bro!</p>
                    </div>
                    <div className=' flex gap-1 items-center justify-end'>
                        <p className=' text-xs bg-gray-400 p-1 rounded-lg text-white'>Hii, How are you doing?</p>
                    </div>
                    </>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Message
