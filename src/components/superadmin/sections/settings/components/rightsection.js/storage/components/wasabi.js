import React from 'react'

const Wasabi = () => {
    return (
        <div className=' flex flex-col gap-4'>
        <div className=' flex gap-2 mb-4'>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>Wasabi Keys</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>Wasabi Secret</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>

        </div>

        <div className=' flex gap-2 mb-4'>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>Wasabi Regions</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>Wasabi Buckets</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>

        </div>

        <div className=' flex gap-2 mb-4'>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>Wasabi Url</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>Wasabi Root</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>

        </div>

        <div className=' flex gap-2 mb-4'>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>Only Updates</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>Max Upload Size</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>

        </div>

        <hr/>

        <div className=' flex justify-end'>
        <button className=' px-5 py-1 rounded-lg bg-green-700 text-white hover:bg-green-800 transition-all duration-300'>Save Changes</button>      
        </div>
        </div>
    )
}

export default Wasabi
