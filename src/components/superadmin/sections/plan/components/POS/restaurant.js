import React, { useState } from 'react'
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import '../../plan.css';
import Delete from '../delete';
import Formpopup from '../formpopup';

const Restaurant = () => {

    const plans = [
        {
            name: 'Business Starter',
            price: '$209 /mo',
            description: 'monthly review invites',
            button: 'Purchased',
            features: [
                'Company Reviews',
                'Product Reviews',
                'Video Reviews',
                'Google Seller Ratings',
                'Google Rich Snippets',
                'Social Proff Banners',
            ],
            purchased: true,
            buttons: 'Learn More',
        },
        {
            name: 'Business Standard',
            price: '$209 /mo',
            description: 'monthly review invites',
            card: 'Premium',
            button: 'BUY NOW',
            features: [
                'Company Reviews',
                'Product Reviews',
                'Video Reviews',
                'Google Seller Ratings',
                'Google Rich Snippets',
                'Social Proff Banners',
            ],
            purchased: false,
            buttons: 'Get In Touch',
        },
        {
            name: 'Business Premium',
            price: '$209 /mo',
            description: 'monthly review invites',
            card: 'Premium',
            button: 'BUY NOW',
            features: [
                'Company Reviews',
                'Product Reviews',
                'Video Reviews',
                'Google Seller Ratings',
                'Google Rich Snippets',
                'Social Proff Banners',
            ],
            purchased: false,
            buttons: 'Learn More',
        },
        {
            name: 'Business Pro',
            price: '$209 /mo',
            description: 'monthly review invites',
            card: 'Premium',
            button: 'BUY NOW',
            features: [
                'Company Reviews',
                'Product Reviews',
                'Video Reviews',
                'Google Seller Ratings',
                'Google Rich Snippets',
                'Social Proff Banners',
            ],
            purchased: false,
            buttons: 'Get In Touch',
        },
    ];

    
    const [showDelete, setShowDelete] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(!showForm);
    }


    
    const handleShowDelete = () => {
        setShowDelete(!showDelete);
    }

    return (
        <div className="plan_main_div grid grid-cols-4 gap-2 justify-center items-center min-h-screen">
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className={` relative w-full rounded-md p-4 bg-white border-2 border-sky-400 shadow-lg`}
                >

                <div className=' absolute card_box_plan bg-blue-500 px-4 right-1 top-1'>
                    <p className=' text-white'>{plan.card}</p>
                </div>
                    <div className='p-3 rounded-lg'>
                        <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                        <p className="text-2xl text-red-500 font-semibold mb-4">{plan.price}</p>
                        <p className="text-gray-700 mb-4">{plan.description}</p>
                        <button
                            className={`w-full py-2 rounded-lg text-white font-bold ${plan.purchased ? 'bg-sky-500' : 'bg-green-500'
                                }`}
                        >
                            {plan.button}
                        </button>
                        <ul className="mt-4 text-gray-700">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> {feature}
                                </li>
                            ))}
                        </ul>
                        <p className=' mt-2 cursor-pointer text-center text-sm font-medium underline text-blue-500 hover:text-blue-700'>{plan.buttons}</p>

                        <div className=' flex text-center justify-center gap-2 mt-2'>
                            <LuPencil onClick={handleShowForm} className=' font-semibold text-4xl cursor-pointer bg-yellow-500 text-white p-2 rounded-lg' />
                            <RiDeleteBin6Line onClick={handleShowDelete} className='  font-semibold text-4xl cursor-pointer bg-red-500 text-white p-2 rounded-lg' />
                        </div>

                        
                    </div>
                </div>
            ))}

            {showDelete && <Delete closePopup={() => setShowDelete(false)}/>}
            {showForm && <Formpopup closePopup={() => setShowForm(false)}/>}
        </div>
    )
}

export default Restaurant
