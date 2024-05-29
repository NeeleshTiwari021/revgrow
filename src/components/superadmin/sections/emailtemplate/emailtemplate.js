import React from 'react'
import Navbar from '../../commoncomponents/navbar'

const Emailtemplate = () => {
  return (
    <div className='main_block_superadmin p-4'>
            <Navbar />
            <div className='flex flex-col gap-4 mt-4 p-4'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl font-semibold'>New User</h1>

                    <div className=' flex gap-2'>
                        <button className=' px-6 py-2 border-2 rounded-lg border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300'>New Template</button>
                        <button className=' px-6 py-3 border-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300'>Template New User</button>
                        
                    </div>
                </div>

                <div className='p-4 rounded-xl bg-white flex flex-col gap-8'>
                <p className=' text-xl font-semibold'>Place Holder</p>

                <div className=' p-4 border-2 rounded-lg flex flex-wrap gap-8 justify-evenly'>
                    <p className=' font-semibold'>App Name: <span className=' text-green-400'>app_name</span></p>
                    <p className=' font-semibold'>Company Name: <span className=' text-green-400'>app_name</span></p>
                    <p className=' font-semibold'>App Url: <span className=' text-green-400'>app_name</span></p>
                    <p className=' font-semibold'>Email: <span className=' text-green-400'>app_name</span></p>
                    <p className=' font-semibold'>Password: <span className=' text-green-400'>app_name</span></p>
                </div>

                <div className=' flex gap-4 w-full'>
                <div className=' flex flex-col w-full'>
                            <label className=' font-semibold'>Title text</label>
                            <input
                                type='text'
                                className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className=' flex flex-col w-full'>
                            <label className=' font-semibold'>Footer text</label>
                            <input
                                type='text'
                                className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                </div>
                </div>
    </div>
    </div>
  )
}

export default Emailtemplate
