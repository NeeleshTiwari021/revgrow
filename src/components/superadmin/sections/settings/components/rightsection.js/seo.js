import React from 'react'

const Seo = () => {
    return (
        <div className='shadow_card main_block_superadmin p-4 bg-white rounded-xl flex flex-col gap-4'>

            <p className=' font-medium text-lg'>Pucher Settings</p>

            <hr />

            <div className=' flex gap-2'>
                <div className=' flex flex-col flex-1'>
                    <label className=''>Wasabi Key</label>
                    <input
                        type='text'
                        className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className=' flex flex-col gap-3 mb-4 flex-1 flex-1'>
                    <p className=''>Meta Image</p>

                    <input type='file' id='biffile' className=' hidden' />
                    <label className='h-full w-full border border-dashed border-gray-400 rounded-xl flex justify-center items-center text-lg font-sans font-medium cursor-pointer overflow-hidden' htmlFor='biffile'>
                        +
                    </label>

                </div>
            </div>

            <div className=' flex flex-col'>
                <label className=' font-semibold'>Discription</label>
                <textarea
                    className='border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500'
                    rows={4}
                ></textarea>
            </div>


            <hr />

            <div className=' flex gap-2 justify-end'>
                <button className=' px-5 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all duration-300'>Save Changes</button>
            </div>
        </div>
    )
}

export default Seo
