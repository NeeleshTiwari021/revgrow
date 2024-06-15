import React from 'react'

const Profile = () => {
    return (
        <>
        <div className=' mt-4 m-2 p-4 rounded-xl bg-white flex flex-col gap-4'>
            <p className=' font-medium text-lg'>Profile Information</p>

            <hr />

            <div className=' flex gap-2'>
                <div className=' flex flex-col w-full'>
                    <label className=''>Name</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className=' flex flex-col w-full'>
                    <label className=''>Email</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
            </div>

            <div className=' flex gap-2 justify-end'>
                        <button className=' px-5 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all duration-300'>Save Changes</button>      
                    </div>
        </div>

        <div className=' mt-4 m-2 p-4 rounded-xl bg-white flex flex-col gap-4'>
            <p className=' font-medium text-lg'>Change Password</p>

            <hr />

            <div className=' flex gap-2'>
                <div className=' flex flex-col w-full'>
                    <label className=''>Old Password</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className=' flex flex-col w-full'>
                    <label className=''>New Password</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
            </div>

            <div className=' flex flex-col w-1/2'>
                    <label className=''>Confirm Password</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>

            <div className=' flex gap-2 justify-end'>
                        <button className=' px-5 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all duration-300'>Save Changes</button>      
                    </div>
        </div>
        </>
    )
}

export default Profile
