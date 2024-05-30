import React from 'react'

const Aws = () => {
    return (
        <div className=' flex flex-col gap-4'>
        <div className=' flex gap-2 mb-4'>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>S3 Keys</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>S3 Secret</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>

        </div>

        <div className=' flex gap-2 mb-4'>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>S3 Regions</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>S3 Buckets</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>

        </div>

        <div className=' flex gap-2 mb-4'>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>S3 Url</label>
                <input
                    type='text'
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                />
            </div>
            <div className=' flex flex-col w-full'>
                <label className=' text-sm font-semibold'>S3 Endpoint</label>
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

export default Aws
