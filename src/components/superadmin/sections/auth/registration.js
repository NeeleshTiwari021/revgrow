import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import logo from '../../../../images/logo.png';
import './auth.css';

const Registration = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [conPassword, setconPassword] = useState(false);

    
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConPassword = () => {
    setconPassword(!conPassword);
  }

  return (
    <div className='flex gap-4 justify-center items-start bg-white rounded-xl shadow_card login_page'>
      <div className='flex-1 overflow-hidden h-full leftside_auth'>
        <div className=' flex flex-col items-center justify-center'>
          <img src={logo} alt='' className=' h-48'/>
          <div className='flex flex-col justify-center items-center gap-3 pb-8'>
            <p className='text-black text-center text-2xl font-semibold mainletter_login'>Super Admin</p>
          </div>
        </div>
      </div>
      <div className=' register_auth flex-1 p-4 flex flex-col items-center gap-4'>
        <div>
          <p className='text-4xl font-medium text-center mb-1'>Create an account</p>
          <p className='text-center text-sm font-medium text-gray-600'>Enter your Untitled Account Details</p>
        </div>
        <form className=' mt-4 form registration'>
        <div className="flex gap-2 mb-4">
            <div className="w-full sm:w-1/2 md:mb-0">
              <input type="text" name='first_name' id="first_name"  className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2 py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder='First Name' required />
            </div>
            <div className="w-full sm:w-1/2 md:mb-0">
              <input type="text" name='last_name' id="last_name" className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2  py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder='Last Name' required />
            </div>
          </div>
          <div className="mb-3">
            <input type="email" name='email' id="email" className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2 py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder="john.doe@company.com" required />
          </div>
          <div className="mb-3">
            <div className='relative'>
              <input type={showPassword ? 'text' : 'password'} name='password' id="password" className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2 py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder="Password" required />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-600"
                onClick={handleShowPassword}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          <div className="mb-3">
            <div className='relative'>
              <input type={conPassword ? 'text' : 'password'} id="confirm_password" className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2 py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder="Confirm password" required />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-600"
                onClick={handleConPassword}
              >
                {conPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          {/* <div className="flex gap-2 mb-4">
            <div className="w-full sm:w-1/2 md:mb-0"> 
              <input type="number" name='phone' id="phone" className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2 py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder='Phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
            </div>
            <div className="w-full sm:w-1/2 md:mb-0">
              <input type="text" name='address' id="address" className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2  py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder='Location' required />
            </div>
          </div> */}
          {/* <div className="flex gap-2 mb-4">
            <div className="w-full sm:w-1/2 md:mb-0">         
              <input type="text" name='state' id="state"  className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2 py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder='State' required />
            </div>
            <div className="w-full sm:w-1/2 md:mb-0"> 
              <input type="text" name='country' id="country" className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2  py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder='Country' required />
            </div>
          </div> */}
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5  py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><div className=' flex gap-4 items-center justify-center'><p>Submit</p></div></button>
        </form>
        <hr class="border-t-2 border-gray-300 my-4 w-1/3 mx-auto" />
        <button class="registration_google flex items-center justify-center px-4 bg-white text-black font-semibold text-lg rounded-lg p-4 transition-all duration-500 gap-2">
          <FaGoogle className=' text-sky-500 text-xl'/>
          Login with Google
        </button>
        <hr class="border-t-2 border-gray-300 my-4 w-1/3 mx-auto" />
        <p className=' text-lg cursor-pointer hover:underline text-white hover:text-gray-300 text-center'>Already have an account</p>
      </div>
    </div>
  );
};

export default Registration;
