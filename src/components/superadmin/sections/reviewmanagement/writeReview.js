import React from 'react'

const WriteReview = () => {
    return (
        <div className=' gap-4 mt-4 p-4 '>

            <div className=' flex justify-between mb-4'>
                <h1 className=' text-3xl font-semibold'>Reviews Management</h1>
            </div>

            <div className='bg-white p-4'>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-medium mb-2' htmlFor='List'>List ID</label>
                    <input
                        type='text'
                        id='List'
                        className='border-2 rounded w-full py-2 px-3 text-gray-700'
                        required
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-medium mb-2' htmlFor='Review'>Review Content</label>
                    <textarea
                        id='Review'
                        className='w-full h-24 border-2 focus:ring-1'
                        required
                    ></textarea>
                </div>
                <div className=' flex justify-end items-center gap-2'>
                    <button className=' px-6 py-2 rounded-lg  bg-green-600 transition-all duration-300 text-white text-sm'>Save</button>
                </div>
            </div>

        </div>
    )
}

export default WriteReview
