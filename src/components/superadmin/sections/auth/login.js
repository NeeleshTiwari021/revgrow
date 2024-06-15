import React, { useState } from 'react';
import { MdWavingHand } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import logo from '../../../../images/logo.png';
import './auth.css';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
      <div className='login_auth flex-1 h-screen justify-center items-center p-4 flex flex-col gap-4'>

        <div>
        <div className=' flex gap-2 items-center justify-center pt-4'>
          <p className='text-4xl font-medium text-center mb-1'>Welcome Back</p>
          <MdWavingHand className=' text-4xl text-sky-700'/>
        </div>
          <p className='text-center text-sm font-medium text-gray-600'>
            Enpower Your Experience Sign Up for Free Account Today
          </p>
        </div>
        <form className='w-8/12 form login mt-4'>
          <div className='mb-3'>

            <input
              type='email'
              id='email'
              name='email'
              className='bg-gray-100 text-gray-900 text-sm rounded-lg focus:bg-gray-200 block w-full p-2 py-4 dark:bg-gray-200 dark:placeholder-gray-400'
              placeholder='john.doe@company.com'
              required
            />
          </div>

          <div className="mb-4">

            <div className='relative'>
              <input type={showPassword ? 'text' : 'password'} name='password' id="password" className="bg-gray-100 text-gray-900 text-sm rounded-lg  focus:bg-gray-200 block w-full p-2 py-4 dark:bg-gray-200 dark:placeholder-gray-400  " placeholder="•••••••••" required />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-600"
                onClick={handleShowPassword}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          <div className=' flex justify-between mb-3'>
            <div class="flex items-center gap-1">
              <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                <label className=' text-sm' for="myCheckbox" class="ml-2">Keep me sign in</label>
            </div>
          <p className='text-sm cursor-pointer underline text-black hover:text-gray-600 text-center'>
            Forgot Password
          </p>
          </div>

          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
           <div className=' flex gap-4 items-center justify-center'><p>Submit</p></div>
          </button>
        </form>

        <hr class="border-t-2 border-gray-300 my-4 w-1/3 mx-auto" />
        <button class="registration_google flex items-center justify-center px-4 bg-white text-black font-semibold text-lg rounded-lg p-4 transition-all duration-500 gap-2">
          <FaGoogle className=' text-sky-500 text-xl'/>
          Login with Google
        </button>
        <hr class="border-t-2 border-gray-300 my-4 w-1/3 mx-auto" />

          <p className='text-lg cursor-pointer underline text-white hover:text-gray-300 text-center'>
            Create an Account
          </p>
      </div>
    </div>
  );
};

export default Login;
