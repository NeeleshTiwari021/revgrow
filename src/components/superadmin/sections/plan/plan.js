import React, { useState } from 'react';
import './plan.css';
import { FaPlus } from "react-icons/fa";
import Restaurant from './components/POS/restaurant';
import ProcessingFee from './components/processingFee';
import Formpopup from './components/formpopup';




const Plan = () => {

    const [visibleComponent, setVisibleComponent] = useState('Restaurant');
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(!showForm);
    }


    return (
        <div className='mt-4 p-4 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-semibold'>Plans</h1>
                <div onClick={handleShowForm} className='bg-green-500 rounded-md p-2 cursor-pointer'><FaPlus className='text-xl text-white' /></div>
            </div>

            <div className='bg-white flex flex-wrap justify-around gap-2 items-center rounded-md py-1 px-2'>
                <div className="border-t py-2 px-4 flex items-center gap-2 cursor-pointer">
                    <select className="rounded px-4 py-1 font-medium" onChange={(e) => setVisibleComponent('Restaurant')}>
                        <option className='font-medium'>POS Plan</option>
                        <option className='font-medium'>Retail</option>
                        <option className='font-medium'>Restaurant</option>
                    </select>
                </div>

                <div className="border-t py-2 px-4 flex items-center gap-2 cursor-pointer">
                    <select className="rounded px-4 py-1 font-medium" onChange={(e) => setVisibleComponent('Restaurant')}>
                        <option className='font-medium'><p>Service Plan</p></option>
                        <option className='font-medium'>Appointment</option>
                        <option className='font-medium'>All Services</option>
                    </select>
                </div>

                <div className="border-t py-2 px-4 flex items-center gap-2 cursor-pointer" onClick={() => setVisibleComponent('ProcessingFee')}>
                    <p className='cursor-pointer font-medium'>Processing Fee</p>
                </div>

                <div className="relative">
                    <input type="text" className="w-full py-1 pl-10 pr-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>

            {visibleComponent === 'Restaurant' && <Restaurant />}
            {visibleComponent === 'ProcessingFee' && <ProcessingFee />}
            {showForm && <Formpopup closePopup={() => setShowForm(false)}/>}
        </div>


    );
};

export default Plan;
