import React from 'react'

const Chache = () => {
    return (
        <div className='shadow_card main_block_superadmin p-4 bg-white rounded-xl flex flex-col gap-4'>

            <p className=' font-medium text-lg'>Chache Settings</p>

            <hr />

                <div className=' flex flex-col w-full'>
                    <label className=''>Current Chache Size</label>
                    <div className=' flex w-full'>
                    <input
                        type='text'
                        className='border border-gray-300 p-2 focus:outline-none focus:border-blue-500'
                    />
                    <div className=' flex justify-center items-center font-semibold bg-slate-300 px-4'>MB</div>
                    </div>
                </div>

            

            <hr/>

            <div className=' flex gap-2 justify-end'>
                        <button className=' px-5 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all duration-300'>Save Changes</button>      
                    </div>
        </div>
    )
}

export default Chache
