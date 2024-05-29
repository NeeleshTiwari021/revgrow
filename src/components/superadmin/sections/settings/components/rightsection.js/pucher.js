import React from 'react'

const Pucher = () => {
    return (
        <div className='shadow_card main_block_superadmin p-4 bg-white rounded-xl flex flex-col gap-4'>

            <p className=' font-medium text-lg'>Pucher Settings</p>

            <hr />

            <div className=' flex gap-2'>
                <div className=' flex flex-col w-full'>
                    <label className=''>Pucher Settings</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className=' flex flex-col w-full'>
                    <label className=''>Pucher App Key</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
            </div>

            <div className=' flex gap-2'>
                <div className=' flex flex-col w-full'>
                    <label className=''>Mail Username</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className=' flex flex-col w-full'>
                    <label className=''>Mail Passowrd</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
            </div>

            <hr/>

            <div className=' flex gap-2 justify-end'>
                        <button className=' px-5 py-1 border rounded-lg border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300'>Send Test Mail</button>
                        <button className=' px-5 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all duration-300'>Save Changes</button>      
                    </div>
        </div>
    )
}

export default Pucher
