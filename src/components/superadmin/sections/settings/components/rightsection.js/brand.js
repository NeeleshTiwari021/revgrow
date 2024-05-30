import React, { useState } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";

function Brand() {
    const [rtlEnabled, setRtlEnabled] = useState(false);
    const [landingPageEnabled, setLandingPageEnabled] = useState(true);
    const [signUpPageEnabled, setSignUpPageEnabled] = useState(false);
    const [emailVerificationEnabled, setEmailVerificationEnabled] = useState(false);

    const toggleSwitch = (setter) => () => setter(prevState => !prevState);

    return (
        <div className="shadow_card main_block_superadmin p-4 bg-white rounded-xl flex flex-col gap-4">
            <h1 className="font-medium text-lg">Brand Setting</h1>

            <hr/>
            <div className="grid grid-cols-3 gap-4">
                <div className="border p-4">
                    <h2 className="text-xs font-semibold mb-6">Logo dark</h2>
                    <input type='file' id='biffile' className=' hidden' />
                    <label className=' py-2 w-full border border-dashed border-green-400 text-white bg-green-400 rounded-xl flex justify-center items-center text-sm font-sans font-medium cursor-pointer overflow-hidden' htmlFor='biffile'>
                        <MdOutlineFileUpload className=' text-lg' /> Choose file here
                    </label>
                </div>
                <div className="border p-4">
                    <h2 className="text-xs font-semibold mb-6">Logo light</h2>
                    <input type='file' id='biffile' className=' hidden' />
                    <label className=' py-2 w-full border border-dashed border-green-400 text-white bg-green-400 rounded-xl flex justify-center items-center text-sm font-sans font-medium cursor-pointer overflow-hidden' htmlFor='biffile'>
                        <MdOutlineFileUpload className=' text-lg' /> Choose file here
                    </label>
                </div>
                <div className="border p-4">
                    <h2 className="text-xs font-semibold mb-6">Favicon</h2>
                    <input type='file' id='biffile' className=' hidden' />
                    <label className=' py-2 w-full border border-dashed border-green-400 text-white bg-green-400 rounded-xl flex justify-center items-center text-sm font-sans font-medium cursor-pointer overflow-hidden' htmlFor='biffile'>
                        <MdOutlineFileUpload className=' text-lg' /> Choose file here
                    </label>
                </div>
            </div>

            <div className=' flex gap-2'>
                <div className=' flex flex-col w-full'>
                    <label className=' text-sm font-semibold'>Text Title</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className=' flex flex-col w-full'>
                    <label className='text-sm font-semibold'>Fotter Title</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className=' flex flex-col w-full'>
                    <label className='text-sm font-semibold'>Default Language</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
            </div>


            <div className="mt-4 flex flex-wrap justify-between gap-4">
                <ToggleSwitch label="Enable RTL" enabled={rtlEnabled} onToggle={toggleSwitch(setRtlEnabled)} />
                <ToggleSwitch label="Enable Landing page" enabled={landingPageEnabled} onToggle={toggleSwitch(setLandingPageEnabled)} />
                <ToggleSwitch label="Enable Sign-Up page" enabled={signUpPageEnabled} onToggle={toggleSwitch(setSignUpPageEnabled)} />
                <ToggleSwitch label="Email-verification" enabled={emailVerificationEnabled} onToggle={toggleSwitch(setEmailVerificationEnabled)} />
            </div>
        </div>
    );
}

const ToggleSwitch = ({ label, enabled, onToggle }) => (
    <div className="flex items-center">
        <span className="mr-2 text-sm font-semibold">{label}</span>
        <button
            onClick={onToggle}
            className={`relative w-12 h-6 flex items-center rounded-full p-1 ${enabled ? 'bg-green-500' : 'bg-gray-300'}`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform ${enabled ? 'translate-x-6' : ''}`}
            ></div>
        </button>
    </div>
);

export default Brand;
